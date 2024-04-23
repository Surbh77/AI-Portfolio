import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HashLoader from "react-spinners/HashLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};
import ReactGA from 'react-ga';

ReactGA.initialize('G-1MFL4JZ53C');

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#0F0F0F]">
          <ClimbingBoxLoader
            color="#FFA53D"
            loading={loading}
            cssOverride={override}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
          <Education></Education>
          <Contact></Contact>
        </div>
      )}
    </>
  );
};
export default App;
