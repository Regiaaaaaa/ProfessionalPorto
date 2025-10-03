import React, { useState } from "react";
import {
  SiLaravel,
  SiDjango,
  SiHtml5,
  SiPython,
  SiJavascript,
  SiReact,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { TbFlower } from "react-icons/tb";
import { motion } from "framer-motion";

function Skills() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Web Development", "Design", "Database"];

  const skills = [
    { name: "Laravel", category: "Web Development", icon: <SiLaravel size={40} className="text-red-500" />, link: "https://laravel.com", desc: "Web Development" },
    { name: "Django", category: "Web Development", icon: <SiDjango size={40} className="text-green-600" />, link: "https://www.djangoproject.com", desc: "Web Development" },
    { name: "HTML", category: "Web Development", icon: <SiHtml5 size={40} className="text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML", desc: "Web Development" },
    { name: "Python", category: "Web Development", icon: <SiPython size={40} className="text-yellow-400" />, link: "https://www.python.org", desc: "Web Development" },
    { name: "JavaScript", category: "Web Development", icon: <SiJavascript size={40} className="text-yellow-300" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", desc: "Web Development" },
    { name: "ReactJS", category: "Web Development", icon: <SiReact size={40} className="text-cyan-400" />, link: "https://react.dev", desc: "Web Development" },
    { name: "PHP", category: "Web Development", icon: <SiPhp size={40} className="text-indigo-500" />, link: "https://www.php.net", desc: "Web Development" },
    { name: "VS Code", category: "Web Development", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-10 h-10" />, link: "https://code.visualstudio.com", desc: "Code Editor" },
    { name: "Git", category: "Web Development", icon: <SiGit size={40} className="text-orange-600" />, link: "https://git-scm.com", desc: "Version Control" },

    { name: "Tailwind", category: "Design", icon: <SiTailwindcss size={40} className="text-sky-400" />, link: "https://tailwindcss.com", desc: "Web Design" },
    { name: "Bootstrap", category: "Design", icon: <SiBootstrap size={40} className="text-purple-600" />, link: "https://getbootstrap.com", desc: "Web Design" },
    { name: "DaisyUI", category: "Design", icon: <TbFlower size={40} className="text-pink-400" />, link: "https://daisyui.com", desc: "Web Design" },
    { name: "Figma", category: "Design", icon: <SiFigma size={40} className="text-pink-500" />, link: "https://figma.com", desc: "Collaborative Design" },
    { name: "CSS", category: "Design", icon: <SiCss3 size={40} className="text-blue-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS", desc: "Web Design" },

    { name: "MySQL", category: "Database", icon: <SiMysql size={40} className="text-blue-400" />, link: "https://www.mysql.com", desc: "Relational Database" },
    { name: "PostgreSQL", category: "Database", icon: <SiPostgresql size={40} className="text-blue-600" />, link: "https://www.postgresql.org", desc: "Relational Database" },
  ];

  const filteredSkills =
    category === "All" ? skills : skills.filter((s) => s.category === category);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 bg-[#141b2d] text-white relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Skills
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10 sm:mb-14 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Explore my technical skills with clean & modern design.
        </motion.p>

        {/* Categories */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border transition font-medium shadow-md text-sm sm:text-base ${
                category === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-cyan-500/40"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {filteredSkills.map((skill, i) => (
            <motion.a
              key={i}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-lg bg-white/5 border border-white/10 
                         shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 
                         hover:shadow-cyan-500/40 flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="font-semibold text-sm sm:text-lg group-hover:text-cyan-300">
                {skill.name}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                {skill.desc}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
