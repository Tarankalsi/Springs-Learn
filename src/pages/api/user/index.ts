import { getUserDetail, getUserFromToken } from "@/lib/actions/user";
import UserModel from "@/lib/database/models/user.model";
import { connectToDatabase } from "@/lib/database/mongoose";
import {
  apiErrorResponseMessage,
  apiSuccessResponseMessage,
  handleError,
} from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(404).json({ msg: "wrong method" });
    }
    const { id } = req?.query;
    if (!id) {
      return apiErrorResponseMessage(res, 404, "user not found", false);
    }
    const user = await getUserDetail(id);
    if(!user) {
      return apiErrorResponseMessage(res, 404, "user not found", false);
    }
    return apiSuccessResponseMessage(res, 200, "user detail", user);

  } catch (error) {
    handleError(error);
    return apiErrorResponseMessage(res, 500, "internal server error", false);
  }
}
