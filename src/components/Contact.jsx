import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 bg-[#1a1f2e] text-white relative"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-wide"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Touch
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 mb-10 sm:mb-12 text-base sm:text-lg"
        >
          Let’s collaborate, share ideas, or just say hello 👋
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Email */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            href="mailto:gheizarafashaquille@gmail.com"
            className="group rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-lg bg-white/5 border border-white/10 
                       shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40
                       flex flex-col items-center text-center"
          >
            <FaEnvelope className="text-cyan-400 text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-sm sm:text-lg group-hover:text-cyan-300">
              Email
            </p>
            <span className="text-gray-400 text-xs sm:text-sm mt-1 break-words max-w-[180px] sm:max-w-[200px]">
              gheizarafashaquille@gmail.com
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://www.linkedin.com/in/rafa-gheiza-057a33333/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-lg bg-white/5 border border-white/10 
                       shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40
                       flex flex-col items-center text-center"
          >
            <FaLinkedin className="text-blue-500 text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-sm sm:text-lg group-hover:text-cyan-300">
              LinkedIn
            </p>
            <span className="text-gray-400 text-xs sm:text-sm mt-1 break-words max-w-[200px]">
              linkedin.com/in/rafa-gheiza-057a33333
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="https://github.com/Regiaaaaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-lg bg-white/5 border border-white/10 
                       shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40
                       flex flex-col items-center text-center"
          >
            <FaGithub className="text-gray-300 text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-sm sm:text-lg group-hover:text-cyan-300">
              GitHub
            </p>
            <span className="text-gray-400 text-xs sm:text-sm mt-1 break-all max-w-[200px]">
              github.com/Regiaaaaaa
            </span>
          </motion.a>

          {/* Instagram */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="https://www.instagram.com/ghezzz___/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-lg bg-white/5 border border-white/10 
                       shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/40
                       flex flex-col items-center text-center"
          >
            <FaInstagram className="text-pink-500 text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
            <p className="font-semibold text-sm sm:text-lg group-hover:text-cyan-300">
              Instagram
            </p>
            <span className="text-gray-400 text-xs sm:text-sm mt-1">@ghezzz___</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
