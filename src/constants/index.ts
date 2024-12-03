import SignUpImage from "../assets/lottie/signup-image.json";
import LoginImage from "../assets/lottie/login-image.json";
import OtpImage from "../assets/lottie/otp.json";
import { text } from "stream/consumers";
export const signUpData = [];

export const logoUrl = "https://teclearns.com/images/logo.png" as string;

export const imageUrlConstant = {
  logoUrl: "/springlearns.jpeg",
  mainBanner: "/main-banner.jpg",
};

export const errorMessagesConstants = {
  NAME_REQUIRED: "Username is required.",
  PASSWORD_REQUIRED: "Password is required.",
  PHONE_NUMBER_REQUIRED: "Phone Number is required.",
  PASSWORD_MUST_8_CHARACTERS: "Password must be at least 8 characters.",
  PASSWORD_ALPHA_NUMBER_ERROR:
    "Password must include letters, numbers and special characters.",
  INVALID_EMAIL: "Please enter a valid email.",
  INVALID_PASSWORD: "Invalid password.",
  NAME_IS_REQUIRED: "Please enter your name.",
  EMAIL_REQUIRED: "Please enter your email.",
  FEEDBACK_REQUIRED: "Please enter your feedback.",
  USERID_REQUIRED: "User ID is required.",
  CONFIRM_PASSWORD_REQUIRED: "Confirm password is required.",
  PASSWORD_MUST_SAME: "New password and Confirm password must be same.",
  ERROR_OCCURED_RAZORPAY:
    "An error occurred while setting up razorpay, Please try again.",
  LIMIT_EXCEEDED:
    "You have exceeded your daily limit for stories. please consider upgrading your plan",
  QUERY_LIMIT_EXCEEDED: "Reached the maximum number of queries for this month.",
  PLAN_EXPIRED: "Plan expired, Please upgrade the plan.",
  TENANT_INVITATION_ACCEPTED: "You have already given access to this account.",
  ADD_TEST_QUESTIONS: "Please add test questions.",
} as const;

export const regexConstant = {
  DIGIT_REGEX: new RegExp(/^\d+$/),
  EMAIL_REGEX: new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  PASSWORD_REGEX: new RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]{8,}$/
  ),
};

export const lottieImage = {
  signUpImage: {
    loop: true,
    autoplay: true,
    animationData: LoginImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  loginImage: {
    loop: true,
    autoplay: true,
    animationData: SignUpImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
  otpImage: {
    loop: true,
    autoplay: true,
    animationData: OtpImage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  },
} as const;

export const aboutUsData = {
  heading: "Welcome to Springlearn".split(" "),
 
  team: [
    {
      name: "About",
     
      bio: `At Springlearns, we are committed to delivering high-quality, industry-leading educational programs that empower professionals and businesses to succeed. Our comprehensive training solutions are designed to meet the growing demand for in-demand skills across various industries. From classroom-based sessions to virtual training options, our programs are facilitated by certified experts, ensuring that every learner gains real-world, applicable knowledge.`,
    },
    {
      name: "Mission",
     
      bio: `Our mission is to bridge the skills gap by providing top-tier educational experiences that help individuals and organizations thrive. Whether it’s project management, leadership training, or advanced IT certifications, we are dedicated to fostering a learning environment where innovation, creativity, and professional growth are at the forefront.`,
    },
    {
      name: "Vision",
     
      bio: `We envision a world where every individual has access to cutting-edge knowledge and skills that fuel their professional success. Through continuous learning and development, Springlearns aims to be a catalyst for positive change, empowering professionals to unlock new opportunities and organizations to achieve lasting impact.`,
    },

   
    
  ],
  learns: [
    {
      name: "Why Choose Springlearns?",
       bio:"Join Springlearns to elevate your career and enhance your skills through world-class training designed for real-world success.",
      features: `
        <ul>
          <li><strong>Certified Experts:</strong> Learn from industry leaders with proven expertise.</li>
          <li><strong>Flexible Learning Options:</strong> Choose from virtual and classroom training to suit your needs.</li>
          <li><strong>Comprehensive Course Offerings:</strong> Explore a wide range of courses tailored to current industry demands.</li>
          <li><strong>Supportive Learning Environment:</strong> Receive ongoing support and guidance to help you achieve your goals.</li>
        </ul>
      `
    }
  ],
  
} as const;

export const headerItems = [
  { id: 1, label: "Overview", link: "#overview" },
  { id: 2, label: "Why Springlearns", link: "#why-Springlearns" },
  { id: 3, label: "Tuition", link: "#tuition" },
  { id: 4, label: "Instructor", link: "#instructor" },
  { id: 5, label: "Curriculum", link: "#curriculum" },
  { id: 6, label: "FAQs", link: "#faqs" },
];

export const homeData = {
  become: [
    {
      title: "Become A Project Manager",
      pic: "/project-manager.jpeg",
    },
    {
      title: "Become A Quality Manager",
      pic: "quality-manager.jpeg",
    },
    {
      title: "Become A Business Manager",
    },
  ],
  courses: [
    {
      id: 22,
      dbid: "67480deff99edee897525406",
      title: "ITIL® 4 Foundation Certification",
      metaTitle: "ITIL® 4 Foundation Certification",
      metaDescription: "Comprehensive Immersive Learning Program to Master ITIL 4 and Succeed in the Foundation Exam",
      metaKeywords: "ITIL, Foundation, Certification",
      courseSubtitle: "ITIL® 4 Foundation Certification",
      description:
        "Comprehensive Immersive Learning Program to Master ITIL 4 and Succeed in the Foundation Exam",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {

        price:{
          originalPrice: 44999,
          discountPrice: 33999,
          discount: 21,
        },

        courseCategory: "IT Service Management",
        careerDetail: [
          { carrer: "Carrer Transformation", value: "450,00" },
          { carrer: "Workshops Every Month", value: "250" },
          { carrer: "Countries and Counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "5 Simulation Exams and 8 Mock Tests to Help You Excel in the ITIL Exam",
            },
            {
              icon: "",
              value: "8 Assessments Featuring More Than 200 Questions",
            },
            {
              icon: "",
              value: "Receive 5 Complimentary Courses from Top 100 Programs",
            },
            {
              icon: "",
              value: "Access to PeopleCert Official eBook and Training Materials",
            },
            {
              icon: "",
              value: "Course Fee Covers Exam Fee and Online Proctoring",
            },
            {
              icon: "",
              value: "Lifetime Access to On-Demand Course Materials",
            },
            {
              icon: "",
              value: "16 Hours of Live, Instructor-Led Training Sessions",
            },
            {
              icon: "",
              value: "Earn 16 PDUs for Ongoing Professional Development",
            },
            {
              icon: "",
              value: "Over 49 Hours of On-Demand, Self-Paced Learning",
            },
          ],
          overviewDetail: `Are you looking to advance your career in IT service management? The ITIL 4 Foundation Certification might be the key to unlocking your potential. This comprehensive guide will walk you through everything you need to know about the ITIL 4 Foundation certification, from its benefits to exam preparation tips. Whether you're a seasoned IT professional or just starting your journey, this article will provide valuable insights to help you succeed.`,
          overviewPoints: [
            {
              title: "Live Instructor-Led Sessions",
              value:
                "Master ITIL with in our exclusive 16-hour live training. Dive into real-world scenarios, tackle hands-on role-play exercises, and amplify your skills with interactive activities. With trainers boasting over two decades in ITIL brilliance, clear all doubts, and transform into an ITIL pro.",
            },
            {
              title: "PDUs for Continued Learning",
              value:
                "Earn 16 Professional Development Units (PDUs) as you seek to maintain or elevate your skills and certifications, ensuring continuous professional growth.",
            },
            {
              title: "On-Demand Self-Paced Learning",
              value:
                "Dive into over 49 hours of on-demand self-paced learning, giving you the flexibility to study at your own pace and ensuring a comprehensive understanding of ITIL concepts tailored to your schedule.",
            },
            {
              title: "Simulation Exams",
              value:
                "Familiarize yourself with the actual ITIL Foundation exam format and difficulty level through 5 simulation exams, preparing you for success.",
            },
            {
              title: "Mock Tests and Assessments",
              value:
                "Reinforce your learning and identify areas for improvement with 8 mock tests and 8 assessments, ensuring you are thoroughly prepared.",
            },
            {
              title: "Complimentary Courses",
              value:
                "Enhance your knowledge and skills in related areas with 5 complimentary courses from the top 100, enriching your learning experience",
            },
            {
              title: "Take² Re-Sit Exam Option",
              value:
                "In case of an unsuccessful attempt, put your worries at ease by opting for the Take² Re-sit Exam Option at the time of registration with the help of your learning advisor. Retake the exam for a fraction of the price and get 6 months from the date of the initial exam to prepare for your second try which you can schedule at your own convenience and attempt from the comfort of your home or office.",
            },
            {
              title: "All-Inclusive Program",
              value:
                "Your course fee covers the ITIL Foundation exam fee, online proctoring, ITIL4 Foundation official e-book, and ITIL4 Foundation official training materials, streamlining your certification process for a hassle-free experience.",
            },
            {
              title: "Lifetime Access to On-Demand Courseware",
              value:
                "Enjoy lifetime access to on-demand courseware, allowing you to revisit and reinforce your knowledge whenever needed, ensuring lasting competence.",
            },
            {
              title: "PeopleCert Official eBook and Training Material",
              value:
                "Access official ITIL 4 Foundation e-book and training materials from PeopleCert, aligning your learning with the official certification requirements.",
            },
          ],
          overviewCourseDescription: `The ITIL Foundation certification isn't just a certification; it's your ticket to mastering the common language and tools that drive collaboration within IT teams, ultimately delivering unmatched value across the entire business landscape.

Elevate your IT journey with a certification that can unlock the door to a future where your expertise sets the standard. Your journey begins here—exciting, transformative, and geared for success!

          NOTE: ITIL®, ITIL® Foundation, and AXELOS are registered trademarks of AXELOS Limited, used under the permission of AXELOS Limited. The Swirl logo™ is a trademark of AXELOS Limited, used under the permission of AXELOS Limited. PeopleCert® is the registered trademark of PeopleCert International Ltd., the sole Examination Institute (EI) for the delivery of AXELOS Accreditation and Examination services worldwide. Springlearns is a Certified Partner of AXELOS and an Accredited Training Organization (ATO) with PeopleCert®.`,
        },
        highDemandAndAccerlated: {
          demandTitle: "High Demand For ITSM Professionals",
          demandHeading:
            "ITIL Foundation Among the Highest Paying Certifications",
          demandDetail: `The future is bright for service management, whether looked at through an IT lens or a business focus. Covid-19 has further put service management under the microscope and delivered business value rather than technology solutions. This demand is set to see an upward curve in the near future, making this a prime time for IT Service Management.

The ITIL® framework for IT service management is used by approximately 45 percent of companies throughout the world, according to estimates (ITSM). Aligned with various international quality standards, including ISO/IEC 20000 (IT Service Management Code of Practice), ITIL has been adopted by thousands of organizations worldwide, such as NASA, the UK National Health Service (NHS), and Disney™.

To succeed as an ITSM professional in industry 4.0, equip yourself with the skills to deal with the latest advancements in service management. ITIL’s incorporation of working practices such as Agile, DevOps, and value stream mapping, and of technical practices and technologies such as Cloud, automation, and advanced analytics ensures you will always utilize the latest best-practice methods from across the IT functions.

ITIL® 4 Foundation is the start of your ITIL certification journey and will help you validate your expertise in successfully implementing ITIL principles and concepts to enhance business value. This credential is also a stepping-stone for you to gain more advanced ITIL certification. Grow your ITSM career with confidence with the ITIL 4 Foundation Certification.

For those aspiring to embark on the journey of ITIL certification courses, the ITIL certification exam and obtaining an ITIL certificate, the ITIL Foundation certification course provides a solid foundation. This course not only aligns with the globally recognized IT Infrastructure Library (ITIL) but also ensures that you are well-prepared to navigate the complexities of contemporary IT service management.`,
          demandData: [
            {
              type: "IT Service Manager",
              averageSalary: [12, 15, 18],
              hiringCompany: [],
              demand: {
                percant: "18%",
                description:
                  "ITIL Foundation Among the Highest Paying Certifications",
              },
            },
            {
              type: "IT Director",
              averageSalary: [23, 50, 73],
              hiringCompany: [],
              demand: {
                percant: "18%",
                description:
                  "High rate of adoption of ITIL across industries and geographies",
              },
            },
            {
              type: "Chief Information Officer",
              averageSalary: [30, 55, 84],
              hiringCompany: [],
              demand: {
                percant: "2M",
                description:
                  "Professionals across the globe, certified in ITIL",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Hands-On Training",
              value:
                "Engage in 16 hours of instructor-led training featuring real-world scenarios, role-playing exercises, and case studies, all delivered by trainers with over 20 years of extensive experience.",
            },
            {
              icon: "",
              topic: "Comprehensive Exam Support",
              value:
                "Benefit from a blend of theoretical and practical learning, enhanced by mock tests. Our team is here to provide certification assistance whenever you need it.",
            },
            {
              icon: "",
              topic: "Mentorship from Industry Experts",
              value:
                "Receive personalized mentorship, practical tips, and tried-and-true techniques from accredited industry practitioners.",
            },
            {
              icon: "",
              topic: "Take² Re-Sit Exam Option",
              value:
                "Retake the exam at a fraction of the cost and enjoy a six-month preparation period from the date of your initial exam attempt.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Support",
              value:
                "Make the most of our six-month exclusive mentorship following training to tackle challenges in your ITSM career.",
            },
            {
              icon: "",
              topic: "Proven Track Record",
              value:
                "Spring Learns has empowered thousands of professionals worldwide with certifications in IT Service Management (ITSM).",
            },
          ],
        },
        courseAuthor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Maheshwar Nynaru-661980df7288463f842b2aae105322a0.svg",
            instructorName: "Maheshwar Nynarus",
            instructorProfession: "Trainer & Consultant",
            experience: "30",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/capgemini 60x26-45b78461bcc14011898baf17b9965ddb.svg",
            instructorDetail: `With 30+ years of experience in Banking and IT, Maheshwar Nynaru is a seasoned consultant specializing in Project Management and IT Service Management. A PMP Certified professional and PMI Authorized Training Partner Instructor, he holds the ITIL Expert Level Certification and has delivered over 500 ITIL and PMP training sessions, showcasing a commitment to excellence and knowledge dissemination in the field.`,
          },
        ],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Alpesh Vasant-9cfb4f70ff2444cf8e37e21aa85ec8e5.svg",
            instructorName: "Alpesh Vasant",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Santhosh Kannan-100a3c877b1544cc8a8dc0fe7a7a987b.svg",
            instructorName: "Santhosh Kannan",
            instructorProfession: "Trainer & Consultant",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Imgcert cta-01-91a5fc0ae3944155a4d6c1843bc9da5e.svg",
          bannerTitle: "Maximize Your ITIL Foundation Exam Success",
          certificationDetail:
            "Obtaining the ITIL 4 Foundation Certification goes beyond simply acquiring a new set of skills—it serves as a recognition of your proficiency in IT service management from the globally recognized ITIL framework. This certification is not merely a piece of paper; it symbolizes your unwavering commitment and competence in implementing ITIL practices. It acts as a key to unlock various possibilities in your career, signaling to employers and colleagues that you have the expertise and dedication to thrive in effectively managing IT services within an organization.",
          certificateImage:
            "https://d2o2utebsixu4k.cloudfront.net/ITIL (3)-928de885a0af40109172497041f4c5b5.svg",
        },
        prerequisites: [
          "No specific prerequisites or prior qualifications required",
          "Suitable for beginners and experienced professionals alike",
          "Basic understanding of IT terminology is beneficial",
        ],
        courseCurriculm: [
          {
            title: "Introduction to ITIL 4",
            isPreview: true,
            objective:
              " In this learning module, you will embark on a comprehensive exploration of the ITIL 4 framework and delve into its foundational elements, principles, and the myriad advantages it offers to organizations. Gain a nuanced understanding of the evolution and significance of ITIL 4, discovering key characteristics that distinguish it and exploring the core principles guiding its approach to service management.",
            topics: [
              "About ITIL4",
              "Components of ITIL4 Framework",
              "Benefits of ITIL",
            ],
          },
          {
            title: "ITIL Key Concepts",
            isPreview: false,
            objective:
              " In this learning module, you will delve into the core concepts of service, its management, and the creation of value. You will explore the intricate components that contribute to the overall value of a service or product, gaining insights into the dynamic relationships between stakeholders, products, and services.",
            topics: [
              "Service and Service Management",
              "Components of Service Value",
              "Determine the Value of a Service or Product",
              "Stakeholders and Value Creation",
              "Products, Services, and Service Offering",
              "Service Relationship",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Fundamental Concepts of ITIL",
            description:
              "Understand the core principles and concepts that drive the ITIL framework",
          },
          {
            title: "Key ITSM Components and Processes",
            description:
              "Explore the key components and processes that form the foundation of IT service management.",
          },
          {
            title: "Aligning IT Services with Business",
            description:
              "Learn how to align IT services with business goals and cater to customer requirements effectively.",
          },
          {
            title: "Best Practices for IT Service Delivery",
            description:
              "Discover industry best practices to ensure efficient and effective IT service delivery.",
          },
          {
            title: "ITIL Service Lifecycle Stages",
            description:
              "Gain insights into the different stages of the ITIL service lifecycle and their significance.",
          },
          {
            title: "Roles and Responsibilities",
            description:
              "Understand the various roles and responsibilities within an IT service management framework.",
          },
          {
            title: "Incident, Problem, and Change",
            description:
              "Learn how to handle incidents, problems, and changes in IT environments to ensure smooth operations.",
          },
          {
            title: "Measuring and Reporting Service",
            description:
              "Master the art of measuring and reporting IT service performance and quality metrics.",
          },
          {
            title: "Benefits of ITIL Adoption",
            description:
              "Discover the advantages of implementing ITIL practices and their positive impact on enterprise success.",
          },
          {
            title: "ITIL Principles and Continual",
            description:
              "Learn effective strategies to implement ITIL principles and foster a culture of continual improvement.",
          },
        ],
        whoCanAttendCourse: [
          "IT service managers",
          "IT support staff",
          "Business process owners",
          "IT consultants",
          "Quality assurance professionals",
          "Project managers",
          "Anyone involved in the delivery or support of IT services",
        ],
        aboutCourse: [
          {
            question: "What is the ITIL Foundation exam all about?",
            answer: `ITIL Foundation Exam is an entry-level certification for embarking on a career in Information Technology Service Management (ITSM). Clearing the ITIL Foundation Exam will equip one with the right tools to implement all the processes essential for an organization to comply with the ITIL® framework, which describes the most suitable way of performing processes within the IT cycle.The exam is based on the implementation of the ITIL® V3 Foundation level curriculum. By the AXELOS standard, the ITIL Foundation exam usually takes this format:
               Multiple choice examination questions
               40 questions
               26 marks required to pass (out of 40 available) - 65%
               60 minutes duration
               Closed book.`,
          },
          {
            question: "Who conducts the exam?",
            answer: `The exam is conducted through PeopleCert®. (Springlearns is an ATO with PeopleCert®).`,
          },

          {
            question: "What does the exam cover?",
            answer: `The Foundation exam covers Continuous Service Improvement, Service Strategy, Service Design, Service Transition, and Service Operation.`,
          },
          {
            question:
              "where can I find the link to take the ITIL Foundation exam?",
            answer:
              "After you finish your the 2-day ITIL Foundation classes, PeopleCert® will send you an email with all of the information you need to take the test.",
          },
          {
            question:
              "Will I be able to pause the test and return to it later?",
            answer:
              "No, you will be given a 60-minute time limit and will not be able to pause the exam. If you accidentally close the window, then you’ll be able to reopen it immediately. If your exam page freezes, simply reload your browser and you'll be able to resume where you left off. If you have difficulty with your web browser, you can use the start link in your email to return to the previous question.",
          },
        ],
        faqs: [
          {
            type: "Trainig",
            question:
              " What can I expect to accomplish after completing the ITIL Foundation Course?",
            answer: `Our ITIL Foundation Course program is designed to help you learn the fundamentals of the ITIL framework and launch a successful ITSM career. By the completion of the ITIL course online, you will have the knowledge and skills to:

Build products and services with stakeholders and customers to co-create value.
Apply the guiding principles of the ITIL framework to ensure business value
To achieve company goals, master and implement the essential ideas of DevOps, Agile, and Lean.
Apply the four dimensions of Service Management to different areas of service`,
          },
          {
            type: "Trainig",
            question:
              "What are the prerequisites for the ITIL® 4 Foundation Certification Course?",
            answer:
              "The ITIL Foundation course and the accompanying ITIL4 Foundation test have no prerequisites.",
          },

          {
            type: "Carrer Benefit",
            question: "What are the companies that use ITIL®?",
            answer: `An ITIL® Lifecycle Expert is responsible for the following and many more:

Computing current ITIL® environment and existing Implementation
Planning to identify areas for improvement,
Setting up leadership and ITIL® experiences to simplify and improve the current processes based on industry best practices,
Performing gap analysis and providing recommendations,
Liaising with stakeholders to communicate ITSM vision and benefits,
Identifying and mitigating risks associated with processes,
Providing ITIL® best practice service management consulting at a strategic design, and operational level,
Helping with the organization’s transformational efforts.`,
          },

          {
            type: "Carrer Benefit",
            question:
              "What is the average annual pay of a Project Manager having an ITIL® 3 certification or ITIL 4 certification in India, US and around the globe?",
            answer: `The salary of a Project Manager having an ITIL® 3 certification or ITIL 4 certification varies from country to country. We have covered them below:

India: The national average salary for a Project Manager is INR 1,251,978 in India.
US: The national average salary for a Project Manager is $132,453 in the United States.
UK: The national average salary for a Project Manager is £61,188 in the United Kingdom.`,
          },
          {
            type: "Standard and Pro",
            question: "How do I know which plan is right for me?",
            answer: `When deciding between the Standard and Pro plans, consider your aspirations, budget, and the level of support you desire. With the Pro plan, you'll gain access to additional guidance and premium resources, ensuring you reach your full potential.

Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },

          {
            type: "Finance Queries",
            question: "Can I pay the course fees in instalments?",
            answer: `Yes, instalment options are available for payment of course fees. To avail the instalment option, please get in touch with us at support@Springlearns.com. The team will explain how the instalments work and provide timelines for your case. Typically, the number of instalments varies from 2 to 3, but the full amount must be paid before you complete the course.
            Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },
          {
            type: "Finance Queries",
            question: "What is the certification exam fee?",
            answer: `The certification fee for the ITIL4 Foundation exam is not charged separately. Once you enrol for the ITIL4 Foundation certification training with Springlearns, the exam fee is included in the course fee. The course fee is inclusive of charges for ITIL4 Foundation exam, online proctoring, ITIL4 Foundation official e-book, and ITIL4 Foundation official training materials.`,
          },
        ],
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "120,750+ Learners Enrolled",
        bannerImage:
          "https://ww2.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-10-a1cdf54df4e74060af71db72cc024436.webp&w=3840&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        highlights: [
          "Top-Rated ITIL Certification Exam Preparation to Ensure You Pass on Your First Try",
          "Includes Exam Fee, eBook, and PeopleCert Training Materials",
          "Prepare for a Successful IT Career and Enhance Your Job Security",
          "Engaging Learning Experience with Simulations, Case Studies, Assessments, and More",
        ],
      },
    },

    {
      id: 23,
      title: "Leading SAFe® 6.0",
      dbid: "674815b4f99edee8975255d3",
      courseSubtitle:
        "Leading SAFe® 6.0 Training with SAFe Agile Certification",
      description:
        "Become an In-Demand SAFe Agilist and Lead Enterprise Lean-Agile Transformation",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {
        price:{
          originalPrice: 59999,
          discountPrice: 35999,
          discount: 21,
        },
        courseCategory: "Agile Management",
        careerDetail: [
          { carrer: "SAFe-Certified Professionals", value: "12,000" },
          { carrer: "Agile Transformations", value: "300" },
          { carrer: "Global Scaled Agile Partner", value: "Top 10" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "16 Hours of Live Instructor-Led Training ",
            },
            {
              icon: "",
              value: "Earn·16 PDUs and 16 SEUs for Continual Learning",
            },
            {
              icon: "",
              value: "Real-World Simulations and Activities",
            },
            {
              icon: "",
              value: "Unlock Exam Success with Comprehensive Exam Support",
            },
            {
              icon: "",
              value: "All-Inclusive Learning with Exam Fee Included",
            },
            {
              icon: "",
              value: "Comprehensive Job Support including AI-Resume Builder",
            },
            {
              icon: "",
              value: "Embrace the SAFe Way with Access to the SAFe Studio",
            },
            {
              icon: "",
              value: "Access 1-Year SAFe Community Membership",
            },
            {
              icon: "",
              value: "Mentorship by Agile Industry Experts",
            },
          ],
          overviewDetail: `The Leading SAFe certification has become a standard requirement for Lean-Agile enterprises. It expands your horizons in terms of potential career paths and value within the sector. The Scaled Agile Framework (SAFe) is the most widely adopted enterprise Agile approach according to most survey data, with 53% using it, according to the 16th Annual State of Agile Report.

While Agile approaches have proven to be easily applicable to small teams, the majority of enterprises today work across collaborative teams, complex systems, and geographies. This requires Agile to work across your enterprise to bring in the benefits of faster delivery, better-quality products, and quick response to your customer queries. However, large-scale agile transformation is prone to failure due to a lack of suitable structure and processes, resulting in agile implementations that do not have the desired impact.

The Scaled Agile Framework (SAFe) is a comprehensive framework for large-scale Agile project teams to easily implement an Agile transformation. The first step toward such a change is to use Lean/Agile principles and practices at all levels of your organization. The SAFe methodology synchronizes the alignment, collaboration, and delivery of numerous Agile teams with ease, paving the road for organizational success. Now, in its latest release (version 6.0), SAFe promises to bring in full business agility with significant advances in strategy, execution, and leadership competencies that will help individuals and enterprises deliver innovative business solutions and outperform the competition in its latest release (version 6.0).`,
          overviewPoints: [
            {
              title: "16-Hour Live Instructor-Led Online Training",
              value:
                "Our course is designed to be engaging and interactive, with a seasoned instructor leading you through 16 hours of live, real-time training. You'll have the opportunity to ask questions, participate in discussions, and apply what you learn in a supportive virtual environment.",
            },
            {
              title: "Earn 16 PDUs and 16 SEUs for Continual Learning",
              value:
                "Continuous learning is key to staying at the forefront of Agile practices. By completing this course, you'll earn 16 Professional Development Units (PDUs) and 16 Scrum Education Units (SEUs), recognized by leading industry bodies, to support your professional growth.",
            },
            {
              title: "Unlock Exam Success with Comprehensive Exam Support",
              value:
                "We're here to ensure you're fully prepared to ace the SAFe certification exam. Our course includes comprehensive exam preparation materials, practice tests, and guidance to boost your confidence and success on exam day.",
            },
            {
              title: "All-Inclusive Learning ",
              value:
                " Exam Fee Included: Your investment in this course covers not only the training but also the SAFe certification exam fee. This means there are no hidden costs, and you can focus on your learning journey without worrying about additional expenses.",
            },
            {
              title: "Comprehensive Career Support with Job Boost 360:",
              value:
                "Accelerate your professional growth with our holistic program. Gain access to job placement assistance, resume workshops, interview preparation, and personalized coaching designed to propel your career forward.",
            },
            {
              title: "Embrace the SAFe Way with Access to the SAFe Studio:",
              value:
                "Gain access to the SAFe Studio, a treasure trove of resources that includes a wealth of SAFe content, videos, and tools to deepen your understanding of the framework and its practical applications.",
            },
            {
              title: "Acquire Free 1-Year SAFe Community Membership:",
              value:
                "As a course participant, you'll gain access to the vibrant SAFe community. You'll have the opportunity to network with Agile enthusiasts, access valuable resources, and stay updated on the latest developments in the SAFe framework throughout your one-year free membership.",
            },
            {
              title: "Gateway to the Largest Global Agile Community",
              value:
                "Connect, collaborate, and stay updated on industry trends through our exclusive gateway. Access forums, events, and networking opportunities to forge connections and share best practices with fellow practitioners worldwide",
            },
            {
              title: "Mentorship by Agile Industry Experts",
              value:
                "Tap into the knowledge and experience of Agile leaders. Benefit from personalized guidance, feedback, and insights tailored to your career goals, empowering you to make informed decisions and achieve success in your Agile journey.",
            },
          ],
          overviewCourseDescription: `We're excited to embark on this SAFe journey with you, equipping you with the skills and knowledge you need to lead Agile transformation initiatives successfully. Let's embrace the SAFe way together and achieve excellence in Agile practices. Welcome to the Leading SAFe course!`,
        },
        highDemandAndAccerlated: {
          demandTitle: "DEMAND FOR LEADING SAFE CERTIFIED PROFESSIONALS",
          demandHeading: "Soaring Demand and Accelerated Growth",
          demandDetail: `While Agile methods have been found to be readily applicable to small teams, most organizations today work across collaborative teams, complex systems and geographies. This requires Agile to work across the enterprise to bring in the benefits of faster delivery, better quality products and quick response to customer queries. However, agile transformation across such a large scale is prone to failures due to a lack of proper structure and processes, which results in agile implementations not yielding the expected impact.
          The Scaled Agile Framework® (SAFe®) is a complete methodology for large-scale Agile project teams to carry out an Agile transformation seamlessly. Applying Lean/Agile principles and practices across all levels within an enterprise is the first step toward such a change. The SAFe® methodology effortlessly synchronizes the alignment, collaboration, and delivery of multiple Agile teams, leading the way to enterprise success. Now in its latest release (version 6.0), SAFe® promises to bring in full business agility with significant advances in strategy, execution, and leadership competencies that will help individuals and organizations deliver innovative business solutions and supersede the competition.

          With more than 70% of US Fortune 100 companies actively employing SAFe®, it is clear that the demand for Leading SAFe® is on a constant rise. Earning the Leading SAFe® 6.0 certification from Scaled Agile, Inc. - a globally renowned accreditation body, gives you a major lead over your peers and places you at the helm of Agile transformation in enterprises.

          A Leading SAFe® certificate will not just merit a salary raise in your present organization but also offers several other benefits as listed below:

          ORGANIZATIONAL BENEFITS

          Apply SAFe® 6.0 in an enterprise context.
          Deliver more value.
          Improve communication and collaboration across all projects.
          Introduce Agile not just to your IT delivery teams but the whole organization.
          INDIVIDUAL BENEFITS

          Lead transformation in Agile teams.
          Become a top-earning Agile professional.
          Grab more career opportunities.
          Keep up with the swift-changing market trends.`,
          demandData: [
            {
              type: "SAFe Agilist",
              averageSalary: [18, 25, 36],
              hiringCompany: [],
              demand: {
                percant: "70%",
                description: "Of Fortune 500 companies actively employ SAFe",
              },
            },
            {
              type: "Scrum Master",
              averageSalary: [11, 15, 22],
              hiringCompany: [],
              demand: {
                percant: "1M",
                description:
                  "Professionals around the world are SAFe certified",
              },
            },
            {
              type: "Product Owner",
              averageSalary: [14, 20, 28],
              hiringCompany: [],
              demand: {
                percant: "20,000+",
                description: "Organizations around the world use SAFe",
              },
            },
            {
              type: "Agile Coach",
              averageSalary: [19, 28, 37],
              hiringCompany: [],
              demand: {
                percant: "6,000+",
                description:
                  "Job openings demanding SAFe experience, just in the US",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "High-energy workshops with Agile activities, team-based exercises and practical case studies",
            },
            {
              icon: "",
              topic: "SAFe Practice Consultant Trainers",
              value:
                "Get trained by accredited SPCTs with over a decade of experience across industries around the world.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Acquire real-world tips, proven strategies and practical insights from seasoned industry experts.",
            },
            {
              icon: "",
              topic: "Join the Largest SAFe Network",
              value:
                "1-year free SAFe Community Platform membership - your gateway to the largest Scaled Agile communities.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                "Webinars, e-books, tutorials, articles, and interview questions - we're right by you in your learning journey!",
            },
            {
              icon: "",
              topic: "Scaled Agile Gold SPCT Partner",
              value:
                "We're a Global Top 10 Scaled Agile Gold SPCT partner. 12K+ SAFe career transformations facilitated!",
            },
            {
              icon: "",
              topic: "Comprehensive Job Support",
              value:
                "Make the most of LinkedIn profile reviews, AI-resume builder and access to 1500+ job listings",
            },
            {
              icon: "",
              topic: "Comprehensive Job Support",
              value:
                "Benefit from complete job support, including LinkedIn assistance, resume refinement and mentorship.",
            },
          ],
        },
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/John Mulligan 96-4a9492fa47f043c3a24c4cb6f41a27a5.svg",
            instructorName: "John Mulligan",
            instructorProfession: "SAFe (SPC), Senior Consultant",
            experience: "15",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/Capital_One_SAFE_SSM_02-ea30660d254643c6bcc4d19635a47285.svg",
            instructorDetail: `Mr. Mulligan is an Agile consultant at Applied Frameworks, specializing in Agile transformations and team train... 
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Ritika Birla 96-daba7b3289584f77bbb6382cd39f46c8.svg",
            instructorName: "Ratika Birla",
            instructorProfession: "SPC, Agile and Lean Coach",
            experience: "10",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/AON_60x26_revised-75dd7507c60441e29b4173fdd9f3f538.svg",
            instructorDetail: `Ratika Birla is an accomplished SAFe Program Consultant, Agile and Lean Coach/Trainer, Enterprise Coach, Produc...  
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to unlock your potential as a SAFe Agilist?",
          certificationDetail:
            "On clearing your Leading SAFe exam, you receive the coveted SAFe Agilist certificate from the esteemed Scaled Agile Framework (SAFe) and join the elite club of SAFe 6 Agilist certification holders worldwide.",
          certificateImage:
            "https://d2o2utebsixu4k.cloudfront.net/Leading SAfe-6dae20cba5d842d09eca98d50f1a30fd.svg",
        },
        prerequisites: [
          "There are no prerequisites to attend this course.",
          "5+ years experience in software development and testing is useful.",
          "Experience in product or project management is recommended.",
          "Prior working experience in Scrum is beneficial.",
        ],
        courseCurriculm: [
          {
            title: "Thriving in the Digital Age with Business Agility",
            isPreview: false,
            objective:
              "Get introduced to the fundamental concepts of Business Agility and decipher the major competencies of Business Agility.",
            topics: [
              "Thriving in the Digital Age",
              "SAFe as an operating system for Business Agility",
              "The Seven Core Competencies of Business Agility",
            ],
          },
          {
            title: "Building a Foundation with Mindset, Values, and Principles",
            isPreview: false,
            objective:
              "Gain a solid understanding of important SAFe principles and develop a Lean-Agile mindset like successful Agile leaders.",
            topics: [
              "The Lean-Agile Mindset",
              "SAFe Core Values",
              "SAFe Lean-Agile Principles",
            ],
          },
          {
            title: "Establishing Team and Technical Agility",
            isPreview: false,
            objective:
              "Learn how to manage cross-functional Agile teams and deliver ROI-driven results on a consistent basis.",
            topics: [
              "Forming Cross-Functional Agile Teams",
              "Built-In Quality",
              "Organizing Agile Release Trains around Flow of Value",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Effective Scaling",
            description:
              "SAFe® values of a Lean-Agile mindset to scale Lean and Agile development in your enterprise. ",
          },
          {
            title: "Lean-Agile Principles",
            description:
              "Applying the Lean-Agile mindset and principles to become a Lean-thinking manager.",
          },
          {
            title: "Maximize Value",
            description:
              "Integrate, deploy, and release value to support PI planning and events in Program execution. ",
          },
          {
            title: "Seven Core competencies",
            description:
              "The seven core competencies in SAFe 6.0 and the development of large solutions.",
          },
          {
            title: "Lean-Agile Mindset",
            description:
              "Scaling Lean and Agile with the Lean-Agile Mindset and principles.",
          },
          {
            title: "Program Increments",
            description: "Plan and successfully execute Program Increments.",
          },
          {
            title: "Agile Release Trains",
            description:
              "Execute and release value through Agile Release Trains.",
          },
          {
            title: "Lean-Agile Budgeting",
            description: "Build an Agile portfolio with Lean-Agile budgeting.",
          },
          {
            title: "Lean-Agile Transformation",
            description:
              "Leading the transformation with the SAFe® Implementation Roadmap.",
          },
          {
            title: "Lean Portfolio Management",
            description:
              "Alignment and execution with Strategic Themes and Lean Portfolio Management (LPM).",
          },
        ],
        whoCanAttendCourse: [
          "Executives and Leaders",
          "Infrastructure Management personnel",
          "Project Managers",
          "Product Managers",
          "Leads and Managers",
          "Enterprise, System, Solution Architects",
        ],
        aboutCourse: [
          {
            question: "What is the SAFe Agilist certification all about?",
            answer:
              "A Certified SAFe Agilist (SA) is a professional who has completed the Leading SAFe certification and been successful in the Scaled Agile Framework certification test. By acquiring the SAFe Agilist certification provided by Scaled Agile, Inc, you will be able to address the critical challenges of creating and delivering enterprise-level software and systems in the shortest time. It gives guidance for all levels of organizations involved in solution development: Portfolio, Program, Team, and Large Solutions.",
          },
          {
            question: "Why should I go for the SAFe Agilist certification?",
            answer: `Holding the SAFe Agilist certification shows your proficiency in implementing lean thinking, SAFe Framework, and Product development flow principles in an organizational context. Our two-day Leading SAFe training course gives you practical experience of applying the Scaled Agile Framework in large enterprises and is delivered by a SAFe Practice Consultant, authorized by Scaled Agile, Inc.`,
          },

          {
            question:
              "What is the importance of a SAFe 6.0 Agilist certification?",
            answer: `While applying Lean/Agile principles at the team or department level is relatively straightforward, achieving the same benefits at the enterprise level presents significant challenges due to the scale of the required change. Consequently, organizations often turn to the Scaled Agile Framework (SAFe) to facilitate large-scale, multi-team transformations seamlessly.
            SAFe 6.0 Agilists are highly sought after for their proficiency in spearheading this transformation. They excel in planning and executing program releases with careful consideration and possess the ability to identify the necessary roles and structures essential for scaling Agile practices to the program level.`,
          },
          {
            question: "Who offers the SAFe Agilist certification?",
            answer:
              "Scaled Agile, Inc. is the provider of SAFe which is one of the best-known frameworks for enterprise agility. SAFe was initially released in 2011 by Dean Leffingwell as a knowledge base for enterprises to adopt Agile. It is the leading provider of SAFe courses for implementing Agile practices at enterprise level. The SAFe Agilist (SA) Certification is given to those who have undertaken the SAFe 6.0 Agilist Certification Exam and received a passing score. ",
          },
          {
            question: "How much does the SAFe Agilist certification cost?",
            answer:
              "The Scaled Agile Framework certification cost is included in the SAFe Agilist course fee.",
          },
        ],
        faqs: [
          {
            type: "Course",
            question:
              "What will I accomplish after completing the Leading SAFe online course?",
            answer: `The Leading SAFe course has been thoughtfully designed to help you prepare for the Certified SAFe Agilist exam. On completing this course, you will be equipped with all the tools and techniques to:

Apply SAFe values to scale Lean-Agile development in your enterprise.
Apply the Lean-Agile principles as a Lean-thinking manager.
Integrate, deploy, and release value to support PI planning as well as the events in Program execution.
Understand the core competencies in SAFe 6.0 and coordinate the development of products.
Enhance your Lean-Agile leadership skills and create high-performing, purpose-bound Agile teams.
Support a Lean-Agile transformation in your enterprise with the SAFe Implementation Roadmap.
Establish business alignment via Strategic Themes and Lean Portfolio Management (LPM).`,
          },
          {
            type: "Course",
            question:
              "What practical skills can I expect to have after completing this course?",
            answer: `Our Leading SAFe training aims to equip you with all the skills to be a sought-after SAFe Agilist. In this engaging and interactive two-day program, you will develop the practical skills employers look for in a SAFe Agilist:
              Leadership
              Coaching
              Change management
              Motivation
              Conflict management
              Lean-Agile management
              Design thinking
              Systems thinking
              An understanding of DevOps principles
              Executing Program Increments
              Executing Agile Release Trains
              Lean-Agile Budgeting
              Lead Portfolio Management
`,
          },

          {
            type: "PDUs and SEUs",
            question: "How many PDUs & SEUs will I be eligible for?",
            answer: `You will earn 16 PDUs and 16 SEUs by participating in this two-day Leading SAFe training program.`,
          },

          {
            type: "PDUs and SEUs",
            question:
              "How many PDUs will I need to maintain my SAFe Agilist certification?",
            answer:
              "You will need 10 continuing education or outreach hours (PDUs) to maintain your SAFe Agilist certification.",
          },
          {
            type: "PDUs and SEUs",
            question: "What are PDUs and SEUs?",
            answer: `PDUs are Professional Development Units issued by the Project Management Institute®. They can be earned by completing educational training or learning opportunities, which serve to validate your participation and continued proficiency in the principles and practices of project management.

PDUs are the measuring unit used to quantify your project management professional development as part of the PMI’s Continuing Certification Requirements (CCR) program. 1 PDU = 1 hour of learning/activity.

SEUs are Scrum Educational Units, issued by the Scrum Alliance. They can be earned by completing educational training or learning opportunities, which serve to validate your participation and continued proficiency in the principles and practices of Scrum.

SEUs demonstrate that you are furthering your proficiency as a Scrum practitioner. SEUs follow a 1:1 ratio, where one hour of participation or preparation towards increasing your proficiency in Scrum is equal to one SEU. To maintain your certification from Scrum Alliance, you are required to earn a certain number of SEUs every two years.`,
          },

          {
            type: "Standard and Pro Plans",
            question:
              "Are there any differences in course content between the Standard and Pro plans?",
            answer: `While the core content remains consistent across both plans, the Pro plan enriches your experience with supplementary resources and advanced learning material. It is a meticulously crafted pathway not just for achieving the CSPO certification, but also for propelling your Product Owner career growth to new heights.`,
          },
          {
            type: "Standard and Pro Plans",
            question: "How do I know which plan is right for me?",
            answer: `When deciding between the Standard and Pro plans, consider your aspirations, budget, and the level of support you desire. With the Pro plan, you'll gain access to additional guidance and premium resources, ensuring you reach your full potential.

Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },
          {
            type: "Standard and Pro Plans",
            question: "How do I know which plan is right for me?",
            answer: `When deciding between the Standard and Pro plans, consider your aspirations, budget, and the level of support you desire. With the Pro plan, you'll gain access to additional guidance and premium resources, ensuring you reach your full potential.

Don't settle for less—choose Pro for an unmatched learning path to success.`,
          },
          {
            type: "Workshop Experience ",
            question: "What are the modes of training offered for this course?",
            answer: `The Leading SAFe workshop at Springlearns is delivered through our immersive learning experience platform, via live and interactive instructor-led training sessions.

Listen, learn, ask questions, and get all your doubts clarified from your instructor, who is an experienced practitioner.`,
          },
          {
            type: "Workshop Experience ",
            question:
              "How different is the Leading SAFe online training from the conventional in-person training?",
            answer: `The conventional in-person Leading SAFe training from Scaled Agile, Inc. (SAI) will be delivered for 2-days. The online course is divided into several sessions of shorter duration, unlike the in-person class that consists of 2 classes with 7 to 8 hours-long sessions. The size of the class is capped at 30 so that students gain a better learning experience. The participants and our trainers will be able to virtually collaborate with one another with the help of webcam tool.`,
          },
          {
            type: "Workshop Experience ",
            question: "Who are the instructors?",
            answer: `Our SAFe® Program Consultants (SPCs) are:
Professionals licensed by Scaled Agile, Inc. to teach the official curriculum
Masters in SAFe who have immense experience in leading, applying, coaching, and teaching it
Skilled in SAFe framework and agile software development
Subject matter experts who are active in software development and local Agile communities, along with the broader global SAFe and Agile movements.`,
          },
        ],
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "41,500+ Enrolled",
        bannerImage:
          "https://ww2.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_02-c9719aad47ad4255a95097a79c146264.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        highlights: [
          "Get trained by globally renowned SAFe Practice Consultants",
          "Unlock opportunities in top-tier organizations seeking SAFe expertise",
          "Experiential learning, simulations, engaging role-plays and much more!",
        ],
      },
    },

    {
      id: 24,
      title: "Agile and Scrum",
      courseSubtitle: "Agile and Scrum Training",
      dbid: "6748084af99edee897525116",
      description:
        "Enroll in our Comprehensive Agile and Scrum Training program to gain valuable expertise.",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {
        price:{
          originalPrice: 14999,
          discountPrice:7999 ,
          discount: 21,
        },
        courseCategory: "Agile Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "40,335+ Enrolled",
        bannerImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner_Pointers-51994aa4899f483eadc3d6d552d5d200.svg",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        highlights: [
          "Acquire the essential skills to become a catalyst for high performance.",
          "Discover in-demand certification opportunities that can define your career.",
          "Engage in immersive learning to gain a deeper understanding of Agile and Scrum.",
        ],
        careerDetail: [
          { carrer: "Professionals Trained", value: "450k" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "Completed 15 assessments and 13 recall quizzes.",
            },
            {
              icon: "",
              value: "Work on 11 comprehensive assignments for practice.",
            },
            {
              icon: "",
              value: "Participate in 8 hours of live instructor-led training sessions.",
            },
            {
              icon: "",
              value: "Earn 8 PDUs and 8 SEUs upon completing the live training.",
            },
            {
              icon: "",
              value: "Enjoy over 54 hours of on-demand self-paced learning.",
            },
            {
              icon: "",
              value: "Gain lifetime access to course materials related to Agile and Scrum.",
            },
          ],
          overviewDetail: `Dive into the exciting world of Agile and Scrum with this beginner-friendly training course. Start by exploring the core principles of Agile, including its values and foundations, before progressing to different Agile methods like Scrum, Kanban, and Extreme Programming (XP), along with their essential tools. You'll gain a solid grasp of Agile Project Management (APM) and learn the 5-stage process for developing software using Agile.

          Discover how Agile is applied in project development, including techniques for estimation, planning, monitoring, and tracking. You'll also learn about important Agile metrics and tools. Gain insights into frameworks like SAFe®, Disciplined Agile Delivery (DAD), and Large-Scale Scrum (LeSS), preparing you for valuable certification opportunities from respected global organizations such as Scrum Alliance®, Scaled Agile Inc.®, and Scrum.org™.


          Our Agile and Scrum Training program is available in both blended learning and self-paced formats, allowing you to choose the learning style that suits you best.

          `,
          overviewPoints: [],
          overviewCourseDescription: ``,
        },
        highDemandAndAccerlated: {
          demandTitle: "",
          demandHeading: "",
          demandDetail: "",
          demandData: [],
        },
        knowledgeHut: {
          subtitle: "Get the Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Expert Practitioners",
              value:
                " Gain real-world tips and time-tested techniques for your Agile toolbox from leading expert practitioners in the field.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                " Receive one-to-one mentorship and practical advice from highly qualified trainers, equipping you for success in Agile and Scrum.",
            },
            {
              icon: "",
              topic: "Continual Learning Support",
              value:
                " Access a wealth of resources including webinars, e-books, tutorials, articles, and interview questions to support your learning journey in Agile and Scrum.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                " Benefit from six months of post-training mentorship to help you navigate challenges in your Scrum project management career.",
            },
            {
              icon: "",
              topic: "Experiential Agile and Scrum Workshops",
              value:
                " Engage in high-energy workshops featuring activities, team-based exercises, and practical case studies for hands-on learning.",
            },
            {
              icon: "",
              topic: "Elite Panel of Scrum Trainers",
              value:
                " Learn from certified Scrum trainers who bring extensive experience from various industries.",
            },
          ],
        },
        courseInstructor: [],
        courseAuthor: [],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Imgcert cta-10-356e659eed7f437f83063de6a2cc85eb.svg",
          bannerTitle: "Ready to go from novice to Agile and Scrum expert?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "No prior experience needed! Jumpstart your Agile and Scrum journey.",
          "Get started with powerful management frameworks – everyone is welcome!",
        ],
        courseCurriculm: [
          {
            title: "Background to Agile",
            isPreview: false,
            objective:
              "Know the history of the Agile Manifesto and explain the importance of implementing 4 values and 12 principles in Agile projects. Describe the elements of the house of Agile.",
            topics: [
              "Background to Agile",
              "A day in the life of a Project Manager",
              "The need for change",
              "Traditional Projects vs Agile Projects",
              "Benefits of Agile Methodology",
            ],
          },
          {
            title: "Agile Basics",
            isPreview: false,
            objective:
              "Know the history of the Agile Manifesto and explain the importance of implementing 4 values and 12 principles in Agile projects. Describe the elements of the house of Agile and discuss the Agile principles in depth.",
            topics: [
              "Basics of Agile",
              "Agile Software Development – Part 1",
              "Agile Software Development – Part 2",
              "History: The Agile Manifesto",
              "The Agile Values – Part 1",
              "The Agile Values – Part 2",
              "The Agile Principles - Ensuring customer satisfaction through frequent delivery",
              "The Agile Principles - Encouraging collaboration and accommodating ever-changing requirements",
              "The Agile Principles - Authorizing your team for enhanced responsibility",
            ],
          },
          {
            title: "Business Inputs",
            isPreview: false,
            objective:
              "Understand why conversations are more important than writing requirements. Explain the dimensions of business value and understand the details of the user story prioritization techniques. Learn about the Minimum Viable Product and the Minimum marketable feature. Understand the criteria for, and the components of a well-formed user story. Understand the four stages of User story maturity.",
            topics: [
              "Business inputs",
              "Business 'value' in Agile",
              "Stakeholders value in Agile",
              "What’s so great about User stories",
              "Measuring value",
              "3 Cs of a User story",
              "Investing in User stories",
              "Prioritizing User stories",
              "User story maturity",
              "Minimum viable product and minimum marketable feature",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Scrum Events",
            description:
              " Get acquainted with key Scrum ceremonies, including sprints, sprint planning, sprint reviews, sprint retrospectives, and daily stand-ups.",
          },
          {
            title: "Agile Estimation and Metrics",
            description: "Discover different techniques for Agile estimation, and learn how to calculate and apply Agile metrics effectively.",
          },
          {
            title: "Scaling Agile Practices",
            description:
              " Find out how to successfully scale Agile practices across an organization to enhance collaboration and efficiency.",
          },
          {
            title: "Planning in Agile",
            description:
              ": Understand the essentials of product planning, release planning, and iteration planning through interactive workshops.",
          },
          {
            title: "Foundations of Agile",
            description:
              " Explore the core values of Agile and delve into the 12 principles that drive its success, along with an overview of various Agile methodologies.",
          },
          {
            title: "Creating User Stories",
            description:
              " Learn the importance of user stories in Agile and master the techniques for crafting effective ones.",
          },
        ],
        whoCanAttendCourse: [
          "Architects-Software Development",
          "Developers",
          "Project Managers",
          "Product Owners",
          "Managers-Software Development",
          "Product Managers",
        ],
        aboutCourse: [],
        faqs: [
          {
            type: "Training",
            question:
              "What can I achieve upon completing the Agile and Scrum Training with Spring Learns?",
            answer: `After completing the Agile Scrum Training, you will have the skills and knowledge to work effectively in Agile and Scrum environments. You can take on roles like Scrum Master or Agile team member.`,
          },
          {
            type: "Training",
            question:
              "Are there any prerequisites for enrolling in the Agile and Scrum Course?",
            answer: `There are no strict prerequisites for the Agile and Scrum Courses, but it helps if you have some basic knowledge of project management or software development.
`,
          },

          {
            type: "Workshop",
            question:
              "What software and system requirements do I need to meet for the course?",
            answer: `For the Agile and Scrum Courses, you will need a computer with internet access and a web browser to participate in the online training sessions.`,
          },

          {
            type: "Workshop",
            question: "Who are the instructors?",
            answer:
              "Your instructors are experienced industry professionals who have significant experience in Agile and Scrum across various industries. They are leading practitioners who bring current best practices and case studies from their experience to the live and interactive training sessions. The instructors are industry-recognized experts with more than 10 years of experience implementing Agile.",
          },

          {
            type: "Finance",
            question:
              "Can I cancel my enrolment to the Agile and Scrum course? Do I get a refund?",
            answer: `You can cancel your enrolment and receive refunds in line with our Cancellations and Refunds policy.`,
          },

          {
            type: "Finance",
            question: "Will I receive a certificate upon course completion?",
            answer:
              "Yes, you will receive a course completion certificate after finishing all the requirements of the Agile Scrum Training.",
          },
          {
            type: "Finance",
            question: "Is there a money-back guarantee?",
            answer: `We offer a 100% Satisfaction Guarantee. Should you require additional clarification, please reach out to your Learning Advisor.`,
          },
          {
            type: "Agile and  Scrum",
            question: "What is Agile Scrum?",
            answer: `Agile is an iterative approach to project management and software development. It enables teams to deliver work in small increments instead of a big launch. Requirements, plans, and deliverables are evaluated on a continuous basis so that teams can respond to change easily.

Widely adopted by top organizations across the globe, Agile is a methodology that has proven to be highly effective in transforming businesses, catalyzing innovation, and accelerating profitable growth.

Scrum stands out as the most dominant Agile framework with a 58% adoption rate across organizations globally. It challenges the notion of the top-down approach to project management and focuses on a software development life cycle based on an incremental and iterative approach. Products are built in short sprints and the focus is on maximizing performance and quality.`,
          },
          {
            type: "Agile and  Scrum",
            question: "What software and system requirements do I need to meet for the course?",
            answer: `For the Agile and Scrum Courses, you will need a computer with internet access and a web browser to participate in the online training sessions.`,
          },
          {
            type: "Agile and  Scrum",
            question:
              "Will I receive a certificate upon course completion?",
            answer: `Yes, you will receive a course completion certificate after finishing all the requirements of the Agile Scrum Training.`,
          },
          {
            type: "Agile and  Scrum",
            question:
              "How many PDUs and SEUs will I qualify for after the training?",
            answer: `You will earn 8 PDUs and 8 SEUs after completing the Agile and Scrum course.`,
          },
        ],
      },
    },
    
    {
      id: 25,
      title: "PMP Certification",
      dbid: "67484e5cf99edee89752613a",
      courseSubtitle:
        "PMP® (Project Management Professional) Certification Training",
      description:
        "The Most Comprehensive PMP  Certification Course for Guaranteed Exam Success",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "recent-addition",
      courseDetail: {
        price:{
          originalPrice: 19999,
          discountPrice: 12999,
          discount: 21,
        },
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "40,335+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_04%20copy-19384d3ccbf24ef0b51b6eed763ee54d.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Experiential%20Learning_CSM_Revised-79e5519eb45244c98cf06fa7153f5d22.svg",
            detail: "Premium 2000+ Question Bank",
          },
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Complimentary%20Mock%20Tests_CSM-01-2b7c9e6768584b72bc6c2d4a0b6a466d.svg",
            detail: "Free PMP Exam Simulator",
          },
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn With Us_Scrum Enablement Sessions_CSM-6a6626d72fe14f6e9a86191dd6b507f9.svg",
            detail: "Complimentary Mock Tests",
          },
          {
            image:
              "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Free%20Agile%20and%20Scrum_20%20SEUs_CSM-01-01-91096e895f5e427db5635a1a7ccc8a81.svg",
            detail: "Guaranteed Exam Pass Study Plan",
          },
        ],
        highlights: [
          "World's #1 PMP Exam Prep to Pass in Your First Attempt",
          "Proven Step-by-Step Blueprint for PMP Exam Success",
          "Aligned with the Latest PMP Exam Content Outline",
        ],
        careerDetail: [
          { carrer: "Career transformations", value: "450k" },
          { carrer: "Workshops every month", value: "200" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "36 Hours of Live, Expert-Led Interactive Training",
            },
            {
              icon: "",
              value: "35-Hour On-Demand PMP Prep Course for Flexible Learning",
            },
            {
              icon: "",
              value: "Customized 5-Week Mentor-Guided Study Plan",
            },
            {
              icon: "",
              value: "2,000+ Practice Questions for Comprehensive Exam Preparation",
            },
            {
              icon: "",
              value: "Realistic Mock Exams to Simulate the Actual PMP Test",
            },
            {
              icon: "",
              value: "PMP Exam Simulator for Authentic Test Experience",
            },
            {
              icon: "",
              value: "Official PMI Exam Question Replicas for Accurate Practice",
            },
            {
              icon: "",
              value: "500+ Exclusive PMI-Curated Exam Questions",
            },
            {
              icon: "",
              value: "12 Full-Length Simulation Exams with 180 Questions Each",
            },
          ],
          overviewDetail: `The PMP Certification Course covers recent trends, emerging practices, relevant considerations, and core skills expected of a project management professional. This course places greater emphasis on business knowledge and the role of project management in both large and small companies. To make the PMP certification less stressful and more accessible, Spring Learns offers comprehensive PMP certification processes and training courses.
          Spring Learns provides everything you need to understand the requirements and procedures for the PMP certification. The Project Management Professional (PMP) certification, offered by the Project Management Institute (PMI), validates your expertise in project management by completing the exam, proving your proficiency in the field.There are several advantages to pursuing these courses. This certification can help you secure lucrative roles in industries like IT, manufacturing, finance, healthcare, and more. You'll also gain knowledge and expertise in areas outside your core field, broadening your professional skills.
At Spring Learns, we offer the knowledge, tools, and comprehensive support necessary to help you confidently tackle and succeed in the PMP exam on your first attempt.

`,
          overviewPoints: [
            {
              title: "36 Hours of Live, Interactive Training Sessions with Expert Instructors",
              value:
                "Participate in 36 hours of live, interactive training led by industry experts, ensuring a hands-on learning experience to meet PMP certification standards.",
            },
            {
              title:
                "On-Demand Access to a 35-Hour Comprehensive PMP Prep Course",
              value:
                "Enjoy complimentary access to a self-paced, on-demand PMP course that offers 35 contact hours, letting you prepare at your convenience.",
            },
            {
              title: "Personalized 5-Week Study Plan Guided by Mentors",
              value:
                "Benefit from a personalized, mentor-guided 5-week study plan designed to keep you on track for PMP exam success.",
            },
            {
              title: "Extensive Question Bank with Over 2,000 Practice Questions",
              value:
                "Hone your skills with an extensive collection of 2,000+ practice questions, providing ample opportunity to practice and perfect your exam techniques.",
            },
            {
              title: "Free Mock Exams to Simulate the PMP Testing Environment",
              value:
                "Take advantage of free mck exams that mirror the actual PMP exam format, helping you gauge your preparation and readiness.",
            },
            {
              title: "Authentic PMP Exam Simulator for a Real-World Exam Feel",
              value:
                "Experience the exam format and pressure first-hand with a free, full-scale PMP exam simulator that mimics real exam conditions.",
            },
            {
              title: "Exact Question Replicas Sourced from Official PMP Exams",
              value:
                "Prepare using exact replica sets of PMP exam questions, directly sourced from PMI’s official question bank to familiarize you with exam expectations.",
            },
            {
              title: "500+ High-Quality Exam Questions Curated by PMI Experts",
              value:
                "Challenge yourself with over 500 premium-quality questions crafted exclusively by PMI experts, testing your project management expertise.",
            },
            {
              title:
                "12 Full-Length Exam Simulations with 180 Questions Each",
              value:
                "Tackle 12 full-length simulation tests, each consisting of 180 questions, to comprehensively prepare for the exam and build your confidence.",
            },
          ],
          overviewCourseDescription: ``,
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for  PMP Certified Professionals",
          demandHeading: "10M+ Job Openings in Project Management By 2030",
          demandDetail: `The profession of project management has recently become one of the hottest jobs, not only in the tech market, but across industries. Demand for project managers is growing faster than demand for workers in other occupations and by 2027, 90 million individuals will need to be skilled in project-oriented roles.

The PMP certification can help you land lucrative roles in IT, manufacturing, finance, healthcare, and other exciting industries. With more than 1.2 million PMP certification holders worldwide, the median salary for PMP holders across the world is 16% higher (as high as 32% in the US) than what their non-certified peers earn.

Build your Project Management skills, get PMI certified, and be sure to capitalize on the high demand across industries.`,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Project Lead",
              averageSalary: [15, 31, 46],
              hiringCompany: [],
              demand: {
                percant: "22M",
                description:
                  "new Project Management jobs will be created by 2027 globally",
              },
            },
            {
              type: "PMO Lead",
              averageSalary: [18, 38, 56],
              hiringCompany: [],
              demand: {
                percant: "88M",
                description:
                  "individuals needed for Project Management roles by 2027",
              },
            },
            {
              type: "Project Director",
              averageSalary: [22, 43, 63],
              hiringCompany: [],
              demand: {
                percant: "US$ 208 Billion",
                description:
                  "GDP risk due to potential PM talent shortages by 2027",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Latest Curriculum",
              value:
                "Fully updated curriculum aligned with the latest PMP exam content guideline and PMBOK 7 standards.",
            },
            {
              icon: "",
              topic: "Guaranteed-To-Pass",
              value:
                "PMP Exam Prep designed to ensure success in passing the PMP exam the very first time.",
            },
            {
              icon: "",
              topic: "Detailed Study Guide",
              value:
                "Get a step-by-step guide with clarity on daily study goals with expert help all along the way.",
            },
            {
              icon: "",
              topic: "Exclusive PMI-Licensed Learning",
              value:
                "Engaging audio-video content, eBooks, PDFs, assessments, and dynamic discussion forums.",
            },
            {
              icon: "",
              topic: "Mentorship",
              value:
                "Weekly mentor guidance to ensure continuously improvment in speed, accuracy, concepts.",
            },
            {
              icon: "",
              topic: "Exam Application Assistance",
              value:
                "Expert guidance on PMI registration, membership, review, and submission of your exam application.",
            },
            {
              icon: "",
              topic: "180-Day Grand Pass",
              value:
                "Free access to rejoin any of our live training sessions and get all your doubts clarified.",
            },
            {
              icon: "",
              topic: "Comprehensive Job Support",
              value:
                "LinkedIn profile review, AI-resume builder, access to 1,500+ job listings",
            },
            {
              icon: "",
              topic: "Flexible Learning Options",
              value:
                "Need more flexibility with your learning times? Get tried-and-tested training, live or on your schedule",
            },
          ],
        },
        courseAuthor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Maheshwar Nynaru-661980df7288463f842b2aae105322a0.svg",
            instructorName: "Maheshwar Nynarus",
            instructorProfession: "Trainer & Consultant",
            experience: "30",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/capgemini 60x26-45b78461bcc14011898baf17b9965ddb.svg",
            instructorDetail: `With 30+ years of experience in Banking and IT, Maheshwar Nynaru is a seasoned consultant specializing in Project Management and IT Service Management. A PMP Certified professional and PMI Authorized Training Partner Instructor, he holds the ITIL Expert Level Certification and has delivered over 500 ITIL and PMP training sessions, showcasing a commitment to excellence and knowledge dissemination in the field.`,
          },
        ],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Alpesh Vasant-9cfb4f70ff2444cf8e37e21aa85ec8e5.svg",
            instructorName: "Alpesh Vasant",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Santhosh Kannan-100a3c877b1544cc8a8dc0fe7a7a987b.svg",
            instructorName: "Santhosh Kannan",
            instructorProfession: "Trainer & Consultant",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
            Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
            His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail:
            "On clearing your PMP exam, you earn more than just project management skills: you receive the coveted PMP certificate from the esteemed Project Management Institute and join the elite club of 1.4 Million PMP certification holders worldwide.",
          certificateImage:
            "https://d2o2utebsixu4k.cloudfront.net/PMP-52632d2cc0024411a1b1fd83a30497b2.svg",
        },
        prerequisites: [
          "No prior experience or knowledge is required to attend our PMP Certification Training.",
          "To qualify for the PMP exam, you'll need to have a 4-year degree, high-school Diploma or associate degree.",
          "You'll also need 36-60 months of experience leading projects within the past 8 years, depending on your educational background.",
          "35 contact hours of project management education or training is mandatory to qualify for the exam.",
        ],
        courseCurriculm: [
          {
            title: " Agile Fundamentals and Traditional PM Foundations",
            isPreview: false,
            objective: `
            Gain a comprehensive understanding of the Agile/Scrum Framework, Project Management Framework, and Fundamentals through our course. Dive into the PMP Process Groups and explore the revised PMP Exam Content Outline.

This module in our PMP curriculum also includes a lesson on Business Environment, which covers the essential concepts and business areas that are crucial to grasp before embarking on a project. It aligns with the "Business Environment" domain in the Exam Content Outline and supports learning in the "Business Acumen" aspect of the PMI Talent Triangle.`,
            topics: [
              "Agile/Scrum Framework - From Agile Practice Guide",
              "Introduction to Project Management Fundamentals",
              "Project Management Framework",
              "Summary",
              "Assessment",
              "Aligning with Organizational Trends and Global Strategy",
              "Project benefits and business value",
              "Organizational Culture and Change Management",
              "Project Governance",
              "Project Compliance",
              "Assessment",
            ],
          },
          {
            title: "Start the Project",
            isPreview: false,
            objective:
              "In this module, you will learn to define and discuss stakeholders and the most effective ways to communicate with them, explain the best ways to form a team, describe how to build the most effective understanding of a project and how doing so relates to executing a project successfully and explain how predictive and adaptive project life cycles work; explain what a hybrid development approach is.",
            topics: [
              "Identify and Engage Stakeholders",
              "Form the Team",
              "Build a Shared Understanding of the Project",
              "Project Approach",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Risks management",
            description:
              "You will learn how to figure out how to connect with partners, oversee, and plan scope, evaluate and engage hazard, and the sky is the limit from there.",
          },
          {
            title: "Conflicts Management",
            description:
              "Figure out how to oversee struggle, lead a group, support group execution, and guarantee that colleagues and partners are sufficiently prepared.",
          },
          {
            title: "Team building ",
            description:
              "Characterize group guidelines, construct a common perspective, draw in, and support virtual groups, and that's just the beginning.",
          },
          {
            title: "Conveying Business Value ",
            description:
              "Figure out how to execute projects with the desperation needed to convey business esteem, oversee correspondences and hazards, and lock in.",
          },
          {
            title: "Arranging project arrangements ",
            description:
              "Figure out how to arrange project arrangements and enable colleagues and partners.",
          },
          {
            title: "Emotional Intelligence",
            description:
              "You will learn how to manage relationships well in a project to have a positive impact on the project environment. Apply EI and lead your project team toward an excellent path. ",
          },
          // {
          //   title: "Delivering Business Value",
          //   description:
          //     "Learn to manage communications, risks and stakeholders while executing projects.",
          // },
          // {
          //   title: "Managing Compliances",
          //   description:
          //     "Learn to manage compliances and deliver project benefits and value using PMP methodologies.",
          // },
          // {
          //   title: "Continuous Process Improvement",
          //   description:
          //     "Assess and respond to changes in the internal and external business environment.",
          // },
          // {
          //   title: "Project Continuity",
          //   description:
          //     "Manage project challenges and adjustments, as well as knowledge transfer.",
          // },

          // {
          //   title: "Emotional Intelligence",
          //   description:
          //     "Learn about managing conflicts, stakeholder collaboration and prioritizing performance.",
          // },

          // {
          //   title: "Business Analysis",
          //   description:
          //     "Learn to assess changes in the company and environment to help organizations transform.",
          // },
        ],
        whoCanAttendCourse: [
          "Mid-Level Project Managers",
          "Senior Project Managers",
          "Project Coordinators",
          "Project Analysts",
          "Project Leaders",
          "Product Managers",
          "Program Managers",
        ],
        aboutCourse: [
          {
            question: "How do I get the PMP certification?",
            answer: `To obtain PMP certification, you need to meet specific requirements such as project management experience and education, and complete a PMP Certification Course. Once you’ve fulfilled the eligibility criteria, you can register with PMI, complete the PMP exam application, and schedule your exam. Spring Learns provides a streamlined path to help you prepare effectively with practice exams and study materials.`,
          },
          {
            question:
              " What are the eligibility criteria for PMP certification?",
            answer: `To be eligible for the PMP certification, you need: 
A 4-year degree with 36 months of project management experience and 35 contact hours of PMP certification training, or
A high school diploma with 60 months of project management experience and 35 contact hours of project management education.
Spring Learns ensures that these requirements are met through structured training programs.
`,
          },
        ],
        faqs: [
          {
            type: "Training",
            question:
              "What practical skills can I expect to have after completing the Agile and Scrum training course?",
            answer: `Our Agile & Scrum information & Certified scrum master info introductory course is designed to make you a skilled contributor to your Scrum team. You will develop the skills to:

Apply the Agile manifesto, the 4 Agile values, and the 12 Agile Principles to drive successful projects
Create User Stories using the User Story format to enhance collaboration and creativity
Apply User story prioritization techniques to a product backlog and use the mandatory 3 Cs
Distinguish High-level overview for Agile variants and run the Project lifecycle for Agile Product development
Understand the responsibilities for Scrum and Other roles in an Agile setup
Run Scrum ceremonies and apply techniques of Agile estimation
Apply Agile planning events and conduct Daily Scrum to reach goals
Scale Agile with SAFE®, DAD, and LeSS and lead enterprise-wide Agile transformation`,
          },
          {
            type: "Training",
            question:
              "How can Springlearns help me pass my PMP exam in the first attempt?",
            answer: `There is no set of eligibility requirements to attend this Scrum Master Certification course and it can be taken by novices or professionals.
`,
          },

          {
            type: "Workshop",
            question:
              "What are the modes of training offered for the PMP course?",
            answer: `The PMP Training is offered as a blended training program which consists of both live instructor-led training and self-paced learning sessions.

Springlearns delivers an immersive learning experience through PRISM, our Learning Experience Platform.`,
          },

          {
            type: "Workshop",
            question: "Who are the instructors?",
            answer: `
            Our PMP instructors are professionals who have extensive experience in training PMP programs as well as experience managing real projects.

Our trainers provide training that goes beyond just being compliant to PMI requirements by helping learners understand how to apply the learning and principles outlined in the PMP course in real-world environments.`,
          },

          {
            type: "Workshop",
            question: "What are the software and system requirements?",
            answer: `
           The Software Requirements for this course would include access to an internet browser and MS Word or similar application. Apart from this you will need a workstation or laptop with Windows or a comparable environment with high-speed Internet.`,
          },

          {
            type: "Finance",
            question: ". Can I cancel my enrolment? Do I get a refund?",
            answer: `At  Springlearns, we strive diligently to make sure that your learning experience with us is second to none and you are assured of the highest standards of quality. However, if for any reason your expectations are not met, we will process refunds in accordance with our Cancellation, Refund, and Deferment Policy.`,
          },

          {
            type: "Finance",
            question: "Can I switch my start date?",
            answer:
              "Yes, you may switch your start date in line with our Cancellation, Refund, and Deferment Policy.",
          },
          {
            type: "Finance",
            question: " Is there a money-back guarantee?",
            answer: `Yes, there is a 100% money-back guarantee for this course in line with our 100% Satisfaction Guarantee. At  Springlearns, we strive diligently to make sure that your learning experience with us is second to none and you are assured of the highest standards of quality. However, if for any reason your expectations are not met, we will process refunds in accordance with our Cancellation, Refund, and Deferment Policy.

(*Not applicable for Singapore region).`,
          },

          {
            type: "Career Benefits",
            question: "Who is a Project Management Professional (PMP)?",
            answer: `
            A Project Management Professional (PMP) is a certification and designation provided by the Project Management Institute (PMI). The PMP is one of the most widely recognized and respected credentials for project managers globally. It signifies a certain level of competence, knowledge, and experience in the field of project management.

Getting PMP® certified is advised as it aids project managers in advancing their careers by allowing them to apply for the best positions at the most prestigious corporations worldwide.
            `,
          },

          {
            type: "Career Benefits",
            question: "How to become a PMP-certified Professional?",
            answer:
              "To become a PMP certified Professional, your first step is to confirm your eligibility to take the PMP exam. You are required to complete 35 hours of training from an Authorized Training Partner of PMI. The PMP preparation time will depend on your background in project management. Once you are ready, you can take the exam, and clear it to get certified as a PMP Professional.",
          },

          {
            type: "Career Benefits",
            question:
              "What are the roles and responsibilities of a Project Management Professional?",
            answer:
              "Project managers take the lead in project planning, project execution, project monitoring, control, and closure. Project Manager responsibilities include the entire project scope including the project team, resources, budget, and the overall success of the project.",
          },

          {
            type: "Exam Preparation",
            question: "Which book is best for PMP Exam preparation?",
            answer:
              "A thorough understanding of the PMBOK Guide is necessary to prepare well for the PMP exam. Apart from this, you can refer to self-help books   to give you a wider perspective on project management. Additionally, considering a reputable PMP course can complement your study materials and provide valuable guidance in your exam preparation journey.",
          },

          {
            type: "Exam Preparation",
            question: "Which Mock Test is best for PMP exam preparation?",
            answer:
              "Practicing mock exams is essential for passing the PMP exam. Participating in as many mock exams as possible is the best way to prepare for the PMP exam. Springlearns offers 5 mock tests and 2000+ practice questions, making it a top choice for comprehensive PMP training and exam preparation, ensuring you approach the PMP exam with confidence.",
          },
          {
            type: "Exam Preparation",
            question: "What has changed in the new PMP exam format?",
            answer: `The PMP exam in its new format contains 180 questions. The questions are based on the three domains of People, Process, and Business Environment. You will need to answer this in the allotted 230 minutes. If you are writing the exam online, you get to take one 10-minute break. There is no break if you attend the exam physically. The questions will be a combination of multiple choice, multiple responses, matching, hot area, and fill-in-the-blanks.

Apart from assessing a candidate's knowledge of project management principles, the PMP exam updates also evaluate their understanding of real-world implementation. For successful preparation and certification, keeping up with the latest PMP examination pattern, including the new question formats and domains, is essential. Enrolling in a reputable PMP training program can help you navigate these changes and be well-prepared for the updated exam format.`,
          },
        ],
      },
    },
    
    {
      id: 26,
      title: "Six Sigma Yellow Belt Certification",
      courseSubtitle: "Lean Six Sigma Yellow Belt Training",
      dbid:"67480a73f99edee897525232",
      description:
        "Gain a strong foundation in Lean and Six Sigma with Six Sigma Yellow Belt Certification",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "carrer-related",
      courseDetail: {
        price:{
          originalPrice: 14999,
          discountPrice: 7999,
          discount: 21,
        },
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "40,335+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_04%20copy-19384d3ccbf24ef0b51b6eed763ee54d.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Learn how to implement, perform, interpret and apply Lean Six Sigma",
          "Address problems, smoothen processes and deliver value to end-users",
          "Accelerate your career by earning a valuable Lean Six Sigma Yellow Belt Certification",
        ],
        careerDetail: [
          { carrer: "Professionals trained", value: "450,000" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "8-Hours Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "Earn 8 PDUs on Course Completion",
            },
            {
              icon: "",
              value: "Interactive Sessions with Activities",
            },
            {
              icon: "",
              value: "Real-World Simulations, Case Studies , and more",
            },
            {
              icon: "",
              value: "Lifetime Access to the Courseware",
            },
            {
              icon: "",
              value: "Expert trainers with quality management experience",
            },
          ],
          overviewDetail: `
          Learn the foundations of the Lean Six Sigma process improvement methodology that bridges the gap between Lean and Six Sigma principles and practices. Identify and remove the causes of error in business processes, and build your own quality toolkit. Reduce wastage, speed up time-to-market, and eliminate the use of marginal methods in traditional settings.

Springlearns is an Accredited Training Organization of PeopleCert®. IASSC Lean Sigma Yellow Belt™ Certification Training is provided through PeopleCert®.

The Lean Six Sigma Yellow Belt will make you a valuable member of complex improvement projects teams. Our Six Sigma Yellow Belt Course will give you strong foundation of the Lean Six Sigma Method.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for Six Sigma Yellow Belt Professionals",
          demandHeading:
            "Why get the Lean Six Sigma Yellow Belt Certification?",
          demandDetail: `Lean Six Sigma works on the premise that perfection is a dynamic goal, and there is always scope for improvement in operational processes. As quality continues to drive the competitive advantage in the world of business, expertise in this popular and productive approach to process improvement is highly sought after. A Six Sigma Yellow Belt Certification will equip you with the quality and process improvement skills that all companies value.

As a Certified Lean Six Sigma Yellow Belt, you will work as a valued team member in a Six Sigma Project Team. This certification will validate your capability of streamlining processes and improving quality. You will be responsible for monitoring and evaluating work progress and process enhancements. By reducing waste and eliminating bottlenecks, costs can be optimized and efficiency enhanced.

Professionals with a Six Sigma Certification earn over $107,000 and are among the highest-paid professionals globally. The average annual salary of a Management Analyst is $87,660 according to the US Bureau of Labor Statistics with a 14% annual job growth.`,
          demandData: [
            {
              type: "Quality Engineer",
              averageSalary: [8, 15, 24],
              hiringCompany: [],
              demand: {
                percant: "13% Increase",
                description: "Annual Growth (CAGR) in Six Sigma Job Market",
              },
            },
            {
              type: "Process Analyst",
              averageSalary: [6, 12, 23],
              hiringCompany: [],
              demand: {
                percant: "7000+",
                description: "Professionals hold an IASSC Certification",
              },
            },
            {
              type: "Operations Manager",
              averageSalary: [9, 16, 27],
              hiringCompany: [],
              demand: {
                percant: "1.5M",
                description: "Six Sigma Practitioners Around the World",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record",
              value:
                "Springlearns has empowered over 250,000 professionals with certifications in various domains. ",
            },
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Make the best of engaging activities, team-based exercises and practical case studies.",
            },
            {
              icon: "",
              topic: "Elite Panel of Experienced Trainers",
              value:
                "Get trained by accredited trainers with over a decade of experience across industries.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Get real-world tips and time-tested techniques from highly qualified mentors.",
            },
            {
              icon: "",
              topic: "Continual Learning Support ",
              value:
                "Webinars, e-books, tutorials, articles, and interview questions - supporting your learning journey.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your professional career.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites for attending the course or to sit for the IASSC Certified Yellow Belt™ (ICYB™) exam.",
        ],
        courseCurriculm: [
          {
            title: " Define Phase: The Basics of Six Sigma",
            isPreview: false,
            objective:
              "In the define phase of the Six Sigma Yellow Belt syllabus, explore the basics of Six Sigma and its meaning. Delve into the general history of Six Sigma and its roles & responsibilities.",
            topics: [
              "Meanings of Six Sigma",
              "General History of Six Sigma & Continuous Improvement",
              "Deliverables of a Lean Six Sigma Project",
              "The Problem-Solving Strategy Y = f(x)",
              "Voice of the Customer, Business and Employee",
              "Six Sigma Roles & Responsibilities",
            ],
          },
          {
            title: "Start the Project",
            isPreview: false,
            objective:
              "In this module, you will learn to define and discuss stakeholders and the most effective ways to communicate with them, explain the best ways to form a team, describe how to build the most effective understanding of a project and how doing so relates to executing a project successfully and explain how predictive and adaptive project life cycles work; explain what a hybrid development approach is.",
            topics: [
              "Identify and Engage Stakeholders",
              "Form the Team",
              "Build a Shared Understanding of the Project",
              "Project Approach",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Error Detection and Prevention",
            description:
              "Learn to detect and prevent errors, and achieve process improvement to maintain productivity.",
          },
          {
            title: "Customer Satisfaction",
            description:
              "Learn how to maintain and provide customer satisfaction by improving the quality of the end product.",
          },
          {
            title: "Efficient Production",
            description:
              "Explore how to speed up the production process that helps businesses to stay competitive and meet customer demands.",
          },
          {
            title: "Lower Costs",
            description:
              "Reduce the costs of production drastically by minimizing variability and eliminating various kinds of waste.",
          },
          {
            title: "Problem Evaluation",
            description:
              "Evaluate problems, statistically and quantitatively in your team or organization for smooth workflow.",
          },
          {
            title: "Process Understanding",
            description:
              "Grasp an understanding of processes, to provide assistance to achieve organizational objectives.",
          },
        ],
        whoCanAttendCourse: [
          "IT Managers",
          "HR Managers",
          "Change Managers",
          "Project Managers",
          "Improvement Managers",
          "Operational Line Managers",
          "IT Analysts",
          "Team Managers",
          "Finance Managers",
          "Program Managers",
          "Quality System Managers",
        ],
        aboutCourse: [],
        faqs: [
          {
            type: "Training",
            question: "What is Six Sigma Yellow Belt certification?",
            answer:
              "Six Sigma Yellow Belt is the entry level certification in the Lean Six Sigma certifications offered by IASSC and PeopleCert. This certification is provided to professionals who can pass the IASSC Lean Six Sigma Yellow Belt exam. This is the entry level certification for Six Sigma. This can be a steppingstone towards higher certifications like the Green Belt and Black Belt.",
          },
          {
            type: "Training",
            question: "What is the process to get Yellow Belt certified?",
            answer: `
            The steps to get the Six Sigma Yellow belt certification can be summarized as below: 

          Step 1: Enroll for the Lean Six Sigma Yellow Belt Training 

          Step 2: Attend the 8-hour training from an authorized institution 

          Step 3: Prepare for the Lean Six Sigma Yellow Belt Exam 

          Step 4: Schedule the exam once you are satisfied with your preparation 

          Step 5: Clear the exam and get certified
            `,
          },
        ],
      },
    },

    {
      id: 27,
      dbid: "674817fdf99edee897525c4b",
      title: "Six Sigma Green Belt Certification ",
      courseSubtitle: "Lean Six Sigma Green Belt Training",
      description:
        "Harness proven strategies to enhance quality standards with Six Sigma Green Belt Certification",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "carrer-related",
      courseDetail: {
        price:{
          originalPrice: 24999,
          discountPrice: 14999,
          discount: 21,
        },
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "36,700+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-16-10b16af90826486fa4227ad16e5e52ef.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Learn how toDrive a Lean mindset, cut waste, and slash defects",
          "Drive career growth with an in-demand IASSC certification",
          "Ace your Six Sigma Green Belt Certification exam in the first go",
        ],
        careerDetail: [
          { carrer: "Professionals trained", value: "450,000" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "24 Hours of Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "Complete the Training Session and Earn 24 PDUs",
            },
            {
              icon: "",
              value:
                "Learn from Certified Experts with Quality Management Experience",
            },
            {
              icon: "",
              value: "Prepare to Ace Your Exam with 5 Simulation Exams",
            },
            {
              icon: "",
              value: "End-To-End Exam Prep Support and Assistance",
            },
            {
              icon: "",
              value:
                "Explore Practical Applications with Industry Case Studies",
            },
            {
              icon: "",
              value: "Access Unlimited Classes with 180-Day Grand Pass",
            },
            {
              icon: "",
              value: "Enhance Learning with 200+ Recall Quizzes",
            },
            {
              icon: "",
              value: "Hands-On Learning with Real-World Projects",
            },
          ],
          overviewDetail: `
         As a Lean Six Sigma Green Belt™ certified professional, you’ll be able to lead improvement projects or serve as a valuable team member of a process improvement team. Validate your expertise in bringing about organizational transformation as a dynamic change leader, analyze and address quality problems and create a high-performance organization.

Springlearns comprehensive course covers in-depth all the objectives covered in the Lean Six Sigma Green Belt certification exam. The course and subsequent certification will give you expertise in the DMAIC processes and their implementation. This course builds upon and adds to the topics covered in this course. The Lean Six Sigma Green Belt certification will equip you to lead complex improvement projects to success.

Springlearns is an Accredited Training Organization of PeopleCert®. The IASSC Lean Sigma Green Belt™ Certification Training is provided through PeopleCert®. This Six Sigma green belt course is curated by top experts to ensure that you’re proficient in the foundation principles of Lean and Six Sigma.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for Six Sigma-Certified Professionals",
          demandHeading:
            "Ride the Wave of Demand for Certified Six Sigma Professionals",
          demandDetail: `
          As businesses aim for continuous improvement, they look for experts who can use problem-solving skills and business knowledge to improve internal processes. Lean Six Sigma prepares you to lead quality management initiatives and analyze data strategically and scientifically by utilizing process planning, risk management, and benchmarking abilities. A Six Sigma Green Belt Certification will give you the requisite skills to accelerate quality improvement projects in your organization.

Lean Six Sigma Green belts can occupy positions such as Lean Six Sigma Consultant, Lead Manufacturing Engineer, Process Development Engineer, Data Scientist, Director, Performance Excellence and more. The average salary for Lean Six Sigma Green Belt certified professionals ranges from approximately $42,372 per year for Process Technician to $81,222 per year for Business Consultant.
          `,
          demandData: [
            {
              type: "Quality Engineer",
              averageSalary: [8, 15, 24],
              hiringCompany: [],
              demand: {
                percant: "13% Increase",
                description: "Annual Growth (CAGR) in Six Sigma Job Market",
              },
            },
            {
              type: "Process Analyst",
              averageSalary: [6, 12, 23],
              hiringCompany: [],
              demand: {
                percant: "7000+",
                description: "Professionals hold an IASSC Certification",
              },
            },
            {
              type: "Operations Manager",
              averageSalary: [9, 16, 27],
              hiringCompany: [],
              demand: {
                percant: "1.5M",
                description: "Six Sigma Practitioners Around the World",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record",
              value:
                "Springlearns has empowered over 250,000 professionals with certifications in various domains. ",
            },
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Make the best of engaging activities, team-based exercises and practical case studies.",
            },
            {
              icon: "",
              topic: "Elite Panel of Experienced Trainers",
              value:
                "Get trained by accredited trainers with over a decade of experience across industries.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Get real-world tips and time-tested techniques from highly qualified mentors.",
            },
            {
              icon: "",
              topic: "Exclusive GRAND PASS ",
              value:
                "Avail Springlearns Exclusive GRAND PASS for 180 days and take advantage of the Free Refresher Course.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your professional career.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites for attending this Six Sigma Green Belt Certification course.",
          "Some degree of real-world Lean Six Sigma work experience is recommended.",
        ],
        courseCurriculm: [
          {
            title: " Define Phase: The Basics of Six Sigma",
            isPreview: false,
            objective:
              "In the define phase of the Six Sigma Yellow Belt syllabus, explore the basics of Six Sigma and its meaning. Delve into the general history of Six Sigma and its roles & responsibilities.",
            topics: [
              "Meanings of Six Sigma",
              "General History of Six Sigma & Continuous Improvement",
              "Deliverables of a Lean Six Sigma Project",
              "The Problem-Solving Strategy Y = f(x)",
              "Voice of the Customer, Business and Employee",
              "Six Sigma Roles & Responsibilities",
            ],
          },
          {
            title: "Define Phase: The Fundamentals of Six Sigma",
            isPreview: false,
            objective:
              "Explore the fundamentals of Six Sigma in the next define phase of this Six Sigma Green Belt Certification. Learn how to define a process and the Pareto Analysis.",
            topics: [
              "Defining a Process",
              "Critical to Quality Characteristics (CTQ’s)",
              "Cost of Poor Quality (COPQ)",
              "Pareto Analysis (80:20 rule)",
              "Basic Six Sigma Metrics",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Error Detection and Prevention",
            description:
              "Learn to detect and prevent errors, and achieve process improvement to maintain productivity.",
          },
          {
            title: "Customer Satisfaction",
            description:
              "Learn how to maintain and provide customer satisfaction by improving the quality of the end product.",
          },
          {
            title: "Efficient Production",
            description:
              "Explore how to speed up the production process that helps businesses to stay competitive and meet customer demands.",
          },
          {
            title: "Lower Costs",
            description:
              "Reduce the costs of production drastically by minimizing variability and eliminating various kinds of waste.",
          },
          {
            title: "Problem Evaluation",
            description:
              "Evaluate problems, statistically and quantitatively in your team or organization for smooth workflow.",
          },
          {
            title: "Process Understanding",
            description:
              "Grasp an understanding of processes, to provide assistance to achieve organizational objectives.",
          },
        ],
        whoCanAttendCourse: [
          "IT Analysts",
          "HR Managers",
          "CEO, CFO, CTO",
          "Team Managers",
          "Change Managers",
          "Finance Managers",
        ],
        aboutCourse: [
          {
            question: "What is the Six Sigma Green Belt certification?",
            answer: `The Lean Six Sigma Green Belt Certification is a professional credential that validates your skills and knowledge in applying Lean Six Sigma methodologies to improve business processes.  

After successfully passing the Six Sigma Green Belt examination, you will be provided with a certificate which proves that you possess in-depth knowledge of Lean Six Sigma principles, tools and techniques. `,
          },

          {
            question: "What is the process to get Green Belt certified?",
            answer: `TAfter successful completion of our Lean Six Sigma Green Belt online course, you will need to register for an exam through the IASSC website. After cracking the exam and scoring more than 70%, you will be awarded the designation of Certified Lean Six Sigma Green Belt™ (ICGB™). `,
          },

          {
            question:
              "What are the prerequisites for the Lean Six Sigma Green Belt course?",
            answer: `There are no prerequisites for attending this Lean Six Sigma Green Belt Certification.`,
          },

          {
            question: "Who provides the Green Belt certification?",
            answer: `Lean Six Sigma certifications are offered by the IASSC in partnership with PEOPLECERT.

This is the first level of the Lean Six Sigma Certification scheme, and more advanced levels include the Lean Six Sigma Black Belt Certification.`,
          },
        ],
        faqs: [
          {
            type: "Course",
            question: "Who is the Lean Six Sigma Green Belt  course for? ",
            answer: `Springlearns Six Sigma Green Belt training course is for anyone who wants to gain a deep understanding of Lean Six Sigma principles and drive process changes in their organization.

Six Sigma is a data-driven philosophy that focuses on process improvements and increasing business capabilities. If you possess a data driven mindset and want to use it to better the processes of your business our online Six Sigma Green Belt training is the perfect choice for you.
              `,
          },
          {
            type: "Course",
            question:
              "How long will it take for me to complete the LSSGB Curriculum? ",
            answer: `
        The LSSGB curriculum is extensive, including all the subjects necessary to enable you to comprehend and apply advanced analysis. Additionally, you will discover ways to stop quality flaws. Therefore, it can take you many months to fully comprehend the course material. 
            `,
          },

          {
            type: "Carrer Benfefits",
            question:
              "What are the career opportunities after Six Sigma Green Belt certification?  ",
            answer: `
       After successfully completing our Lean Six Sigma Green Belt Certification course and acing the exam with the help of our exam prep and simulations, various career opportunities will be open to you, some of them are: 

Quality Analyst 
Process Improvement Specialist 
Project Manager 
Business Analyst 
            `,
          },

          {
            type: "Carrer Benfefits",
            question:
              "How can organizations benefit from having Six Sigma Green Belt certified professionals?  ",
            answer: `
       Professionals who have successfully completed a Six Sigma Certification course can be invaluable for an organization. They possess in-depth knowledge about how to improve processes and business operations, resulting in a drastic increase in revenue and customer satisfaction. 

Our online Six Sigma Green Belt Certification can help you align skill development with business objectives and drive increased employee productivity. 
            `,
          },
        ],
      },
    },

    {
      id: 28,
      dbid: "674850cbf99edee89752632a",
      title: "Six Sigma Black Belt Certification",
      courseSubtitle: "Lean Six Sigma Black Belt Training",
      description:
        "Master Lean Six Sigma principles and ace the LSSBB exam on the first go",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "recent-addition",
      courseDetail: {
        price:{
          originalPrice: 29999,
          discountPrice: 19999,
          discount: 21,
        },
        courseCategory: "Quality Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "16,850+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-37-eaeb2531d73f4c9aafb36823cadd3391.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Lead Lean Six Sigma implementation across your organization",
          "Comprehensive exam prep to ace the Lean Six Sigma Black Belt exam",
          "Gear up for a high-growth career with the sought-after Lean Six Sigma certification",
        ],
        careerDetail: [
          { carrer: "Professionals trained", value: "450,000" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "Earn 36 PDUs with Live, Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "5 Simulation Exams, Projects, 200+ Quizzes",
            },
            {
              icon: "",
              value: "Interactive Sessions with Activities",
            },
            {
              icon: "",
              value: "Real-World Simulations, Case Studies , and more",
            },
            {
              icon: "",
              value: "Expert trainers with quality management experience",
            },
            {
              icon: "",
              value:
                "Explore Practical Applications with Industry Case StudiesAccess Unlimited Classes with 180-Day Grand Pass",
            },
          ],
          overviewDetail: `
        Learn to implement Lean Six Sigma methodology to drive process improvements, optimize costs, and improve quality across the organization. Identify and remove the causes of error in business processes and build your own quality toolkit. Reduce wastage, speed up time-to-market, and eliminate the use of marginal methods in traditional settings.

The lean six sigma Black belt certification training is scheduled for five days. In the hands-on six sigma black belt course, you will cover advanced concepts and practices that constitute the knowledge and skills that a six sigma black belt practitioner should have.

Springlearns is an Accredited Training Organization of PeopleCert®. IASSC Lean Six Sigma Black Belt™ Certification Training is provided through PeopleCert®. This certification is an advanced-level qualification.
          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Demand for Six Sigma Black Belt Professionals",
          demandHeading: "Rising Demand for Six Sigma-Certified Professionals",
          demandDetail: `
          Lean Six Sigma works on the premise that perfection is a dynamic goal, and there is always scope for improvement in operational processes. As quality continues to drive the competitive advantage in the world of business, expertise in this popular and productive approach to process improvement is highly sought after.

As a Certified Lean Six Sigma Black Belt, you will lead project teams by identifying issues and areas of improvement. This certification will validate your capability of streamlining processes and improving quality. By reducing waste and eliminating bottlenecks you will learn to reduce costs and enhance efficiency.

Professionals with a Six Sigma Certification earn over $107,000 and are among the highest-paid professionals globally. The average annual salary of a Management Analyst is $87,660 according to the US Bureau of Labor Statistics with a 14% annual job growth.
          `,
          demandData: [
            {
              type: "Quality Engineer",
              averageSalary: [8, 15, 24],
              hiringCompany: [],
              demand: {
                percant: "13% Increase",
                description: "Annual Growth (CAGR) in Six Sigma Job Market",
              },
            },
            {
              type: "Process Analyst",
              averageSalary: [6, 12, 23],
              hiringCompany: [],
              demand: {
                percant: "7000+",
                description: "Professionals hold an IASSC Certification",
              },
            },
            {
              type: "Operations Manager",
              averageSalary: [9, 16, 27],
              hiringCompany: [],
              demand: {
                percant: "1.5M",
                description: "Six Sigma Practitioners Around the World",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Solid Track Record",
              value:
                "Springlearns has empowered over 250,000 professionals with certifications in various domains. ",
            },
            {
              icon: "",
              topic: "Experiential Workshops",
              value:
                "Make the best of engaging activities, team-based exercises and practical case studies.",
            },
            {
              icon: "",
              topic: "Elite Panel of Experienced Trainers",
              value:
                "Get trained by accredited trainers with over a decade of experience across industries.",
            },
            {
              icon: "",
              topic: "Mentorship by Industry Experts",
              value:
                "Get real-world tips and time-tested techniques from highly qualified mentors.",
            },
            {
              icon: "",
              topic: "Exclusive GRAND PASS ",
              value:
                "Avail Springlearns's Exclusive GRAND PASS for 180 days and take advantage of the Free Refresher Course.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Six months of post-training mentor guidance to overcome challenges in your professional career.",
            },
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle:
            "Maximize Your PMP Exam Success with Our Exclusive Offer!",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites for attending the course or to sit for the IASSC Certified Black Belt™ (ICBB™) exam.",
        ],
        courseCurriculm: [
          {
            title: " Define Phase: The Basics of Six Sigma",
            isPreview: false,
            objective:
              "In the define phase of the Six Sigma Yellow Belt syllabus, explore the basics of Six Sigma and its meaning. Delve into the general history of Six Sigma and its roles & responsibilities.",
            topics: [
              "Meanings of Six Sigma",
              "General History of Six Sigma & Continuous Improvement",
              "Deliverables of a Lean Six Sigma Project",
              "The Problem-Solving Strategy Y = f(x)",
              "Voice of the Customer, Business and Employee",
              "Six Sigma Roles & Responsibilities",
            ],
          },
          {
            title: "Define Phase: The Fundamentals of Six Sigma",
            isPreview: false,
            objective:
              "Explore the fundamentals of Six Sigma in the next define phase of this Six Sigma Green Belt Certification. Learn how to define a process and the Pareto Analysis.",
            topics: [
              "Defining a Process",
              "Critical to Quality Characteristics (CTQ’s)",
              "Cost of Poor Quality (COPQ)",
              "Pareto Analysis (80:20 rule)",
              "Basic Six Sigma Metrics",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Error Detection and Prevention",
            description:
              "Learn to detect and prevent errors, and achieve process improvement to maintain productivity.",
          },
          {
            title: "Customer Satisfaction",
            description:
              "Learn how to maintain and provide customer satisfaction by improving the quality of the end product.",
          },
          {
            title: "Efficient Production",
            description:
              "Explore how to speed up the production process that helps businesses to stay competitive and meet customer demands.",
          },
          {
            title: "Lower Costs",
            description:
              "Reduce the costs of production drastically by minimizing variability and eliminating various kinds of waste.",
          },
          {
            title: "Problem Evaluation",
            description:
              "Evaluate problems, statistically and quantitatively in your team or organization for smooth workflow.",
          },
          {
            title: "Process Understanding",
            description:
              "Grasp an understanding of processes, to provide assistance to achieve organizational objectives.",
          },
        ],
        whoCanAttendCourse: [
          "IT Managers",
          "IT Analysts",
          "HR Managers",
          "Team Managers",
          "Change Managers",
          "Finance Managers",
          "Project Managers",
          "Change Managers",
          "Program Managers",
          "Improvement Managers",
          "Quality System Managers",
          "Operational Line Managers",
        ],
        aboutCourse: [
          {
            question: "What is Six Sigma Black Belt certification?",
            answer: `The Six Sigma Black Belt certification is the highest level of six sigma certifications. This denotes that the certification holder has a great level of understanding of six sigma concepts and can apply them in process improvements, quality control and other areas. `,
          },

          {
            question: " Is Six Sigma Black Belt certification worth it?",
            answer: `Yes, the Lean Six Sigma Black Belt is a credential that will bring you recognition and competence as a six sigma practitioner capable of using six sigma to encourage continuous improvement and improve quality. This will open the door to better roles along with attractive compensation. `,
          },

          {
            question:
              "What are the prerequisites for the Lean Six Sigma Green Belt course?",
            answer: `There are no prerequisites for attending this Lean Six Sigma Green Belt Certification.`,
          },

          {
            question:
              "Is Six Sigma Black Belt certification globally recognized?",
            answer: `Yes, Six Sigma Black Belt is a designation that is globally recognized. There are multiple certification bodies that offer six sigma certifications. Six sigma is a proven method that has been in use in various industries for decades. The success has encouraged more organizations to adopt six sigma practices. `,
          },
        ],
        faqs: [
          {
            type: "Course",
            question: "Who is the Lean Six Sigma Black Belt course for?",
            answer: `The Lean Six Sigma Black Belt course is for professionals who hold the Lean Six Sigma Green Belt certificate or for professionals who have extensive training and experience in Six Sigma. There is no restriction on who can get training or certification except that they must pass the Lean Six Sigma Black Belt exam.
              `,
          },
          {
            type: "Course",
            question: "What is Lean Six Sigma Black Belt training? ",
            answer: `
       Lean Six Sigma Black Belt training online is a program that prepares candidates to understand all the aspects of the lean six sigma method as prescribed by IASSC Lean Six Sigma Black Belt Body of Knowledge™.
            `,
          },
          {
            type: "Course",
            question:
              "Who is eligible to enroll in a Six Sigma Black Belt course? ",
            answer: `
     There is no eligibility requirement for the Six Sigma Black Belt course. If you are new to Six Sigma, it is not advisable to attempt the Six Sigma Black Belt course before attempting the yellow belt and green belt certifications. The Lean Six Sigma Black Belt is one of the most advanced certifications in six sigma and it is not beginner friendly. 
            `,
          },

          {
            type: "Course",
            question:
              "How long will it take for me to complete the LSSBB Curriculum? ",
            answer: `
    36 hours is the time it takes for the live training lead by a qualified trainer. The Lean Six Sigma Black Belt classes may be over four days or spread over a longer timeframe depending on the length of each session. The time it takes to prepare for the exam will take up to three months. A serious amount of preparation is needed to successfully clear the Lean Six Sigma Black Belt exam. 
            `,
          },

          {
            type: "Carrer Benfefits",
            question:
              "What are the career opportunities after Six Sigma Black Belt certification? ",
            answer: `
       Professionals with a Lean Six Sigma Black Belt certification online can get hired in various jobs. They are in demand in a lot of leadership and management roles due to their problem solving and analytic skills. They are also in demand in roles that demand analytic skills, quality control skills and project management skills. Six Sigma skills are useful for contractors, and consultants as well.
            `,
          },

          {
            type: "Carrer Benfefits",
            question: "Does Six Sigma Black Belt help you get a job? ",
            answer: `
     Six Sigma Black Belt is an advanced certification with a comprehensive training in a range of tools and techniques that help you address various business needs. The Lean Six Sigma Black Belt credential will make you an attractive candidate in the eyes of a recruiter. The certification is proof of your advanced skill and competence. It is also a credential that is recognized across the world.   
            `,
          },
        ],
      },
    },

    {
      id: 29,
      dbid: "6748523bf99edee8975263ab",
      title: "PRINCE2 Foundation",
      courseSubtitle: "PRINCE2 Foundation Course",
      description:
        "Get the best of both worlds with PRINCE2 Agile Foundation",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {
        price:{
          originalPrice: 64999,
          discountPrice: 39999,
          discount: 21,
        },
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "36,057+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Develop project-related abilities that can be used in a variety of industries.",
          "Master the art of completing several projects on time and on budget.",
          "The PRINCE2 Foundation, 6th Edition exam is covered in this course.",
        ],
        careerDetail: [
          { carrer: "Career transformations", value: "450K" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "16 Hours of Live Instructor-Led Sessions",
            },
            {
              icon: "",
              value: "75+ Hours of On-Demand Self-Paced Learning",
            },
            {
              icon: "",
              value: "Earn 16 PDUs on Completion of the Course",
            },
            {
              icon: "",
              value: "20 Assessments, 14 Case Studies, 3 Mock Tests, More",
            },
            {
              icon: "",
              value: "Exam Fee Included in the Course Fee",
            },
            {
              icon: "",
              value: "Lifetime Access to Prince2 Practitioner Courseware",
            },
          ],
          overviewDetail: `
    PRINCE2 Foundation is a project management approach that is widely utilised by the general public and organisations from many sectors and industries throughout the world. PRINCE2 Foundation certification enables team members to interact with stakeholders in order to successfully manage projects. 

    PRINCE2 is a process-based approach to project management that teaches trainees the core skills they need to become effective project managers. The PRINCE2 Foundation Certification aims to offer students a thorough understanding of the PRINCE2 concepts, topics, and methods. 

    `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why Get PRINCE2 Foundation",
          demandHeading: "Growing Demand for PRINCE2 Foundation",
          demandDetail: `
        Project management is gaining popularity across numerous industries, with an estimated 2.2 million project roles needing to be filled annually. By mastering the latest skills through the PRINCE2 Foundation course, you'll learn how to apply and tailor PRINCE2 principles to real-world scenarios. Earning the PRINCE2 certification can open doors to opportunities in IT, manufacturing, finance, healthcare, and many other exciting sectors. On average, professionals with a PRINCE2 Foundation Certificate earn around $99k per year.

          `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Process Lead",
              averageSalary: [15, 31, 46],
              hiringCompany: [],
              demand: {
                percant: "22M",
                description:
                  "new Project Management jobs will be created by 2027 globally",
              },
            },
            {
              type: "PMO Lead",
              averageSalary: [18, 38, 56],
              hiringCompany: [],
              demand: {
                percant: "88M",
                description:
                  "individuals needed for Project Management roles by 2027",
              },
            },

            {
              type: "Project Director",
              averageSalary: [22, 43, 63],
              hiringCompany: [],
              demand: {
                percant: "$208 Billon",
                description:
                  "GDP risk due to potential PM talent shortages by 2027",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Flexibility ",
              value:
                "Customize your strategy for different projects to ensure flexibility and success in today's fast-paced workplace.",
            },
            {
              icon: "",
              topic: "Themes",
              value: "Apply the PRINCE2 standards' seven principles, procedures, and themes.",
            },
            {
              icon: "",
              topic:
                "PRINCE2-Foundation",
              value:
                "Develop a product-based project planning methodology that divides projects into small, controlled stages.",
            },
            {
              icon: "",
              topic: "Project",
              value:
                "Control your resource allocation and efficiently manage project risk.",
            },
            {
              icon: "",
              topic: "Responsibilities",
              value:
                "Recognize the duties and responsibilities of each member of the project management team.",
            },
            {
              icon: "",
              topic: "Abilities ",
              value:
                "Apply abilities that complete and enhance the PRINCE2 Foundation certification's knowledge-based approach.",
            },
            
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to elevate your project management expertise?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "The PRINCE2 Agile Foundation certification enhances your project management capabilities by combining PRINCE2 principles with agile practices. This makes you more versatile and valuable in industries that require flexible project management approaches.",
         
        ],
        courseCurriculm: [
          {
            title: "Course Overview and Exam Techniques",
            isPreview: false,
            objective:
              "Get an introduction to PRINCE2 Foundation, with an outline of the structure of PRINCE2 Foundation. Recognize the exam style and techniques.",
            topics: [
              "Introduction and Exam technique",
              "Overview of PRINCE2 Foundation",
              "Course structure",
              "Exam style and technique",
            ],
          },
          
        ],
        learningObjective: [
          {
            title: "Tailoring PRINCE2",
            description:
              "Learn the concepts of PRINCE2 Foundation and adopting it in an organization.",
          },
          {
            title: "PRINCE2 Principles",
            description:
              "Understand the 7 PRINCE2 Principles, apply and tailor it to different organizational contexts.",
          },
          {
            title: "PRINCE2 Themes",
            description:
              "Understand the 7 PRINCE2 themes and apply them to provide a good framework for the organization.",
          },
          {
            title: "PRINCE2 Processes",
            description:
              "Understand the 7 PRINCE2 Processes, and apply it in the context of a project and organization.",
          },
          {
            title: "Project Risks",
            description:
              "Learn how to apply PRINCE2 fundamentals to control and mitigate risks.",
          },
          {
            title: "PRINCE2 Best Practices",
            description:
              "Learn the latest PRINCE2 best practices and apply them across diverse projects and portfolios.",
          },
        ],
        whoCanAttendCourse: [
          "Product Owners",
          "Scrum Masters",
          "Scrum Developers",
          "Project Managers",
          "Change Managers",
          "Finance Managers",
          "Project Managers",
          "Project Sponsors",
          "PMO",
        ],
        aboutCourse: [
          {
            question: "What is Prince2 Foundation Course?",
            answer: `Project management is gaining popularity across numerous industries, with an estimated 2.2 million project roles needing to be filled annually. By mastering the latest skills through the PRINCE2 Foundation course, you'll learn how to apply and tailor PRINCE2 principles to real-world scenarios.`,
          },

          {
            question: " How does a PRINCE2 Agile Foundation certification help me?",
            answer: `The PRINCE2 Agile Foundation certification enhances your project management capabilities by combining PRINCE2 principles with agile practices. This makes you more versatile and valuable in industries that require flexible project management approaches.`,
          },

        
        ],
        faqs: [
          {
            type: "Course",
            question: "What can I expect to accomplish after completing the PRINCE2 Foundation course?",
            answer: `After completing the PRINCE2 Foundation course, you’ll gain a solid understanding of PRINCE2 principles, processes, and methodologies. This knowledge will help you apply the framework to manage projects effectively, making you ready to take on project management roles.
              `,
          },
          {
            type: "Course",
            question: "What is the PRINCE2 Agile Foundation exam pattern and passing score?",
            answer: `
            The PRINCE2 Agile Foundation exam consists of 50 multiple-choice questions, and you need to score at least 55% to pass. `,
          },
         
          {
            type: "Training",
            question: "How does a PRINCE2 Agile Foundation certification help me?",
            answer: `
  The PRINCE2 Agile Foundation certification enhances your project management capabilities by combining PRINCE2 principles with agile practices. This makes you more versatile and valuable in industries that require flexible project management approaches. `,
          },

          {
            type: "Training",
            question: "Can I retake the PRINCE2 Foundation certification test if I fail? How soon?",
            answer: `
    Yes, if you fail the PRINCE2 Foundation exam, you can retake it. You can usually schedule a retake as soon as you’re ready, subject to the exam provider’s availability.  `,
          },

          {
            type: "Exam",
            question: "Who conducts the exam?",
            answer: `
  The PRINCE2 Agile Foundation exam is conducted by PeopleCert, the official certification body for PRINCE2 exams.

            `,
          },

          {
            type: "Exam",
            question: "Can I get certified without taking the course?",
            answer: `
 While it is not mandatory to take a PRINCE2 Agile Foundation course, it is highly recommended to ensure you are well-prepared for the exam and understand the concepts thoroughly.

            `,
          },
        ],
      },
    },

    {
      id: 30,
      dbid: "67481e4bf99edee897525d2e",
      title: "PMI ACP Certification ",
      courseSubtitle:
        "PMI ACP Certification Course",
      description:
        "Elevate Your Career as an Agile Expert with PMI-ACP Certification Training",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {
        price:{
          originalPrice: 24999,
          discountPrice: 14999,
          discount: 21,
        },
        courseCategory: "Agile Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "31,206+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Apply cutting-edge Agile methodologies and practices",
          "Engaging curriculum crafted by seasoned Agile professionals",
          "Hands-on learning with practical scenarios, case studies, and more.",
        ],
        careerDetail: [
          { carrer: "Professional Trained", value: "450K" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "Engage in practical simulations and activities",
            },
            {
              icon: "",
              value: "Receive career guidance for six months after the course ends",
            },
            {
              icon: "",
              value: "Thorough support for exam preparation",
            },
            {
              icon: "",
              value: "Access a digital library filled with learning materials",
            },
            {
              icon: "",
              value: "21 hours of interactive sessions led by expert instructors",
            },
            {
              icon: "",
              value: "Receive 21 professional development units upon completing the course",
            },
          ],
          overviewDetail: `
   Elevate your understanding of Agile methodologies with the PMI ACP certification. Dive into
diverse Agile frameworks, such as Scrum, Kanban, Lean, Extreme Programming (XP), and
Test-Driven Development (TDD). This program is designed to help you develop an Agile
mindset and gain practical expertise in Agile project management.

Upon completing the PMI ACP training programs, you’ll acquire the essential skills and
techniques utilized by Agile Certified Practitioners to enhance team dynamics, tackle
challenges, and foster ongoing process improvements. You’ll walk away equipped with the
competencies needed for immediate application in the workplace.


          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why get the PMI ACP Certification Course",
          demandHeading: "Rising Demand for PMI ACP Certification ",
          demandDetail: `
       The PMI ACP certification is a prestigious designation from the Project Management Institute
(PMI) that recognizes candidates who demonstrate their knowledge by successfully passing the
assessment exam. PMI ACP is a registered trademark of PMI. Spring Learns proudly serves as
an Authorized Training Partner of PMI, providing a wealth of resources for PMI ACP exam
preparation and ongoing learning.
          `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Agile Project Manager",
              averageSalary: [12, 21, 35],
              hiringCompany: [],
              demand: {
                percant: "37%",
                description:
                  "faster project delivery by teams practicing Agile",
              },
            },
            {
              type: "Agile Coach",
              averageSalary: [17, 33, 51],
              hiringCompany: [],
              demand: {
                percant: "94%",
                description:
                  "of organizations practicing Agile report increased quality in their projects",
              },
            },
          ],
        },
        knowledgeHut: {
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Experiential PMI ACP Workshops",
              value:
                "Engage in high-energy activities, team-based exercises, and case studies that promote hands-on learning.",
            },
            {
              icon: "",
              topic: "Elite Panel of PMI ACP Certified Agilists",
              value:
                "Learn from top-tier certified Agilists who bring valuable experience from various industries.",
            },
            {
              icon: "",
              topic: "Expert Agile Practitioners",
              value:
                "Receive actionable tips and techniques for your Agile toolbox from our skilled Agile practitioners.",
            },
            {
              icon: "",
              topic: "PMI ACP Exam Preparation Support",
              value:
                "Our training is designed to ensure participants can pass the PMI ACP exam on their first attempt.",
            },
            {
              icon: "",
              topic: "Continual Learning Resources",
              value:
                "Access a wealth of webinars, e-books, tutorials, articles, and more—supporting you throughout your learning journey.",
            },
            {
              icon: "",
              topic: "Post-Training Mentorship Sessions",
              value:
                "Enjoy six months of post-training mentor guidance to help you navigate challenges in your Agile career.",
            },
        
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to become a skilled Agile practitioner?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "There are no prerequisites to attend this training program.",
          "To qualify for the PMI-ACP exam, PMI requires candidates to complete 21 hours of training in Agile practices by an authorized training partner of PMI. ",
        ],
        courseCurriculm: [
          {
            title: "ACP Exam Prep",
            isPreview: false,
            objective:
              "Prepare for the PMI-ACP exam by understanding the course overview, completing the exam application, gaining insights into the exam structure, and adopting effective approaches to navigate the examination process on PMI Island.",
            topics: [
              "Course Overview",
              "The Exam Application",
              "The PMI-ACP Exam",
              "Welcome to PMI Island! (Approaching the Exam)",
            ],
          },
          {
            title: "Leading Your Agile Team and Project",
            isPreview: true,
            objective:
              "Gain a comprehensive understanding of agile methodologies, principles, and terminologies, covering PMBOK, predictive vs adaptive approaches, the historical evolution of agile, and a diverse range of specific methodologies like Scrum, Lean, Kanban, and more, culminating in the ability to critically assess and apply the most suitable agile method for various project scenarios.",
            topics: [
              "The PMBOK Guide",
              "Predictive vs Adaptive Methodologies",
              " The History of Agile",
              "Basic Agile Concepts",
              "Choosing Your Priorities",
              "Terminology of Agile",
              "Agile Methodologies: Scrum",
              "Agile Methodologies: Extreme Programming",
              "Agile Methodologies: Lean Software Development",
              "Agile Methodologies: Feature-Driven Development (FDD)",
              "Agile Methodologies: Dynamic Systems Development (DSDM)",
              "Agile Methodologies: Crystal Development",
              "Agile Methodologies: Kanban",
              "Agile Methodologies: Scrum of Scrums, SAFe, and Disciplined Agile Development",
              "Agile Methodologies - LeSS",
              "Agile Methodologies: Nexus",
              "Agile Methodologies: Picking the Perfect Method",
              "Agile Principles and Mindset: EXAM Review",
            ],
          },

          {
            title: " Delivering Value in Agile Projects",
            isPreview: false,
            objective:
              "Understand the principles of Value-Driven Delivery in Agile, encompassing concepts such as business value, project charter creation, value stream mapping, prioritization, story mapping, risk management, Deming's PDCA cycle, decision tree analysis, EMV, agile contracting, earned value, and the utilization of agile tracking tools, with a focus on preparing for the exam through a comprehensive review of Value Driven Delivery.",
            topics: [
              "What is Value Driven Delivery?",
              "Understanding Business Value",
              "The Project Charter",
              "Value Stream Mapping",
              "Prioritizing in Agile",
              "Story Maps",
              "Risk in Agile Projects",
              "Deming and the PDCA",
              "Decision Tree Analysis and EM",
            ],
          },
        ],
        learningObjective: [
          {
            title: "Agile Project Management",
            description:
              "Explore the fundamentals of Agile project management and discover how to effectively implement Agile methodologies within your organization.",
          },
          {
            title: "Developing an Agile Mindset",
            description:
              "Uncover the significance of adopting an Agile mindset and learn how it can transform your approach to projects and teamwork.",
          },
          {
            title: "Ensuring Product Quality",
            description:
              "Understand how Agile practitioners prioritize product quality, ensuring that every deliverable meets high standards of excellence.",
          },
          {
            title: "Enhancing Stakeholder Engagement",
            description:
              "Master the art of effective communication with stakeholders, integrating diverse perspectives to drive project success.",
          },
          {
            title: "Agile Risk Management",
            description:
              "Learn to identify, mitigate, and manage risks using Agile techniques, enhancing your organization&#39;s resilience and adaptability.",
          },
          {
            title: "Commitment to Continuous Improvement",
            description:
              "Embrace a culture of experimentation and continuous improvement, discovering innovative ways to enhance processes and deliver better results.",
          },
        ],
        whoCanAttendCourse: [
         
          "Product Managers",
          "Team Leaders",
          "Testers",
          "Aspiring AgilistsSoftware Engineers",
          "Business Analysts",
          "Development Team Members",
        ],
        aboutCourse: [],
        faqs: [
          {
            type: "Certification",
            question: "How does PMI-ACP certification benefit me?",
            answer: `The PMI-ACP certification enhances your career prospects by validating your expertise in Agile
methodologies, making you a more attractive candidate for Agile roles and helping you to stand
out in a competitive job market. `,
          },
          {
            type: "Certification",
            question: "What skills will I gain from the PMI-ACP course? ",
            answer: `
 After completing the PMI-ACP course, you&#39;ll acquire practical skills in Agile project
management, risk management, stakeholder engagement, and continuous improvement
techniques, enabling you to effectively implement Agile practices in your organization.
            `,
          },
          {
            type: "PDUs",
            question:
              " How many PDUs do I earn by completing Springlearns PMI-ACP certification training? ",
            answer: `
 You earn 21 PDUs by participating in Springlearns PMI-ACP training program.
            `,
          },

          {
            type: "PDUs",
            question:
              " How many PDUs do I earn by completing Springlearns PMI-ACP certification training?  ",
            answer: `
 You will earn 21 PDUs by completing our training program for PMI-ACP certification.
            `,
          },
          {
            type: "PDUs",
            question: "What if I have more questions about PDUs? ",
            answer: `
 You can write to us at support@Springlearns.com
            `,
          },

          {
            type: "Workshop Experience",
            question: "Who should take the PMI-ACP course?",
            answer: `The PMI-ACP course is designed for project managers, team leaders, and professionals
interested in Agile practices, regardless of their experience level, who want to enhance their
skills and advance their careers. `,
          },

          {
            type: "Workshop Experience",
            question: "Can I get PMI-ACP certified without taking the course?",
            answer: `Yes, you can pursue PMI-ACP certification without taking the course, but completing the PMI-
ACP training programs will significantly enhance your understanding and preparedness for the
certification exam. `,
          },

          {
            type: "Workshop Experience",
            question:
              "Are course materials and workshop instructions provided in advance?  ",
            answer: `Yes, your course material will be provided in advance. You will receive an email with a link to set your password a few days in advance of the scheduled course. You will have access to the study plan and all the course material.`,
          },

          {
            type: "Finance",
            question:
              " How long does it take to get PMI-ACP certification?",
            answer: `
  The time required to obtain PMI-ACP certification varies, but after meeting eligibility
requirements and completing the PMI-ACP course, you can schedule and take the exam at your
convenience.
            `,
          },
          {
            type: "Finance",
            question:
              " Why should I renew my PMI-ACP certification?",
            answer: `
  Renewing your PMI-ACP certification ensures that your skills and knowledge remain current in
Agile practices, demonstrating your ongoing commitment to professional development and
keeping you competitive in the job market.
            `,
          },

          {
            type: "Exam",
            question:
              "What are the prerequisites for the PMI-ACP certification exam?",
            answer: `
 To sit for the PMI-ACP certification exam, you need to have a secondary degree, 21 contact
hours of training in Agile practices, and 2,000 hours of general project experience, along with
1,500 hours working on Agile teams.
            `,
          },
        ],
      },
    },


    {
      id: 31,
      title: "Business Case Writing",
      dbid: "67480979f99edee89752519a",
      courseSubtitle: "Business Case Writing Course Training",
      description:
        "Learn the elements of an exceptional business case in our business case writing course and the steps to craft one.",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {
        price:{
          originalPrice: 14999,
          discountPrice: 7999,
          discount: 21,
        },
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "36,057+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Learn how to write compelling business cases that promote business objectives through our business case writing training.",
          "Identify and compare costs and advantages of alternative solutions to enhance your business case writing skills.",
          "Apply risk assessment techniques to forecast and mitigate potential problems.",
        ],
        careerDetail: [
          { carrer: "Career transformations", value: "450K" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "Participate in 8 hours of live, instructor-led training.",
            },
            {
              icon: "",
              value: "Utilize industry-validated course materials.",
            },
            {
              icon: "",
              value: "Earn 8 PDUs and 8 CDUs upon completion.",
            },
            {
              icon: "",
              value: "Engage in hands-on learning activities.",
            },
            {
              icon: "",
              value: "Access a digital library filled with valuable learning resources.",
            },
            {
              icon: "",
              value: "Practice writing business cases effectively.",
            },
          ],
          overviewDetail: `
    In the world of corporate execution depends on developing and implying the best solution in the workplace. Business case is a comprehensive well written explanation of why a certain project should be taken up. It should be a formal piece of writing arguing about the reasoning to approve an intended action by a decision maker.

    Springlearns designed Business Case Writing course with the objective to make you understand how to write compelling business cases which suit best to organizations and helps achieve them required targets. Springlearns will help sharpen your presentation skills and get the stakeholders through their Business Case Writing training program. 	

    To initiate any new project, the Senior Management reviews the business case. Business case is the driver of every project and project plan are deeply supervised and has great impact on the business.

    Springlearns is offering online course for business case writing at affordable price to help you avail all the benefits of learning and growing easily. You will be trained by highly professional experts for 8 hours with all the information you need to make a comprehensive and persuasive business writing case.

          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why Get Business Case Writing Course",
          demandHeading: "Growing Demand for Business Case Writing Course",
          demandDetail: `
        Business case plays a vital role in making any business project. It will be a great asset to you and the corporate sector if you know how to write compelling argument. Here you will learn the required skill-sets needed to write a clear and concise business case.
    
        You will understand how to analyze and communicate through your business case efficiently. A well formed business case will help organizations get the best results by making them choose the right project plan. It turned out to be a greater productivity for an organization.
        
        You will learn different techniques of strengthening the business case to offer exactly what decision makers need. You will also learn to apply risk assessment techniques and how to mitigate potential problems.
        `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Process Lead",
              averageSalary: [15, 31, 46],
              hiringCompany: [],
              demand: {
                percant: "22M",
                description:
                  "new Project Management jobs will be created by 2027 globally",
              },
            },
            {
              type: "PMO Lead",
              averageSalary: [18, 38, 56],
              hiringCompany: [],
              demand: {
                percant: "88M",
                description:
                  "individuals needed for Project Management roles by 2027",
              },
            },

            {
              type: "Project Director",
              averageSalary: [22, 43, 63],
              hiringCompany: [],
              demand: {
                percant: "$208 Billon",
                description:
                  "GDP risk due to potential PM talent shortages by 2027",
              },
            },
          ],
        },
        knowledgeHut: {
          
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Outstanding Track Record",
              value:
                "Spring Learns has empowered over 400,000 professionals with essential skills and certifications across various fields.",
            },
            {
              icon: "",
              topic: "Learn from Industry Experts",
              value: "Engage with certified instructors who bring extensive industry experience and expertise in their subjects.",
            },
            {
              icon: "",
              topic:
                "Cutting-Edge Curriculum",
              value:
                "Study from a contemporary curriculum that is designed with a focus on current industry needs..",
            },
            {
              icon: "",
              topic: "Hands-On Training",
              value:
                "Enhance your learning through practical individual and group exercises, quizzes, and interactive activities.",
            },
            {
              icon: "",
              topic: "Build Strong Foundations",
              value:
                "Master concepts from the ground up with step-by-step guidance and comprehensive feedback.",
            },
            {
              icon: "",
              topic: "Ongoing Learning Support",
              value:
                "Take advantage of monthly webinars, e-books, tutorials, and more to reinforce your learning journey.",
            },
          
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to elevate your project management expertise?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "You will understand how to analyze and communicate through your business case efficiently. A well formed business case will help organizations get the best results by making them choose the right project plan. It turned out to be a greater productivity for an organization.",
          "You will learn different techniques of strengthening the business case to offer exactly what decision makers need. You will also learn to apply risk assessment techniques and how to mitigate potential problems.",
        ],
        courseCurriculm: [
          {
            title: "Course Overview and Exam Techniques",
            isPreview: false,
            objective:
              "Get an introduction to Business Case Writing Course, with an outline of the structure of Business Case Writing . Recognize the exam style and techniques.",
            topics: [
              "Introduction and Exam technique",
              "Overview of Business Case Writing ",
              "Course structure",
              "Exam style and technique",
            ],
          },
       
        ],
        learningObjective: [
          {
            title: "Responsibility",
            description:
              "Responsibility and influence on stakeholders",
          },
          {
            title: "Compatability",
            description:
              "Compatability of Business cases",
          },
          {
            title: "Themes",
            description:
              "Techniques and Elements of business case",
          },
          {
            title: "Processes",
            description:
              "Report and contents of Business case",
          },
          {
            title: "Project",
            description:
              "Capability of business case development",
          },
          
        ],
        whoCanAttendCourse: [
          "Directors",
          "Corporate Officers ",
          "Business Analysts",
          "Product Managers",
          "Product Planners",
          "Marketing Managers",
          
        ],
        aboutCourse: [
          {
            question: "What is a Business Case Writing Course?",
            answer: `A business case writing course is designed to teach participants how to create effective business cases that support decision-making and strategic planning within an organization.`,
          },

          {
            question: " What will I learn in this course?",
            answer: `You will learn how to structure a business case, analyze costs and benefits, conduct risk assessments, and write persuasive arguments to support business objectives.`,
          },

          {
            question:
              "Will I receive a certificate upon completion?",
            answer: `Yes, participants will receive a certificate upon successful completion of the course.`,
          },
        ],
        faqs: [
          {
            type: "Course",
            question: "Are there any prerequisites for this course?",
            answer: `No prior experience in business writing is necessary, although a basic understanding of project management concepts can be beneficial.

              `,
          },
          {
            type: "Course",
            question: "What will I learn in this course? ",
            answer: `
  You will learn how to structure a business case, analyze costs and benefits, conduct risk assessments, and write persuasive arguments to support business objectives.

            `,
          },
 

          {
            type: "Training",
            question: "Who should enroll in this course?",
            answer: `
  This course is ideal for project managers, business analysts, team leaders, and anyone involved in project proposals or business planning.`,
          },



          {
            type: "Exam",
            question: " Who conducts the Business Case Writing Classes? ",
            answer: `
 Springlearns is a complete online course in which worked case studies, exercises and delegated pack of notes will be provided. To help you apply various strategies, Springlearns will make you do practical exercises as well. You can opt for one to one classes or either opt group class for interactive sessions.

            `,
          },

        ],
      },
    },


    {
      id: 32,
      title: "Microsoft Excel Certification",
      dbid:"67480b76f99edee8975252c6",
      courseSubtitle: "Microsoft Excel Certification Training Course",
      description:
        "Enhance your understanding of Microsoft Excel and leverage its advanced functions for analysis",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {
        price:{
          originalPrice: 24999,
          discountPrice: 14999,
          discount: 21,
        },
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "36,057+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Gain a thorough understanding of rows, cells, columns, and different data types",
          "Learn to apply various formatting techniques for fonts, alignment, numbers, and dates",
          "Discover how to utilize dependent drop-down lists, filters, and pivot tables to streamline your data.",
        ],
        careerDetail: [
          { carrer: "Career transformations", value: "450K" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "8-Hour Live, Instructor-Led Training",
            },
            {
              icon: "",
              value: "Industry-Validated Course Materials",
            },
            {
              icon: "",
              value: "Engaging Learning Through Hands-On Exercises",
            },
            {
              icon: "",
              value: "Acquire Real-World Experience with Practical Projects",
            },
            {
              icon: "",
              value: "Regular Doubt-Clearing Sessions for Clarification.",
            },
            {
              icon: "",
              value: "Achieve Proficiency in MS Excel Functions",
            },
          ],
          overviewDetail: `
   Microsoft Excel is a spreadsheet tool that is widely used for data processing, analysis, visualization, and other tasks. It may be configured to retrieve data from external databases and is a powerful tool for data modeling, statistics, and financial computations, with built-in functions for doing typical tasks quickly and efficiently. Excel skills are commonly required for professions in accounting, business analytics, data analysis, and statistics.
   
   This MS Excel course will help you gain a thorough understanding of the programs and explore its many capabilities. You will learn how to construct functions, as well as how to sort, filter, and import data in Microsoft Excel. Experiment with the many features of Microsoft Excel and formulas you may use to track, manage, and track data-driven initiatives.

          `,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why Get Microsoft Excel Certification Course",
          demandHeading: "Growing Demand for Microsoft Excel Certification Course",
          demandDetail: `
       Microsoft Excel is a spreadsheet tool that is widely used for data processing, analysis, visualization, and other tasks. It may be configured to retrieve data from external databases and is a powerful tool for data modeling, statistics, and financial computations, with built-in functions for doing typical tasks quickly and efficiently. Excel skills are commonly required for professions in accounting, business analytics, data analysis, and statistics.

        `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Process Lead",
              averageSalary: [15, 31, 46],
              hiringCompany: [],
              demand: {
                percant: "22M",
                description:
                  "new Project Management jobs will be created by 2027 globally",
              },
            },
            {
              type: "PMO Lead",
              averageSalary: [18, 38, 56],
              hiringCompany: [],
              demand: {
                percant: "88M",
                description:
                  "individuals needed for Project Management roles by 2027",
              },
            },

            {
              type: "Project Director",
              averageSalary: [22, 43, 63],
              hiringCompany: [],
              demand: {
                percant: "$208 Billon",
                description:
                  "GDP risk due to potential PM talent shortages by 2027",
              },
            },
          ],
        },
        knowledgeHut: {
          
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Purpose-Driven Learning",
              value:
                "Go beyond mere theoretical or practical knowledge; grasp the 'what,' 'why,' and 'how' of key concepts.",
            },
            {
              icon: "",
              topic: "Real-World Experiences",
              value: "Gain valuable real-world experience through projects and develop a job-ready portfolio that attracts top employers.",
            },
            {
              icon: "",
              topic:
                "Ongoing Learning Support",
              value:
                "Enhance your learning with self-paced videos, hands-on exercises, assignments, recall quizzes, and more..",
            },
            {
              icon: "",
              topic: "Outstanding Track Record",
              value:
                "Spring Learns has empowered over 400,000 professionals with certifications across various fields.",
            },
            {
              icon: "",
              topic: "Learn from Industry Experts",
              value:
                "Engage with certified instructors who possess extensive industry experience and expertise in their subjects.",
            },
            {
              icon: "",
              topic: "Industry-Relevant Curriculum",
              value:
                "Study from the latest curriculum designed with a focus on current industry needs and emerging technologies.",
            },
          
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to elevate your project management expertise?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "Learn how to construct visual representations of data using charts and graphs, as well as how to set up an Excel sheet, do calculations, apply basic and advanced Excel formulas, and build basic and complex Excel formulas. ",
          "Learn how to use pivot tables to easily create alternative perspectives of data and much more from the Excel team at Microsoft.",
        ],
        courseCurriculm: [
          {
            title: "Course Overview and Exam Techniques",
            isPreview: false,
            objective:
              "Get an introduction to Microsoft Excel Certification Course, with an outline of the structure of Microsoft Excel Certification Course . Recognize the exam style and techniques.",
            topics: [
              "Introduction and Exam technique",
              "Overview of Microsoft Excel  Course ",
              "Course structure",
              "Exam style and technique",
            ],
          },
       
        ],
        learningObjective: [
          {
            title: "Representations",
            description:
              "   Construct visual representations of data using charts and graphs.",
          },
          {
            title: "Graphs and Charts",
            description:
              "Represent large amounts of data with useful graphs and charts.",
          },
          {
            title: "Themes",
            description:
              "Analyze the facts and make forecasts.",
          },
          {
            title: "Processes",
            description:
              "It can assist you in organizing data in a user-friendly manner.",
          },
          {
            title: "Functions",
            description:
              "Calculate and perform basic and sophisticated mathematical functions.",
          },
          
        ],
        whoCanAttendCourse: [
          "Fresher",
          "Sales professionals",
          "Marketing professionals",
          "Strategies",
          "Business executives",
          "Data professionals ",
          
        ],
        aboutCourse: [
          {
            question: "What is a Microsoft Excel Certification Course?",
            answer: `Learn how to construct visual representations of data using charts and graphs, as well as how to set up an Excel sheet, do calculations, apply basic and advanced Excel formulas, and build basic and complex Excel formulas. `,
          },

          {
            question: " What will I learn in this course?",
            answer: `The skill you will build up with Spring Learn are Excel sort and filter, excel dashboard, functions in Excel, conditional in formatting, data validation, pivot tables and charts, data analysis in Excel, Macros and VBA.`,
          },

          
        ],
        faqs: [
          {
            type: "Course",
            question: "Who Should Attend This Course?",
            answer: `This course is designed for individuals looking to enhance their skills in data management and analysis, including beginners and professionals who wish to improve their proficiency in Microsoft Excel. Whether you are seeking to enroll in Excel courses online or looking for Excel classes near me, this training is suitable for anyone interested in mastering essential Excel functions. `,
          },
          {
            type: "Course",
            question: "What Are The Eligibility Criteria For This Course?",
            answer: `
  There are no strict eligibility criteria for this course. It is open to anyone eager to learn and improve their Excel skills. However, familiarity with basic computer operations is recommended. Whether you're pursuing Excel certification or simply interested in enhancing your skills through Excel training, this course is an excellent starting point. `,
          },
 

          {
            type: "Training",
            question: "Who should enroll in this course?",
            answer: `
Fresher, sales professionals, marketing professionals, strategies, business executives, data professionals are the best candidates for this course. `,
          },



          {
            type: "Exam",
            question: "What Practical Skills Will I Have On Completing The Ms Excel Basics Training?",
            answer: `
 Upon completing the Microsoft Excel training, you will gain practical skills in navigating the Excel interface, creating and formatting spreadsheets, utilizing basic formulas and functions, and implementing data visualization techniques. This knowledge will empower you to effectively handle tasks in various Excel courses and prepare you for more advanced Excel classes.
            `,
          },

        ],
      },
    },
    
    {
      id: 33,
      title: "Microsoft Project 2016",
      dbid:"67480cd0f99edee897525362",
      courseSubtitle: "Microsoft Project 2016 Course",
      description:
        "Microsoft Project is a project management software product built and offered by Microsoft that provides project management tools.",
        background: "linear-gradient(242deg, #A21230, #601500)",
      type: "",
      courseDetail: {
        price:{
          originalPrice: 24999,
          discountPrice: 14999,
          discount: 21,
        },
        courseCategory: "Project Management",
        enrolledImage:
          "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
        learnersEnrolled: "36,057+ Enrolled",
        bannerImage:
          "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
        rating: [
          {
            from: "google",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
            rate: 4.8,
          },
          {
            from: "facebook",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
            rate: 4.7,
          },
          {
            from: "reddit",
            logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
            rate: 4.9,
          },
        ],
        secretSauce: [],
        highlights: [
          "Understand and manage project budgets and timetables.",
          "Information on the project should be communicated and presented.",
          "To ensure that projects are completed on time, organize work and people.",
        ],
        careerDetail: [
          { carrer: "Career transformations", value: "450K" },
          { carrer: "Workshops every month", value: "250" },
          { carrer: "Countries and counting", value: "100" },
        ],
        overview: {
          courseDetail: [
            {
              icon: "",
              value: "16 Hours of Live, Instructor-Led Training",
            },
            {
              icon: "",
              value: "Practical Learning with MS Project 2016",
            },
            {
              icon: "",
              value: "Earn 45 PDUs Upon Course Completion",
            },
            {
              icon: "",
              value: "Instruction from Certified Experts",
            },
            {
              icon: "",
              value: "Engagement with Real-World Scenarios, Quizzes, and Case Studies",
            },
            {
              icon: "",
              value: "Access to Downloadable, Comprehensive Course Materials",
            },
          ],
          overviewDetail: `
 Microsoft Project training includes learning how to manage a project, which includes building a work breakdown structure (WBS), estimating task schedules and effort, assigning resources to tasks, and monitoring the budget and work using EVM, among other things. MS Project 2016 is the most recent version, and it includes a number of collaboration features that work with MS Project server.
   
 MS project standard and MS project professional are the two desktop versions of MS project. MS Project lite is also available at a low cost and allow team members to fill out actual effort and view their tasks on a web site.
`,
          overviewPoints: [],
          overviewCourseDescription: "",
        },
        highDemandAndAccerlated: {
          demandTitle: "Why Get Microsoft Project 2016 Course",
          demandHeading: "Growing Demand forMicrosoft Project 2016 Course",
          demandDetail: `
     MS Project Server provides many options for managing security and the desktop version of MS Project, which can also be customized via an app called PWA (project web application). The ability to seamlessly integrate Lync, SharePoint, Outlook, and other Microsoft office suites is critical. `,
          demandData: [
            {
              type: "Project Manager",
              averageSalary: [10, 17, 25],
              hiringCompany: [],
              demand: {
                percant: "33% Increase",
                description:
                  "anticipated in Project Management-oriented roles globally by 2027",
              },
            },
            {
              type: "Process Lead",
              averageSalary: [15, 31, 46],
              hiringCompany: [],
              demand: {
                percant: "22M",
                description:
                  "new Project Management jobs will be created by 2027 globally",
              },
            },
            {
              type: "PMO Lead",
              averageSalary: [18, 38, 56],
              hiringCompany: [],
              demand: {
                percant: "88M",
                description:
                  "individuals needed for Project Management roles by 2027",
              },
            },

            {
              type: "Project Director",
              averageSalary: [22, 43, 63],
              hiringCompany: [],
              demand: {
                percant: "$208 Billon",
                description:
                  "GDP risk due to potential PM talent shortages by 2027",
              },
            },
          ],
        },
        knowledgeHut: {
          
          subtitle: "The Springlearns Advantage",
          knowledgeHutData: [
            {
              icon: "",
              topic: "Learn by Doing",
              value:
                "Our hands-on learning approach allows you to acquire immediately applicable skills through practical experience.",
            },
            {
              icon: "",
              topic: "Real-World Focus",
              value: "Master theoretical concepts reinforced by practical case studies and exercises, enabling you to be productive from day one.",
            },
            {
              icon: "",
              topic:
                "Industry Experts",
              value:
                "Receive training from top practitioners who share their best practices and insights gained from diverse industries..",
            },
            {
              icon: "",
              topic: "Curriculum Designed by Experts",
              value:
                "Our advisory board regularly updates the curriculum to ensure it reflects the latest best practices and real-world relevance.",
            },
            {
              icon: "",
              topic: "Ongoing Learning Support",
              value:
                "Access a wealth of resources, including webinars, e-books, tutorials, articles, and interview questions, to support you throughout your learning journey.",
            },
            {
              icon: "",
              topic: "Exclusive Post-Training Sessions",
              value:
                "Benefit from detailed mentoring sessions after the training to address challenges and advance your career in Project Management.",
            },
          
          ],
        },
        courseAuthor: [],
        courseInstructor: [
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
            instructorName: "Himanshu Saxena",
            instructorProfession: "Trainer",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
            instructorDetail: `
          Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
            `,
          },
          {
            profilePic:
              "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
            instructorName: "Shivendra Sharma",
            instructorProfession: "Consultant, Author",
            experience: "20",
            companyLogo:
              "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
            instructorDetail: `
           Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
            `,
          },
        ],
        certification: {
          bannerImage:
            "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
          bannerTitle: "Ready to elevate your project management expertise?",
          certificationDetail: "",
          certificateImage: "",
        },
        prerequisites: [
          "Practice with more than 100 project download files at various levels of the 10 exercises presented.",
          "Inside Microsoft Project, you may manage all of your resources, including people, money, machinery, license, and even shared resources.",
        ],
        courseCurriculm: [
          {
            title: "Course Overview and Exam Techniques",
            isPreview: false,
            objective:
              "Get an introduction to Microsoft Project 2016Course, with an outline of the structure of Microsoft Project 2016 Course . Recognize the exam style and techniques.",
            topics: [
              "Introduction and Exam technique",
              "Overview of Microsoft Project 2016 ",
              "Course structure",
              "Exam style and technique",
            ],
          },
       
        ],
        learningObjective: [
          {
            title: "Representations",
            description:
              "   Construct visual representations of data using charts and graphs.",
          },
          {
            title: "Graphs and Charts",
            description:
              "Represent large amounts of data with useful graphs and charts.",
          },
          {
            title: "Themes",
            description:
              "Analyze the facts and make forecasts.",
          },
          {
            title: "Processes",
            description:
              "It can assist you in organizing data in a user-friendly manner.",
          },
          {
            title: "Functions",
            description:
              "Calculate and perform basic and sophisticated mathematical functions.",
          },
          
        ],
        whoCanAttendCourse: [
          "Project Managers",
          "Senior Managers",
          "Marketing professionals",
          "Strategies",
          "Business executives",
          "Data professionals ",
          
        ],
        aboutCourse: [
          {
            question: "What is a Microsoft Project 2016 ?",
            answer: `MS Project Server provides many options for managing security and the desktop version of MS Project, which can also be customized via an app called PWA (project web application). The ability to seamlessly integrate Lync, SharePoint, Outlook, and other Microsoft office suites is critical.`,
          },

          {
            question: " What will I learn in this course?",
            answer: `At the touch of a button, create hundreds of world-class, self-updating Graphical Reports.`,
          },

          
        ],
        faqs: [
          {
            type: "Course",
            question: "Who Should Attend This Course?",
            answer: `This course is designed for individuals looking to enhance their skills in data management and analysis, including beginners and professionals who wish to improve their proficiency in Microsoft Excel. Whether you are seeking to enroll in Excel courses online or looking for Excel classes near me, this training is suitable for anyone interested in mastering essential Excel functions. `,
          },
          {
            type: "Course",
            question: "What Are The Eligibility Criteria For This Course?",
            answer: `
  There are no strict eligibility criteria for this course. It is open to anyone eager to learn and improve their Excel skills. However, familiarity with basic computer operations is recommended. Whether you're pursuing Excel certification or simply interested in enhancing your skills through Excel training, this course is an excellent starting point. `,
          },
 

          {
            type: "Training",
            question: "Who should enroll in this course?",
            answer: `
Fresher, sales professionals, marketing professionals, strategies, business executives, data professionals are the best candidates for this course. `,
          },



          {
            type: "Exam",
            question: "What Practical Skills Will I Have On Completing The Ms Excel Basics Training?",
            answer: `
 Upon completing the Microsoft Excel training, you will gain practical skills in navigating the Excel interface, creating and formatting spreadsheets, utilizing basic formulas and functions, and implementing data visualization techniques. This knowledge will empower you to effectively handle tasks in various Excel courses and prepare you for more advanced Excel classes.
            `,
          },

        ],
      },
    },



//     {
//       id: 39,
//       title: "PMI-ACP® Certification",
//       courseSubtitle:
//         "PMI-ACP® (PMI Agile Certified Practitioner) Certification",
//       description:
//         "Elevate Your Career as an Agile Expert with PMI-ACP Certification Training",
//         background: "linear-gradient(242deg, #A21230, #601500)",
//       type: "",
//       courseDetail: {
//         courseCategory: "Agile Management",
//         enrolledImage:
//           "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
//         learnersEnrolled: "31,206+ Enrolled",
//         bannerImage:
//           "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
//         rating: [
//           {
//             from: "google",
//             logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
//             rate: 4.8,
//           },
//           {
//             from: "facebook",
//             logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
//             rate: 4.7,
//           },
//           {
//             from: "reddit",
//             logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
//             rate: 4.9,
//           },
//         ],
//         secretSauce: [],
//         highlights: [
//           "Apply cutting-edge Agile methodologies and practices.",
//           "Immersive course, designed by experienced Agilists",
//           "Experiential learning, real-world simulations, case studies, and more",
//         ],
//         careerDetail: [
//           { carrer: "Professional Trained", value: "450K" },
//           { carrer: "Workshops every month", value: "250" },
//           { carrer: "Countries and counting", value: "100" },
//         ],
//         overview: {
//           courseDetail: [
//             {
//               icon: "",
//               value: "21 Hours of Live Instructor-Led Sessions",
//             },
//             {
//               icon: "",
//               value: "Earn 21 PDUs on Course Completion",
//             },
//             {
//               icon: "",
//               value: "Real-World Simulations, Activities",
//             },
//             {
//               icon: "",
//               value: "Six Months Post-Class Career Guidance",
//             },
//             {
//               icon: "",
//               value: "Comprehensive Exam Prep Support",
//             },
//             {
//               icon: "",
//               value: "Digital Library of Learning Resources",
//             },
//           ],
//           overviewDetail: `
//    Enhance and validate your knowledge of Agile practices and techniques with the PMI-ACP® certification. Explore various approaches to agility including Scrum, Kanban, Lean, Extreme Programming (XP) and Test-Driven Development (TDD). Learn to cultivate an Agile mindset and gain hands-on expertise in Agile Project Management.

// By the end of the course, you’ll have mastered the practices and techniques that Agile practitioners use to improve team performance, resolve problems and engage in continuous process improvements and be equipped with job-ready skills.

// PMI-ACP® is a designation offered by Project Management Institute (PMI)® to candidates who can demonstrate their understanding by passing the assessment exam. PMI-ACP® is a registered trademark owned by PMI. Springlearns is an Authorized Training Partner of PMI.
//           `,
//           overviewPoints: [],
//           overviewCourseDescription: "",
//         },
//         highDemandAndAccerlated: {
//           demandTitle: "Why get the PMI-ACP Certification Training",
//           demandHeading: "Rising Demand for Agile Practitioners",
//           demandDetail: `
//         Project management is a discipline that holds huge promise with an estimated requirement of 2.3 million project-oriented jobs opening up every year till the year 2030. Agile adoption is widespread and growing fast with 97% of organizations reporting using Agile in some manner according to the 17th State of Agile report.

// PMI-ACP is a certification that is widely accepted and carries weight in both project management and Agile circles.
//           `,
//           demandData: [
//             {
//               type: "Project Manager",
//               averageSalary: [10, 17, 25],
//               hiringCompany: [],
//               demand: {
//                 percant: "33% Increase",
//                 description:
//                   "anticipated in Project Management-oriented roles globally by 2027",
//               },
//             },
//             {
//               type: "Agile Project Manager",
//               averageSalary: [12, 21, 35],
//               hiringCompany: [],
//               demand: {
//                 percant: "37%",
//                 description:
//                   "faster project delivery by teams practicing Agile",
//               },
//             },
//             {
//               type: "Agile Coach",
//               averageSalary: [17, 33, 51],
//               hiringCompany: [],
//               demand: {
//                 percant: "94%",
//                 description:
//                   "of organizations practicing Agile report increased quality in their projects",
//               },
//             },
//           ],
//         },
//         knowledgeHut: {
//           subtitle: "The Springlearns Advantage",
//           knowledgeHutData: [
//             {
//               icon: "",
//               topic: "Experiential Workshops",
//               value:
//                 "Activities, team-based exercises, case studies: High energy workshops with hands-on learning.",
//             },
//             {
//               icon: "",
//               topic: "Elite Panel of Agilists",
//               value:
//                 "Learn from the best certified Agilists with experience across different industries.",
//             },
//             {
//               icon: "",
//               topic: "Expert Practitioners",
//               value:
//                 "Get actionable tips and techniques for your Agile toolbox from our expert practitioners.",
//             },
//             {
//               icon: "",
//               topic: "Exam Preparation Support",
//               value:
//                 "Our training ensures that participants can pass the exam on their first attempt.",
//             },
//             {
//               icon: "",
//               topic: "Continual Learning Support",
//               value:
//                 "Webinars, e-books, tutorials, articles, and more - we're right by you in your learning journey!",
//             },
//             {
//               icon: "",
//               topic: "Certification Journey Support",
//               value:
//                 "Need help at any step of PRINCE2 certification? From enrolling to certification, we've got your back.",
//             },
//             {
//               icon: "",
//               topic: "Continual Learning Support",
//               value:
//                 "Webinars, e-books, tutorials, articles, and more - we're right by you in your learning journey.",
//             },
//             {
//               icon: "",
//               topic: "Post-Training Sessions",
//               value:
//                 "Six months of post-training mentor guidance to overcome challenges in your Agile career.",
//             },
//           ],
//         },
//         courseAuthor: [],
//         courseInstructor: [
//           {
//             profilePic:
//               "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
//             instructorName: "Himanshu Saxena",
//             instructorProfession: "Trainer",
//             experience: "20",
//             companyLogo:
//               "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
//             instructorDetail: `
//           Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
//             `,
//           },
//           {
//             profilePic:
//               "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
//             instructorName: "Shivendra Sharma",
//             instructorProfession: "Consultant, Author",
//             experience: "20",
//             companyLogo:
//               "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
//             instructorDetail: `
//            Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
//             `,
//           },
//         ],
//         certification: {
//           bannerImage:
//             "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
//           bannerTitle: "Ready to become a skilled Agile practitioner?",
//           certificationDetail: "",
//           certificateImage: "",
//         },
//         prerequisites: [
//           "There are no prerequisites to attend this training program.",
//           "To qualify for the PMI-ACP exam, PMI requires candidates to complete 21 hours of training in Agile practices by an authorized training partner of PMI. ",
//         ],
//         courseCurriculm: [
//           {
//             title: "ACP Exam Prep",
//             isPreview: false,
//             objective:
//               "Prepare for the PMI-ACP exam by understanding the course overview, completing the exam application, gaining insights into the exam structure, and adopting effective approaches to navigate the examination process on PMI Island.",
//             topics: [
//               "Course Overview",
//               "The Exam Application",
//               "The PMI-ACP Exam",
//               "Welcome to PMI Island! (Approaching the Exam)",
//             ],
//           },
//           {
//             title: "Leading Your Agile Team and Project",
//             isPreview: true,
//             objective:
//               "Gain a comprehensive understanding of agile methodologies, principles, and terminologies, covering PMBOK, predictive vs adaptive approaches, the historical evolution of agile, and a diverse range of specific methodologies like Scrum, Lean, Kanban, and more, culminating in the ability to critically assess and apply the most suitable agile method for various project scenarios.",
//             topics: [
//               "The PMBOK Guide",
//               "Predictive vs Adaptive Methodologies",
//               " The History of Agile",
//               "Basic Agile Concepts",
//               "Choosing Your Priorities",
//               "Terminology of Agile",
//               "Agile Methodologies: Scrum",
//               "Agile Methodologies: Extreme Programming",
//               "Agile Methodologies: Lean Software Development",
//               "Agile Methodologies: Feature-Driven Development (FDD)",
//               "Agile Methodologies: Dynamic Systems Development (DSDM)",
//               "Agile Methodologies: Crystal Development",
//               "Agile Methodologies: Kanban",
//               "Agile Methodologies: Scrum of Scrums, SAFe, and Disciplined Agile Development",
//               "Agile Methodologies - LeSS",
//               "Agile Methodologies: Nexus",
//               "Agile Methodologies: Picking the Perfect Method",
//               "Agile Principles and Mindset: EXAM Review",
//             ],
//           },

//           {
//             title: " Delivering Value in Agile Projects",
//             isPreview: false,
//             objective:
//               "Understand the principles of Value-Driven Delivery in Agile, encompassing concepts such as business value, project charter creation, value stream mapping, prioritization, story mapping, risk management, Deming's PDCA cycle, decision tree analysis, EMV, agile contracting, earned value, and the utilization of agile tracking tools, with a focus on preparing for the exam through a comprehensive review of Value Driven Delivery.",
//             topics: [
//               "What is Value Driven Delivery?",
//               "Understanding Business Value",
//               "The Project Charter",
//               "Value Stream Mapping",
//               "Prioritizing in Agile",
//               "Story Maps",
//               "Risk in Agile Projects",
//               "Deming and the PDCA",
//               "Decision Tree Analysis and EM",
//             ],
//           },
//         ],
//         learningObjective: [
//           {
//             title: "Agile Projects",
//             description:
//               "Learn about Agile project management. Learn how to implement them at your organization.",
//           },
//           {
//             title: "Agile Mindset",
//             description:
//               "Discover what having an Agile mindset is about and how it can make a difference for you.",
//           },
//           {
//             title: "Product Quality",
//             description:
//               "Find out how an Agile practitioner prioritises the quality of the product being delivered.",
//           },
//           {
//             title: "Stakeholder Engagement",
//             description:
//               "Learn to communicate effectively with stakeholders and work by combining different inputs.",
//           },
//           {
//             title: "Risk Management",
//             description:
//               "Learn to mitigate and manage risks by using Agile techniques in your organization.",
//           },
//           {
//             title: "Continuous Improvement",
//             description:
//               "Learn to experiment continuously to find better way of doing things and improving processes.",
//           },
//         ],
//         whoCanAttendCourse: [
//           "Software Engineers",
//           "Product Managers",
//           "Team Leaders",
//           "Business Analysts",
//           "Development Team Members",
//           "Testers",
//           "Aspiring Agilists",
//         ],
//         aboutCourse: [],
//         faqs: [
//           {
//             type: "Certification",
//             question: "PMI-ACP Certification",
//             answer: `The PMI-ACP certification is offered by PMI, a world-renowned body dedicated to helping professionals, leaders and organizations learn and validate their knowledge and skills in project management and professional development.
//               `,
//           },
//           {
//             type: "Certification",
//             question: "Can I get PMI-ACP certified without taking the course? ",
//             answer: `
//  You cannot get PMI-ACP certified without undertaking the course as per PMI requirements which includes 21 hours of training by an Authorized Training Partner.
//             `,
//           },
//           {
//             type: "PDUs",
//             question:
//               " How many PDUs do I earn by completing Springlearns PMI-ACP certification training? ",
//             answer: `
//  You earn 21 PDUs by participating in Springlearns PMI-ACP training program.
//             `,
//           },

//           {
//             type: "PDUs",
//             question:
//               " How many PDUs do I earn by completing Springlearns PMI-ACP certification training?  ",
//             answer: `
//  You will earn 21 PDUs by completing our training program for PMI-ACP certification.
//             `,
//           },
//           {
//             type: "PDUs",
//             question: "What if I have more questions about PDUs? ",
//             answer: `
//  You can write to us at support@Springlearns.com
//             `,
//           },

//           {
//             type: "Workshop Experience",
//             question: "Who are the instructors?  ",
//             answer: `All Springlearns PMI-ACP certification training is delivered by our team of accredited trainers. They deliver high quality training at par with the standards of excellence set out by PMI. Every candidate receives the same standard of training and content, irrespective of the trainer and the location.
//             `,
//           },

//           {
//             type: "Workshop Experience",
//             question: "How are the workshops structured? ",
//             answer: `Our PMI-ACP course focuses on engaging interaction — we only use lectures to cover the basic terms and concepts. Most class time is dedicated to fun exercises, lively discussions and team collaboration. We focus on practical solutions to real-world, challenges drawn from decades of experience as Agile practitioners, coaches, and professionals in Agile environments.
//             `,
//           },

//           {
//             type: "Workshop Experience",
//             question:
//               "Are course materials and workshop instructions provided in advance?  ",
//             answer: `Yes, your course material will be provided in advance. You will receive an email with a link to set your password a few days in advance of the scheduled course. You will have access to the study plan and all the course material.`,
//           },

//           {
//             type: "Finance",
//             question:
//               " Can I cancel my enrolment to the PMI-ACP course? Do I get a refund?",
//             answer: `
//   You can cancel your enrolment and receive refunds in line with our Cancellations and Refunds policy.
//             `,
//           },

//           {
//             type: "Exam",
//             question:
//               " Is the certification fee inclusive of the PMI-ACP course fee?  ",
//             answer: `
//   No, the PMI-ACP certification fee is not included in Springlearns training fee.
//             `,
//           },
//         ],
//       },
//     },

//     {
//       id: 40,
//       title: "Leading SAFe® 6.0 Training  ",
//       courseSubtitle:
//         "Leading SAFe® 6.0 Training with Springlearns Certification",
//       description:
//         "Unlock your potential as an Agile leader with our Leading SAFe® 6.0 Training",
//         background: "linear-gradient(242deg, #A21230, #601500)",
//       type: "",
//       courseDetail: {
//         courseCategory: "Business Management",
//         enrolledImage:
//           "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
//         learnersEnrolled: "11,999+ Enrolled",
//         bannerImage:
//           "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
//         rating: [
//           {
//             from: "google",
//             logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
//             rate: 4.8,
//           },
//           {
//             from: "facebook",
//             logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
//             rate: 4.7,
//           },
//           {
//             from: "reddit",
//             logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
//             rate: 4.9,
//           },
//         ],
//         secretSauce: [],
//         highlights: [
//           "Earn 16 SEUs &amp; PDUs: Gain valuable credits and certification, with exam fees included in the course.",
//           "Learn from Experts: Train with globally renowned SAFe Practice Consultants through interactive sessions featuring real-world simulations.",
//           "Engaging Learning Experience: Participate in hands-on activities, case studies, and role-plays to solidify your understanding of the SAFe implementation roadmap",
//         ],
//         careerDetail: [
//           { carrer: "Professional Trained", value: "4,50,000" },
//           { carrer: "Workshops every month", value: "250" },
//           { carrer: "Countries and counting", value: "100" },
//         ],
//         overview: {
//           courseDetail: [
//             {
//               icon: "",
//               value: "16 Hours of Live, Instructor-Led Training",
//             },
//             {
//               icon: "",
//               value: "Earn 16 PDUs and 16 SEUs for Continuous Learning",
//             },
//             {
//               icon: "",
//               value: "Hands-On Simulations and Activities",
//             },
//             {
//               icon: "",
//               value: "Comprehensive Exam Support for Success",
//             },
//             {
//               icon: "",
//               value: "Inclusive Learning Package with Exam Fee Covered",
//             },
//             {
//               icon: "",
//               value: "Robust Career Support, Including AI Resume Builder",
//             },
//             {
//               icon: "",
//               value: "Access to the SAFe Studio",
//             },
//             {
//               icon: "",
//               value: "1-Year Membership in the SAFe Community",
//             },
//             {
//               icon: "",
//               value: "Guidance from Industry Experts",
//             },
           
//           ],
//           overviewDetail: `
// With the ever-growing significance of being Lean-Agile, the Leading SAFe 6.0 certification
// course has taken on importance for organizations looking to adopt these methodologies at
// SpringLearns. In fact, this certification enhances your career prospects and value in a
// competitive job market since Scaled Agile Framework is the leading enterprise Agile approach
// with 53% of organizations using it, according to the 16th Annual State of Agile Report. Where
// Agile works miraculously well for small teams, todays enterprise has to keep up with and
// navigate the complexity of collaborative teams working across different functions and
// geographies. Delivering faster, higher-quality products and responsiveness to customer needs
// requires Agile adoption across your organization. However, many large-scale Agile
// transformations flounder due to poor structures or processes, delivering lackluster results.

//           `,
//           overviewPoints: [],
//           overviewCourseDescription: "",
//         },
//         highDemandAndAccerlated: {
//           demandTitle: "Why get the Leading SAFe® 6.0 Training",
//           demandHeading: "Rising Demand for Leading SAFe® 6.0 Training",
//           demandDetail: `
//        SAFe 6.0 training certification offers a complete solution that enables large Agile project teams
// to successfully execute transformations by adding an emphasis on Lean and Agile principles at
// all levels of an organization to ensure that everything is properly aligned and collaborating
// across teams. Join us at Spring Learns, and buy our Leading SAFe course 6.0 and learn more
// about practical skills in a leadership role when undertaking Agile transformations. You can
// register to the Leading SAFe 6.0 training offered through our SAFe online course 6.0, designed
// to reflect the flexibility and convenience principles to learn at your own pace. Here, you have the
// open registration option for leading SAFe 6.0 registration for upcoming classes, and our certified
// SAFe 6.0 training providers are dedicated to your success.
//           `,
//           demandData: [
//             {
//               type: "Project Manager",
//               averageSalary: [10, 17, 25],
//               hiringCompany: [],
//               demand: {
//                 percant: "33% Increase",
//                 description:
//                   "anticipated in Project Management-oriented roles globally by 2027",
//               },
//             },
//             {
//               type: "Agile Project Manager",
//               averageSalary: [12, 21, 35],
//               hiringCompany: [],
//               demand: {
//                 percant: "37%",
//                 description:
//                   "faster project delivery by teams practicing Agile",
//               },
//             },
//             {
//               type: "Agile Coach",
//               averageSalary: [17, 33, 51],
//               hiringCompany: [],
//               demand: {
//                 percant: "94%",
//                 description:
//                   "of organizations practicing Agile report increased quality in their projects",
//               },
//             },
//           ],
//         },
//         knowledgeHut: {
//           subtitle: "The Springlearns Advantage",
//           knowledgeHutData: [
//             {
//               icon: "",
//               topic: "16 Hours of Live, Instructor-Led Training",
//               value:
//                 "Engage in a comprehensive, interactive learning experience with our expert instructors over 16 hours.",
//             },
//             {
//               icon: "",
//               topic: "Earn 16 PDUs and 16 SEUs for Continuous Learning",
//               value:
//                 "Enhance your professional development by earning 16 Professional Development Units (PDUs) and 16 Scrum Education Units (SEUs).",
//             },
//             {
//               icon: "",
//               topic: "Hands-On Simulations and Activities",
//               value:
//                 "Participate in practical simulations and activities that mirror real-world scenarios,solidifying your understanding of the concepts.",
//             },
//             {
//               icon: "",
//               topic: "Comprehensive Exam Support for Success",
//               value:
//                 "Gain access to extensive exam preparation resources and support to help you excel in the SAFe certification exam.",
//             },
//             {
//               icon: "",
//               topic: "Inclusive Learning Package with Exam Fee Covered",
//               value:
//                 "Enjoy a complete learning experience, including the certification exam fee—no hidden costs.",
//             },
//             {
//               icon: "",
//               topic: "Robust Career Support, Including AI Resume Builder",
//               value:
//                 "Benefit from personalized job support, featuring LinkedIn profile reviews, resume enhancement tools, and access to numerous job listings.",
//             },
//             {
//               icon: "",
//               topic: "Access to the SAFe Studio",
//               value:
//                 "Immerse yourself in the SAFe ecosystem with exclusive resources, tools, and content available in the SAFe Studio.",
//             },
//             {
//               icon: "",
//               topic: "1-Year Membership in the SAFe Community",
//               value:
//                 "Connect with a vibrant community of SAFe practitioners and Agile enthusiasts for networking and ongoing learning.",
//             },
//             {
//               icon: "",
//               topic: "Guidance from Industry Experts",
//               value:
//                 "Receive mentorship from seasoned Agile professionals, offering invaluable insights and strategies to aid your career growth.",
//             },
//           ],
//         },
//         courseAuthor: [],
//         courseInstructor: [
//           {
//             profilePic:
//               "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
//             instructorName: "Himanshu Saxena",
//             instructorProfession: "Trainer",
//             experience: "20",
//             companyLogo:
//               "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
//             instructorDetail: `
//           Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
//             `,
//           },
//           {
//             profilePic:
//               "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
//             instructorName: "Shivendra Sharma",
//             instructorProfession: "Consultant, Author",
//             experience: "20",
//             companyLogo:
//               "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
//             instructorDetail: `
//            Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
//             `,
//           },
//         ],
//         certification: {
//           bannerImage:
//             "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
//           bannerTitle: "Ready to become a skilled Agile practitioner?",
//           certificationDetail: "",
//           certificateImage: "",
//         },
//         prerequisites: [
//           "There are no formal prerequisites to enroll in our Six Sigma Green Belt Certificationcourse. However, it is beneficial to have some practical experience in Lean Six Sigmaprinciples. This foundational experience will enhance your understanding and enableyou to apply concepts more effectively during the course.",
//           "We encourage individuals with a passion for process improvement and a desire to drive change within their organizations to join us!"
         
//         ],
//         courseCurriculm: [
//           {
//             title: "Introduction to Business Analysis",
//             isPreview: false,
//             objective: "",
//             topics: [
//               "Definition, Role, Requirements, Methodologies",
//               "Project Management Institute’s (PMI)® Code of Ethics",
//             ],
//           },
//         ],
//         learningObjective: [
//           {
//             title: "Effective Scaling",
//             description:
//               "Discover how to leverage SAFe® principles to cultivate a Lean-Agile mindset and successfully scale Lean and Agile methodologies in your organization.",
//           },
//           {
//             title: "Lean-Agile Principles",
//             description:
//               "Acquire the skills to implement Lean-Agile principles, fostering a mindset that prioritizes Lean thinking in managerial positions.",
//           },
//           {
//             title: "Value Delivery Optimization",
//             description:
//               "Learn how to integrate, deploy, and release value to improve the planning and execution of Program Increments (PIs).",
//           },
//           {
//             title: "SAFe 6.0 Core Competencies",
//             description:
//               "Delve into the seven core competencies defined in SAFe 6.0, concentrating on the development of large-scale solutions.",
//           },
//           {
//             title: "Embracing a Lean-Agile Mindset",
//             description:
//               "Gain insights into effectively scaling Lean and Agile practices by adopting the foundational principles of the Lean-Agile mindset.",
//           },
//           {
//             title: "Program Increment Execution",
//             description:
//               "Hone your skills in planning and executing Program Increments to ensure successful project delivery.",
//           },
//           {
//             title: "Utilizing Agile Release Trains (ARTs)",
//             description:
//               "Learn the processes involved in executing and delivering value via Agile Release Trains.",
//           },
//           {
//             title: "Agile Budgeting Strategies",
//             description:
//               "Explore techniques for developing an Agile portfolio through effective Lean-Agile budgeting practices.",
//           },
//         ],
//         whoCanAttendCourse: [
//           "Executives and Leaders",
//           "Infrastructure Management Professionals",
//           "Product Managers",
//           "Team Leads and Managers",
//           "Enterprise, System, and Solution Architects",
         
//         ],
//         aboutCourse: [],
//         faqs: [
//           {
//             type: "Training",
//             question:
//               "What is the Leading SAFe® 6.0 Certification Course?",
//             answer: `The Leading SAFe® 6.0 Certification Course is designed for leaders and change agents who
// want to implement Lean-Agile practices using the Scaled Agile Framework (SAFe). This course
// provides in-depth knowledge and skills to navigate Agile transformations effectively.
//               `,
//           },
//           {
//             type: "Training",
//             question: "Who should attend this course?",
//             answer: `
// This course is ideal for executives, managers, project managers, product managers, and
// anyone involved in leading Agile transformations or initiatives within their organization.

//             `,
//           },
//           {
//             type: "Training",
//             question: "How long is the course?",
//             answer: `
// The Leading SAFe® 6.0 course typically spans 16 hours of live, instructor-led training, which
// can be delivered over two days.
//             `,
//           },

//           {
//             type: "Training",
//             question: "What certification will I receive upon completion?",
//             answer: `
//  Upon successfully passing the exam, participants will receive the SAFe Agilist certification, a
// globally recognized credential that demonstrates your knowledge of the SAFe framework.
//             `,
//           },
//           {
//             type: "Exam",
//             question:
//               "How can I prepare for the certification exam?",
//             answer: `Preparation materials, including practice tests and study guides, are provided during the course
// to help you feel confident and ready for the exam.`,
//           },
          
//           {
//             type: "Exam",
//             question:
//               "Can I retake the certification exam if I don't pass ?",
//             answer: `Yes, participants are allowed to retake the certification exam if they do not pass on their first
// attempt. Specific policies regarding retake fees and procedures will be provided during the
// course.`,
//           },

//           {
//             type: "Exam",
//             question: "What are the prerequisites for enrolling in this course?",
//             answer: `There are no formal prerequisites; however, having at least five years of experience in
// software development, testing, or project management is beneficial.`,
//           },

//           {
//             type: "Exam",
//             question: "How can I prepare for the SAFe certification exam effectively?",
//             answer: `The course provides comprehensive exam preparation materials, practice tests, and study
// guides to help ensure your success.`,
//           },

//           {
//             type: "Exam",
//             question: "Can I retake the certification exam if I don’t pass on my first attempt?",
//             answer: `Yes, if you don’t pass the exam, you will have the opportunity to retake it. Specific retake
// policies and any associated fees will be provided during the course.`,
//           },

//           {
//             type: "Workshop Experience",
//             question: "What will I accomplish after completing the Leading SAFe online course?",
//             answer: `After completing the course, you will gain a thorough understanding of the SAFe framework
// and be equipped to lead Agile transformations within your organization.`,
//           },
//           {
//             type: "Workshop Experience",
//             question: "What career opportunities can I expect after obtaining the Leading SAFe certification?",
//             answer: `Earning the SAFe Agilist certification enhances your professional credibility and opens
// doors to various roles in Agile project management and leadership across industries.`,
//           },

        

//           {
//             type: "Finance",
//             question: "How long is the course, and how is it delivered?",
//             answer:
//               "The Leading SAFe® 6.0 course spans 16 hours and is delivered through live, instructor-led online sessions.",
//           },
          
         
//         ],
//       },
//     },



{
  id: 34,
  dbid: "67482068f99edee897525fd9",
  title: "Financial Modeling Excel Course",
  courseSubtitle:
    "Financial Modeling with Excel Training Course (FME)",
  description:
    "Enhance your finance expertise with our Financial Modeling Excel Course.",
    background: "linear-gradient(242deg, #A21230, #601500)",
  type: "recent-addition",
  courseDetail: {
    price:{
      originalPrice: 29999,
      discountPrice: 19999,
      discount: 21,
    },
    courseCategory: "Project Management",
    enrolledImage:
      "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
    learnersEnrolled: "40,335+ Enrolled",
    bannerImage:
      "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_04%20copy-19384d3ccbf24ef0b51b6eed763ee54d.webp&w=1920&q=75",
    rating: [
      {
        from: "google",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
        rate: 4.8,
      },
      {
        from: "facebook",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
        rate: 4.7,
      },
      {
        from: "reddit",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
        rate: 4.9,
      },
    ],
    secretSauce: [
      {
        image:
          "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Experiential%20Learning_CSM_Revised-79e5519eb45244c98cf06fa7153f5d22.svg",
        detail: "Premium 2000+ Question Bank",
      },
      {
        image:
          "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Complimentary%20Mock%20Tests_CSM-01-2b7c9e6768584b72bc6c2d4a0b6a466d.svg",
        detail: "Free PMP Exam Simulator",
      },
      {
        image:
          "https://d2o2utebsixu4k.cloudfront.net/Learn With Us_Scrum Enablement Sessions_CSM-6a6626d72fe14f6e9a86191dd6b507f9.svg",
        detail: "Complimentary Mock Tests",
      },
      {
        image:
          "https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Free%20Agile%20and%20Scrum_20%20SEUs_CSM-01-01-91096e895f5e427db5635a1a7ccc8a81.svg",
        detail: "Guaranteed Exam Pass Study Plan",
      },
    ],
    highlights: [
      "Learn how to analyze historical data and make informed forecasts.",
      "Understand the importance of accuracy in your models through robust checks and realistic assumptions.",
      "Gain hands-on experience with advanced Excel functions tailored for financial modeling.",
    ],
    careerDetail: [
      { carrer: "Career transformations", value: "450k" },
      { carrer: "Workshops every month", value: "200" },
      { carrer: "Countries and counting", value: "100" },
    ],
    overview: {
      courseDetail: [
        {
          icon: "",
          value: "Interactive 24-Hour Live Training",
        },
        {
          icon: "",
          value: "Excel Mastery Through Practical Training",
        },
        {
          icon: "",
          value: "Essential Tips and Techniques",
        },
        {
          icon: "",
          value: "Expert-Led Instruction",
        },
        {
          icon: "",
          value: "Hands-On Practical Exercises",
        },
        {
          icon: "",
          value: "Certification of Completion",
        },
       
      ],
      overviewDetail: `Microsoft Excel is a leading tool for finance professionals, recognized for its capacity to build and manage intricate financial models efficiently. As a cornerstone of financial management, Excel empowers users to navigate complex calculations and seamlessly integrate data.
Mastering financial modeling is essential for success in the accounting and finance sectors. At Springlearns, our Financial Modeling with Excel Training course is designed to equip learners with the vital techniques needed to construct and analyze sophisticated financial models. Guided by experienced instructors, this course provides practical insights into leveraging Excel’s powerful features.


`,
     
      overviewCourseDescription: ``,
    },
    highDemandAndAccerlated: {
      demandTitle: "Demand for  PMP Certified Professionals",
      demandHeading: "10M+ Job Openings in Project Management By 2030",
      demandDetail: `The profession of project management has recently become one of the hottest jobs, not only in the tech market, but across industries. Demand for project managers is growing faster than demand for workers in other occupations and by 2027, 90 million individuals will need to be skilled in project-oriented roles.

The PMP certification can help you land lucrative roles in IT, manufacturing, finance, healthcare, and other exciting industries. With more than 1.2 million PMP certification holders worldwide, the median salary for PMP holders across the world is 16% higher (as high as 32% in the US) than what their non-certified peers earn.

Build your Project Management skills, get PMI certified, and be sure to capitalize on the high demand across industries.`,
      demandData: [
        {
          type: "Project Manager",
          averageSalary: [10, 17, 25],
          hiringCompany: [],
          demand: {
            percant: "33% Increase",
            description:
              "anticipated in Project Management-oriented roles globally by 2027",
          },
        },
        {
          type: "Project Lead",
          averageSalary: [15, 31, 46],
          hiringCompany: [],
          demand: {
            percant: "22M",
            description:
              "new Project Management jobs will be created by 2027 globally",
          },
        },
        {
          type: "PMO Lead",
          averageSalary: [18, 38, 56],
          hiringCompany: [],
          demand: {
            percant: "88M",
            description:
              "individuals needed for Project Management roles by 2027",
          },
        },
        {
          type: "Project Director",
          averageSalary: [22, 43, 63],
          hiringCompany: [],
          demand: {
            percant: "US$ 208 Billion",
            description:
              "GDP risk due to potential PM talent shortages by 2027",
          },
        },
      ],
    },
    knowledgeHut: {
      subtitle: "The Springlearns Advantage",
      knowledgeHutData: [
        {
          icon: "",
          topic: "Learn from Industry Leaders",
          value:
            " Engage with top-tier instructors who bring real-world experience to the classroom. Benefit from their expertise as you practice under their guidance.",
        },
        {
          icon: "",
          topic: "Cutting-Edge Curriculum",
          value:
            " Stay ahead of the curve by acquiring the latest skills and techniques, ensuring you are well-versed in current industry trends and practices",
        },
        {
          icon: "",
          topic: "Interactive Hands-On Training",
          value:
            " Experience in-depth, instructor-led sessions that cover essential Excel and accounting principles, offering a thorough understanding of the subject matter.",
        },
        {
          icon: "",
          topic: "Expert-Curated Practical Exercises",
          value:
            " Enhance your learning through targeted exercises designed by industry experts, helping you reinforce and retain your knowledge effectively.",
        },
        {
          icon: "",
          topic: "Strong Foundation Building",
          value:
            "Start from the basics and progressively master advanced Excel and accounting concepts, ensuring a solid understanding that supports future learning.",
        },
        {
          icon: "",
          topic: "Springlearns Certification",
          value:
            " Validate your skills with a Certificate of Completion from Springlearns, making a strong impression on potential employers and setting yourself apart in the job market.",
        },
       
      ],
    },
    courseAuthor: [
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Maheshwar Nynaru-661980df7288463f842b2aae105322a0.svg",
        instructorName: "Maheshwar Nynarus",
        instructorProfession: "Trainer & Consultant",
        experience: "30",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/capgemini 60x26-45b78461bcc14011898baf17b9965ddb.svg",
        instructorDetail: `With 30+ years of experience in Banking and IT, Maheshwar Nynaru is a seasoned consultant specializing in Project Management and IT Service Management. A PMP Certified professional and PMI Authorized Training Partner Instructor, he holds the ITIL Expert Level Certification and has delivered over 500 ITIL and PMP training sessions, showcasing a commitment to excellence and knowledge dissemination in the field.`,
      },
    ],
    courseInstructor: [
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Alpesh Vasant-9cfb4f70ff2444cf8e37e21aa85ec8e5.svg",
        instructorName: "Alpesh Vasant",
        instructorProfession: "Trainer",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
        instructorDetail: `
        Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
        His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
        `,
      },
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Santhosh Kannan-100a3c877b1544cc8a8dc0fe7a7a987b.svg",
        instructorName: "Santhosh Kannan",
        instructorProfession: "Trainer & Consultant",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
        instructorDetail: `
        Alpesh Vasant is an experienced and certified professional, currently leading as the Director and Principal Trainer. With a strong background in ITIL4, he excels in understanding client operations and processes, identifying technical training needs, and providing customized, effective solutions. Alpesh's expertise extends to offering turnkey consultancy and fostering a culture of continuous process improvement within organizations. 
        His ITIL 2011 certification complements his wide array of specialties, including Project Management (covering PMP 6th Edition, PRINCE2, Prince2Agile, Scrum), Office Automation (expertise in various Office suites and Macro Programming using VBA), Databases (Oracle, SQL Server, MySQL, PostgreSQL, MongoDB), Web Technology (HTML, CSS, JavaScript, XML, ASP, JSP), and Networking (Windows, Linux, Server Administration). Alpesh is also skilled in Six Sigma DMAIC Methodology, Minitab, FMEA, 5 S, and 8 D. 
        `,
      },
    ],
    certification: {
      bannerImage:
        "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
      bannerTitle:
        "Maximize Your PMP Exam Success with Our Exclusive Offer!",
      certificationDetail:
        "On clearing your PMP exam, you earn more than just project management skills: you receive the coveted PMP certificate from the esteemed Project Management Institute and join the elite club of 1.4 Million PMP certification holders worldwide.",
      certificateImage:
        "https://d2o2utebsixu4k.cloudfront.net/PMP-52632d2cc0024411a1b1fd83a30497b2.svg",
    },
    prerequisites: [
      "Learn the best practices for tackling various financial modeling projects, ensuring effective and accurate results.",
      "Gain insights on effectively managing assets and liabilities, enhancing your ability to prepare and balance sheets confidently.",
      "Discover how to leverage Excel to create essential components such as structural templates, tables of contents, calculations, and error-checking mechanisms.",
      "Learn to conduct ratio analysis to interpret financial statements, enabling management to make informed, forward-looking decisions.",
    ],
    courseCurriculm: [
      {
        title: " Financial Modeling with Excel Training Course",
        isPreview: false,
        objective: `
       Enhance your finance expertise with our Financial Modeling Excel Course. This comprehensive FME training is designed for aspiring financial analysts and professionals seeking to master financial modeling techniques.`,
        topics: [
          "Master Financial Modeling Projects",
          "Balance Sheet Mastery",
          "Deep Dive into Financial Statements",
          "Excel for Financial Applications",
          "Comprehensive Ratio Analysis",
          "Navigating Risk Scenarios",
         
        ],
      },
      {
        title: "Start the Project",
        isPreview: false,
        objective:
          "In this module, you will learn to define and discuss stakeholders and the most effective ways to communicate with them, explain the best ways to form a team, describe how to build the most effective understanding of a project and how doing so relates to executing a project successfully and explain how predictive and adaptive project life cycles work; explain what a hybrid development approach is.",
        topics: [
          "Identify and Engage Stakeholders",
          "Form the Team",
          "Build a Shared Understanding of the Project",
          "Project Approach",
        ],
      },
    ],
    learningObjective: [
      {
        title: "Master Financial Modeling Projects",
        description:
          "Learn the best practices for tackling various financial modeling projects, ensuring effective and accurate results.",
      },
      {
        title: "Balance Sheet Mastery",
        description:
          " Gain insights on effectively managing assets and liabilities, enhancing your ability to prepare and balance sheets confidently.",
      },
      {
        title: "Deep Dive into Financial Statements ",
        description:
          " Build a solid understanding of the three primary financial statements and their key differences, laying a strong foundation for advanced analysis.",
      },
      {
        title: "Excel for Financial Applications ",
        description:
          " Discover how to leverage Excel to create essential components such as structural templates, tables of contents, calculations, and error-checking mechanisms.",
      },
      {
        title: "Comprehensive Ratio Analysis ",
        description:
          " Learn to conduct ratio analysis to interpret financial statements, enabling management to make informed, forward-looking decisions.",
      },
      {
        title: "Navigating Risk Scenarios",
        description:
          " Develop skills to assess model sensitivities and scenarios, including breakeven analysis, what-if scenarios, and payback calculations to better manage financial risks. ",
      },
     
      
    ],
    whoCanAttendCourse: [
      "Corporate Finance Professionals",
      "CFOs and Financial Controllers",
      "Finance Analysts",
      "Credit and Risk Managers",
      "Financial Analysts",
      "Mergers and Acquisitions Specialists",
      "Aspiring Finance Professionals",
      "Graduates and Postgraduates",
      "Post-Doctoral Professionals",
    ],
    aboutCourse: [
      {
        question: " Why is this program important?",
        answer: `This program is crucial for developing advanced financial modeling skills, enabling you to analyze data effectively, make informed decisions, and enhance your career prospects in finance and accounting.
`,
      },
      {
        question:
          "Who should consider this training course?",
        answer: `This course is tailored for finance professionals, analysts, aspiring CFOs, and anyone looking to strengthen their financial modeling skills to advance their careers.
`,
      },
    ],
    faqs: [
      {
        type: "Training",
        question:
          " What tools or software do I need for this course?",
        answer: `You will need a computer with Microsoft Excel installed. We recommend using the latest version for optimal functionality.
`,
      },
      {
        type: "Training",
        question:
          " Are there any prerequisites for this training?",
        answer: `While basic knowledge of Excel and foundational finance concepts is helpful, the course is designed for all learners, regardless of their starting point.
`,
      },

      {
        type: "Workshop",
        question:
          ". Will I receive personalized feedback during the training?",
        answer: `Yes, our instructors provide personalized feedback on your projects and exercises, helping you improve your skills throughout the course.
`,
      },

      {
        type: "Workshop",
        question: "Is there an assessment at the end of the course?",
        answer: `
       Yes, you will complete a capstone project that showcases your financial modeling skills. Successful completion will earn you a certificate.`,
      },

      {
        type: "Workshop",
        question: "How is this course different from other financial modeling courses?",
        answer: `
       Our course combines practical exercises with expert-led instruction, ensuring you not only learn the theory but also apply it in real-world scenarios.
`,
      },

      {
        type: "Finance",
        question: ".  What kind of support is available during the course?",
        answer: `Participants have access to instructor support during and after sessions, as well as a community forum to discuss questions with peers.
`,
      },

      {
        type: "Finance",
        question: " Are there any networking opportunities during the course?",
        answer:
          "Yes, you will have the chance to network with industry professionals and fellow participants, fostering valuable connections in the finance community.",
      },
      {
        type: "Finance",
        question: " How do I track my progress throughout the course?",
        answer: `You’ll receive regular updates from instructors on your progress, and assessments will help you gauge your understanding of the material.`,
      },

     
     
      
    ],
  },
},

{
  id: 35,
  dbid: "67484f7af99edee89752622e",
  title: "Big Data and Hadoop Training ",
  courseSubtitle: "Big Data and Hadoop Training Course",
  description:
    "Enhance your data analysis skills and become a data expert with our Big Data and Hadoop Training Course",
    background: "linear-gradient(242deg, #A21230, #601500)",
  type: "",
  courseDetail: {
    price:{
      originalPrice: 39999,
      discountPrice: 29999,
      discount: 21,
    },
    courseCategory: "Project Management",
    enrolledImage:
      "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
    learnersEnrolled: "36,057+ Enrolled",
    bannerImage:
      "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
    rating: [
      {
        from: "google",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
        rate: 4.8,
      },
      {
        from: "facebook",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
        rate: 4.7,
      },
      {
        from: "reddit",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
        rate: 4.9,
      },
    ],
    secretSauce: [],
    highlights: [
      "Gain an in-depth understanding of different Big Data frameworks.",
      "Experience hands-on training in Big Data Analytics with Hadoop.",
      "Work on projects involving banking, government sectors, e-commerce, and more.",
    ],
    careerDetail: [
      { carrer: "Career transformations", value: "450K" },
      { carrer: "Workshops every month", value: "250" },
      { carrer: "Countries and counting", value: "100" },
    ],
    overview: {
      courseDetail: [
        {
          icon: "",
          value: "Career Advancement",
        },
        {
          icon: "",
          value: "High Demand for Skills",
        },
        {
          icon: "",
          value: "Increased Earning Potential:",
        },
        {
          icon: "",
          value: "Opportunities with Leading Companies",
        },
        {
          icon: "",
          value: "Cost-Effectiveness",
        },
        {
          icon: "",
          value: "Faster Access to Data Sources",
        },
      ],
      overviewDetail: `
At the heart of data analysis lies the ability to interpret raw data, process it, and derive meaningful insights that can inform business strategies. Recent research indicates that nearly 2.5 quintillion bytes of data are generated daily, with this figure steadily increasing. Traditional frameworks and platforms struggle to efficiently manage such vast amounts of data, highlighting the need for distributed storage and parallel processing solutions. Apache Hadoop emerges as a vital tool for addressing these challenges and effectively managing Big Data.

`,
      overviewPoints: [],
      overviewCourseDescription: "",
    },
    highDemandAndAccerlated: {
      demandTitle: "Why Get Big Data and Hadoop Training Course",
      demandHeading: "Growing Demand for Big Data and Hadoop Training Course",
      demandDetail: `
In simple terms, Big Data represents the challenge, while Hadoop serves as a powerful solution. With its HDFS component, Hadoop addresses the distributed storage issue, while the MapReduce framework enhances parallel data processing. According to Gartner, approximately 26% of analysts utilize Hadoop in their daily operations, making it essential to learn this platform to remain competitive. Additionally, Hadoop is scalable and cost-effective, greatly simplifying the tasks of data analysts. `,
      demandData: [
        {
          type: "Project Manager",
          averageSalary: [10, 17, 25],
          hiringCompany: [],
          demand: {
            percant: "33% Increase",
            description:
              "anticipated in Project Management-oriented roles globally by 2027",
          },
        },
        {
          type: "Process Lead",
          averageSalary: [15, 31, 46],
          hiringCompany: [],
          demand: {
            percant: "22M",
            description:
              "new Project Management jobs will be created by 2027 globally",
          },
        },
        {
          type: "PMO Lead",
          averageSalary: [18, 38, 56],
          hiringCompany: [],
          demand: {
            percant: "88M",
            description:
              "individuals needed for Project Management roles by 2027",
          },
        },

        {
          type: "Project Director",
          averageSalary: [22, 43, 63],
          hiringCompany: [],
          demand: {
            percant: "$208 Billon",
            description:
              "GDP risk due to potential PM talent shortages by 2027",
          },
        },
      ],
    },
    knowledgeHut: {
      
      subtitle: "The Springlearns Advantage",
      knowledgeHutData: [
        {
          icon: "",
          topic: "Learn the Fundamentals",
          value:
            "Understand the basics of Big Data and gain comprehensive knowledge of key concepts and tools in Big Data Analytics.",
        },
        {
          icon: "",
          topic: "Debugging Techniques",
          value: "Learn best practices for Hadoop development, including essential debugging techniques to enhance your coding efficiency.",
        },
        {
          icon: "",
          topic:
            "MapReduce",
          value:
            "Explore MapReduce, the Hadoop Distributed File System (HDFS), and YARN, along with techniques for writing effective MapReduce code..",
        },
        {
          icon: "",
          topic: "Hadoop Frameworks",
          value:
            "Get hands-on experience with Hadoop frameworks like Apache Pig™, Apache Hive™, Sqoop, and Flume, among other key projects.",
        },
        {
          icon: "",
          topic: "Efficient Data Extraction",
          value:
            "Discover how to process large datasets using Big Data tools to extract valuable information from various sources.",
        },
        {
          icon: "",
          topic: "Real-World Analytics",
          value:
            "Engage in real-world analytics by studying advanced topics related to the Hadoop API through an interactive e-courseware.",
        },
      
      ],
    },
    courseAuthor: [],
    courseInstructor: [
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
        instructorName: "Himanshu Saxena",
        instructorProfession: "Trainer",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
        instructorDetail: `
      Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
        `,
      },
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
        instructorName: "Shivendra Sharma",
        instructorProfession: "Consultant, Author",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
        instructorDetail: `
       Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
        `,
      },
    ],
    certification: {
      bannerImage:
        "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
      bannerTitle: "Ready to elevate your project management expertise?",
      certificationDetail: "",
      certificateImage: "",
    },
    prerequisites: [
      "Before starting a Big Data and Hadoop course, candidates should have a basic understanding of programming languages like Python, Scala, or Java. Familiarity with SQL (Structured Query Language) and a foundational knowledge of Relational Database Management Systems (RDBMS) are also recommended. These skills will help you fully engage with the course material and maximize your learning experience.",
      
    ],
    courseCurriculm: [
      {
        title: "Course Overview and Exam Techniques",
        isPreview: false,
        objective:
          "Get an introduction to Big Data and Hadoop Training Course , with an outline of the structure of Microsoft Project 2016 Course . Recognize the exam style and techniques.",
        topics: [
          "Introduction and Exam technique",
          "Overview of Big Data and Hadoop Training Course",
          "Course structure",
          "Exam style and technique",
        ],
      },
   
    ],
    learningObjective: [
      {
        title: "Interactive Instructor-led Classroom",
        description:
          "  Engage with our instructors in a dynamic learning environment where you can ask questions, participate in discussions, and apply what you learn in real-time. Our instructors are seasoned industry experts dedicated to providing hands-on education.",
      },
      {
        title: "Expert-Designed Curriculum",
        description:
          "Our course materials are continually updated to reflect the latest technological advancements. This ensures you remain competitive and well-equipped with contemporary skills that empower your career.",
      },
      {
        title: "Practical Learning Approach",
        description:
          "At Springlearns, we emphasize learning by doing. You'll explore theoretical concepts through practical case studies, exercises, and coding practice, enabling you to gain applicable skills and knowledge.",
      },
      {
        title: "Guidance from Industry Professionals",
        description:
          "Learn from experienced mentors who are leaders in their fields. Our instructors bring a wealth of knowledge and real-world insights, enhancing your educational experience.",
      },
      {
        title: "Step-by-Step Learning Journey",
        description:
          "We start with the fundamentals and guide you through progressively advanced topics, ensuring a comprehensive understanding of tools and techniques.",
      },
      {
        title: "Professional Code Reviews",
        description:
          "Receive valuable feedback on your projects from seasoned developers, helping you refine your skills and achieve excellence in your work.",
      },
     
      
    ],
    whoCanAttendCourse: [
      "Data Architects",
      "Data Scientists",
      "Business Intelligence (BI) Analysts",
      "Developers",
      "Data Analysts",
      "Consultants",
      "Java Software Engineers",
      "Big Data Analysts",
      "BI Developers",
      "SAS Developers",
      
    ],
    aboutCourse: [
      {
        question: "Why is this course important?",
        answer: `Hadoop has become the leading technology for managing vast amounts of data, essential for storage, processing, and analysis. As Big Data analytics continues to deliver significant advantages, organizations are increasingly seeking professionals skilled in extracting valuable insights from both structured and unstructured data. At Springlearns, our comprehensive course on Big Data Analytics and Hadoop development equips you with the necessary skills to develop, maintain, and leverage your Hadoop cluster for organizational success.`,
      },

      {
        question: " What practical skills will I gain upon completion of the course?",
        answer: `This course offers a solid foundation in Big Data concepts while providing hands-on experience with Hadoop, ensuring you are prepared for real-world applications in data analytics.`,
      },

      
    ],
    faqs: [
      {
        type: "Course",
        question: "Is the course available in an online or virtual format?",
        answer: `Yes, the course is offered in both online and virtual formats, allowing for flexible learning options. `,
      },
      {
        type: "Course",
        question: "What type of support will I receive during the course?",
        answer: `
        You will have access to experienced instructors who provide guidance and support throughout your learning journey, ensuring you understand the material and can apply it effectively. `,
      },


      {
        type: "Training",
        question: "Will I receive a certification after completing the course?",
        answer: `
Yes, participants will receive a certificate of completion, which can be a valuable addition to your professional credentials.
 `,
      },



     
    ],
  },
},

{
  id: 36,
  dbid: "67485782f99edee8975268b2",
  title: "CBAP Certification (Certified Business Analysis Professional) ",
  courseSubtitle: "CBAP Certification Training Course",
  description:
    "Achieve a higher salary as a recognized leader in the Business Analysis community.",
    background: "linear-gradient(242deg, #A21230, #601500)",
  type: "",
  courseDetail: {
    price:{
      originalPrice: 29999,
      discountPrice: 19999,
      discount: 21,
    },
    courseCategory: "Project Management",
    enrolledImage:
      "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
    learnersEnrolled: "36,057+ Enrolled",
    bannerImage:
      "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
    rating: [
      {
        from: "google",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
        rate: 4.8,
      },
      {
        from: "facebook",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
        rate: 4.7,
      },
      {
        from: "reddit",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
        rate: 4.9,
      },
    ],
    secretSauce: [],
    highlights: [
      "Aligned with the latest BABOK® Guide v3.",
      "Prepare to excel in the CBAP exam with IIBA-approved course materials.",
      "Join the elite ranks of business analysts by becoming a CBAP-certified professional.",
    ],
    careerDetail: [
      { carrer: "Career transformations", value: "450K" },
      { carrer: "Workshops every month", value: "250" },
      { carrer: "Countries and counting", value: "100" },
    ],
    overview: {
      courseDetail: [
        {
          icon: "",
          value: "The Most Effective CBAP Training",
        },
        {
          icon: "",
          value: "86+ Hours of On-Demand Self-Paced Learning",
        },
        {
          icon: "",
          value: "Earn 35 PD Hours, 35 CDUs, and 35 PDUs",
        },
        {
          icon: "",
          value: "Comprehensive Exam Support to Ensure Success",
        },
        {
          icon: "",
          value: "Reinforce Your Learning with Interactive Quizzes",
        },
        {
          icon: "",
          value: "35 Hours of Live Instructor-Led Online Training",
        },
        {
          icon: "",
          value: "Refine Your Expertise Through Engaging Case Studies",
        },
        {
          icon: "",
          value: "Learn from Top Industry Experts with Certifications",
        },
        {
          icon: "",
          value: "Measure Your Progress with Comprehensive Assessments",
        },
        {
          icon: "",
          value: "180-Day FREE Pass for Live Training Sessions",
        },
      ],
      overviewDetail: `
Achieve the CBAP certification to enhance your business analysis capabilities and learn best practices for achieving optimal business outcomes in your organization. This comprehensive Certified Business Analysis Professional (CBAP) exam preparation course covers all essential business analysis concepts, ensuring you are well-prepared to pass the exam with confidence.
`,
      overviewPoints: [],
      overviewCourseDescription: "",
    },
    highDemandAndAccerlated: {
      demandTitle: "Why GetCBAP Certification Training Course",
      demandHeading: "Growing Demand for CBAP Certification Training Course",
      demandDetail: `
The CBAP certification course is fully aligned with the latest Guide to the Business Analysis Body of Knowledge (BABOK Guide) v3. Offered by the International Institute of Business Analysis (IIBA), CBAP is a prestigious certification for individuals with substantial business analysis experience who demonstrate their expertise by successfully passing the exam.
 `,
      demandData: [
        {
          type: "Project Manager",
          averageSalary: [10, 17, 25],
          hiringCompany: [],
          demand: {
            percant: "33% Increase",
            description:
              "anticipated in Project Management-oriented roles globally by 2027",
          },
        },
        {
          type: "Process Lead",
          averageSalary: [15, 31, 46],
          hiringCompany: [],
          demand: {
            percant: "22M",
            description:
              "new Project Management jobs will be created by 2027 globally",
          },
        },
        {
          type: "PMO Lead",
          averageSalary: [18, 38, 56],
          hiringCompany: [],
          demand: {
            percant: "88M",
            description:
              "individuals needed for Project Management roles by 2027",
          },
        },

        {
          type: "Project Director",
          averageSalary: [22, 43, 63],
          hiringCompany: [],
          demand: {
            percant: "$208 Billon",
            description:
              "GDP risk due to potential PM talent shortages by 2027",
          },
        },
      ],
    },
    knowledgeHut: {
      
      subtitle: "The Springlearns Advantage",
      knowledgeHutData: [
        {
          icon: "",
          topic: "Immersive Learning Experience",
          value:
            " Participate in dynamic workshops that foster interaction, allowing you to ask questions, seek clarifications, and engage in discussions that deepen your grasp of business analysis principles.",
        },
        {
          icon: "",
          topic: "Proven Success: At Springlearns,",
          value: " we've successfully guided thousands of professionals in obtaining their Business Analysis certifications, building a strong reputation in the industry.",
        },
        {
          icon: "",
          topic:
            "Thorough Exam Preparation",
          value:
            " Our course combines theoretical knowledge with practical application, featuring case studies and mock tests specifically designed to help you conquer the CBAP exam on your first attempt.",
        },
        {
          icon: "",
          topic: "Personalized Mentorship",
          value:
            " Benefit from one-on-one mentorship with seasoned industry experts who share valuable insights, real-world strategies, and time-tested techniques to ensure your success in the business analysis arena.",
        },
        {
          icon: "",
          topic: "Ongoing Learning Resources",
          value:
            " Enjoy continuous support through a rich collection of resources, including webinars, e-books, tutorials, articles, and interview preparation materials, keeping you equipped throughout your learning journey.",
        },
        {
          icon: "",
          topic: "Dedicated Post-Training Support",
          value:
            "Take advantage of six months of exclusive post-training mentorship to help you tackle challenges in your business analyst career and foster your professional growth.",
        },
        
      
      ],
    },
    courseAuthor: [],
    courseInstructor: [
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
        instructorName: "Himanshu Saxena",
        instructorProfession: "Trainer",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
        instructorDetail: `
      Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
        `,
      },
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
        instructorName: "Shivendra Sharma",
        instructorProfession: "Consultant, Author",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
        instructorDetail: `
       Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
        `,
      },
    ],
    certification: {
      bannerImage:
        "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
      bannerTitle: "Ready to elevate your project management expertise?",
      certificationDetail: "",
      certificateImage: "",
    },
    prerequisites: [
      "No mandatory prerequisites are required to enroll in the CBAP course.",
      "andidates must meet specific eligibility criteria related to business analysis work experience and professional development hours to qualify for the CBAP exam. For detailed information, refer to the FAQs."
      
    ],
    courseCurriculm: [
      {
        title: "Course Overview and Exam Techniques",
        isPreview: false,
        objective:
          "Get an introduction to CBAP Certification Training Course , with an outline of the structure of Microsoft Project 2016 Course . Recognize the exam style and techniques.",
        topics: [
          "Introduction and Exam technique",
          "Overview of CBAP Certification Training Course",
          "Course structure",
          "Exam style and technique",
        ],
      },
   
    ],
    learningObjective: [
      {
        title: "Mastering Business Analysis",
        description:
          " Dive deep into the world of Business Analysis (BA), exploring its core principles and diverse applications across industries.",
      },
      {
        title: "Understanding the Business Analyst Role",
        description:
          "Uncover the essential roles and responsibilities of a Business Analyst, and learn how these vary across different job titles and organizations.",
      },
      {
        title: "Exploring BACCM Components",
        description:
          "Identify the six critical components of the BACCM (Business Analysis Core Concept Model), their interactions, and how they shape the conceptual framework of BA.",
      },
      {
        title: "Perspectives and Applications of BA",
        description:
          "Discover the six unique perspectives of Business Analysis and how to effectively apply BA principles from each viewpoint.",
      },
      {
        title: "Navigating the BABOK Guide v3",
        description:
          "Achieve mastery of the concepts and methodologies outlined in the BABOK Guide v3, a foundational resource for any BA professional.",
      },
      {
        title: "Understanding Six Knowledge Areas",
        description:
          "Explore the six key Knowledge Areas within the BABOK Guide v3 and learn how they interconnect to enhance your analysis skills.",
      },
     
      {
        title: "Harnessing BA Techniques",
        description:
          "Gain proficiency in 50 essential techniques utilized across the Business Analysis landscape, empowering you to tackle complex challenges.",
      },
     

      {
        title: "Classifying Requirements",
        description:
          "Learn about the four classifications of requirements and how to navigate their relationships to ensure successful project outcomes.",
      },
     
      {
        title: "Differentiating Requirements and Designs",
        description:
          "Understand the nuances between Requirements and Design, including their definitions and the critical relationships that link them.",
      },
      {
        title: "Effective Stakeholder Collaboration",
        description:
          "Delve into the world of stakeholders, discovering their roles and functions, and mastering techniques for fostering collaboration and engagement.",
      },
     
      
    ],
    whoCanAttendCourse: [
      "Business Architects",
      "Product Managers",
      "Business Systems Analysts",
      "Management Consultants",
      "Requirements Engineers",
      "Systems Analysts",
      "Enterprise Analysts",
      "Process Analysts",
      "Product Owners",
      "Data Analysts",
      
    ],
    aboutCourse: [
      {
        question: "What is CBAP?",
        answer: `CBAP stands for Certified Business Analysis Professional. It is a prestigious certification offered by the International Institute of Business Analysis (IIBA) that recognizes your expertise in business analysis.
`,
      },

      {
        question: " What does a CBAP do?",
        answer: `A CBAP professional plays a crucial role in bridging the gap between stakeholders and technology, using advanced analytical skills to drive successful project outcomes and business improvements.
`,
      },

      
    ],
    faqs: [
      {
        type: "Course",
        question: "How does a CBAP certification benefit me?",
        answer: `Earning the CBAP certification enhances your credibility in the field, opens doors to new career opportunities, and provides access to a global network of business analysis professionals. `,
      },
      {
        type: "Course",
        question: "Is the CBAP course only for software developers?",
        answer: `
       No, the CBAP course is designed for a wide range of professionals, including business analysts, project managers, and consultants, regardless of their technical background.
 `,
      },
      {
        type: "Course",
        question: "What are the software and system requirements for the course?",
        answer: `
       Typically, you’ll need a computer with internet access and basic software like a web browser. Specific tools may be outlined by your training provider.
 `,
      },
      {
        type: "Course",
        question: "Who is eligible for CBAP certification?",
        answer: `
      To be eligible, candidates must have at least 7,500 hours of business analysis work experience in the past 10 years and 35 hours of professional development training.
 `,
      },


      {
        type: "Training",
        question: "What should I do after earning my CBAP?",
        answer: `
After obtaining your CBAP, consider pursuing additional certifications, joining professional associations, or participating in industry conferences to further your career.
 `,
      },

      {
        type: "Training",
        question: "What can I expect to achieve after completing the CBAP course?",
        answer: `
You can expect to gain a comprehensive understanding of business analysis concepts, tools, and techniques, equipping you to tackle complex projects effectively.

 `,
      },

      {
        type: "Training",
        question: "What practical skills will I develop through the CBAP course?",
        answer: `
You’ll acquire essential skills such as stakeholder management, requirements elicitation, and analytical thinking, enabling you to deliver impactful business solutions.

 `,
      },
      {
        type: "Training",
        question: "Is the CBAP certification valuable?",
        answer: `
Yes, the CBAP certification is highly regarded in the industry, demonstrating your commitment to professional excellence and enhancing your marketability in the job market.


 `,
      },



     
    ],
  },
},


{
  id: 37,
  title: "CEH Certification  ",
  courseSubtitle: "CEH Certification - Become a Certified Ethical Hacker",
  description:
    "Elevate Your Cybersecurity Skills with the EC-Council's CEH Course",
    background: "linear-gradient(242deg, #A21230, #601500)",
  type: "",
  courseDetail: {
    price:{
      originalPrice: 50999,
      discountPrice: 49999,
      discount: 21,
    },
    courseCategory: "Project Management",
    enrolledImage:
      "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
    learnersEnrolled: "36,057+ Enrolled",
    bannerImage:
      "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
    rating: [
      {
        from: "google",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
        rate: 4.8,
      },
      {
        from: "facebook",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
        rate: 4.7,
      },
      {
        from: "reddit",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
        rate: 4.9,
      },
    ],
    secretSauce: [],
    highlights: [
      "Engage with the CEH v13 course, crafted by EC-Council, to learn advanced AI-driven processes and tools that revolutionize cybersecurity.",
      "Delve into AI-enhanced threat detection and countermeasure strategies, empowering you to proactively safeguard your systems against cyber threats.",
      "Master essential skills in network packet analysis and system penetration testing, supported by comprehensive e-courseware and an exam voucher from EC-Council.",
    ],
    careerDetail: [
      { carrer: "Career transformations", value: "450K" },
      { carrer: "Workshops every month", value: "250" },
      { carrer: "Countries and counting", value: "100" },
    ],
    overview: {
      courseDetail: [
        {
          icon: "",
          value: "Understanding Trojans and Backdoors",
        },
        {
          icon: "",
          value: "Innovations in Mobile and Web Security",
        },
        {
          icon: "",
          value: "AI-Powered Network Traffic Analysis",
        },
        {
          icon: "",
          value: "AI in Vulnerability Scanning and Exploitation",
        },
        {
          icon: "",
          value: "Phishing Detection and Prevention",
        },
        {
          icon: "",
          value: "Cloud Security and Monitoring Solutions",
        },
        {
          icon: "",
          value: "Cyber Threat Intelligence and Response",
        },
        {
          icon: "",
          value: "Advanced Hacking Techniques with Smart Tools",
        },
        {
          icon: "",
          value: "AI-Enhanced Intrusion Detection and Prevention",
        },
        {
          icon: "",
          value: "Effective Log Management and Threat Detection",
        },
        {
          icon: "",
          value: "Social Engineering Attack Simulations",
        },
        {
          icon: "",
          value: "Malware Analysis and Remediation",
        },

      ],
      overviewDetail: `
The Ethical Hacking Certification validates the essential skills needed to excel in the information security sector. Numerous IT departments now mandate CEH certification for security-related positions. As a result, CEH-certified ethical hackers earn 44% more than their non-certified counterparts.

`,
      overviewPoints: [],
      overviewCourseDescription: "",
    },
    highDemandAndAccerlated: {
      demandTitle: "Why Get CEH Certification",
      demandHeading: "Growing Demand for CEH Certification ",
      demandDetail: `
The CEH Certification  is fully aligned with the latest Guide to the Business Analysis Body of Knowledge (BABOK Guide) v3. Offered by the International Institute of Business Analysis (IIBA), CBAP is a prestigious certification for individuals with substantial business analysis experience who demonstrate their expertise by successfully passing the exam.
 `,
      demandData: [
        {
          type: "Project Manager",
          averageSalary: [10, 17, 25],
          hiringCompany: [],
          demand: {
            percant: "33% Increase",
            description:
              "anticipated in Project Management-oriented roles globally by 2027",
          },
        },
        {
          type: "Process Lead",
          averageSalary: [15, 31, 46],
          hiringCompany: [],
          demand: {
            percant: "22M",
            description:
              "new Project Management jobs will be created by 2027 globally",
          },
        },
        {
          type: "PMO Lead",
          averageSalary: [18, 38, 56],
          hiringCompany: [],
          demand: {
            percant: "88M",
            description:
              "individuals needed for Project Management roles by 2027",
          },
        },

        {
          type: "Project Director",
          averageSalary: [22, 43, 63],
          hiringCompany: [],
          demand: {
            percant: "$208 Billon",
            description:
              "GDP risk due to potential PM talent shortages by 2027",
          },
        },
      ],
    },
    knowledgeHut: {
      
      subtitle: "The Springlearns Advantage",
      knowledgeHutData: [
        {
          icon: "",
          topic: "Forge Skills for Career Advancement",
          value:
            "Our cutting-edge curriculum is crafted in collaboration with industry leaders and academia, ensuring you acquire the job-ready skills necessary for real career growth.",
        },
        {
          icon: "",
          topic: "Learn from Active Industry Experts",
          value: " Benefit from instruction by leading practitioners who share current best practices and case studies, providing insights that keep pace with the dynamic job market—all while fitting into your busy schedule.",
        },
        {
          icon: "",
          topic:
            "Tackle Real-World Challenges",
          value:
            " Engage in capstone projects that utilize real-world data sets within virtual labs, offering you hands-on experience to reinforce your learning.",
        },
        
        {
          icon: "",
          topic: "Continuous Learning Support",
          value:
            " Enjoy 24/7 access to mentors and a vibrant community of like-minded peers, ensuring that your learning journey is supported and that you can resolve any conceptual questions that arise.",
        },
        
      
      ],
    },
    courseAuthor: [],
    courseInstructor: [
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
        instructorName: "Himanshu Saxena",
        instructorProfession: "Trainer",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
        instructorDetail: `
      Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
        `,
      },
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
        instructorName: "Shivendra Sharma",
        instructorProfession: "Consultant, Author",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
        instructorDetail: `
       Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
        `,
      },
    ],
    certification: {
      bannerImage:
        "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
      bannerTitle: "Ready to elevate your project management expertise?",
      certificationDetail: "",
      certificateImage: "",
    },
    prerequisites: [
      "No mandatory prerequisites are required to enroll in the CBAP course.",
      "andidates must meet specific eligibility criteria related to business analysis work experience and professional development hours to qualify for the CBAP exam. For detailed information, refer to the FAQs."
      
    ],
    courseCurriculm: [
      {
        title: "Course Overview and Exam Techniques",
        isPreview: false,
        objective:
          "Get an introduction toCEH Certification  , with an outline of the structure of Microsoft Project 2016 Course . Recognize the exam style and techniques.",
        topics: [
          "Introduction and Exam technique",
          "Overview of CEH Certification ",
          "Course structure",
          "Exam style and technique",
        ],
      },
   
    ],
    learningObjective: [
      {
        title: "Mastering Business Analysis",
        description:
          " Dive deep into the world of Business Analysis (BA), exploring its core principles and diverse applications across industries.",
      },
      {
        title: "Understanding the Business Analyst Role",
        description:
          "Uncover the essential roles and responsibilities of a Business Analyst, and learn how these vary across different job titles and organizations.",
      },
      {
        title: "Exploring BACCM Components",
        description:
          "Identify the six critical components of the BACCM (Business Analysis Core Concept Model), their interactions, and how they shape the conceptual framework of BA.",
      },
      {
        title: "Perspectives and Applications of BA",
        description:
          "Discover the six unique perspectives of Business Analysis and how to effectively apply BA principles from each viewpoint.",
      },
      {
        title: "Navigating the BABOK Guide v3",
        description:
          "Achieve mastery of the concepts and methodologies outlined in the BABOK Guide v3, a foundational resource for any BA professional.",
      },
      
     
     
      
    ],
    whoCanAttendCourse: [
      "Business Architects",
      "Product Managers",
      "Business Systems Analysts",
      "Management Consultants",
      "Requirements Engineers",
      "Systems Analysts",
      
      
    ],
    aboutCourse: [
      {
        question: "What is a Certified Ethical Hacker (CEH) certification?",
        answer: `The CEH certification covers a range of topics, including hacking methodologies, network and web application security, and incident response. This certification opens doors to various career paths for cybersecurity professionals, ethical hackers, penetration testers, and security analysts. Certified individuals must continually update their skills to ensure their certifications remain relevant in the ever-evolving cybersecurity landscape. Achieving the CEH certification from EC-Council designates you as a Certified Ethical Hacker, a respected title in the industry that demonstrates your expertise and capabilities in ethical hacking and cybersecurity.
`,
      },

      {
        question: " What does an ethical hacker do?",
        answer: `An ethical hacker, also known as a white-hat hacker, is responsible for identifying and exploiting vulnerabilities in systems, networks, and applications to improve security. They simulate attacks to help organizations strengthen their defenses against malicious hackers.
`,
      },

      
    ],
    faqs: [
      {
        type: "Course",
        question: "What advantages does obtaining an ethical hacking certification provide?",
        answer: `Obtaining a CEH certification enhances your credibility and demonstrates your skills to employers. It can lead to better job opportunities, higher salaries, and recognition in the cybersecurity field.
 `,
      },
      {
        type: "Course",
        question: "Is the Certified Ethical Hacker (CEH) certification worth pursuing?",
        answer: `
      Yes, the CEH certification is highly regarded in the cybersecurity industry. It not only validates your skills but also increases your marketability, making you a valuable asset to potential employers.

 `,
      },
      {
        type: "Course",
        question: "What career opportunities are available after earning a CEH certification?",
        answer: `
      After earning your CEH certification, you can pursue various roles, including ethical hacker, penetration tester, security analyst, information security consultant, and network security engineer, among others.

 `,
      },
     


      {
        type: "Training",
        question: "Who teaches the ethical hacking course, and what is their selection process?",
        answer: `
Our instructors are experienced professionals currently active in the cybersecurity field. They are selected based on their expertise, industry experience, and ability to convey complex concepts in an engaging manner.

 `,
      },

      {
        type: "Training",
        question: "What certification will I receive upon completing the CEH course?",
        answer: `
Upon successful completion of the CEH course, you will receive a certification from EC-Council, validating your knowledge and skills in ethical hacking.


 `,
      },

      {
        type: "Training",
        question: "How long is the CEH certification valid?",
        answer: `
The CEH certification is valid for three years. To maintain your certification, you must earn Continuing Education Credits (CEUs) or retake the exam.

 `,
      },
      {
        type: "Training",
        question: "What essential skills should a Certified Ethical Hacker possess?",
        answer: `
 Certified Ethical Hacker should have strong analytical skills, proficiency in networking, knowledge of operating systems, familiarity with various hacking tools, and a deep understanding of security protocols and practices.

 `,
      },
      {
        type: "Training",
        question: "How do I select the best ethical hacking certification course for my needs?",
        answer: `
Consider factors such as course content, instructor qualifications, hands-on training opportunities, and support resources. Look for courses that align with your career goals and provide comprehensive training in ethical hacking.
 `,
      },
      {
        type: "Training",
        question: "What roles and responsibilities does a Certified Ethical Hacker typically have?",
        answer: `
A Certified Ethical Hacker is responsible for conducting penetration tests, analyzing security systems, documenting findings, recommending improvements, and helping organizations implement effective security measures.

 `,
      },
      {
        type: "Training",
        question: "What is the earning potential for a Certified Ethical Hacker?",
        answer: `
The salary of a Certified Ethical Hacker can vary based on experience, location, and industry, but they typically earn significantly higher salaries than non-certified professionals, often enjoying a 44% increase in earnings.

 `,
      },



     
    ],
  },
},

{
  id: 38,
  dbid:"67485335f99edee8975264b3",
  title: "PRINCE2 Practitioner Certification Course ",
  courseSubtitle: "PRINCE2 Practitioner Training",
  description:
    "Enhance your project management expertise and take charge of successful project delivery.",
  background: "linear-gradient(242deg, #A21230, #601500)",
  type: "",
  courseDetail: {
    price:{
      originalPrice: 64999,
      discountPrice: 39999,
      discount: 21,
    },
    courseCategory: "Project Management",
    enrolledImage:
      "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
    learnersEnrolled: "36,057+ Enrolled",
    bannerImage:
      "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
    rating: [
      {
        from: "google",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
        rate: 4.8,
      },
      {
        from: "facebook",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
        rate: 4.7,
      },
      {
        from: "reddit",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
        rate: 4.9,
      },
    ],
    secretSauce: [],
    highlights: [
      "Gain essential tools and strategies for project success.",
      "Master managing concurrent projects while delivering quality results on time.",
      "Prepare thoroughly for the PRINCE2 Practitioner,7th Edition exam with in-depth knowledge.",
    ],
    careerDetail: [
      { carrer: "Career transformations", value: "450K" },
      { carrer: "Workshops every month", value: "250" },
      { carrer: "Countries and counting", value: "100" },
    ],
    overview: {
      courseDetail: [
        {
          icon: "",
          value: "16 Hours of Interactive Live Training",
        },
        {
          icon: "",
          value: "Lifetime Access to Course Materials",
        },
        {
          icon: "",
          value: "Comprehensive Assessments, Case Studies, and Mock Exams",
        },
        {
          icon: "",
          value: "Exam Fees Included in Your Course Package",
        },
        {
          icon: "",
          value: "Over 75 Hours of Flexible On-Demand Learning",
        },
        {
          icon: "",
          value: "Receive 16 PDUs After Completing the Course",
        },
      ],
      overviewDetail: `
Enhance your project management expertise in our PRINCE2 Practitioner certification course at
Spring Learns. This comprehensive two-day training is regarded as the best PRINCE2
Practitioner training online, offering both theoretical insights and practical applications of the
PRINCE2 methodology. Aligned with the latest PRINCE2, 7th Edition updates, you explore the
four key components: principles, themes, processes, and project environment, preparing you for
real-world scenarios.

`,
      overviewPoints: [],
      overviewCourseDescription: "",
    },
    highDemandAndAccerlated: {
      demandTitle: "Why Get PRINCE2 Practitioner Certification Course",
      demandHeading: "Growing Demand for PRINCE2 Practitioner Certification Course",
      demandDetail: `
   Our course includes a PRINCE2 Practitioner certification study guide, extensive resources, and
reviews to ensure you understand the PRINCE2 Practitioner training cost and requirements.
With a focus on PRINCE2 Practitioner exam preparation, you receive sample papers and
strategies to maximize your chances of passing on your first attempt.
Whether you are a beginner or an experienced practitioner, our online PRINCE2 Practitioner
classes offer flexible learning options. Join us today and validate your expertise with a
recognized certification!

      `,
      demandData: [
        {
          type: "Project Manager",
          averageSalary: [10, 17, 25],
          hiringCompany: [],
          demand: {
            percant: "33% Increase",
            description:
              "anticipated in Project Management-oriented roles globally by 2027",
          },
        },
        {
          type: "Process Lead",
          averageSalary: [15, 31, 46],
          hiringCompany: [],
          demand: {
            percant: "22M",
            description:
              "new Project Management jobs will be created by 2027 globally",
          },
        },
        {
          type: "PMO Lead",
          averageSalary: [18, 38, 56],
          hiringCompany: [],
          demand: {
            percant: "88M",
            description:
              "individuals needed for Project Management roles by 2027",
          },
        },

        {
          type: "Project Director",
          averageSalary: [22, 43, 63],
          hiringCompany: [],
          demand: {
            percant: "$208 Billon",
            description:
              "GDP risk due to potential PM talent shortages by 2027",
          },
        },
      ],
    },
    knowledgeHut: {
      subtitle: "The Springlearns Advantage",
      knowledgeHutData: [
        {
          icon: "",
          topic: "Expert Trainers",
          value:
            "Learn from a distinguished panel of PRINCE2-certified trainers at Spring Learns, each bringing over a decade of industry experience to guide you.",
        },
        {
          icon: "",
          topic: "Personalized Mentorship",
          value: "Benefit from one-on-one mentoring, where industry experts share invaluable insights and proven techniques to enhance your PRINCE2 toolkit.",
        },
        {
          icon: "",
          topic:
            "Engaging Live Sessions",
          value:
            "Experience dynamic and interactive classes at Spring Learns that make learning enjoyable,featuring real-world simulations and practical role-plays.",
        },
        {
          icon: "",
          topic: "Hands-On Workshops",
          value:
            "Dive into experiential learning with workshops that allow you to apply PRINCE2 principles through real case studies.",
        },
        {
          icon: "",
          topic: "Ongoing Learning Resources",
          value:
            "Stay engaged with a wealth of materials, including webinars, e-books, tutorials, and articles to support your continuous growth.",
        },
        {
          icon: "",
          topic: "Accredited Training Organization ",
          value:
            "As a certified PeopleCert ATO, Spring Learns has successfully transformed countless careers through our exceptional training programs.",
        },
        
      ],
    },
    courseAuthor: [],
    courseInstructor: [
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
        instructorName: "Himanshu Saxena",
        instructorProfession: "Trainer",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
        instructorDetail: `
      Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
        `,
      },
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
        instructorName: "Shivendra Sharma",
        instructorProfession: "Consultant, Author",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
        instructorDetail: `
       Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
        `,
      },
    ],
    certification: {
      bannerImage:
        "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
      bannerTitle: "Ready to elevate your project management expertise?",
      certificationDetail: "",
      certificateImage: "",
    },
    prerequisites: [
      "To maximize your experience in the PRINCE2 Practitioner certification training participants should have a solid understanding of PRINCE2 fundamentals. Familiarity with the foundational principles is essential for success in this advanced course.",
      "There are specific eligibility criteria that must be met to qualify for the PRINCE2 Practitioner exam. For detailed information regarding these requirements, please refer to our FAQs.",
     
    ],
    courseCurriculm: [
      {
        title: "Course Overview and Exam Techniques",
        isPreview: false,
        objective:
          "Get an introduction to PRINCE2 Foundation, with an outline of the structure of PRINCE2 Foundation. Recognize the exam style and techniques.",
        topics: [
          "Introduction and Exam technique",
          "Overview of PRINCE2 Foundation",
          "Course structure",
          "Exam style and technique",
        ],
      },
      
    ],
    learningObjective: [
      {
        title: "Customizing PRINCE2",
        description:
          "Explore how to tailor the PRINCE2 methodology to fit the specific needs of your organization.",
      },
      {
        title: "Understanding PRINCE2 Principles",
        description:
          "Gain insights into the 7 PRINCE2 Principles and learn to apply and adapt them in various organizational settings.",
      },
      {
        title: "Exploring PRINCE2 Themes",
        description:
          "Discover the 7 PRINCE2 Themes and understand how they create a robust framework for effective project management.",
      },
      {
        title: "Navigating PRINCE2 Processes",
        description:
          "Learn about the 7 PRINCE2 Processes and how to implement them effectively within your projects.",
      },
      {
        title: "Managing Project Risks",
        description:
          "Understand how to utilize PRINCE2 fundamentals to identify, control, and mitigate risks effectively.",
      },
      {
        title: "Implementing PRINCE2 Best Practices",
        description:
          "Stay up-to-date with the latest PRINCE2 best practices and learn to apply them across a range of projects and portfolios.",
      },
    ],
    whoCanAttendCourse: [
      "Project Managers",
      "Product Owners",
      "Scrum Masters",
      "Change Managers",
      "Finance Managers",
      "Project Sponsors",
      "PMO Professionalss",
      "Scrum Developers",
    ],
    aboutCourse: [
      {
        question: "What is PRINCE2 Practitioner certification?",
        answer: `The PRINCE2 Practitioner certification represents the advanced level of expertise within the
PRINCE2 framework. Awarded to individuals who successfully complete the PRINCE2
Practitioner exam, this credential is globally recognized and highly sought after. With over a
million certified professionals worldwide, PRINCE2 is one of the most esteemed project
management certifications available today.`,
      },

      {
        question: " How can obtaining a PRINCE2 Practitioner certification benefit me?",
        answer: `Achieving PRINCE2 Practitioner certification enhances your project management skills and
demonstrates your ability to manage projects effectively. It opens doors to career advancement
and increases your marketability in a competitive job landscape.`,
      },

    
    ],
    faqs: [
      {
        type: "Course",
        question: "What does the PRINCE2 Practitioner course cover?",
        answer: `The PRINCE2 Practitioner course delves into the intricacies of the PRINCE2 framework,
focusing on how to effectively adapt it to various project needs. The curriculum includes modules on PRINCE2 principles, themes, and processes, along with dedicated exam
preparation.
          `,
      },
      {
        type: "Course",
        question: "What is the equivalent qualification level of PRINCE2 Practitioner?",
        answer: `
        The PRINCE2 Practitioner certification is considered an advanced-level credential in project
management, demonstrating a comprehensive understanding of the PRINCE2 methodology.`,
      },
     
      {
        type: "Training",
        question: "Who is the ideal candidate for the PRINCE2 Practitioner training?",
        answer: `
This course is designed for project managers, team leaders, and anyone involved in project
management who wishes to deepen their understanding of PRINCE2 and improve their ability to
manage projects effectively.`,
      },

      {
        type: "Training",
        question: "How does the PRINCE2 Practitioner certification impact career opportunities?",
        answer: `
Obtaining the PRINCE2 Practitioner certification significantly boosts your employability, as it is
widely recognized across industries and demonstrates your capability to manage projects
successfully. `,
      },

      {
        type: "Exam",
        question: "Who conducts the exam?",
        answer: `
The PRINCE2 Agile Foundation exam is conducted by PeopleCert, the official certification body for PRINCE2 exams.

        `,
      },

      {
        type: "Exam",
        question: "Can I get certified without taking the course?",
        answer: `
While it is not mandatory to take a PRINCE2 Agile Foundation course, it is highly recommended to ensure you are well-prepared for the exam and understand the concepts thoroughly.

        `,
      },
    ],
  },
},


{
  id: 39,
  dbid:"6748501af99edee8975262ab",
  title: "PMI-RMP® Certification ",
  courseSubtitle: "PMI-RMP® Certification Training",
  description:
    "Unlock new opportunities and command higher salaries with the PMI-RMP® Certification.",
  background: "linear-gradient(242deg, #A21230, #601500)",
  type: "",
  courseDetail: {
    price:{
      originalPrice: 29999,
      discountPrice: 19999,
      discount: 21,
    },
    courseCategory: "Project Management",
    enrolledImage:
      "https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg",
    learnersEnrolled: "36,057+ Enrolled",
    bannerImage:
      "https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FBI-11-71c171a6ddb74a21aea37971f8ae1282.webp&w=1920&q=75",
    rating: [
      {
        from: "google",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Google Hero-37dcc2260d4744ae8fe228fe6e6c1788.svg",
        rate: 4.8,
      },
      {
        from: "facebook",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Facebook Hero-d61abee306184aba8b1e115096044bb9.svg",
        rate: 4.7,
      },
      {
        from: "reddit",
        logo: "https://d2o2utebsixu4k.cloudfront.net/Switchup Logo  175x175 (1)-88854d4c722847d9812d42d1059f2535.svg",
        rate: 4.9,
      },
    ],
    secretSauce: [],
    highlights: [
      "Learn to implement effective risk management strategies that enhance organizational success and project delivery.",
      "Develop the ability to recognize and assess potential risks throughout project development and implementation.",
      "Master the art of creating actionable risk response strategies, ensuring your projects stay on track and within budget.",
    ],
    careerDetail: [
      { carrer: "Career transformations", value: "450K" },
      { carrer: "Workshops every month", value: "250" },
      { carrer: "Countries and counting", value: "100" },
    ],
    overview: {
      courseDetail: [
        {
          icon: "",
          value: "Practical Learning Experience",
        },
        {
          icon: "",
          value: "24 Hours of Interactive Live Training",
        },
        {
          icon: "",
          value: "Ongoing Support",
        },
        {
          icon: "",
          value: "Learn from Industry Experts",
        },
        {
          icon: "",
          value: "Earn 42 PDUs",
        },
       
      ],
      overviewDetail: `
Equip yourself with advanced techniques to navigate complex, global project environments. The PMI-RMP® certification empowers you to effectively identify, assess, and mitigate project risks, ensuring you can leverage opportunities for your organization.
The PMI-RMP® credential validates your expertise in recognizing potential risks and implementing strategies to address them, enhancing your value as a risk manager.


`,
      overviewPoints: [],
      overviewCourseDescription: "",
    },
    highDemandAndAccerlated: {
      demandTitle: "Why Get PMI-RMP® Certification Training",
      demandHeading: "Growing Demand for PMI-RMP® Certification Training",
      demandDetail: `
   Our intensive 3-day course will guide you through essential Project Risk Management concepts, tools, and processes aligned with industry standards, including those set by the Project Management Institute (PMI)®. This training will prepare you for the PMI-RMP® certification exam, equipping you for a specialized role in project risk management.


      `,
      demandData: [
        {
          type: "Project Manager",
          averageSalary: [10, 17, 25],
          hiringCompany: [],
          demand: {
            percant: "33% Increase",
            description:
              "anticipated in Project Management-oriented roles globally by 2027",
          },
        },
        {
          type: "Process Lead",
          averageSalary: [15, 31, 46],
          hiringCompany: [],
          demand: {
            percant: "22M",
            description:
              "new Project Management jobs will be created by 2027 globally",
          },
        },
        {
          type: "PMO Lead",
          averageSalary: [18, 38, 56],
          hiringCompany: [],
          demand: {
            percant: "88M",
            description:
              "individuals needed for Project Management roles by 2027",
          },
        },

        {
          type: "Project Director",
          averageSalary: [22, 43, 63],
          hiringCompany: [],
          demand: {
            percant: "$208 Billon",
            description:
              "GDP risk due to potential PM talent shortages by 2027",
          },
        },
      ],
    },
    knowledgeHut: {
      subtitle: "The Springlearns Advantage",
      knowledgeHutData: [
        {
          icon: "",
          topic: "Expert Instruction",
          value:
            " Learn directly from certified professionals with extensive industry experience, ensuring you gain valuable insights and practical knowledge.",
        },
        {
          icon: "",
          topic: "Engaging Learning Environment",
          value: "Experience dynamic workshops filled with team exercises, interactive activities, and real-world case studies designed to reinforce your understanding of risk management.",
        },
        {
          icon: "",
          topic:
            "Hands-On Experience",
          value:
            "Immerse yourself in practical learning through in-depth case studies, interactive exercises, and personalized feedback to solidify your skills.",
        },
        {
          icon: "",
          topic: "Comprehensive Curriculum",
          value:
            "Our detailed course content is regularly updated to reflect the latest industry standards, featuring exercises and mock tests to help you master key concepts.",
        },
        {
          icon: "",
          topic: "Post-Training Support",
          value:
            "Enjoy access to a wealth of resources, including unlimited webinars, e-books, tutorials, articles, and interview preparation materials to support your ongoing development.",
        },
        {
          icon: "",
          topic: "Strong Conceptual Foundation ",
          value:
            "Build a solid understanding of risk management principles with expert guidance and constructive feedback tailored to your learning needs.",
        },
        
      ],
    },
    courseAuthor: [],
    courseInstructor: [
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Himanshu Saxena-a951fafcd0ba49f483a18b1ebaf58f88.svg",
        instructorName: "Himanshu Saxena",
        instructorProfession: "Trainer",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/datamatics global services-8023d23da18945aca9fad29da46f29ae.svg",
        instructorDetail: `
      Embarking on a fulfilling career as a Real Management Consultant, Himanshu Saxena has found joy in crafting and executing improvement projects, as well as devising innovative marketing strategies for multiple organizations. His journey of development encompasses a diverse range of initiatives, including process improvement, re-engineering, Root Cause Analysis (RCA), Failure Modes and Effects Analysis (FMEA), and 5S projects spanning various domains.
        `,
      },
      {
        profilePic:
          "https://d2o2utebsixu4k.cloudfront.net/Instructor Profile Pics_96x96- Shivendra Sharma-b14d0ed279c14aeabd416fe71fbd7649.svg",
        instructorName: "Shivendra Sharma",
        instructorProfession: "Consultant, Author",
        experience: "20",
        companyLogo:
          "https://d2o2utebsixu4k.cloudfront.net/hewlett packard-8e96f0a02b894bcaa884ae68eedb37b3.svg",
        instructorDetail: `
       Shivendra Sharma brings a wealth of expertise to the table with a robust background in business and digital transformation, strategy consulting, and process improvement. Armed with an MBA in Human Resources and the distinguished Lean Six Sigma Master Black Belt certification, Shivendra has accumulated 15 years of extensive experience in orchestrating transformative initiatives. 
        `,
      },
    ],
    certification: {
      bannerImage:
        "https://d2o2utebsixu4k.cloudfront.net/Certificate Section CTA-01-9dadc37a3ad44e15a8c5103e1e85eef4.svg",
      bannerTitle: "Ready to elevate your project management expertise?",
      certificationDetail: "",
      certificateImage: "",
    },
    prerequisites: [
      "A four-year degree (bachelor’s degree or equivalent from an accredited institution) is required.",
      " A minimum of 3,000 hours of experience in project risk management, demonstrating your ability to effectively identify and mitigate risks.",
      "  Completion of at least 30 hours of formal education focused on project risk management concepts and practices.",
     
    ],
    courseCurriculm: [
      {
        title: "Course Overview and Exam Techniques",
        isPreview: false,
        objective:
          "Get an introduction to PMI-RMP® Certification Training , with an outline of the structure of PRINCE2 Foundation. Recognize the exam style and techniques.",
        topics: [
          "Introduction and Exam technique",
          "Overview of PMI-RMP® Certification Training",
          "Course structure",
          "Exam style and technique",
        ],
      },
      
    ],
    learningObjective: [
      {
        title: "Master Risk Management Techniques",
        description:
          "Develop the ability to apply robust risk management practices that provide a competitive edge in your organization.",
      },
      {
        title: "Enhance Organizational Visibility",
        description:
          "Strengthen your visibility within your organization by mastering effective program management techniques that demonstrate your expertise.",
      },
      {
        title: "Identify and Analyze Risks",
        description:
          "Gain skills to effectively identify and evaluate risks throughout the project lifecycle, ensuring informed decision-making.",
      },
      {
        title: "Evaluate and Mitigate Risks",
        description:
          "Acquire the skills to assess and manage risks while ensuring fundamental competencies in overall program management.",
      },
      {
        title: "Develop Effective Risk Response Strategies",
        description:
          "Learn to quantify risks and formulate strategic responses that align with stakeholder expectations and project goals.",
      },
      {
        title: "Adopt a Proactive Mindset",
        description:
          "Embrace a proactive approach to risk management, focusing on prevention and mitigation before issues arise.",
      },
    ],
    whoCanAttendCourse: [
      "Risk Management Professionals",
      "Project Managers",
      "Risk Managers",
      "Project Coordinators",
      "Project Sponsors",
      "Program Managers",
      "Project Engineers",
      "Product Managers",
      "Project Analysts",
      "Planning Managers",
      "Planning Engineers",
      "Cost Control Engineers",
      "Quantity Surveyors",
      "Civil Engineers",
    ],
    aboutCourse: [
      {
        question: "Who is the target audience for this course?",
        answer: `This course is designed for professionals involved in project management, including project managers, risk managers, business analysts, and anyone seeking to enhance their skills in risk management.
`,
      },

      {
        question: " What practical skills can I acquire with this course?",
        answer: `Participants will gain valuable skills in identifying, assessing, and mitigating project risks, as well as developing risk response strategies. The course also covers effective communication of risk strategies to stakeholders.
`,
      },

    
    ],
    faqs: [
      {
        type: "Course",
        question: " What’s the validity period of the PMI-RMP certification?",
        answer: `The PMI-RMP certification is valid for three years. To maintain your certification, you must earn 30 Professional Development Units (PDUs) during this period.

          `,
      },
      {
        type: "Course",
        question: " What are the prerequisites for the PMI-RMP certification exam?",
        answer: `
        Candidates must fulfill the eligibility criteria mentioned earlier, which include education, experience, and formal training in project risk management.
`,
      },
     
      {
        type: "Training",
        question: " Who conducts the exam?",
        answer: `
The PMI-RMP certification exam is administered by the Project Management Institute (PMI), a globally recognized organization in project management.
`,
      },

      {
        type: "Training",
        question: " Will you provide the exam voucher and exam code for the PMI-RMP exam?",
        answer: `
Yes, upon completing the course, you will receive an exam voucher and code to register for the PMI-RMP exam.
. `,
      },

      {
        type: "Exam",
        question: " What is the process to apply for the PMI-RMP exam?",
        answer: `
To apply for the exam, log in to PMI's Online System, complete the application form with your educational and professional details, and submit it for review. Once approved, you can schedule your exam.


        `,
      },

      {
        type: "Exam",
        question: "What is the pattern for the PMI-RMP certification exam?",
        answer: `
The exam consists of 170 multiple-choice questions, and candidates have 3.5 hours to complete it. The questions cover various aspects of project risk management, ensuring a comprehensive assessment of your knowledge.
 `,
      },
    ],
  },
},

  ],
  reviewUsers: [
    {
      name: "Vivek",
      profession: "Data science",
      rating: 3,
      description:
        "I recently completed the PMP Certification Course at Springlearns, and I couldn't be more impressed! The course content was thorough and well-structured, with certified experts leading each session. The blend of classroom and virtual training options made it flexible for my busy schedule. Spring learns truly delivers on its mission to bridge the skills gap, providing the tools and knowledge needed for professional growth. Highly recommend it for anyone looking to elevate their career in project management.",
      createdAt: "",
    },
    {
      name: "Gautam",
      profession: "Devops Eng",
      rating: 3,
      description:
        "As an IT professional, I enrolled in the ITIL 4 Foundation Certification course at Spring learns and found it to be an invaluable experience. The instructor was an industry leader with real-world experience, ensuring that the learning was both practical and relevant. The supportive learning environment allowed for interactive discussions and Q&A sessions that enriched my understanding. If you're looking for high-quality IT training that empowers professionals, Springlearns is the place to be.",
      createdAt: "",
    },
    {
      name: "Rishab",
      profession: "Software Eng",
      rating: 3,
      description:
        "I attended the Agile and Scrum Training at Springlearns, and it exceeded my expectations! The course was engaging and informative, with plenty of hands-on activities that helped me grasp Agile methodologies. The certified experts fostered an inclusive environment, encouraging questions and discussions. Springlearns' commitment to providing comprehensive courses tailored to industry needs truly shines through. If you want to master Agile practices and enhance your skills, I highly recommend their programs.",
      createdAt: "",
    },
    {
      name: "Vivek",
      profession: "Software Eng",
      rating: 3,
      description:
        "I just finished the Lean Six Sigma Green Belt Training at Spring learns, and it has transformed my approach to process improvement. The course was well-organized, with a perfect mix of theory and practical application. The instructors were not only knowledgeable but also approachable, making the learning process enjoyable. Springlearns' mission to provide top-tier educational experiences is evident in their commitment to student success. If you're looking to boost your qualifications in process management, Spring learns is a fantastic choice.",
      createdAt: "",
    },
  ],
  bannerMsgTitle:
    "No more dull edges in your company. Make your employees into masters.",
  bannerMsgTitle2:
    "Nurture talent with instructor-led courses on trending technologies",
  whyChooseData: [
    {
      img: "/icn-track.jpg",
       title: "Live Instructors to address questions in real time",
    },
    {
      img: "/icn-unlimited.jpg",
      title: "Online Training Portal with Unlimited Access",
    },
    {
      img: "/icn-24-7.jpg",
      title: "Seek guidance from a learning assistant",
    },
    {
      img: "/icn-realtime.jpg",
      title: "Monitor Your Learning",
    },
  ],
  blogPost: [
    {
      img: "/blog-1.jpg",
      title: "Microsoft Project",
      createdAt: "June 21,2024 at 8:12pm",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
      text:"Lorem Ipsum"                 
    },
    {
      img: "/blog-3.jpg",
      title: "Business Management",
      createdAt: "June 21,2024 at 8:12pm",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
      text:"Lorem Ipsum"                 
    },
    {
      img: "/blog-4.jpg",
      title: "Finance Modeling",
      createdAt: "June 21,2024 at 8:12pm",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
       text:"Lorem Ipsum"               
    },
    {
      img: "/blog-2.jpg",
      title: "Prince2 Foundation",
      createdAt: "June 21,2024 at 8:12pm",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type...`,
      text:"Lorem Ipsum" 
    },
  ],
};

export const footerData = [
  {
    title: "Project Management Courses",
    items: [
      { text: "PMP® (Project Management Professional) Certification Training", url: "/course-detail/25" },
      { text: "PRINCE2 Foundation Course", url: "/course-detail/29" },
      { text: "PMI-RMP® Certification Training", url: "/course-detail/39" },
      { text: "PRINCE2 Practitioner Training", url: "/course-detail/38" },
      { text: "CBAP Certification Training Course", url: "/course-detail/36" },
    ],
  },
  {
    title: "Agile And Scrum Courses",
    items: [
      { text: "PMI ACP Certification Course", url: "/course-detail/30" },
      { text: "Leading SAFe® 6.0 Training with SAFe Agile Certification", url: "/course-detail/23" },
      { text: "Agile and Scrum Training", url: "/course-detail/24" },
    ],
  },
  {
    title: "Qality Management Courses:",
    items: [
      { text: "Lean Six Sigma Yellow Belt Training", url: "/course-detail/26" },
      { text: "Lean Six Sigma Green Belt Training", url: "/course-detail/27" },
      { text: "Lean Six Sigma Black Belt Training", url: "/course-detail/28" },
    ],
  },
  {
    title: "Certifications:",
    items: [
      { text: "Microsoft Project 2016 Course", url: "/course-detail/33" },
      { text: "Microsoft Excel Certification Training Course", url: "/course-detail/32" },
    ],
  },
  {
    title: "Company",
    items: [
      { text: "About us", url: "/about" },
      { text: "Courses", url: "/courses" },
      { text: "Contact us", url: "/contact-us" },
      { text: "Blog", url: "/blog" },
    ],
  },
  // {
  //   title: "Categories",
  //   items: [
  //     { text: "PMI PBA", url: "/pmi-pba" },
  //     { text: "Financial Modeling", url: "/financial-modeling" },
  //     { text: "ITIL 4 Foundation", url: "/course-detail/22" },
  //   ],
  // },
] as const;
