import Project_prop  from "./Project_prop.jsx";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiOpenai,
  SiPython,
  SiStreamlit,
  SiPowerbi,
  SiMysql,
  SiAzurefunctions,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="AI Portfolio Website"
            para="OpenAI Powered Personal portfolio website created with react, Tailwind CSS "
            img={Portfolio}
            link=""
            github_link=""
            openai={
              <Tooltip title="OpenAI" arrow>
                <IconButton>
                  <SiOpenai className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Log Anamoly Detection"
            // para="Stark is a fantasy and futuristic website which offers the ride of space-ship to the space"
            para="OpenAI powered Gen AI, RAG and Prompt Engineering based Log Anamoly Detection to check if the log is Anamoly or Normal"
            img={Rocket}
            link=""
            github_link="https://github.com/Surbh77/Anamoly-Detection"
            openai={
              <Tooltip title="OpenAI" arrow>
                <IconButton>
                  <SiOpenai className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            streamlit={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiStreamlit className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Cheque data extraction."
            para="Cheque data extraction streamlines financial transactions by using advanced OCR to capture and interpret key details, enhancing accuracy and efficiency."
            img={WellBeing}
            link=""
            github_link="https://github.com/Surbh77/Cheque-data-extraction"
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            powerbi={
              <Tooltip title="PowerBI" arrow>
                <IconButton>
                  <SiPowerbi className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mysql={
              <Tooltip title="MySQL" arrow>
                <IconButton>
                  <SiMysql className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            azurefunctions={
              <Tooltip title="Azure Functions" arrow>
                <IconButton>
                  <SiAzurefunctions className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Employee Performance and Attrition Prediction "
            para="Creating an AI-driven platform leveraging employee data and machine learning to predict performance, 
            attrition, and identify at-risk employees for proactive retention strategies"
            img={WellBeing}
            link=""
            github_link=""
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            powerbi={
              <Tooltip title="PowerBI" arrow>
                <IconButton>
                  <SiPowerbi className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mysql={
              <Tooltip title="MySQL" arrow>
                <IconButton>
                  <SiMysql className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            azurefunctions={
              <Tooltip title="Azure Functions" arrow>
                <IconButton>
                  <SiAzurefunctions className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Machine Predective Maintainance"
            para="Developing an AI-driven system utilizing sensor data to predict machine failures and optimize 
            maintenance schedules, preempting production interruptions."
            img={GPT4}
            link=""
            github_link="https://github.com/Surbh77/Predictive_Maintainence_system"
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            powerbi={
              <Tooltip title="PowerBI" arrow>
                <IconButton>
                  <SiPowerbi className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mysql={
              <Tooltip title="MySQL" arrow>
                <IconButton>
                  <SiMysql className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
