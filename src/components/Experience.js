"use client";
import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Users,
  Code2,
  Rocket,
  Zap,
  Award,
} from "lucide-react";

export default function Experience() {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const metrics = [
    {
      label: "User Engagement",
      value: "25%",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500",
    },
    {
      label: "Deployment Time",
      value: "30%",
      icon: Rocket,
      color: "from-purple-500 to-indigo-500",
    },
    {
      label: "Release Cycles",
      value: "40%",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Bug Resolution",
      value: "25%",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const responsibilities = [
    {
      text: "Engineered a personalized period tracking application supporting women's health with cycle logging and predictive insights",
      icon: Code2,
    },
    {
      text: "Integrated Contentful CMS for dynamic content management, reducing deployment time by 30%",
      icon: Rocket,
    },
    {
      text: "Implemented custom CI/CD pipelines using GitHub Actions, reducing release cycles by 40%",
      icon: Zap,
    },
    {
      text: "Developed responsive web applications with Next.js, React, and TypeScript ensuring optimal performance",
      icon: Code2,
    },
    {
      text: "Enhanced accessibility by integrating WCAG-compliant features for inclusive user experiences",
      icon: Users,
    },
    {
      text: "Conducted debugging and root cause analysis, reducing bug resolution time by 25%",
      icon: Award,
    },
    {
      text: "Collaborated with cross-functional teams including design, QA, and DevOps for seamless delivery",
      icon: Users,
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-20 bg-linear-to-br from-white via-blue-50/30 to-purple-50/30"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Experience
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg">
            Professional journey & achievements
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline indicator */}
          <div className="relative pl-6 sm:pl-8 md:pl-10 border-l-4 border-linear-to-b from-blue-500 via-purple-500 to-pink-500">
            <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-3.5 top-0 animate-pulse shadow-lg shadow-blue-500/50"></div>

            {/* Main Experience Card */}
            <div className="mb-8 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Header Section with Gradient */}
              <div className="relative bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-6 sm:p-8">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-3">
                        <Briefcase className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-semibold">
                          Current Position
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        Software Engineer
                      </h3>
                      <p className="text-xl sm:text-2xl text-white/95 font-semibold mb-1">
                        LTIMindtree
                      </p>
                      <p className="text-white/80 text-sm sm:text-base">
                        Leading IT services and consulting company
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <div className="flex items-center gap-2 text-white/90 mb-2">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span className="font-semibold text-sm sm:text-base">
                          Oct 2021 - Present
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-sm sm:text-base">
                          Hyderabad, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-16 -right-16"></div>
                <div className="absolute w-24 h-24 bg-white/10 rounded-full -bottom-12 -left-12"></div>
              </div>

              {/* Metrics Section */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 border-b border-gray-200">
                {metrics.map((metric, idx) => {
                  const MetricIcon = metric.icon;
                  return (
                    <div
                      key={idx}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredMetric(idx)}
                      onMouseLeave={() => setHoveredMetric(null)}
                    >
                      <div
                        className={`bg-white rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${
                          hoveredMetric === idx
                            ? "border-blue-500"
                            : "border-transparent"
                        }`}
                      >
                        <div
                          className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br ${metric.color} mb-2 sm:mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                        >
                          <MetricIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                          {metric.value}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium">
                          {metric.label}
                        </p>
                      </div>
                      {hoveredMetric === idx && (
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl animate-pulse pointer-events-none"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Responsibilities Section */}
              <div className="p-6 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  Key Responsibilities & Achievements
                </h4>
                <div className="grid gap-4">
                  {responsibilities.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:translate-x-2"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                          <ItemIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1 pt-2">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* End indicator */}
            <div className="absolute w-5 h-5 bg-pink-500 rounded-full -left-3.5 bottom-0 shadow-lg shadow-pink-500/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
