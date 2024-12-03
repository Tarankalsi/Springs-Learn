"use client"
import React, { useMemo } from "react";
import Footer from "../common/footer";
import CourseCard from "../landing-page/courseCard";
import { Animate } from "../animation";
import Header from "../common/header";
import { homeData } from "@/constants";

const AllCoursesPage = () => {
  const courses = homeData?.courses;
  const filterCourses = useMemo(() => {}, []);
  return (
    <>
      <Header isSticky={true} />
      <Animate animationType="fadeIn">
        <CourseCard title={"Courses"} data={courses} />
      </Animate>
      <Footer />
    </>
  );
};

export default AllCoursesPage;
