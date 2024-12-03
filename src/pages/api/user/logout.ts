import { apiErrorResponseMessage, apiSuccessResponseMessage, handleError } from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ msg: "Method not allowed" }); // 405 for wrong method
      }
  try {
    res.setHeader('Set-Cookie', `token=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict; Path=/`);
    return apiSuccessResponseMessage(res,200,"Logout Successful", {});;
  } catch (error: any) {
    handleError(error);
    return apiErrorResponseMessage(res,500,"internal server error", false);
  }
}
