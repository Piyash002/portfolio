const Blogs = () => {
  const blogs = [
    { title: "React Router Explained", summary: "Learn the basics of routing in React..." },
    { title: "How to Deploy with Vite", summary: "Step-by-step guide to deploy with Netlify..." },
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">Blog</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded shadow hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
