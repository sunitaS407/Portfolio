const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-900  text-white text-sm left-0 right-0">
        {/* Full-width background wrapper */}
        <div className="w-full">
          {/* Centered content container */}
          <div className="max-w-6xl mx-auto px-6 md:flex items-center justify-between py-4">
            {/* Left Side */}
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-purple-700">Sunita</span> Saha
              </h2>
              <p className="mt-1 text-sm">
                Full Stack Dev | AI/ML Enthusiast | Problem Solver
              </p>
            </div>

            {/* Center Nav */}
            <div className="mt-6 md:mt-0 flex gap-6 text-sm">
              <a href="#home" className="hover:text-purple-600">
                Home
              </a>
              <a href="#about" className="hover:text-purple-600">
                About
              </a>
              <a href="#projects" className="hover:text-purple-600">
                Projects
              </a>
              <a href="#contact" className="hover:text-purple-600">
                Contact
              </a>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="text-center text-sm mt-6 text-gray-500">
            © 2025 Sunita Saha. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;