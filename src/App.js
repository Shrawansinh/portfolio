
import ScrollToTop from "react-scroll-to-top";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Divider from "./components/Divider";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Mobilenav from "./components/Mobilenav";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
function App() {
  return (
    <>
    <Mobilenav />
      <div className="flex min-h-screen  bg-[#020617]">
        {/* left side */}
        <Layout />

        {/* right side */}
        <div className="flex-1 flex flex-col overflow-y-auto min-h-screen bg-[#020617] sm:m-0 sm:p-0">
          <div className="Home min-h-[60vh] p-6 bg-[#020617] sm:m-0 sm:p-0">
            <Home />
          </div>
          <Divider />
          <div className="About min-h-screen md:h-[70vh] p-6 bg-[#020617]">
            <About />
          </div>
          <Divider />

          <div className="Education min-h-screen p-6 bg-[#020617]">
            <Education />
          </div>
          <Divider />
          <div className="techStack min-h-screen p-6 bg-[#020617]">
            <TechStack />
          </div>
          <Divider />

          <div className="Projects min-h-screen p-6 bg-[#020617]">
            <Projects />
          </div>
          <Divider />
          <div className="Contactus min-h-screen p-6 bg-[#020617]">
            <Contactus />
          </div>
          <Divider />
          <div className="footer p-6 bg-[#020617]">
            <Footer />
          </div>
        </div>
        <ScrollToTop
  smooth
  color="#38BDF8"
  style={{
    backgroundColor: "#020617",
    borderRadius: "50%",
    boxShadow: "0 0 12px rgba(56,189,248,0.6)",
  }}
/>

      </div>
    </>
  );
}

export default App;
