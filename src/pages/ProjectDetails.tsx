import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const projectList = [
  {
    id: "ecommerce",
    title: "E-commerce App",
    desc: "React, Redux, Node.js, MongoDB",
    full: "Full-featured store with cart, auth, admin dashboard.",
    images: [
      "/ecommrece/Screenshot (210).png",
      "/ecommrece/Screenshot (211).png",
      "/ecommrece/Screenshot (213).png",
      "/ecommrece/Screenshot (214).png",
      "/ecommrece/Screenshot (215).png",
      "/ecommrece/Screenshot (216).png",
    ],
    live: "https://wildtrailgear.vercel.app/",
    github: "https://github.com/Piyash002/wildtrailgear",
  },
  {
    id: "OnlineExamApp",
    title: "Online Exam App",
    desc: "React, Tailwind, Vite",
    full: "Personal responsive exam portal with admin control and analytics.",
    images: [
      "/examapp/Screenshot (219).png",
      "/examapp/Screenshot (220).png",
      "/examapp/Screenshot (221).png",
      "/examapp/Screenshot (222).png",
      "/examapp/Screenshot (223).png",
    ],
    live: "https://nirvor.net/",
    github: "https://github.com/Piyash002/OnlineExamApp",
  },
  {
    id: "blog",
    title: "Blog Platform",
    desc: "Next.js, MongoDB, Auth",
    full: "Blogging platform with markdown editor & dashboard.",
    images: ["https://via.placeholder.com/600x300?text=Blog"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    live: "https://blog.vercel.app",
    github: "https://github.com/your/blog",
  },
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const index = projectList.findIndex((p) => p.id === id);
  const project = projectList[index];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!project) {
    return (
      <div className="p-8 text-center text-red-600">
        Project not found.{" "}
        <Link to="/" className="text-teal-600 underline">
          Go Home
        </Link>
      </div>
    );
  }

  const handleNext = () => {
    const next = (index + 1) % projectList.length;
    navigate(`/projects/${projectList[next].id}`);
  };

  const handlePrev = () => {
    const prev = (index - 1 + projectList.length) % projectList.length;
    navigate(`/projects/${projectList[prev].id}`);
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-teal-600 mb-2">{project.title}</h2>
      <p className="text-gray-700 text-lg mb-4">{project.desc}</p>

      {/* Image Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} ${i + 1}`}
            className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              setPhotoIndex(i);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={project.images[photoIndex]}
          nextSrc={project.images[(photoIndex + 1) % project.images.length]}
          prevSrc={
            project.images[
              (photoIndex + project.images.length - 1) % project.images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + project.images.length - 1) % project.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % project.images.length)
          }
          imageCaption={`Image ${photoIndex + 1} of ${project.images.length}`}
          animationDuration={300}
        />
      )}

      {/* Video Preview */}
      {project.video && (
        <div className="mb-6">
          <iframe
            src={project.video}
            className="w-full h-64 md:h-80 rounded-lg"
            title="Project Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{project.full}</p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-600 text-white px-6 py-2 rounded shadow hover:bg-teal-700 transition"
        >
          🔗 Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-teal-600 text-teal-600 px-6 py-2 rounded hover:bg-teal-50 transition"
        >
          🐙 GitHub Code
        </a>
      </div>

      {/* Project Nav */}
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          className="text-gray-600 hover:text-teal-600 underline"
        >
          ← Previous Project
        </button>
        <button
          onClick={handleNext}
          className="text-gray-600 hover:text-teal-600 underline"
        >
          Next Project →
        </button>
      </div>
    </section>
  );
};

export default ProjectDetails;
