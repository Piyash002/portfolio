import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-2xl" />,
    url: "https://www.linkedin.com/in/piyash-saha-9305b4236/",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-2xl" />,
    url: "https://github.com/Piyash002",
    color: "#171515",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="text-2xl" />,
    url: "https://wa.me/+8801518436521",
    color: "#25D366",
  },
];

const Hero = () => {
  return (
    <section id="home" className="bg-[#F0FDF4] py-20 pt-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold text-gray-800">
            Hi, I'm <span className="text-teal-600">Piyash</span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
            Full-Stack Developer skilled in MERN stack, building modern, scalable web applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-teal-600 text-white rounded-md shadow hover:bg-teal-700 transition"
            >
              Projects
            </motion.a>
            <motion.a
              href="/piyash's Cv.pdf"
              download
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border border-teal-600 text-teal-600 rounded-md shadow hover:bg-teal-50 transition"
            >
              Download CV
            </motion.a>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center md:justify-start gap-6 mt-8"
          >
            {socials.map(({ name, icon, url, color }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-white hover:shadow-xl transition"
                style={{
                  color: color,
                  border: `2px solid ${color}`,
                  transition: "all 0.3s ease",
                }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <div className="glow-ring w-64 h-64 rounded-full flex items-center justify-center">
            <img
              src="/me.jpg"
              alt="Piyash"
              className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
