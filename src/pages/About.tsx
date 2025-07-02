import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-teal-600 dark:text-teal-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm a <span className="font-semibold text-teal-600">MERN Stack Developer</span> who loves building modern,
          fast, and scalable web applications with clean code and great UX.
          <br /><br />
          🚀 <span className="font-semibold">Current Position:</span> Backend Developer at{" "}
          <a href="https://nirvor.net" target="_blank" rel="noreferrer" className="text-teal-600 underline">
            Nirvor.net
          </a>{" "}
          (1 Year)
          <br />
          🎓 <span className="font-semibold">Education:</span> Bachelor of Arts (BA), National University, Bangladesh
        </motion.p>
      </div>
    </section>
  );
};

export default About;
