import React, { useState, useEffect } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const careers = [
    {
      logo: "/images/coba.png",
      company: "IMP Studio",
      role: "Intern As Fullstack Developer",
      period: "August 2025 - Feb 2026",
      stacks: ["Django", "Daisy UI", "PotgreSQL", "APIs", "Git" ],
    },
  ];

  const education = [
    {
      logo: "/images/removetb.png",
      school: "SMK Taruna Bhakti",
      degree: "Software Engineering (RPL)",
      period: "2023 - Present",
      stacks: ["Laravel", "Databases", "Flutter", "Tailwind CSS", "Git" ],
    },
  ];

  // reusable card component
  const TimelineCard = ({ item, type }) => (
    <div
      className={`relative pl-10 pb-10 border-l border-cyan-500/20 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-700`}
    >
      {/* dot indicator */}
      <div className="absolute -left-[9px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-[#1a1f2e]" />

      {/* period */}
      <span className="text-xs text-cyan-300 font-medium bg-white/5 px-2 py-1 rounded-full">
        {item.period}
      </span>

      {/* card content */}
      <div className="mt-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 shadow-lg shadow-black/20">
        <div className="flex items-start gap-4">
          {/* logo */}
          <div className="w-12 h-12 rounded-full border-2 border-cyan-400/30 flex items-center justify-center overflow-hidden">
            <img
              src={item.logo}
              alt={type === "career" ? item.company : item.school}
              className="object-contain w-10 h-10"
            />
          </div>
          <div>
            <h3 className="text-white font-semibold">
              {type === "career" ? item.company : item.school}
            </h3>
            <p className="text-sm text-gray-400">
              {type === "career" ? item.role : item.degree}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.stacks.map((stack, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/20"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-[#1a1f2e] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey in coding, career, and education.
          </p>
        </div>

        {/* Career Timeline */}
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">💼 Career</h3>
        <div className="relative">
          {careers.map((c, i) => (
            <TimelineCard key={i} item={c} type="career" />
          ))}
        </div>

        {/* Education Timeline */}
        <h3 className="text-2xl font-bold text-cyan-300 mt-12 mb-6">🎓 Education</h3>
        <div className="relative">
          {education.map((e, i) => (
            <TimelineCard key={i} item={e} type="edu" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
