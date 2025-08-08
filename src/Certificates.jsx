// src / Certificates.jsx;

import { motion } from "framer-motion";

export default function Certificates() {
  return (
    <section
      id="certifications"
      className="text-center py-16 bg-white/20 backdrop-blur-md px-4"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      ></motion.div>

      <h2 className="text-lg text-purple-700 mask-b-from-neutral-50 text-center">
        CERTIFICATES
      </h2>
      <h3 className="text-4xl font-bold text-gray-800 text-center mt-1">
        My Achivements
      </h3>

      {/* Certificate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {/* Card 1 - Clickable */}
        <motion.a
          href="https://drive.google.com/file/d/10VJv369P_DX2h-VLBzRLZE8EUASejOhB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1 hover:scale-105 duration-300 border border-purple-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-purple-700 mb-2">
            Technology Job Simulation
          </h4>
          <p className="text-sm text-gray-600">Deloitte (Forage)</p>
          <p className="text-xs mt-2 text-purple-500">
            Click to view certificate
          </p>
        </motion.a>

        {/* Card 2 */}
        <motion.div
          className="bg-sky-50 rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition hover:-translate-y-1 hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-purple-700 mb-2">
            Namaste React Bootcamp
          </h4>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-sky-50 rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition hover:-translate-y-1 hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-purple-700 mb-2">
            Data Science & ML Bootcamp
          </h4>
          <p className="text-sm text-gray-600">from Udemy</p>
        </motion.div>
      </div>
    </section>
  );
}
