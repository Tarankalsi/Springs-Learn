import UserModel from "@/lib/database/models/user.model";
import { apiErrorResponseMessage, apiSuccessResponseMessage, generateOTP, handleError } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/actions/user";
import { connectToDatabase } from "@/lib/database/mongoose";

connectToDatabase();

const verifyEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" }); // 405 for wrong method
  }
  try {
    const { id } = req.query;
    if (!id) {
      return apiErrorResponseMessage(res, 404, "id is not valid", false);
    }
    const user: any = await UserModel?.findById(id);
    const otp = await generateOTP(6, { digits: true, alphabets: false });
    const mail = await sendEmail(user?.email, otp);
    user.otp = Number(otp);
    await user?.save();
    if(!mail){
        return apiErrorResponseMessage(res, 404, "getting error on sending email", false);
    }
    return apiSuccessResponseMessage(res,200,"Email sent successfully", true);
  } catch (error) {
    handleError(error);
    return apiErrorResponseMessage(res, 500, "something went wrong", false);
  }
};
export default verifyEmail;
