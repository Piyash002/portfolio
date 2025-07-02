import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 px-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-14">
        {/* Left: Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="relative text-5xl md:text-6xl font-extrabold text-center md:text-left bg-gradient-to-r from-teal-400 via-teal-600 to-blue-500 bg-clip-text text-transparent drop-shadow-md select-none flex items-center justify-center md:justify-start gap-3"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <UserCircle2 className="w-12 h-12 text-teal-500 animate-pulse" />
            About Me
            {/* Underline */}
            <motion.span
              className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.7, delay: 1 }}
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-8 text-gray-700 dark:text-gray-300 max-w-xl text-lg leading-relaxed text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            I'm a <span className="font-semibold text-teal-600">MERN Stack Developer</span> passionate about crafting
            modern, fast, and scalable web applications with clean code and seamless UX.
            <br />
            <br />
            🚀 <span className="font-semibold">Current Position:</span> Backend Developer at{" "}
            <a
              href="https://nirvor.net"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 underline"
            >
              Nirvor.net
            </a>{" "}
            (1 Year)
            <br />
            🎓 <span className="font-semibold">Education:</span> Bachelor of Arts (BA), National University, Bangladesh
          </motion.p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 15px 25px rgba(16, 185, 129, 0.3)",
              "0 25px 40px rgba(16, 185, 129, 0.5)",
              "0 15px 25px rgba(16, 185, 129, 0.3)",
            ],
          }}
          transition={{
            // Animate on entry
            opacity: { duration: 0.7 },
            x: { duration: 0.7 },

            // Looping animation
            scale: {
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          viewport={{ once: true }}
          style={{ borderRadius: "50%", overflow: "hidden" }}
        >
          <img
            src="/me.jpg"
            alt="About Me"
            className="rounded-full"
            style={{
              width: 320,
              height: 320,
              objectFit: "cover",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
