"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import React from "react";
import { motion } from "framer-motion";
import { aboutUsData } from "@/constants";


const AboutPage = () => {
  return (
    <section className="w-full h-full">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="my-10 w-full text-center max-w-[1280px] mx-auto px-4 lg:px-0"
      >
        <p className="mb-5">
          {aboutUsData?.heading.map((el, i) => (
            <motion.span
              className="text-center text-bold text-2xl w-full  text-neutral-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 2,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
        

        
      </motion.div>
      

      
      <div className="w-full bg-white-10 ">
        <div className="grid grid-cols-1 w-full max-w-[1280px] mx-auto gap-10">
          {aboutUsData?.team?.map((data, index) => (
            <motion.div
              key={index}
              className="flex md:flex-row  flex-col items-center w-full  min-h-[300px] justify-between border-b"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              
               <div className="flex-1 md:p-2 flex flex-col items-center justify-center gap-3 ">
                 
                  <p className="text-center font-bold text-bold text-[18px] md:text-[22px] lg:text-[24px] text-black-30">
                  {data?.name}
                </p>
                
                </div>
             

              <div className="p-4 flex-1 flex flex-col justify-center gap-3 md:order-1">
                <p className="text-start ">
                  {data?.bio}
                </p>
              </div>

            
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 w-full max-w-[1280px] mx-auto gap-10">
  {aboutUsData?.learns?.map((data, index) => (
    <div
      key={index}
      className="flex py-[30px] md:flex-row flex-col items-center w-full min-h-[300px] justify-between border-b"
    >
      

      {index % 2 === 0 && (
        <div className="flex-1 md:p-2 flex flex-col items-center justify-center gap-3">
          <p className="text-center font-bold text-[18px] md:text-[22px] lg:text-[24px] text-black-30">
            {data?.name}
          </p>
        </div>
      )}

<div className="p-4 flex-1 flex flex-col justify-center gap-3">
       

      
       <div
         className="text-start"
         dangerouslySetInnerHTML={{ __html: data?.features }}
       />
        <p className="text-start">
         {data?.bio}
       </p>
     </div>
    </div>
  ))}
</div>


         
      </div>

      <Footer />
    </section>
  );
};

export default AboutPage;
