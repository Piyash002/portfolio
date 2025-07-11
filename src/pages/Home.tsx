import Hero from "../components/Hero-section";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="blogs"><Blogs /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default Home;
