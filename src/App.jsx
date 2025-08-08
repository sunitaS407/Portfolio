import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SkillBar from "./SkillBar";
import Contact from "./Contact";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Feedback from "./Feedback";
import { TypeAnimation } from "react-type-animation";
import Projects from ".//Projects";
import Footer from "./Footer";
import Certificates from "./Certificates";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-sky-100 to-purple-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-purple-700">Sunita Saha</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-purple-600">
              Home
            </a>
            <a href="#about" className="hover:text-purple-600">
              About
            </a>
            <a href="#skills" className="hover:text-purple-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-600">
              Projects
            </a>
            <a href="#certifications" className="hover:text-purple-600">
              Certifications
            </a>
            <a href="#contact" className="hover:text-purple-600">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle (checkbox hack) */}
          <div className="md:hidden relative">
            <input type="checkbox" id="menu-toggle" className="peer hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </div>
            </label>

            {/* Mobile Menu */}
            <div className="absolute right-0 top-full mt-3 bg-white rounded shadow-lg p-4 w-44 space-y-3 text-sm font-medium hidden peer-checked:flex flex-col z-50">
              <a href="#home" className="hover:text-purple-600">
                Home
              </a>
              <a href="#about" className="hover:text-purple-600">
                About
              </a>
              <a href="#skills" className="hover:text-purple-600">
                Skills
              </a>
              <a href="#projects" className="hover:text-purple-600">
                Projects
              </a>
              <a href="#certifications" className="hover:text-purple-600">
                Certifications
              </a>
              <a href="#contact" className="hover:text-purple-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className=" sm:pt-16 md:pt-24 max-w-5xl mx-auto px-4 sm:px-6 space-y-24 overflow-hidden">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 pt-36 md:pt-44 pb-20"
        >
          {/* Left Side — Text with animation */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            className="md:w-1/2 text-center md:text-left space-y-1"
          >
            <h1 className="text-2xl font-bold text-purple-700">Hello,</h1>
            <h2 className="text-xl font-semibold text-gray-700 mask-b-from-amber-50">
              I’m Sunita Saha
            </h2>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1500,
                "ML Enthusiast",
                1500,
                "Creative Coder",
                1500,
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
              className="text-lg font-semibold text-gray-800"
            />

            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              Creating elegant solutions through code. <br />
              Currently pursuing my passion in technology as a{" "}
              <strong>4th year student</strong> at University Institute of
              Technology, Burdwan.
            </p>

            {/* Buttons */}
            <div className="mt-4 sm:flex sm:flex-row gap-4 md:justify-start">
              <a
                href="#projects"
                className="mx-1 px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-full shadow hover:bg-purple-700 transition"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="mx-1 px-6 py-2 border border-purple-600 text-purple-700 text-sm font-medium rounded-full shadow hover:bg-purple-100 transition"
              >
                Get in Touch
              </a>
            </div>

            {/* Resume Button with animation */}
            <motion.a
              href="/Sunita_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4 px-6 py-2 bg-gray-700 text-sm text-white font-medium rounded-full shadow hover:bg-indigo-950 transition"
            >
              📄 Download Resume
            </motion.a>
          </motion.div>

          {/* Right side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 60,
              delay: 0.3,
            }}
            className="md:w-1/2 flex justify-center items-center relative mt-12 md:mt-0"
          >
            {/* Animated Shape Behind Image */}
            <motion.div
              className="absolute w-44 h-44 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-300 via-sky-200 to-pink-200"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{ zIndex: 0 }}
            />
            <img
              src="/sunita.jpg"
              alt="Sunita Saha"
              className="relative w-28 h-28 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-b-white shadow-lg z-10"
            />
          </motion.div>
        </section>

        <section
          className="flex flex-col md:flex-row items-center gap-10 px-6 max-w-6xl mx-auto mt-24 relative"
          id="about"
        >
          {/* Left Side: Image + Icons */}
          <motion.div
            className="md:w-1/2 flex flex-col items-center relative z-10"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Stylish blurred background */}
            <motion.div
              className="absolute top-0 w-60 h-60 rounded-2xl bg-gradient-to-tr from-purple-300/30 to-sky-200/30 blur-2xl -z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            ></motion.div>

            {/* Image */}
            <img
              src="/coding.jpg"
              alt="Coding Illustration"
              className="w-[280px] sm:w-[320px] rounded-xl shadow-lg z-10"
            />

            {/* Icons below image */}
            <div className="flex gap-4 mt-4 z-10">
              <a
                href="https://github.com/sunitaS407"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl hover:bg-purple-100 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sunita-saha-3b8041240/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-xl hover:bg-purple-100 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Text + Boxes */}
          <motion.div
            className="md:w-1/2 text-center md:text-left space-y-4"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-purple-700 font-semibold text-lg mask-b-from-neutral-100 ">
              ABOUT ME
            </h2>
            <p className="text-2xl text-gray-950 font-bold">
              Passionate about building digital solutions.
            </p>
            <p className="text-gray-700 text-base">
              I'm a Frontend Developer with strong interest in Machine Learning.
              Experienced in building full-stack apps using React, Node.js, and
              Python. Focused on user-centric design and intelligent features.
            </p>

            {/* Boxes: Education + Location */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Education Box */}
              <div className="bg-sky-50 rounded-lg shadow p-4 text-left">
                <h3 className="text-purple-700 font-semibold text-sm mb-1">
                  Education
                </h3>
                <p className="text-gray-800 text-base leading-snug">
                  B.E in Information Technology
                  <br />
                  University Institute of Technology, Burdwan
                </p>
              </div>

              {/* Location Box */}
              <div className="bg-sky-50 rounded-lg shadow p-4 text-left">
                <h3 className="text-purple-700 font-semibold text-sm mb-1">
                  Location
                </h3>
                <p className="text-gray-800 text-base leading-snug">
                  West Bengal, India
                  <br />
                  Open to remote opportunities
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="skills"
          className="text-center py-16 bg-white/20 backdrop-blur-md px-4"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-purple-700 font-semibold text-lg mask-b-from-neutral-100">
              My Expertise
            </h2>
            <h3 className="text-4xl font-bold text-gray-800 mt-1">
              Skills & Proficiencies
            </h3>
            <p className="max-w-xl mx-auto mt-4 text-gray-600">
              I've developed a diverse set of skills across the full stack
              development spectrum and AI/ML domain. Here's a comprehensive
              breakdown of my technical expertise.
            </p>
          </motion.div>

          {/* Skill Boxes - Frontend & Backend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Frontend */}
            <motion.div
              className="bg-sky-50/40 backdrop-blur-md p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-6">
                Frontend Development
              </h4>
              <SkillBar skill="React.js" percentage={90} />
              <SkillBar skill="JavaScript" percentage={90} />
              <SkillBar skill="Tailwind CSS" percentage={95} />
              <SkillBar skill="TypeScript" percentage={85} />
              <SkillBar skill="Next.js" percentage={80} />
            </motion.div>

            {/* Backend */}
            <motion.div
              className="bg-sky-50 backdrop-blur-md p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-6">
                Backend Development
              </h4>
              <SkillBar skill="Node.js" percentage={85} />
              <SkillBar skill="Express.js" percentage={80} />
              <SkillBar skill="Flask" percentage={75} />
              <SkillBar skill="MySQL" percentage={70} />
              <SkillBar skill="Python" percentage={90} />
            </motion.div>
          </div>

          {/* Skill Boxes - AI/ML & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* AI/ML */}
            <motion.div
              className="bg-sky-50 bg-opacity-60 backdrop-blur-sm shadow-lg rounded-xl p-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-center md:text-left">
                AI / ML Development
              </h4>
              <SkillBar skill="TensorFlow" percentage={75} />
              <SkillBar skill="PyTorch" percentage={70} />
              <SkillBar skill="scikit-learn" percentage={80} />
              <SkillBar skill="Data Analysis" percentage={85} />
              <SkillBar skill="NLP" percentage={65} />
            </motion.div>

            {/* Tools */}
            <motion.div
              className="bg-sky-50 bg-opacity-60 backdrop-blur-sm shadow-lg rounded-xl p-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-center md:text-left">
                Tools & Others
              </h4>
              <SkillBar skill="Git & GitHub" percentage={90} />
              <SkillBar skill="UI/UX Design" percentage={80} />
              <SkillBar skill="MS Excel & PowerPoint" percentage={100} />
              <SkillBar skill="AWS" percentage={70} />
            </motion.div>
          </div>
        </section>
        <Projects />

        {/* Tools & Technologies Section */}
        <motion.section
          className="mt-20 mb-10 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-xl font-semibold text-purple-700 mb-6">
            Languages & Tools I Use 💻
          </h3>

          <div className="flex flex-wrap justify-center gap-6 text-4xl">
            <FaHtml5
              className="hover:text-orange-600 transition-transform hover:scale-110"
              title="HTML5"
            />
            <FaJs
              className="hover:text-yellow-400 transition-transform hover:scale-110"
              title="JavaScript"
            />
            <SiTypescript
              className="hover:text-blue-600 transition-transform hover:scale-110"
              title="TypeScript"
            />
            <FaReact
              className="hover:text-cyan-500 transition-transform hover:scale-110"
              title="React"
            />
            <SiTailwindcss
              className="hover:text-sky-400 transition-transform hover:scale-110"
              title="Tailwind CSS"
            />
            <FaNodeJs
              className="hover:text-green-600 transition-transform hover:scale-110"
              title="Node.js"
            />
            <SiMongodb
              className="hover:text-green-700 transition-transform hover:scale-110"
              title="MongoDB"
            />
            <SiMysql
              className="hover:text-blue-700 transition-transform hover:scale-110"
              title="MySQL"
            />
            <FaPython
              className="hover:text-blue-400 transition-transform hover:scale-110"
              title="Python"
            />
            <FaFigma
              className="hover:text-pink-500 transition-transform hover:scale-110"
              title="Figma"
            />
          </div>
        </motion.section>

        {/* Spacer between Certifications and Tools */}
        <div className="h-4sm:h-14"></div>

        <Certificates />

        <Contact />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}

export default App;
