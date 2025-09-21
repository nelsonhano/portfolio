"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-8 bg-gray-50">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Building <span className="text-blue-600">Web Experiences</span> That
          Inspire
        </h1>
        <p className="text-lg text-gray-600 max-w-lg">
          I’m Nelson, a Full-Stack Developer specializing in React, Next.js, and
          scalable backend solutions. I turn Figma designs into clean, modern,
          and responsive web applications.
        </p>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-100 transition"
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <Image
          src="/developer-illustration.svg"
          alt="Developer Illustration"
          width={500}
          height={500}
          className="drop-shadow-lg"
        />
      </motion.div>
    </section>
  );
}
