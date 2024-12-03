import { type ClassValue, clsx } from "clsx";
import { NextApiResponse } from "next";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiErrorResponseMessage = (
  res: NextApiResponse,
  status: number,
  message: string,
  success?: boolean
) => {
  return res.status(status).json({ status, message, success:false });
};

export const apiSuccessResponseMessage = (
  res: NextApiResponse,
  status: number,
  message: string,
  response: any
) => {
  return res.status(status).json({ status, message, response: response,sucess:true });
};



export async  function generateOTP(length = 6, options = { digits: true, alphabets: false }) {
  const digits = '0123456789';
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let characters = '';

  if (options.digits) {
    characters += digits;
  }
  if (options.alphabets) {
    characters += alphabets;
  }

  if (characters.length === 0) {
    throw new Error('At least one option (digits or alphabets) must be true.');
  }

  let otp = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return otp;
}


export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const handleError = (error: unknown) => {
  console.log(error);
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    // throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
