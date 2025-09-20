import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "Services", "Solutions", "Agency", "Testimonials"];
      let current = "Home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100; // علشان الهيدر ثابت فوق
          if (window.scrollY >= offsetTop) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#Home" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#e85f19"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            <path d="M8 15S3 12 1.5 8.5 3 2 5.5 2c1.54 0 2.5 1 2.5 1s.96-1 2.5-1C13 2 14.5 4 12.5 8.5S8 15 8 15z" />
          </svg>
          <span className="font-bold text-gray-900 text-lg">
            Brand<span className="text-[#e85f19]">Buzz</span>
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Links - Desktop */}
        <div className="hidden lg:flex space-x-6 items-center">
          {["Home", "Services", "Solutions", "Agency", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`${
                activeSection === item ? "text-[#e85f19]" : "text-gray-700"
              } hover:text-[#e85f19] font-semibold`}
            >
              {item}
            </a>
          ))}
          <a
            href="#Sign"
            className="ml-4 bg-[#e85f19] text-white px-4 py-2 rounded-full hover:bg-[#cc4f14] transition"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-2 px-4 pb-4">
          {["Home", "Services", "Solutions", "Agency", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`${
                activeSection === item ? "text-[#e85f19]" : "text-gray-700"
              } hover:text-[#e85f19] font-semibold`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#Sign"
            className="bg-[#e85f19] text-white px-4 py-2 rounded-full hover:bg-[#cc4f14] transition inline-block"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}
