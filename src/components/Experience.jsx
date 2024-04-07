"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Prodapt,
  honeywell,
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
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Prodapt}
              title="Prodapt Solutions"
              subtitle="Senior Software Engineer"
              date="Nov 2023 - present"
              para="- Develop and deploy AI models for various applications, enhancing business outcomes and optimizing data workflows."
            />
            <Exp_prop
              img={honeywell}
              title="Honeywell"
              subtitle="Associate Software Engineer"
              date="Nov 2019 - Oct 2022"
              para="- Analyzed customer data, identified segments, and crafted targeted marketing strategies using SQL queries for data extraction."
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
