import React, { useEffect } from 'react';
import { RiDiscountPercentLine } from 'react-icons/ri';

const Pricing = ({
  textSize = 'text-md', 
  textSize2 = 'text-[12px]', 
  direction = 'row', 
  gap = 'gap-1', // Default gap is 'gap-1'
  marginBottom = 'mb-1', // Default margin-bottom is 'mb-4'
  course,
  batch
}) => {
  useEffect(()=>{
    console.log(course);
  },[])
  return (
    <div className="flow">
      {/* Discount Section with margin-bottom */}
      {/* <div style={{ color: "white", width: "100%", padding: "3px" }} className={`flex items-center ${gap} ${marginBottom}`}>
        <div style={{ backgroundColor: "#FF0000" }} className='px-[8px] py-[3px] flex items-center rounded-sm gap-1'>
          <RiDiscountPercentLine style={{ color: "white" }} className="w-4 h-4 sm:w-4 sm:h-4" />
          <span className="text-[12px]">40% Off</span>
        </div>
      </div> */}

      {/* Pricing Section */}
      <div className={`flow items-center ${direction === 'column' ? 'flex-col' : 'flex-row'} ${gap}`}>
        {/* Strikethrough Price */}
        {/* <span style={{ color: "black" }} className={`${textSize2} sm:text-[15px] text-slate-500 line-through`}>
          INR 7,999
        </span> */}

        {/* Main Price */}
        <p style={{ color: "#ED1C24" }} className={`text-[18px] text-black font-semibold ${textSize} sm:text-2xl`}>
          {course?.pricingType === 'one-time' 
            ? `INR ${course.price.offerPrice}` 
            : `INR ${batch.price.offerPrice}`}
        </p>
      </div>
    </div>
  );
}

export default Pricing;
