import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "ecommerce",
    title: "E-commerce App",
    desc: "React, Redux, Node.js, MongoDB",
    image: "/ecommrece/Screenshot (210).png",
  },
  {
    id: "OnlineExamApp",
    title: "Online Exam App",
    desc: "React, Tailwind, Vite",
    image: "/examapp/Screenshot (219).png",
  },
  {
    id: "blog",
    title: "Blog Platform",
    desc: "Next.js, MongoDB, Auth",
    image: "https://via.placeholder.com/600x400?text=Blog",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-xl"
            >
              {/* Glowing Animated Ring */}
              <div className="absolute -inset-1 rounded-2xl animate-pulse-ring z-0"></div>

              {/* Actual Card */}
              <div className="relative z-10 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
                {/* Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Title + Description always visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-gray-800 p-4">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="text-sm">{p.desc}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <Link
                    to={`/projects/${p.id}`}
                    className="text-white text-lg font-semibold underline hover:text-teal-300 transition"
                  >
                    ➤ View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
