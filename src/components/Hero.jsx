import React, { useState, useEffect } from 'react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15 - 7.5,
        y: (e.clientY / window.innerHeight) * 15 - 7.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const texts = ["Full-Stack Developer", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1f2e]"
      id="hero"
    >
      {/* Animated Dot Grid Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Greeting Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm transform transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="text-xl">👋</span>
              <span className="text-sm text-cyan-300 font-medium">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div
              className={`space-y-2 transform transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
                Hi, I'm
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text leading-tight">
                Rafa Gheiza
              </h2>
            </div>

            {/* Dynamic Role Text */}
            <div
              className={`min-h-[3rem] flex items-center justify-center md:justify-start transform transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="flex items-center gap-2 text-xl sm:text-2xl text-gray-300">
                <span className="text-cyan-400 font-bold">{"<"}</span>
                <span className="font-semibold text-cyan-300 transition-all duration-500">
                  {texts[textIndex]}
                </span>
                <span className="text-cyan-400 font-bold">{"/>"}</span>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 transform transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              I specialize in building{" "}
              <span className="text-cyan-400 font-semibold">scalable</span>,{" "}
              <span className="text-blue-400 font-semibold">
                high-performance
              </span>{" "}
              applications with modern technologies.
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className={`flex justify-center md:justify-end transform transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Profile Circle */}
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-500">
                <img
                  src="/images/ptjg.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg shadow-blue-500/30 animate-bounce">
                <span className="text-white font-semibold text-xs sm:text-sm">
                  Available 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
