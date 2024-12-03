import React from 'react';

interface Course {
  languages?: string[]; // Optional languages
}

const Language: React.FC<{ course: Course }> = ({ course }) => {
  const languages = course.languages || []; // Default to an empty array if languages are undefined

  return (
    <div>
      <div
        style={{ color: "white", width: "100%", marginTop: "5px" }}
        className={`flex items-center`}
      >
        <div className="px-[8px] py-[2px] bg-blue-500 flex items-center rounded-sm gap-1">
          {/* Join languages array into a string and display */}
          <span className="text-[12px] sm:text-[14px] md:text-[17px]">
            {languages.length > 0
              ? `Language: ${languages.join(', ')}`
              : "Language: Not specified"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Language;
