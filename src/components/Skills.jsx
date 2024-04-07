import {
  OPENAI,
  Python,
  langchain,
  anaconda,
  milvus,
  mysql,
  jupyter,
  matplotlib,
  numpy,
  pandas,
  tensorflow,
  scikitlearn,
  azure,
  streamlit,
  aws,
  HTML,
  CSS,
  Github,
  Javascript,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10"
          data-aos="slide-up"
        >
          <Image img={OPENAI} name="OpenAI"></Image>
          <Image img={Python} name="Python"></Image>
          <Image img={langchain} name="Langchain"></Image>
          <Image img={anaconda} name="Anaconda"></Image>
          <Image img={milvus} name="Milvus"></Image>
          <Image img={mysql} name="MySQL"></Image>
          <Image img={jupyter} name="Jupyter"></Image>
          <Image img={matplotlib} name="Matplotlib"></Image>
          <Image img={numpy} name="Numpy"></Image>
          <Image img={pandas} name="Pandas"></Image>
          <Image img={tensorflow} name="Tensorflow"></Image>
          <Image img={scikitlearn} name="Sklearn"></Image>
          <Image img={streamlit} name="Streamlit"></Image>
          <Image img={azure} name="Azure"></Image>
          <Image img={HTML} name="HTML"></Image>
          <Image img={CSS} name="CSS"></Image>
          <Image img={Javascript} name="JavaScript"></Image>
          <Image img={Github} name="GitHub"></Image>
        </div>
      </section>
    </>
  );
};
export default Skills;
