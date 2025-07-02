import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      id: "node-js-architecture",
      title: "Node.js Architecture",
      summary: "Understand how Node.js handles requests using a single-threaded event loop.",
    },
    {
      id: "js-fundamentals",
      title: "JavaScript Fundamentals",
      summary: "Learn the core concepts of JS like scope, closures, and async/await.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">Blogs</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl shadow hover:shadow-xl p-6 transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{b.title}</h3>
              <p className="text-gray-600 mb-4">{b.summary}</p>
              <Link
                to={`/blogs/${b.id}`}
                className="text-teal-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
