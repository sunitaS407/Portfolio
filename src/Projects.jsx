// src/Projects.jsx

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      {/* Heading */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl text-purple-700 mask-b-from-neutral-50">
          MY WORK
        </h2>
        <h3 className="text-4xl font-bold text-gray-800 mt-1">
          Featured Projects
        </h3>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          Explore some of the exciting projects I've worked on, combining
          creativity and technology across web development and AI domains.
        </p>
      </motion.div>

      <div className="mt-12 space-y-20 max-w-5xl mx-auto">
        {/* TrackIt Project */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="https://github.com/sunitaS407/TractIt"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.img
              src="/trackIt.jpg"
              alt="TractIt — Offline Expense Tracker"
              className="w-[280px] sm:w-[320px] rounded-xl shadow-lg object-cover cursor-pointer"
              whileHover={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </a>

          <div className="md:w-1/2 text-left">
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              TractIt — Offline Expense Tracker
            </h4>
            <p className="text-gray-700 mb-3">
              A fully offline expense tracking application built with modern
              tech stacks. Features include budget management, expense
              categorization, data visualization, and export capabilities.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Chart.js
              </span>
            </div>
          </div>
        </motion.div>

        {/* AI-Powered Learning Platform */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/ai.jpg"
            alt="AI-Powered Learning Platform"
            className="w-[280px] sm:w-[320px] rounded-xl shadow-lg object-cover"
            whileHover={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
          <div className="md:w-1/2 text-left">
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              AI-Powered Learning Platform
            </h4>
            <p className="text-gray-700 mb-3">
              An intelligent learning management system that uses machine
              learning to personalize education pathways based on student
              performance and preferences.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Python
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Flask
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                TensorFlow
              </span>
            </div>
          </div>
        </motion.div>

        {/* QuickBite Project */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src="/Quickbite.jpg"
            alt="QuickBite – Food Delivery App"
            className="w-[280px] sm:w-[320px] rounded-xl shadow-lg object-cover"
            whileHover={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
          <div className="md:w-1/2 text-left">
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              QuickBite – Food Delivery App
            </h4>
            <p className="text-gray-700 mb-3">
              A modern food delivery app with real-time tracking, responsive UI,
              and secure payment integration. Developed for smooth ordering
              experiences and high performance across devices.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                Stripe
              </span>
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/sunitaS407"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-700 font-semibold text-lg hover:underline transition-all duration-300 group"
          >
            View more projects on GitHub
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
