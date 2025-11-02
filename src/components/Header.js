"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Animated Logo/Avatar */}
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <div
            className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
              scrolled
                ? "bg-linear-to-br from-blue-600 via-purple-600 to-pink-600"
                : "bg-linear-to-br from-blue-400 via-purple-500 to-pink-500"
            } shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/50`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 text-white group-hover:rotate-180 ${
                  scrolled ? "animate-pulse" : ""
                }`}
              />
            </div>
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100"></div>
          </div>
          <h2
            className={`text-xl sm:text-2xl font-bold transition-all duration-300 group-hover:scale-105 ${
              scrolled
                ? "text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600"
                : "text-white group-hover:text-blue-100"
            }`}
          >
            SN
          </h2>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative transition-all duration-300 font-medium text-sm lg:text-base group cursor-pointer px-2 py-1 ${
                      scrolled
                        ? isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                        : isActive
                        ? "text-blue-200"
                        : "text-white hover:text-blue-200"
                    } hover:scale-110 active:scale-95`}
                  >
                    {item}
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                    {/* Glow effect on hover */}
                    <span
                      className={`absolute inset-0 rounded-md bg-linear-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10`}
                    ></span>
                  </button>
                </li>
              );
            }
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer p-2 rounded-lg hover:bg-white/10 ${
            scrolled ? "text-blue-600" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 animate-spin-once" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-slide-down">
          <ul className="container mx-auto px-4 py-4 space-y-2">
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-95 ${
                        isActive
                          ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-l-4 hover:border-blue-400"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
