"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React from "react";
import { motion } from "framer-motion";
import {
  CalculatorIcon,
  MailIcon,
  MapPin,
  MessageCircleIcon,
  PhoneCall,
  PhoneCallIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const ContactPage = () => {
  return (
    <section className="">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        viewport={{ once: true }}
        className="w-full mt-10 mb-20 z-10"
      >

        <div className="text-black-60 text-xl text-center">Contact Us</div>
        <BlurFadeText
          className="text-black-70 text-center text-[14px] sm:text-lg mt-2 w-full"
          yOffset={3}
          delay={0.4}
          text={"Any question or remarks? Just write us a message!"}
        />

        <div className="flex flex-col w-[100%]  lg:flex-row md:px-[40px] items-cneter max-w-[1196px] mx-auto mt-10 px-3 lg:px-[20px]">
          <div className="bg-black-60 md:p-8 p-5 flex-1 rounded-[10px]   lg:rounded-l-[10px] lg:rounded-r-[0px]  shadow-2xl drop-shadow relative z-10 ">
            <p className="text-white-10 text-sm sm:text-xl lg:text-3xl font-bold">
              Contact information
            </p>
            <p className="text-grey-30 text-sm mt-2">
              Say something to start a live chat!
            </p>

            <div className="mt-25.5 flex flex-col items-start gap-10">
              <p className="text-white-10 text-xs sm:text-lg">
                LOOKING FOR A COURSE FOR YOURSELF?
              </p>
              <div className="flex items-center md:gap-10 gap-3 w-full">
                <div className="flex items-center md:gap-3 gap-1">
                  <PhoneCallIcon size={22} className="text-white-10 " />
                  <p className="text-grey-30 text-xs sm:text-lg text-ellipsis text-nowrap">+91 12345 67890</p>
                </div>
                <div className="flex items-center gap-1">
                  <MailIcon size={22} className="text-white-10" />
                  <p className="text-grey-30 text-xs sm:text-lg">sales@Springlearns.com </p>
                </div>
              </div>

              <p className="text-white-10 text-xs sm:text-lg">
                NEED A CORPORATE LEARNING SOLUTION?
              </p>
              <div className="flex items-center  md:gap-10 gap-3  w-full">
                <div className="flex items-center gap-3">
                  <PhoneCallIcon size={22} className="text-white-10" />
                  <p className="text-grey-30 text-xs sm:text-xl text-ellipsis text-nowrap">+91 12345 67890</p>
                </div>
                <div className="flex items-center gap-1">
                  <MailIcon size={22} className="text-white-10" />
                  <p className="text-grey-30 text-xs sm:text-lg">corp@Springlearns.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 ">
                <MapPin className="text-white-10" />
                <p className="text-grey-30 max-w-[300px] text-ellipsis text-xs sm:text-lg">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </div>
            </div>

            {/* <div className="w-36 h-36 rounded-full bg-grey-40 shadow-2xl -right-10 -bottom-9 z-3 absolute" /> */}
          </div>
          <div className=" bg-white-10 shadow-2xl drop-shadow rounded-[10px]   lg:rounded-r-[10px] lg:rounded-l-[0px]  mt-5 lg:mt-0  md:p-8 p-5 z-10">
            <div className="flex items-center gap-3 w-full  ">
              <div className="flex-1">
                <label htmlFor="email">First Name</label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter your first name"
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last Name"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 w-full mt-5 ">
              <div className="flex-1">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName">Phone Number</label>
                <Input type="text" id="lastName" placeholder="+ 123-456-7890" />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="min-h-[200px] p-3 w-full border border-grey-40 shadow drop-shadow-2xl outline-none rounded-xl resize-none mt-3"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.85 }}
              className="bg-black-60  text-white-10 h-10 rounded-xl p-2 float-right my-10 "
            >
              Send Message
            </motion.button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default ContactPage;
