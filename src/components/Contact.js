"use client";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "chilakamarri.srinikethannydhru@gmail.com",
      href: "mailto:chilakamarri.srinikethannydhru@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "+91-9133191013",
      href: "tel:+919133191013",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Connect with me",
      href: "https://www.linkedin.com/in/srinikethannydhruva/",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      title: "GitHub",
      subtitle: "Check out my projects",
      href: "https://github.com/naninydhruva",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -top-32 sm:-top-48 -left-32 sm:-left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -bottom-32 sm:-bottom-48 -right-32 sm:-right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Send className="w-8 h-8 text-white animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {`Let's Connect`}
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
          <p className="text-blue-100 text-base md:text-lg">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-base sm:text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-blue-100 text-xs sm:text-sm truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-center gap-2 text-white">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
              <p className="text-sm sm:text-base font-medium">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
