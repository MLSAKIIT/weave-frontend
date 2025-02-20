import React from "react";
import Navbar from "@/components/ui/Navbar";
import AboutUsCard from "@/components/ui/AboutUsCard";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import Image from "next/image";

const aboutUsData = [
  {
    title: "Who We Are",
    description:
      "Microsoft Learn Student Ambassadors - KIIT (MLSA KIIT) is a dynamic and vibrant community of tech enthusiasts, innovators, and student leaders from KIIT. We foster a culture of learning, collaboration, and innovation.",
    iconSrc: "/icons/icon-1.png",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to empower students with technical skills, inspire innovation, and build a strong community of developers and problem-solvers. We believe in learning, sharing, and growing together while making a meaningful impact in the tech ecosystem.",
    iconSrc: "/icons/icon-2.png",
  },
  {
    title: "What We Do",
    description: `At MLSA KIIT, we strive to bridge the gap between students and industry-leading technologies. Our initiatives include:
    → Workshops & Tech Talks – Hands-on sessions on Microsoft technologies like Azure, Power Platform, AI, and more.
    → Hackathons & Competitions – Organizing and participating in global coding challenges.
    → Projects & Open Source – Encouraging students to contribute to real-world projects and open-source initiatives.`,
    iconSrc: "/icons/icon-3.png",
  },
];

const AboutUs = () => {
  return (
    <div className="star-background bg-black min-h-screen flex flex-col relative text-white overflow-hidden">
      <Navbar />
      <DecorativeShapes />

      {/* Microsoft Learn Student Ambassador Logo */}
      <div className="flex justify-center mt-10">
        <Image src="/mlsa-logo.png" alt="MLSA Logo" width={350} height={350} />
      </div>

      {/* Vertical Timeline */}
      <div className="absolute left-10 top-32 bottom-10 border-l-2 border-orange-500"></div>

      {/* Cards Section - Zigzag Layout */}
      <div className="flex flex-col items-center gap-4 p-6 mt-6 ml-10 relative">
        {aboutUsData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center w-full max-w-3xl ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } md:text-center`}
          >
            <AboutUsCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
