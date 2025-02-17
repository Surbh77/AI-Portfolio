/* eslint-disable react/no-unescaped-entities */
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import resumePDF from '../assets/saurabh_shinde_capco_genai.pdf';
import saurabh from "../assets/saurabh.png";

const Contact = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // Fetch view count from your server or storage (for example, localStorage)
    const storedViewCount = localStorage.getItem('viewCount');
    if (storedViewCount) {
      setViewCount(parseInt(storedViewCount));
    }
    // Increment view count and save to storage
    setViewCount(prevCount => {
      const newCount = prevCount + 1;
      localStorage.setItem('viewCount', newCount);
      return newCount;
    });
  }, []);


  const email = 'saurabhshinde489@gmail.com';
  const message = `Hello,

  I visited your portfolio website and was impressed by your work and skills. I am reaching out to inquire about potential opportunities or collaborations. I would love to discuss further about your projects and how I can contribute.
  
  Looking forward to hearing from you.
  
  Best regards,
  [Your Name]`; // Hardcoded message

  const subject = 'Inquiry About Potential Opportunities or Collaborations';

  const handleClick = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#0F0F0F] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#1e1e1f] dark:to-[#303030] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2">
          <div className="ABOUT p-7">
            <h2 className="text-[#FFA53D]  font-semibold dark:text-[#FFA53D] leading-7 text-xl tracking-wider max-sm:text-center">
              Saurabh Shinde
            </h2>
            <p className="text-gray-600 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Consultant at CAPCO
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/surbh77"
                className=" hover:text-[#FFA53D]  dark:hover:text-[#FFA53D]"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh-shinde-40b48bb7/"
                className=" hover:text-[#FFA53D]  dark:hover:text-[#FFA53D]"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/surbh_here/?igsh=ZGNjOWZkYTE3MQ%3D%3D&utm_source=qr"
                className=" hover:text-[#FFA53D]  dark:hover:text-[#FFA53D]"
              >
                <SiInstagram />
              </a>
              <a
                href="https://twitter.com/Surbh_77"
                className="hover:text-[#FFA53D]  dark:hover:text-[#FFA53D]"
              >
                <SiTwitter />
              </a>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                onClick={handleClick}
                className=" hover:text-[#FFA53D]  dark:hover:text-[#FFA53D]"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <button
              className="py-3 px-4 bg-[#1e1e1f] dark:[#1e1e1f] dark:[#303030] dark:text-[#d6d6d6] font-medium text-[12px] text-[#d6d6d6]  outline-none mt-10 mr-3 rounded border border-white dark:hover:border-[#FFA53D] hover:dark:text-[#FFA53D] hover:text-[#FFA53D]" 
              // className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300  from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded "
              onClick={() => {
                window.open(resumePDF, '_blank')}}
              >
                <a href={resumePDF} target="_blank" download="saurabh_resume_genai.pdf">Resume</a>
              </button>
            </div>
          </div>

          <div className="IMG p-0 max-sm:grid max-sm:place-content-center">
            <img
              src={saurabh}
              alt="Saurabh Shinde"
              className="h-[200px] max-sm:h-[150px] border-[#00040fab] dark:border-slate-300 border-4 rounded-full mt-12"
            />
          </div>
        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 🧡 by Saurabh Shinde  ~||~ Views: {viewCount}
        </p>
      </section>
    </>
  );
};
export default Contact;
