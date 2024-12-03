import { loginUser } from "@/lib/actions/user";
import {
  apiErrorResponseMessage,
  apiSuccessResponseMessage,
  handleError,
} from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

 const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" }); // 405 for wrong method
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return apiErrorResponseMessage(
      res,
      400,
      "email, and password are required fields",
      false
    );
  }
  try {
    const getUser = await loginUser({ email, password });
    if (getUser) { 
      if(getUser.isVerified){
        res.setHeader('Set-Cookie', `token=${getUser?.token}; HttpOnly; Secure; Max-Age=86400; SameSite=Strict; Path=/`);
      } 
      return apiSuccessResponseMessage(res, 200, "login successfully", getUser);
    } else {
      return apiErrorResponseMessage(res, 404, "user not found", false);
    }
  } catch (error) {
    handleError(error);
    return apiErrorResponseMessage(res, 500, "something went wrong", false);
  }
};

export default handler;