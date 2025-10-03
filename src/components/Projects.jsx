import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "WEMINFO",
      desc: "A modern and up-to-date news website",
      img: "/images/tlid2.png",
      tech: ["Laravel", "Tailwind", "MySQL"],
      link: "#",
    },
    {
      title: "Infrastructure Super System",
      desc: "Super school infrastructure system for school mobility",
      img: "/images/sarpras.png",
      tech: ["Laravel", "Tailwind", "MySQL"],
      link: "#",
    },
    {
      title: "Profiling PDPD",
      desc: "System for monitoring and analyzing data on students' assistive device needs and functional impairments",
      img: "/images/profiling-pdpd.png",
      tech: ["Django", "PostgreSQL", "Tailwind", "DaisyUI"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-[#141b2d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Some of the projects I've built and contributed to.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 md:hover:-translate-y-3 hover:scale-[1.02] md:hover:scale-[1.03] transition-all duration-500 backdrop-blur-lg"
            >
              {/* Thumbnail */}
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 space-y-2 md:space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">{p.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-[10px] md:text-xs rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
