// src/Contact.jsx
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook  } from "react-icons/fa";
import { motion } from "framer-motion";


function Contact() {
  return (
    <motion.section
  id="contact"
  className="py-20 backdrop-blur-md"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Header */}
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <p className="text-sm text-purple-700 mask-b-from-neutral-50 tracking-wider font-semibold uppercase">
      Get in Touch
    </p>
    <h2 className="text-4xl font-bold text-gray-800 mt-2">Let's Work Together</h2>
    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
      Have a project in mind or just want to connect? Feel free to reach out through the form below or via my contact details.
    </p>
  </motion.div>

  {/* Grid: Info + Form */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12 px-6">
    
    {/* Contact Info */}
    <motion.div
      className="bg-sky-50 p-6 rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
      <p className="text-gray-600">
        Feel free to reach out to me using any of the following contact methods. I'm always open to discussing new projects, opportunities, or partnerships.
      </p>

      <div className="space-y-2">
        <p className="flex items-center gap-3">📧 <span>sahasunita401@gmail.com</span></p>
        <p className="flex items-center gap-3">📞 <span>+91 8391036274</span></p>
        <p className="flex items-center gap-3">📍 <span>West Bengal, India</span></p>
      </div>

      <div className="mt-6">
        <p className="font-medium text-gray-700 mb-2">Connect with me</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/sunitaS407" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-purple-700 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/sunita-saha-3b8041240/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/glow_hubsumo?igsh=NDVpNTVyZXNlZmNt" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.facebook.com/share/19aFBHQu9S/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-700 transition-transform hover:scale-110" />
          </a>
        </div>
      </div>
    </motion.div>

    {/* Contact Form */}
    <motion.form
  action="https://formspree.io/f/mvgqvkzg"
  method="POST"
  className="bg-sky-50 p-6 rounded-xl shadow-md space-y-4"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
>
  <div className="flex gap-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-1/2 border px-4 py-2 rounded"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-1/2 border px-4 py-2 rounded"
    />
  </div>

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    className="w-full border px-4 py-2 rounded"
  />

  <textarea
    name="message"
    placeholder="Your message here..."
    rows="5"
    className="w-full border px-4 py-2 rounded"
  />

  <button
    type="submit"
    className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2"
  >
    Send Message ✈️
  </button>
</motion.form>

  </div>
</motion.section>

  );
}

export default Contact;
