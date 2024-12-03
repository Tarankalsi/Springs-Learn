import { SunIcon } from '@radix-ui/react-icons'
import { Share2Icon } from 'lucide-react'
import React from 'react'

const Timeupdate = ({timeSlot}) => {

  function getTimeOfDay(timeRange) {
    console.log(timeRange)
    // Check if the input matches the expected format
    if (!timeRange || !timeRange.includes(" - ")) {
      // console.error("Invalid time range format:", timeRange);
      return "Day";
    }
  
    // Split the range into start and end times
    const [startTime] = timeRange.split(" - ");
  
    // Match and validate the time format
    const timeMatch = startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeMatch) {
      console.error("Invalid start time format:", startTime);
      return "Unknown";
    }
  
    // Extract hours, minutes, and meridian
    const [hours, minutes, meridian] = timeMatch.slice(1);
  
    // Convert to 24-hour format
    let hours24 = parseInt(hours, 10);
    if (meridian.toUpperCase() === "PM" && hours24 !== 12) {
      hours24 += 12;
    } else if (meridian.toUpperCase() === "AM" && hours24 === 12) {
      hours24 = 0;
    }
  
    // Determine the time of day
    if (hours24 >= 0 && hours24 < 12) {
      return "Morning";
    } else if (hours24 >= 12 && hours24 < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }
  


  return (
    <div className='flex items-center gap-2 sm:gap-4'>
                <div className="flex justify-center items-center gap-1 bg-green-500 px-[5px] py-[3px] sm:px-[10px] rounded-sm">
                  <SunIcon className="w-3 h-3 sm:w-6 sm:h-6 " color='white' /> <span style={{color:"white"}} className="text-[10px] sm:text-[15px]">{getTimeOfDay(timeSlot)}</span>
                </div>
                <div>
                  <Share2Icon className='w-4 h-4' />
                </div>
    </div>
  )
}

export default Timeupdate