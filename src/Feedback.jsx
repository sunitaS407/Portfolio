// src/Feedback.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const labels = ["Very Bad", "Bad", "Average", "Good", "Very Good"];

function Feedback() {
  const [rating, setRating] = useState(0);

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
        <h2 className="text-3xl font-bold text-gray-800 mask-b-from-6">Give Your Feedback</h2>
        <p className="text-gray-600 mt-2">
          Let me know what you think about this portfolio.
        </p>
      </div>

      <form
        action="https://formspree.io/f/mvgqvkzg" // your Formspree form ID
        method="POST"
        className="max-w-xl mx-auto mt-8 bg-sky-50
         p-6 rounded-xl shadow-md space-y-6"
      >
        {/* Star Rating */}
        <div className="text-center space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            How would you rate this portfolio?
          </label>
          <div className="flex justify-center gap-2">
            {labels.map((label, index) => (
              <label key={index} className="cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={index + 1}
                  className="hidden"
                  onChange={() => setRating(index + 1)}
                  required
                />
                <span
                  className={`text-3xl ${
                    rating >= index + 1 ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </span>
              </label>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-purple-600">{labels[rating - 1]}</p>
          )}
        </div>

        {/* Optional Feedback Text */}
        <div>
          <textarea
            name="message"
            rows="4"
            placeholder="Optional feedback..."
            className="w-full border px-4 py-2 rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full transition"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </motion.section>
  );
}

export default Feedback;
