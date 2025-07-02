import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import AnimatedPageWrapper from "./utils/AnimatedPageWrapper";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Listen for navigation start/end events:
  useEffect(() => {
    // When location changes, show loading spinner for a bit
    setLoading(true);

    // Simulate loading duration (e.g. network delay or animation)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400); // duration matches Framer Motion exit animation

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
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
