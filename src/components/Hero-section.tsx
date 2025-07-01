import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="bg-[#F0FDF4] py-20 pt-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <h1 className="text-5xl font-bold text-gray-800">
            Hi, I'm <span className="text-teal-600">Piyash</span>
          </h1>
          <p className="text-gray-600">
            Full-Stack Developer skilled in MERN, building modern apps.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-2 bg-teal-600 text-white rounded-md">
              Projects
            </a>
            <a href="/piyash's Cv.pdf" download className="px-6 py-2 border border-teal-600 text-teal-600 rounded-md">
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:w-1/2 mt-10 md:mt-0"
        >
          <img src="me.jpg" className="w-64 mx-auto rounded-full shadow-md" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
