import { FadeIn } from "@/components/animation";
import { headerItems } from "@/constants";
import React from "react";

const StickyHeader = ({ isSticky = false }) => {
  return (
    <FadeIn delay={0.2}>
    <div
      className={`${
        isSticky
          ? "bg-white-10 shadow-md shadow-green-700  flex items-center justify-center gap-3 sm:gap-7 md:gap-9 border-b px-2    py-5 none z-50"
          : "hidden"
      }`}
    >
      {headerItems.map((item) => (
        <div
          key={item.id}
          className="text-[9px] sm:text-[13px] md:text-[15px] lg:text-[18px] text-black-50 cursor-pointer"
          onClick={() => (window.location.href = item.link)} 
        >
          {item.label}
        </div>
      ))}
    </div>
  </FadeIn>
  );
};

export default StickyHeader;