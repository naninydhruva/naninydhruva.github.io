"use client";
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  Calendar, 
  MapPin, 
  Sparkles,
  BookOpen,
  Star
} from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Electronics and Communication Engineering",
      institution: "Vignan Institute of Technology and Science",
      location: "Hyderabad, India",
      period: "June 2017 - August 2021",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      degree: "Board of Intermediate Education",
      institution: "Sri Gayatri Junior College",
      location: "Hyderabad, India",
      period: "June 2015 - May 2017",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      degree: "Board of Secondary School Education",
      institution: "St. Augustine High School",
      location: "Hyderabad, India",
      period: "June 2014 - April 2015",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const certifications = [
    {
      name: "Microsoft Azure Fundamentals",
      description:
        "Entry-level certification, demonstrating foundational knowledge of Azure services",
      icon: Award,
    },
    {
      name: "Flutter Certified Application Developer",
      description:
        "Certification indicating proficiency in developing applications using Flutter",
      icon: Award,
    },
    {
      name: "GitHub Actions Deep Dive",
      description: "In-depth course covering GitHub Actions for CI/CD",
      icon: BookOpen,
    },
    {
      name: "Responsive Web Design",
      description: "Online course focused on responsive web design principles",
      icon: BookOpen,
    },
  ];

  const achievements = [
    {
      title: "Star Award at LTIMindtree",
      description:
        "Received Star Award in the project account at LTIMindtree for exceptional team collaboration during the development of a high-impact wellness application",
      icon: Star,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "College Hackathon Winner",
      description:
        "Won 1st Prize in a college-level 1-day hackathon for developing a collaborative project titled 'Vignan Wallet'",
      icon: Trophy,
      gradient: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Education */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Education
              </h2>
            </div>
            <p className="text-gray-600 text-base md:text-lg">Academic background</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`h-2 bg-linear-to-r ${edu.gradient}`}></div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br ${edu.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base mb-3">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 shrink-0" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8 text-purple-600 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Certifications
              </h2>
            </div>
            <p className="text-gray-600 text-base md:text-lg">
              Professional credentials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={idx}
                  className="group bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-yellow-600 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Key Achievements
              </h2>
              <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
            </div>
            <p className="text-gray-600 text-base md:text-lg">
              Recognition and awards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={idx}
                  className="group bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-l-4 border-yellow-500"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br ${achievement.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
