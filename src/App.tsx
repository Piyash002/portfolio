import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

import AnimatedPageWrapper from "./utils/AnimatedPageWrapper";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {loading && <LoadingSpinner />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPageWrapper>
                <Home />
              </AnimatedPageWrapper>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <AnimatedPageWrapper>
                <ProjectDetails />
              </AnimatedPageWrapper>
            }
          />
          <Route
            path="/blogs"
            element={
              <AnimatedPageWrapper>
                <Blogs />
              </AnimatedPageWrapper>
            }
          />
          <Route
            path="/blogs/:id"
            element={
              <AnimatedPageWrapper>
                <BlogDetails />
              </AnimatedPageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
