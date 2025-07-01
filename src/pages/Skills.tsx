const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Level 1 */}
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"].map((skill) => (
            <div key={skill} className="bg-white p-4 rounded shadow hover:shadow-md">{skill}</div>
          ))}
          {/* Level 2 */}
          {["Redux", "Git", "Tailwind", "Figma", "Firebase", "REST API"].map((tool) => (
            <div key={tool} className="bg-white p-4 rounded shadow hover:shadow-md">{tool}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
