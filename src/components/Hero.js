"use client";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  ChevronDown,
  Sparkles,
  Code2,
} from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -top-32 sm:-top-48 -left-32 sm:-left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -bottom-32 sm:-bottom-48 -right-32 sm:-right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-2xl top-1/3 left-1/3 animate-pulse delay-500"></div>
      </div>

      <div
        className={`relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Sparkles className="w-5 h-5 text-yellow-300" />
          <span className="text-white text-sm font-semibold">
            Software Engineer
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
          Chilakamarri Srinikethan Nydhruva
        </h1>

        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 animate-fade-in-delay-1">
          <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-semibold">
            Software Developer
          </p>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in-delay-2 leading-relaxed">
          Building scalable mobile and web applications with Flutter, Next.js,
          React, and modern DevOps practices
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-delay-3">
          <a
            href="tel:+919133191013"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="hidden sm:inline">+91-9133191013</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="mailto:chilakamarri.srinikethannydhru@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Email</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-4">
          <a
            href="https://www.linkedin.com/in/srinikethannydhruva/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/naninydhruva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
    </section>
  );
}
