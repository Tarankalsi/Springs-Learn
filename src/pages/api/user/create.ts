import { createUser } from "@/lib/actions/user";
import {
  apiErrorResponseMessage,
  apiSuccessResponseMessage,
} from "@/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" }); // 405 for wrong method
  }

  const { name, email, password } = req.body;

  // Check if any of the required fields are missing
  if (!name || !email || !password) {
    return apiErrorResponseMessage(
      res,
      400,
      "Name, email, and password are required fields",
      false
    );
  }

  try {
    const userResponse = await createUser({ name, email, password });
    if (userResponse) {
      return apiSuccessResponseMessage(
        res,
        200,
        "user created successfully",
        userResponse
      );
    } else {
      return apiErrorResponseMessage(res, 400, "User Already created", false);
    }
  } catch (error) {
    return apiErrorResponseMessage(res, 500, "Internal Server Error", false);
  }
}
