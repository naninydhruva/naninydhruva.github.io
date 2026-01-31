"use client";
import { useState } from "react";
import { Smartphone, Code2, Cloud, Wrench, Sparkles, Zap } from "lucide-react";

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Smartphone,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        "Flutter",
        "Next.js",
        "React.js",
        "Ionic + Angular",
        "HTML5",
        "CSS",
        "SCSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Languages",
      icon: Code2,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        "Node.js",
        "Dart",
        "JavaScript",
        "TypeScript",
        "Python",
        "GraphQL",
        "Swift (Basic)",
        "Kotlin (Basic)",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      gradient: "from-emerald-500 to-teal-500",
      skills: [
        "CI/CD (GitHub Actions)",
        "Azure App Services",
        "Contentful CMS",
      ],
    },
    {
      title: "Tools & Practices",
      icon: Wrench,
      gradient: "from-orange-500 to-red-500",
      skills: [
        "Android Studio",
        "Xcode",
        "Figma",
        "Adobe XD",
        "Debugging & Root Cause Analysis",
        "Performance Optimization",
        "Prompt Engineering for Copilot",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Zap className="w-8 h-8 text-blue-600 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Technical Skills
            </h2>
            <Zap className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          <p className="text-gray-600 text-base md:text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="relative group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br ${category.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 sm:px-4 py-2 bg-linear-to-r ${category.gradient} text-white rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-default`}
                      style={{
                        animationDelay: `${skillIdx * 50}ms`,
                        opacity: hoveredCategory === idx ? 1 : 0.95,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                {hoveredCategory === idx && (
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-3xl pointer-events-none animate-pulse"></div>
                )}

                {/* Decorative Elements */}
                <Sparkles className="absolute top-4 right-4 w-6 h-6 text-gray-200 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
