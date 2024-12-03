import UserModel from "@/lib/database/models/user.model";
import { apiErrorResponseMessage, apiSuccessResponseMessage, generateOTP, handleError } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail, verifiedUser } from "@/lib/actions/user";
import { connectToDatabase } from "@/lib/database/mongoose";

connectToDatabase();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "PUT") {
    return res.status(405).json({ msg: "Method not allowed" }); // 405 for wrong method
  }
  try {
    const { id } = req.query;
    if (!id) {
      return apiErrorResponseMessage(res, 404, "id is not valid", false);
    }
    const user = await verifiedUser(id);

    if(!user){
        return apiErrorResponseMessage(res, 404, "user is not able to update", false);
    }
    if(user.isVerified){
      res.setHeader('Set-Cookie', `token=${user?.token}; HttpOnly; Secure; Max-Age=86400; SameSite=Strict; Path=/`);
    } 
    return apiSuccessResponseMessage(res,200,"User is verified successfully", true);
  } catch (error) {
    handleError(error);
    return apiErrorResponseMessage(res, 500, "something went wrong", false);
  }
};
export default handler;
