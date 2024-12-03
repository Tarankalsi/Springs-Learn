import { SlideInFromRight } from "@/components/animation";
import axios from "axios";
import { AlarmClockPlus } from "lucide-react";
import React, { useEffect, useState } from "react";

const AdvisorForm: React.FC<any> = ({ courseData }) => {
  const [hostname, setHostname] = useState<string>("www.springlearns.com");
  const [isVisible, setIsVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);

  type Batch = {
    startDate?: string; // Optional startDate
    [key: string]: any; // Add other properties as needed
  };
  
  const [batches, setBatches] = useState<Batch[]>([]);
  const [error, setError] = useState<string | null>(null); 
  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    phoneNumber: '',
  });
  const [phoneError, setPhoneError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
     
      const phoneRegex = /^[0-9]*$/; 
      if (value.length <= 10 && phoneRegex.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
        setPhoneError("");  
      } else if (value.length > 10) {
      
        setPhoneError("Please enter a valid Phone number");
      } else {
        setPhoneError("");
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        if (courseData?.dbid) {
          const response = await axios.post(
            'https://back-end.anginat.com/api/course/courses/get-course-domain',
            { courseId: courseData.dbid } // Sending courseId in the body
          );
          // console.log(response.data)
          setBatches(response.data.data.batches); // Update state with fetched data
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch batches.');
      }
    };

    fetchBatches();
  }, [courseData?.dbid]); // Re-run if courseData.dbid changes

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    
    if (formData.phoneNumber.length !== 10) {
      setPhoneError("Please enter a valid Phone number");
      return;
    }

    const payload = {
      institutionDomain: hostname,
      course: courseData.title,
      applicantName: formData.applicantName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      status: "Pending",
    };
    console.log(payload)

    try {
      const res = await axios.post(
        "https://back-end.anginat.com/api/auth/lead/create",
        payload
      );

      if (res.status === 200 && res.data.status === "success") {
        setSuccessMessage(true);
      } else {
        console.error("Submission failed:", res.data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  if (!isVisible) return null;

  return (
    <SlideInFromRight delay={1.4}>
      <div className="p-6 flex-1 max-w-[300px] bg-white-10 border border-gray-200 rounded-xl shadow-md">
        <div className="flex justify-end">
          <button onClick={() => setIsVisible(false)} className="right-2 md:hidden">
            <p className="text-gray-500">X</p>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <AlarmClockPlus className="text-black-30" />
        </div>

        {successMessage ? (
          <div
            className="mt-4 p-4 bg-green-100 border border-green-400 rounded-md text-green-700 flex items-center justify-center animate-fade-in"
          >
            <span className="mr-2 text-lg">🎉</span>
            <p>Our advisor will reach out to you soon!</p>
          </div>
        ) : (
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="applicantName"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                value={formData.applicantName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <div className="flex items-center border border-gray-300 rounded-l-md bg-gray-100">
                <select className="bg-transparent px-2 py-2 text-sm text-gray-700 focus:outline-none">
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border-t border-r border-b border-gray-300 rounded-r-md focus:outline-none focus:border-blue-500"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                maxLength={10}
              />
            </div>
            {phoneError && <p className="text-xs text-red-500">{phoneError}</p>}

            <p className="text-xs text-gray-500">
              By Signing up, you agree to our{" "}
              <a className="text-blue-500 underline">Terms & Conditions</a> and our{" "}
              <a className="text-blue-500 underline">Privacy and Policy</a>
            </p>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white-10 rounded-md font-semibold hover:bg-blue-600"
            >
              Talk to our advisor
            </button>
          </form>
        )}
      </div>
      <div className="p-6 mt-4 flex-1 max-w-[300px] bg-white-10 border border-gray-200 rounded-xl shadow-md">
        <div className="flex items-center w-full">
          <p>Upcoming Batch Date:</p>
          <img
            src="https://d14b9ctw0m6fid.cloudfront.net/confused%201-f59de2204ca243e6850042985ae1166b.svg"
            alt=""
          />
        </div>
        <button className="font-bold mt-3 text-base text-white-10 transition duration-300 ease-in-out bg-black-40 hover:bg-blue-10 rounded px-6 justify-center w-full py-0 flex items-center h-11 min-w-32">
          {batches[0]?.startDate ? batches[0]?.startDate : "Coming Soon"}
        </button>
      </div>
    </SlideInFromRight>
  );
};

export default AdvisorForm;
