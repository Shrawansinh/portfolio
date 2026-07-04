import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="container bg-[#020617]  py-24" id="education">

        {/* Header */}
        <div className="card-header mb-16">
          <h1 className="text-[#38BDF8] flex justify-center font-bold text-5xl">
            Education & Work Experience
          </h1>

          <p className="text-[#94A3B8] mt-5 text-center max-w-3xl mx-auto">
            My academic background and professional journey, highlighting
            learning milestones, skills development, and practical experience
            in software engineering and web development.
          </p>
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor="#1E293B">

          <VerticalTimelineElement
            contentStyle={{
              background: "#0F172A",
              color: "#E5E7EB",
              border: "1px solid #1E293B",
              boxShadow: "0 0 20px rgba(56,189,248,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #0F172A",
            }}
            date="2021 – 2023"
            dateClassName="text-[#94A3B8]"
            iconStyle={{
              background: "#38BDF8",
              color: "#020617",
              boxShadow: "0 0 15px rgba(56,189,248,0.8)",
            }}
            icon={<MdSchool />}
          >
            <h3 className="text-xl font-bold text-[#38BDF8]">
              Higher Secondary Education(12Th science)
            </h3>
            <h4 className="text-sm text-[#94A3B8] mt-1">
              Svem Gujarati medium
            </h4>
            <p className="text-[#E5E7EB] mt-3 leading-relaxed">
  Completed Higher Secondary Education with a focus on Physics, Chemistry,
  and Mathematics. Built a strong foundation in logical reasoning,
  problem-solving, and analytical thinking, which sparked my interest
  in computer science and software development.
            </p>
          </VerticalTimelineElement>
           <VerticalTimelineElement
            contentStyle={{
              background: "#0F172A",
              color: "#E5E7EB",
              border: "1px solid #1E293B",
              boxShadow: "0 0 20px rgba(56,189,248,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #0F172A",
            }}
            date="2023 – 2027"
            dateClassName="text-[#94A3B8]"
            iconStyle={{
              background: "#38BDF8",
              color: "#020617",
              boxShadow: "0 0 15px rgba(56,189,248,0.8)",
            }}
            icon={<MdSchool />}
          >
            <h3 className="text-xl font-bold text-[#38BDF8]">
              Bachelor of Technology (CSE CORE)
            </h3>
            <h4 className="text-sm text-[#94A3B8] mt-1">
              parul University
            </h4>
            <p className="text-[#E5E7EB] mt-3 leading-relaxed">
              Studying core computer science subjects including Data Structures,
              Algorithms, Database Systems, Operating Systems, and Web
              Development. Actively building real-world projects and improving
              problem-solving skills.
            </p>
          </VerticalTimelineElement>
           {/* <VerticalTimelineElement
            contentStyle={{
              background: "#0F172A",
              color: "#E5E7EB",
              border: "1px solid #1E293B",
              boxShadow: "0 0 20px rgba(56,189,248,0.15)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #0F172A",
            }}
            date="2019 – Present"
            dateClassName="text-[#94A3B8]"
            iconStyle={{
              background: "#38BDF8",
              color: "#020617",
              boxShadow: "0 0 15px rgba(56,189,248,0.8)",
            }}
            icon={<MdSchool />}
          >
            <h3 className="text-xl font-bold text-[#38BDF8]">
              Bachelor of Computer Science
            </h3>
            <h4 className="text-sm text-[#94A3B8] mt-1">
              University / College Name
            </h4>
            <p className="text-[#E5E7EB] mt-3 leading-relaxed">
              Studying core computer science subjects including Data Structures,
              Algorithms, Database Systems, Operating Systems, and Web
              Development. Actively building real-world projects and improving
              problem-solving skills.
            </p>
          </VerticalTimelineElement> */}

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;

