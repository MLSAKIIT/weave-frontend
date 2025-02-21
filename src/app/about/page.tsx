import React from "react";
import Navbar from "@/components/ui/Navbar";
import AboutUsCard from "@/components/ui/AboutUsCard";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import Image from "next/image";
import Footer from "@/components/ui/Footer";

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

const ourDomainData = [
  {
    title: "Technical",
    description:
      "Our tech-savvy team of innovators and problem solvers. With their expertise in cutting-edge tools and technologies, they create seamless digital experiences, thus making learning lively and fun",
    iconSrc: "/icons/domain-icon-1.png",
  },
  {
    title: "Creative",
    description:
      "Our team of imaginative minds who breathe life into ideas with their boundless creativity. With their diverse skill sets, they transform visions into stunning works of art, leaving audiences awestruck",
    iconSrc: "/icons/domain-icon-2.png",
  },
  {
    title: "Operations",
    description:
      "Our operations team is the backbone of our society. With their exceptional organizational skills, they handle logistics, coordination, and resource management, enabling seamless execution of projects and initiatives.",
    iconSrc: "/icons/domain-icon-3.png",
  },
  {
    title: "Marketing",
    description:
      "Our team of zealous minds who amplify the voice of MLSA, helping us link with the audience and corporate world. Their creative thinking, market insights, and innovative tactics drive our success.",
    iconSrc: "/icons/domain-icon-4.png",
  },
  {
    title: "Broadcasting",
    description:
      "A team of creative minds who bring our ideas to life. Through their mastery of video storytelling, exceptional editing skills, and a deep understanding of YouTube, they craft engaging content to captivate viewers",
    iconSrc: "/icons/domain-icon-5.png",
  },
  {
    title: "Design",
    description:
      "A team of visionary artists breathing life into ideas through their exceptional skill set. With their keen eye for aesthetics and creative expertise, they transform concepts into stunning visual experiences.",
    iconSrc: "/icons/domain-icon-6.png",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="star-background bg-black min-h-screen flex flex-col relative text-white overflow-hidden">
        <Navbar />
        <DecorativeShapes />

        {/* Microsoft Learn Student Ambassador Logo */}
        <div className="flex justify-center mt-10">
          <Image
            src="/mlsa-logo.png"
            alt="MLSA Logo"
            width={350}
            height={350}
          />
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

        {/* Our Domain */}
        <div className="domain mx-20 flex flex-col justify-center items-center">
          <h1 className="bg-[#101426] text-[#E76F04] font-semibold text-2xl w-1/3 text-center p-5 rounded-md my-3 max-md:w-full">
            Our Domain
          </h1>
          <div className="cards flex justify-center flex-wrap box-border">
            {ourDomainData.map((e, i) => {
              return (
                <div
                  className="card w-full sm:w-[80%] md:w-[40%] lg:w-[25vw]  min-h-[50vh] p-6 sm:p-4 h-[50vh] my-8 m-5 px-4 py-3 pb-10 bg-[#101426] text-[#E76F04] rounded-md flex justify-around items-center flex-col relative text-center"
                  key={i}
                >
                  <div className="absolute w-[70px] h-[70px] bg-[#E76F04] rounded-full overflow-hidden top-[-30px] right-[-15px]">
                    <Image
                      src={e.iconSrc}
                      alt=""
                      fill
                      className="mix-blend-multiply p-3"
                    />
                  </div>
                  <h2 className="w-full md:text-xl text-lg font-semibold text-left">
                    {e.title}
                  </h2>
                  <p className="md:text-lg text-sm">{e.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
