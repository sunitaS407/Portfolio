// src/Feedback.jsx
import { useState } from "react";
import { motion } from "framer-motion";

function Feedback() {
  return (
    <motion.section
      id="feedback"
      className="py-16 px-6 backdrop-blur-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mask-b-from-6">
          Give Your Feedback
        </h2>
      </div>

      <form
        action="https://formspree.io/f/mvgqvkzg" // your Formspree form ID
        method="POST"
        className="max-w-xl mx-auto mt-8 bg-sky-50
         p-6 rounded-xl shadow-md space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          name="message"
          rows="3"
          placeholder="Your feedback..."
          className="w-full border px-4 py-2 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
}

export default Feedback;
