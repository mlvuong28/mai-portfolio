import { useEffect, useState } from "react";
import logo from "../assets/chibi-img.png";

export const Navbar = ({ menuOpen, setMenuOpen, theme, setTheme }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add blur effect when scrolling down
      setIsBlurred(window.scrollY > 50); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-40 backdrop-blur-lg shadow-lg"
        style={{ background: "var(--nav-bg)", borderBottom: "1px solid", borderColor: "var(--nav-border)" }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="flex items-center">
              <img
                src={logo}
                alt="Mai Long logo"
                className="h-5 md:h-20 w-auto object-cover bg-transparent"
                style={{ background: "transparent" }}
              />
            </a>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="nav-link">
                  Home
                </a>
                <a href="#about" className="nav-link">
                  About
                </a>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </div>

              <div
                className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                &#9776;
              </div>

              <button
                aria-label="Toggle theme"
                title="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded transition-colors"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`transition-all duration-300 ${
          isBlurred ? "blur-sm" : ""
        }`}
      >
        {/* This is where your page content goes */}
        <div className="pt-16">
          {/* Add your page content here */}
        </div>
      </div>
    </>
  );
};