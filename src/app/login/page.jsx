"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, Loader } from "lucide-react";
import {
  signUpData,
  errorMessagesConstants,
  logoUrl,
  lottieImage,
} from "../../constants";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { toast } from "react-hot-toast";
// import { user } from "next/navigation";
import { useRouter } from "next/navigation";

const { EMAIL_REQUIRED, PASSWORD_REQUIRED, INVALID_EMAIL, INVALID_PASSWORD } =
  errorMessagesConstants;

function Login() {
  const router = useRouter();
  const [isTop, setIsTop] = useState(true);
  const [signInError, setSignInError] = useState("");
  const [loader, setloader] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [defaultEmail, setDefaultEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

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

  const handleLogin = async (data) => {
    setloader(true);
    const payload = {
      email: data?.email, // replace with the user's email
      password: data?.password, // replace with the user's password
    };

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that you're sending JSON
        },
        body: JSON.stringify(payload), // Convert the payload to a JSON string
      });

      const data = await response.json(); // Parse the JSON response

      if (!data.sucess) {
        return toast.error("There was a problem with your request.", {
          className: "bg-green-10",
        });
      }
      toast.success("Sign in successful", {
        style: { backgroundColor: "#34C759",color: "white" },
      });
      return data?.response?.isVerified
        ? router.replace("/dashboard")
        : router.replace(`verify-otp/${data?.response?._id}`);
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setloader(false);
    }
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ height: componentHeight }}
      className=" flex  lg:overflow-hidden"
    >
      <div className="overflow-y-auto bg-white w-full md:w-1/2 tab:justify-center flex flex-col mobile:py-0 px-5 md:px-8">
        {isTop && (
          <div
            onClick={() => history.back()}
            className="hidden md:flex bg-white-10 h-33px md:top-5 md:left-4 md:fixed mobile:mt-7 cursor-pointer shadow-md drop-shadow-sm p-3 outline-dashed outline-2 rounded-lg"
          >
            <ChevronLeft
              alt="back-icon"
              className="z-10"
              src={
                isHovered
                  ? "/images/back-icon-hover.svg"
                  : "/images/back-icon.svg"
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        )}
        <div className="lg:mt-8 xl:w-499px xl:mx-auto mobile:pb-4 tab:mx-1 z-10  my-auto lg:-my-0">
          <div className="flex mobile:py-8 pt-7 pb-7  drop-shadow-md ">
            <div className="text-center w-full  text-white-10 md:text-blue-10 font-bold text-3xl uppercase ">
              Sign in
            </div>
            {/* <img className=" " alt="" src={logoUrl} /> */}
          </div>

          <div className="bg-white pt-8">
            <label className="font-normal text-white-10 md:text-black-10 text-ft13 font-PoppinsMedium">
              Email ID
            </label>
            <div className="mt-2 mb-2">
              <input
                id="email"
                label="Email"
                type="email"
                placeholder="someone@example.com"
                autoComplete="off"
                defaultValue={defaultEmail ? defaultEmail : ""}
                readOnly={!!defaultEmail}
                className="outline-none border-grey-10 rounded-[10px] h-14 relative mobile:w-full tab:w-full w-full px-[15px] pl-4 pr-10 border font-PoppinsMedium placeholder-grey-20"
                {...register("email", {
                  required: defaultEmail ? false : EMAIL_REQUIRED,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: INVALID_EMAIL,
                  },
                })}
              />
            </div>
            {errors.email && (
              <div className="text-red-600 font-PoppinsRegular text-ft2 mb-6">
                {errors.email.message}
              </div>
            )}
            <label className="font-normal text-white-10 md:text-black-10 text-ft13 font-PoppinsMedium">
              Password
            </label>
            <div className="mt-2 mb-2 relative">
              <input
                id="password"
                label="Password"
                placeholder="Password"
                autoComplete="off"
                type={passwordVisible ? "text" : "password"}
                className="outline-none border-grey-10 rounded-[10px] h-14 relative mobile:w-full tab:w-full w-full px-[15px] pl-4 pr-10 border font-PoppinsMedium placeholder-grey-20"
                {...register("password", {
                  // pattern: {
                  //   value:
                  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  //   message: PASSWORD_ALPHA_NUMBER_ERROR,
                  // },
                  minLength: {
                    value: 8,
                    message: INVALID_PASSWORD,
                  },
                  required: PASSWORD_REQUIRED,
                })}
              />
              <div
                className="right-4 top-6 my-auto absolute cursor-pointer"
                onClick={handlePasswordVisibility}
              >
                {passwordVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
              </div>
            </div>
            {!!errors.password && (
              <div className="text-red-600 mb-1 font-PoppinsRegular text-ft2">
                {errors.password.message}
              </div>
            )}
            {!!signInError !== "" ? (
              <div className="font-PoppinsRegular text-red-50 flex justify-start text-ft2 ">
                {signInError}
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center my-10 justify-between">
              <button
                onClick={handleSubmit(handleLogin)}
                disabled={loader}
                className={`bg-blue-10 w-[100px] outline-none flex justify-center py-[11px] px-4 text-ft14 font-PoppinsRegular font-medium rounded-md ${
                  loader ? " opacity-60 cursor-not-allowed" : ""
                }  text-white-10 `}
              >
                {loader ? (
                  <Loader className="w-6 h-6 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </button>
              <Link
                className="flex mt-1 text-ft15 md:w-30per w-1/2 justify-end font-normal  text-white-10 md:text-black-10 font-PoppinsRegular"
                href="/forgot"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-between mb-13 ">
              <div className="flex justify-end font-PoppinsRegular font-normal text-ft15 text-white-10 md:text-black-10">
                {"Don't have an account? Please"}
                <Link
                  href={"/sign-up"}
                  className="text-blue-400 underline ml-1 font-InterRegular font-normal text-ft15"
                >
                  Sign up
                </Link>
              </div>
            </div>
            <div className="flex items-center mb-12 tab:w-full ">
              <div className="h-px bg-darkGrey-50 bg-opacity-10 md:w-57.5 w-32 ml-auto"></div>
              <div className=" mx-2 font-PoppinsBold text-ft13 text-black-10 font-bold"></div>
              <div className="h-px bg-darkGrey-50 bg-opacity-10 md:w-57.5 w-32 mr-auto"></div>
            </div>
            {/* <button
              className="border border-grey-10 tab:w-full w-full rounded-md font-semibold"
            >
              <div className="flex justify-center py-4">
                <img className="mr-3" alt="" src="/images/google-logo.svg" />
                <span className="text-black-10 font-Poppins font-medium text-ft14">
                  {isSigning ? (
                    <BiDotsHorizontalRounded className="w-10 h-10 animate-pulse text-blue-20" />
                  ) : (
                    "Sign in with Google"
                  )}
                </span>
              </div>
            </button> */}
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
            <Lottie options={lottieImage?.loginImage} width={400} />
            <div className="md:hidden block absolute inset-0 bg-gradient-to-tr from-black-60 via-black-60/70 to-transparent pointer-events-none"></div>
          </div>
          {/* <div className="flex flex-col">
              <span className="font-PoppinsSemiBold text-white-10 text-ft7">
                LMS
              </span>
              <span className=" text-grey-DDDFDE text-ft1 font-PoppinsRegular font-normal">
                Bringing intelligence to your data.
              </span>
            </div> */}
          <span className="md:flex hidden font-PoppinsSemiBold text-white-10 pt-9 text-ft24 w-90per">
            Create a LMS account to get started with our platform!
          </span>

          {/* {signUpData.map((item, index) => (
            <ChecklistItem key={index} checklistItem={item} />
          ))} */}
        </div>
        {/* <Image
          src="/images/login-side-frame.svg"
          alt=""
          width={""}
          height={}
          className="absolute bottom-0 right-0"
          style={{ position: "fixed" }}
        /> */}
      </div>
    </div>
  );
}
export default Login;

// const ChecklistItem = ({ checklistItem }) => (
//   <div className="flex flex-col">
//     <div className="flex flex-row gap-2 pt-14 mb-3">
//       <img className="w-4 h-4 mt-1 " alt="" src={checklistItem.imageSrc} />
//       <span className="font-PoppinsRegular font-medium text-white-10 text-ft3 ">
//         {checklistItem.heading}
//       </span>
//     </div>
//     {checklistItem.paragraphs.map((paragraph, index) => (
//       <ul
//         key={index}
//         className="text-grey-DDDFDE text-ft15 font-PoppinsRegular font-normal pl-6 list-disc"
//       >
//         <li className="pl-6 py-1">{paragraph}</li>
//       </ul>
//     ))}
//   </div>
// );
