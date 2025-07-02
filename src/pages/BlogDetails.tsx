import { JSX } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();

  const content: Record<
    string,
    { title: string; body: JSX.Element }
  > = {
    "node-js-architecture": {
      title: "Understanding Node.js Architecture",
      body: (
        <>
          <p className="mb-6">
            Node.js is a powerful runtime environment built on Chrome’s V8 JavaScript engine.
            It enables developers to run JavaScript code on the server-side, which traditionally was only possible on the browser. But what makes Node.js truly unique and efficient is its architecture. Let’s break it down.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">💡 Key Features of Node.js Architecture</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Single-Threaded:</strong> Unlike traditional server environments that create a new thread per request, Node.js uses a single-threaded model.</li>
            <li><strong>Event-Driven:</strong> Everything in Node.js works around events. When a request comes in, it triggers an event which is handled asynchronously.</li>
            <li><strong>Non-Blocking I/O:</strong> Input/output operations (like reading files, querying DBs) don't block other operations. This allows handling thousands of concurrent requests.</li>
            <li><strong>Event Loop:</strong> The event loop is the core mechanism that handles multiple operations asynchronously in a single thread.</li>
            <li><strong>Libuv:</strong> A multi-platform C library that gives Node.js access to asynchronous I/O, file systems, and thread pools.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">📦 Modules in Node.js</h2>
          <p className="mb-3">Node.js uses a modular approach with two main types of modules:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Core Modules:</strong> Provided by Node.js itself (e.g., <code>fs</code>, <code>http</code>, <code>path</code>).</li>
            <li><strong>Third-Party Modules:</strong> Installed via npm, like <code>express</code>, <code>mongoose</code>, etc.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">🧠 Why Is Node.js So Popular?</h2>
          <p className="mb-4">
            - It's built on JavaScript — developers already know it from the frontend.<br />
            - It handles concurrent users easily.<br />
            - It scales horizontally (across machines) and vertically (using cluster module).<br />
            - Great support from npm ecosystem.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">✅ Summary</h2>
          <p>
            Node.js architecture is designed for speed, scalability, and simplicity. Its event-driven, non-blocking model makes it ideal for real-time applications like chat apps, live dashboards, APIs, and more.
          </p>
        </>
      ),
    },

    "js-fundamentals": {
      title: "Mastering JavaScript Fundamentals",
      body: (
        <>
          <p className="mb-4">
            JavaScript is the language of the web. Whether you’re building frontend apps with React or backend APIs with Node.js, understanding JavaScript fundamentals is essential. Here's a comprehensive breakdown of the most important concepts every developer should know.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">🔢 Variables and Types</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>let / const / var:</strong> Block-scoped vs. function-scoped declarations.</li>
            <li><strong>Data Types:</strong> Primitive (string, number, boolean, null, undefined, symbol) and reference (object, array, function).</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">📦 Functions & Scope</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Function Declaration vs Expression:</strong> Hoisting applies to declarations, not expressions.</li>
            <li><strong>Arrow Functions:</strong> Shorter syntax, but no `this` binding.</li>
            <li><strong>Scope:</strong> Defines where variables can be accessed (global, function, block).</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">🔄 Closures and Hoisting</h2>
          <p className="mb-3">
            A closure is a function that remembers the variables from its outer scope even after that scope has closed. This is key to understanding function factories, private variables, and more.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Closures:</strong> Created every time a function is created.</li>
            <li><strong>Hoisting:</strong> JavaScript moves declarations to the top of the scope before execution.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">⚙️ Asynchronous JS</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Callbacks:</strong> Functions passed into other functions to run later.</li>
            <li><strong>Promises:</strong> Represent future values. They can be pending, fulfilled, or rejected.</li>
            <li><strong>Async/Await:</strong> Cleaner way to write asynchronous code using promises under the hood.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2 text-teal-600">✅ Summary</h2>
          <p>
            Mastering JavaScript fundamentals is non-negotiable for any developer. These core concepts help you understand how JavaScript behaves under the hood and prepare you for advanced topics like React, Node.js, and performance optimization.
          </p>
        </>
      ),
    },
  };

  const blog = id ? content[id] : undefined;

  if (!blog) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-20 lg:px-40 mt-6">
      <h1 className="text-4xl font-bold text-teal-700 mb-6 text-center">
        {blog.title}
      </h1>
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 text-gray-800 leading-relaxed">
        {blog.body}
      </div>
    </div>
  );
};

export default BlogDetails;
