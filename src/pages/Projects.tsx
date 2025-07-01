const Projects = () => {
  const projects = [
    {
      title: "E-commerce App",
      desc: "React, Redux, Node.js, MongoDB",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "React, Tailwind, Vite",
      link: "#",
    },
    {
      title: "Blog Platform",
      desc: "Next.js, MongoDB, Auth",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <a href={p.link} className="text-teal-600 font-medium underline">View Details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
