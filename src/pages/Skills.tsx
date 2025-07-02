import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma,
} from "react-icons/fa";
import {
  SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiFirebase, SiPostman,
  SiNginx, SiVercel, SiCloudinary
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

const allSkills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26", level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6", level: 90 },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", level: 85 },
  { name: "React", icon: <FaReact />, color: "#61DAFB", level: 85 },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A", level: 80 },
  { name: "Express", icon: <SiExpress />, color: "#000000", level: 75 },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 80 },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC", level: 70 },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC", level: 90 },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 80 },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 70 },
  { name: "Figma", icon: <FaFigma />, color: "#A259FF", level: 70 },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37", level: 75 },
  { name: "NGINX", icon: <SiNginx />, color: "#009639", level: 65 },
  { name: "VPS Hosting", icon: <SiVercel />, color: "#000000", level: 85 },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED", level: 70 },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "#3448C5", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-teal-600 dark:text-teal-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-2xl"
                  style={{ color: skill.color }}
                  data-tooltip-id={skill.name}
                  data-tooltip-content={`${skill.name} expertise`}
                >
                  {skill.icon}
                </span>
                <Tooltip id={skill.name} />
                <div>
                  <h4 className="font-semibold">{skill.name}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Less than 1 year</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-2">
                <div
                  className="h-3 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                />
              </div>
              <p className="text-right text-sm text-gray-500 dark:text-gray-400">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
