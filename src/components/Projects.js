"use client";
import { useState } from "react";
import {
  Calendar,
  TrendingUp,
  Github,
  ExternalLink,
  Heart,
  Globe,
  Shield,
  Sparkles,
  Code2,
} from "lucide-react";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Period Wellness Application",
      period: "June 2022 - Present",
      description:
        "A comprehensive wellness application focused on improving female menstrual health tracking and insights",
      tech: ["Flutter", "Dart", "Firebase", "GitHub Actions", "TDD"],
      highlights: [
        "25% increase in user engagement",
        "Migrated to Flutter for enhanced UI/UX",
        "Cycle tracking & prediction engine",
        "Secure rewards system with encryption",
        "GitHub Copilot integration & TDD",
        "Data privacy with encryption",
      ],
      gradient: "from-pink-500 via-rose-500 to-red-500",
      IconComponent: Heart,
      impact: "25%",
      impactLabel: "User Engagement",
    },
    {
      title: "Period Wellness Website",
      period: "February 2025 - August 2025",
      description:
        "A responsive website delivering curated articles and product recommendations for women's menstrual health",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Contentful",
        "GA4",
      ],
      highlights: [
        "Responsive design with Next.js & Tailwind",
        "Period tracker with React & TypeScript",
        "Product recommendation engine",
        "Third-party SDK integrations",
        "GTM optimization & GA4 tracking",
        "Contentful CMS integration",
      ],
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      IconComponent: Globe,
      impact: "30%",
      impactLabel: "Deployment Time",
    },
    {
      title: "App Screen Privacy Plugin",
      period: "Open Source",
      description:
        "A Flutter plugin protecting apps from screen capture and providing privacy overlays",
      tech: ["Flutter", "Dart", "Kotlin", "Swift", "Android", "iOS"],
      highlights: [
        "Privacy screen on app background",
        "Screenshot prevention (Android)",
        "Screen recording prevention",
        "Customizable privacy overlay",
        "MIT licensed open-source",
        "Published on pub.dev",
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      IconComponent: Shield,
      github: "https://github.com/naninydhruva/app_screen_privacy",
      impact: "100%",
      impactLabel: "Security Coverage",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-linear-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Featured Projects
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Building impactful solutions with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => {
            const Icon = project.IconComponent;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setExpandedProject(idx)}
                onMouseLeave={() => setExpandedProject(null)}
              >
                {/* Gradient Header with Icon */}
                <div
                  className={`relative h-32 sm:h-40 bg-linear-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                  <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10 drop-shadow-lg" />
                  {/* Animated circles */}
                  <div className="absolute w-32 h-32 bg-white/20 rounded-full -top-16 -left-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute w-24 h-24 bg-white/20 rounded-full -bottom-12 -right-12 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute w-20 h-20 bg-white/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-200 transition-transform duration-700"></div>
                </div>

                <div className="p-5 sm:p-6">
                  {/* Title & Period */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 font-semibold mb-3">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{project.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-linear-to-r ${project.gradient} text-white text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <TrendingUp className="w-4 h-4 shrink-0" />
                    <span>
                      {project.impact} {project.impactLabel}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div
                    className={`space-y-2 transition-all duration-500 overflow-hidden ${
                      expandedProject === idx
                        ? "max-h-96 opacity-100"
                        : "max-h-48 opacity-75"
                    }`}
                  >
                    {project.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 transform transition-all duration-300 hover:translate-x-2"
                        style={{ transitionDelay: `${hIdx * 50}ms` }}
                      >
                        <Sparkles
                          className={`w-3 h-3 shrink-0 mt-1 text-blue-500 group-hover:animate-pulse`}
                        />
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold text-xs sm:text-sm group/link transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 transform group-hover/link:rotate-12 transition-transform duration-300" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
