"use client";
import { homeData, imageUrlConstant } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./courseCard";
import UserReviewCard from "./userReviewCard";
import BlurFadeText from "../magicui/blur-fade-text";
import Link from 'next/link';
const HomePage = () => {
  const courses = homeData?.courses;


  return (
    <>
      <img
        className=" w-full h-full"
        src={imageUrlConstant?.mainBanner}
        loading="lazy"
        alt=""
      />
      <div className="bg-white grid grid-cols-1 sm:grid-cols-3 gap-5  top-10 max-w-[1124px] mx-auto relative md:-top-10 px-4 md:px-4">
        {homeData?.become?.map((ele, index) => (
          <div key={index} className="relative">
            <div
              key={index}
              className="px-3 py-3 flex flex-col items-center gap-4 rounded-lg bg-linear-grad-yellow-10 shadow-md "
            >
              <p className="text-base md:text-xl text-pretty font-semibold text-white-10 text-center whitespace-nowrap uppercase ">
                {ele?.title}
              </p>
            </div>
            <Link href="/courses">
              <button className="shadow-md transition-all text-sm font-bold hover:scale-110 top-10 bg-indigo-600 text-white-10 p-4 rounded-full flex items-center -mt-3 hover:underline mx-auto">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div  className="max-w-[1920] mx-auto md:px-4 px-3 my-5">
      <h1 className="text-gray-600 my-5 pt-10 md:pt-0  px-4 w-full text-center text-2xl font-bold" >Springlearns</h1>
      <p  className="text-gray-600   px-4 w-full  text-base sm:text-lg md:text-lg ">Springlearns is a premier provider of professional training solutions, dedicated to empowering individuals and organizations through high-quality education tailored to industry demands. With courses spanning project management, IT certifications, leadership training, and more, Springlearns delivers the skills needed for career growth and organizational success.
      </p>
      </div>
      
      <CourseCard title={"Top Trending Courses"} data={courses} />
       
      <div className="max-w-[1920] mx-auto md:px-4 px-3 my-10">
        <h2 className="text-gray-600 my-10  px-4 w-full text-center text-2xl font-bold" >Why Choose Springlearns?</h2>
        <p className="text-gray-600   px-4 w-full  text-base sm:text-lg md:text-lg ">Springlearns is your go-to platform for achieving career growth with industry-recognized certifications and hands-on learning. We offer a wide range of courses tailored to meet the demands of today’s job market, covering fields like project management, quality assurance, business analysis, and more. With Springlearns, you’ll benefit from real-time support from expert instructors, an interactive learning environment, and resources that you can access anytime, anywhere.
        </p>
  
        <p className="text-gray-600   px-4 w-full text-base sm:text-lg md:text-lg  ">Our courses are designed to empower you with practical skills and knowledge that employers value, helping you stand out in a competitive job market. Whether you're upskilling for a promotion or shifting to a new field, Springlearns is committed to guiding you every step of the way toward success.

      </p>
      </div>


      <div className="max-w-[1920] mx-auto md:px-4 px-3 my-10">
        <h2 className="text-gray-600 my-10  px-4 w-full text-center text-2xl font-bold" >How Springlearns Works?</h2>
        <p className="text-gray-600   px-4 w-full  text-base sm:text-lg md:text-lg ">Springlearns makes it easy for you to reach your career goals with a straightforward, step-by-step approach:</p>
        <div>
          <div className=" px-5 my-5">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-600 text-base sm:text-lg md:text-lg leading-6 ">
                <span className="font-semibold">Sign Up</span>  – Begin by creating your free account on the Springlearns platform. Our user-friendly registration process takes just minutes, getting you ready to explore a world of learning possibilities.
              </li>
              <li className="text-gray-600 text-base sm:text-lg md:text-lg leading-6 ">
                <span className="font-semibold">Choose a Course </span> – Browse through our extensive catalog of courses, from project management to data science and quality management. Each course is crafted by industry experts, ensuring you gain the most relevant and in-demand skills.
              </li>
              <li className="text-gray-600 text-base sm:text-lg md:text-lg leading-6 ">
                <span className="font-semibold">Start Learning  </span> – Dive into interactive lessons, hands-on projects, and real-world case studies. With 24/7 access to course materials, you can learn at your own pace, fitting your studies around your schedule.
              </li>
              <li className="text-gray-600 text-base sm:text-lg md:text-lg leading-6 ">
                <span className="font-semibold">Connect with Experts  </span> – Get support and guidance from certified instructors and join a community of learners to collaborate, share insights, and solve challenges together
              </li>
              <li className="text-gray-600 text-base sm:text-lg md:text-lgleading-6 ">
                <span className="font-semibold">Earn Your Certification   </span>– Upon course completion, receive a recognized certification that validates your new skills and boosts your career profile. Share your achievement with employers and add it to your resume or LinkedIn.
              </li>
            </ul>
          </div>
        </div>
        <p className="text-gray-600   px-4 w-full text-base sm:text-lg md:text-lg  ">With Springlearns, you’ll enjoy a seamless learning experience that is flexible, engaging, and aligned with your career ambitions. Join us and take the first step toward a brighter future.
      </p>
      </div>




      

      <WhyChooseUs />





      <Banner />
      {/* <BlogPost /> */}

      <UserReview />
      <BottomBanner />
    </>
  );
};



const BottomBanner = () => {
  return (
    <div className="relative w-full h-[230px]">
      <img
        className="absolute w-full h-full"
        src="/business.png"
        alt="business"
      />
      <div className="max-w-[1520px] mx-auto">
        <div className="text-sm md:text-2xl text-white-10 absolute top-12 md:px-15 px-5">
          {homeData?.bannerMsgTitle}
        </div>
        <div className="text-xs md:text-xl text-white-10 absolute md:top-20 top-20 md:px-15 px-5 md:block hidden">
          {homeData?.bannerMsgTitle2}
        </div>

        {/* Wrap the button with a Next.js Link component */}
        <Link href="/courses">

          <button className="w-[170px] bg-white-10 hover:bg-indigo-600 hover:scale-110 hover:text-white-10 transition-all inset-0 top-29 mx-auto mt-5 uppercase h-10 rounded-sm text-ft12-18 text-[#0c5397] absolute">
            Learn more
          </button>

        </Link>
      </div>
    </div>
  );
};

const UserReview = () => {
  return (
    <motion.div className="max-w-[1920px] mx-auto my-10 md:px-0 px-3">
      <BlurFadeText
        className="text-gray-600 my-10  px-4 w-full text-center text-2xl font-bold uppercase"
        yOffset={3}
        delay={0.4}
        text={"Reviews"}
      />
      <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {homeData?.reviewUsers?.map((review, index) => (
          <UserReviewCard key={index} review={review} />
        ))}
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        viewport={{ once: true }}
        className="my-9 p-3"
      >
        <p className="text-center text-gray-600 text-2xl font-bold uppercase">
          Why Choose Us
        </p>
        <div className="md:grid-cols-4 grid-cols-2 grid place-items-center text-center">
          {homeData?.whyChooseData?.map((ele, index) => (
            <div className="grid place-items-center mt-3" key={index}>
              <img
                loading="lazy"
                src={ele?.img}
                alt="why-choose"
                className="w-auto"
              ></img>
              <p className="mt-3 text-sm">{ele?.title} </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

const Banner = () => {
  return (
    <motion.div className="p-5 bg-linear-grad-blue-20 w-full my-10">
      <motion.div className="flex items-center w-full justify-center">
        <motion.p className="uppercase text-white-10 text-sm md:text-lg">
          When you learn better you do better! Study with us, grow with us.
        </motion.p>
        <motion.button
          whileTap={{ scale: "0.8" }}
          className="bg-black-10 h-10 text-white-10 rounded-xl ml-4 w-[150px]"
        >
          Log In
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const BlogPost = () => {
  return (
    <motion.div className="max-w-[1920] mx-auto md:px-0 px-3 my-10">
      <h2 className="text-gray-600 my-10  px-4 text-center text-2xl font-bold uppercase">
        Latest blog post
      </h2>

      <div className="grid  sm:grid-cols-3 gap-7  lg:grid-cols-4 place-items-center md:px-10 px-3">
        {homeData?.blogPost?.map((element, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: "1.06" }}
            className="rounded-xl cursor-pointer bg-white-10   flex flex-col gap-4  "
          >
            <motion.span
              className="text-blue-10 text-center text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 2,
              }}
              key={i}
            >
              {/* {element?.title} */}
            </motion.span>
            <img src={element?.img} alt="blog-post" />
            <div className="text-sm font-bold">
              {element?.description}
            </div>
            <div className="flex items-center gap-[10px] ">
              <div className="text-xs opacity-60">
                {element?.createdAt}
              </div>
              <span className="opacity-40">|</span>
              <div className="text-xs opacity-60" style={{color:"blue"}}>
                 {element?.text}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default HomePage;