"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Prodapt,
  CAPCO,
  TVSSCS,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#0F0F0F] dark:text-[#d6d6d6] font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div 
            className="EXPERIENCE  mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            // className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={CAPCO}
              title="CAPCO - a wipro company"
              subtitle="Consultant - II"
              date="Jun 2024 - present"
              para="Developing generative AI application using LLM model like ChatGPT, LLAMA, Mistral. Using milvus and chromadb as vector stores of knowledge base integration. "
            />
            <Exp_prop
              img={Prodapt}
              title="Prodapt Solutions"
              subtitle="Senior Software Engineer"
              date="Nov 2022 - Jun 2024"
              para="Design and implement an AI model for natural language understanding to optimize pricing strategies, predict customer behavior, and enhance marketing campaign effectiveness. Conduct exploratory data analysis, identify patterns, and generate actionable insights to drive business decisions. Automate data extraction and preprocessing with Python scripting, reducing processing time by 30% and enhancing data quality, resulting in a 15% increase in customer acquisition and a 10% revenue boost."
            />
            <Exp_prop
              img={TVSSCS}
              title="TVSSCS"
              subtitle="Associate Analyst"
              date="Jun 2021 - Apr 2022"
              para="Performed data cleaning, transformation, and analysis on customer data to identify key segments and craft targeted marketing strategies. Developed and managed SQL queries and scripts for efficient data extraction from relational databases, facilitating streamlined data retrieval and analysis."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;

