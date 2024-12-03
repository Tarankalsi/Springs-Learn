"use client";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import OtpInput from "../../../components/common/otpInput";
import { logoUrl, lottieImage } from "../../../constants";
import Lottie from "react-lottie";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";

function VerifyOtp() {
  const router = useRouter();
  const { id } = useParams();
  const { currentUser } = useCurrentUser(id);
  const [otp, setOtp] = useState("");
  const [loader, setLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [componentHeight, setComponentHeight] = useState(0);

  const updateComponentHeight = () => {
    setComponentHeight(window.innerHeight);
  };

  useEffect(() => {
    updateComponentHeight();
    window.addEventListener("resize", updateComponentHeight);
    return () => {
      window.removeEventListener("resize", updateComponentHeight);
    };
  }, []);
  const onChange = (value) => setOtp(value);

  const submitHandler = async () => {
    setLoader(true);
    const inputOtp = Number(otp);
    try {
      if (inputOtp !== currentUser?.otp) {
        return toast.error("Entered user OTP is wrong",{

        });
      }
      await axios.put(`/api/user/verifyUser?id=${currentUser?._id}`);
      toast.success("OTP is verified", {
        style: { backgroundColor: "#34C759",color: "white" },
      });
      setLoader(false);
      router?.replace("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const resetHandler = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios?.post(
        `/api/user/resendEmail?id=${currentUser?._id}`
      );
      if (!response?.data?.sucess) {
        return toast.error("something went wrong");
      }
      return toast.success("Otp is send your email address", {
        style: { backgroundColor: "#34C759",color: "white" },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className=" flex lg:overflow-hidden"
      style={{ height: componentHeight }}
    >
      <div className=" flex w-full flex-col  overflow-y-auto bg-white-10 px-5 md:w-1/2 ">
        <div className="flex pl-2 pt-3">
          <img alt="logo" className="z-10" src={logoUrl} />
        </div>
        <div className="my-auto w-full pb-4 z-10">
          <div className="flex font-MontserratSemiBold text-ft20-24.38-0.4 z-20 md:text-black-20 text-white-10">
            We have sent a One Time Passcode to verify your email address.
          </div>
          <div className="pt-9">
            <div className="font-MontserratRegular text-ft15-18.29-0.3 md:text-black-20 text-white-10">
              Enter OTP (One Time Passcode)
            </div>
            <OtpInput valueLength={6} value={otp} onChange={onChange} />
            <button
              disabled={otp?.length <= 5}
              onClick={submitHandler}
              className={`${
                otp?.length <= 5
                  ? "bg-[#EEEEEE] text-[#B0B1B2]"
                  : "bg-blue-10 text-white-10"
              } flex h-[49px] w-[348px] items-center justify-center rounded font-MontserratMedium text-ft15`}
            >
              {loader ? (
                <Loader className="animate-spin mx-auto" />
              ) : (
                " Verify Email"
              )}
            </button>
            <div
              onClick={resetHandler}
              className="mt-14 text-left font-MontserratRegular text-ft15  border bg-blue-10 cursor-pointer px-2 py-3 text-nowrap max-w-[110px] rounded-lg text-white-10"
            >
              {isLoading ? (
                <Loader className="animate-spin mx-auto" />
              ) : (
                "Resend OTP"
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(to top, #5E66D6, #4956BA, #777FFA)",
        }}
        className="md:flex justify-center align-center px-5 py-auto h-full  md:w-1/2 md:static absolute w-full overflow-y-auto"
      >
        <div className="flex flex-col px-auto py-auto my-auto overflow-hidden">
          <div className="flex">
            <Lottie options={lottieImage?.otpImage} width={400} />
            <div className="md:hidden block absolute inset-0 bg-gradient-to-tr from-black-60 via-black-60/70 to-transparent pointer-events-none"></div>
          </div>
          <span className="md:flex hidden font-PoppinsSemiBold text-white-10 pt-9 text-ft24 w-90per">
            Create a LMS account to get started with our platform!
          </span>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
