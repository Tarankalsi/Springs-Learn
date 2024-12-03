"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Meta from "@/components/common/meta";
import AdvisorForm from "@/components/courseDetail/advisorForm";
import Banner from "@/components/courseDetail/banner";
import OverviewSection, {
  SecretSauceCourse,
} from "@/components/courseDetail/overviewSection";
import StickyHeader from "@/components/courseDetail/stickyHeader";
import { homeData } from "@/constants";
import { Course } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const CourseDetail = () => {
  const params = useParams();
  const name = params?.name as string;
  const decodeName = decodeURIComponent(name);
  const courseData: Course | undefined = homeData?.courses?.find(
    (ele) => ele?.title === decodeName
  );
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current && footerRef.current) {
        const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        setIsSticky(bannerBottom <= 0 && footerTop > windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!courseData) {
    return <div>Course not found</div>;
  }

  return (
      <div className="overflow-x-hidden">
        <Header isSticky={false} />

        <Banner courseData={courseData} />

        <div ref={bannerRef}>
          <SecretSauceCourse data={courseData?.courseDetail?.secretSauce} />
        </div>

        <div className="flex relative w-full max-w-[1280px] mx-auto">
          <div className="fixed w-full left-0 top-0 z-50">
            <StickyHeader isSticky={isSticky} />
          </div>
          <div className="w-[100%] lg:w-[70%] p-4">
            <div className="mb-8 h-auto">
              <OverviewSection id={courseData.id} courseData={courseData} />
            </div>
          </div>

          <div className="w-[0%] lg:w-[30%] p-0 md:p-4">
            <div className={`${isSticky ? "fixed top-16 right-4 pr-9" : ""}`}>
              <AdvisorForm id={courseData.id} courseData={courseData} />
              {/* Add more content here */}
            </div>
          </div>
        </div>

        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
  );
};

export default CourseDetail;
