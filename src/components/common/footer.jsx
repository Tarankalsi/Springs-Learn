import React from "react";
import Link from "next/link";
import { footerData, imageUrlConstant } from "@/constants";
import { FaFacebook } from 'react-icons/fa';
import { TwitterLogoIcon,LinkedInLogoIcon ,InstagramLogoIcon} from "@radix-ui/react-icons"

const Footer = () => {
  return (
    <footer className="bg-[#ed1c24] text-white-10 py-10">
      <div className="container mx-auto px-4">
        <Link href="/" className="mr-6 flex items-center ">
          <img
            className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]"
            loading="lazy"
            src={imageUrlConstant?.logoUrl}
            alt="logo"
          />
        </Link>
        <div className="flex flex-wrap  md:flex-row  gap-[20px] md:space-y-0 justify-between  mt-10">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col space-y-4 ">
              <h4 className="text-[15px] md:text-[17px] lg:text-[19px] font-bold">{section.title}</h4>
              <ul className="list-disc pl-6 flex flex-col gap-2 cursor-pointer">
                {section?.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:underline">
                    <Link className="text-[14px] md:text-[16px] lg:text-[18px] " href={item.url}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-[10px] py-[10px]">
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
          </a>
         

          <a href="https://www.instagram.com/springlearns/">
           <InstagramLogoIcon
            className="w-6 h-6"
           />
           </a>
           
          <a href="https://x.com/spring_learns">
           <TwitterLogoIcon
            className="w-6 h-6"
           />
           </a>

           <a href="https://www.linkedin.com/company/spring-learns/">
           <LinkedInLogoIcon
            className="w-6 h-6"
           />
           </a>

          


           

        </div>
      </div>
      <div className="text-center my-5 text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px]">
        © 2024 Springlearns All rights Reserved.&nbsp; Terms & Conditions
        &nbsp;Legal & Privacy
      </div>
    </footer>
  );
};

export default Footer;
