import React, { useEffect, useRef, useState } from 'react';
import { TalkingHead } from "https://cdn.jsdelivr.net/gh/met4citizen/TalkingHead@1.1/modules/talkinghead.mjs";
import resumePDF from '../assets/saurabh_shinde_capco_genai.pdf';

const tts_key = import.meta.env.VITE_APP_ASSISTANT_API;
const host= import.meta.env.VITE_APP_TTS_APIKEY;


const About = () => {
  const [head, setHead] = useState(null);
  const [result, setResult] = useState("");
  const textInputRef = useRef(null);
 
  function makeSpeech(text) {
      console.log(text);
      return axios.post(host + '/assiatant', { text });
  }
  useEffect(() => {
    const initializeTalkingHead = async () => {
      const nodeAvatar = document.getElementById('avatar');
      const talkingHead = new TalkingHead(nodeAvatar, {
        ttsEndpoint: "https://eu-texttospeech.googleapis.com/v1beta1/text:synthesize",
        ttsApikey: tts_key, // <- Change this
        cameraView: "upper",
        cameraDistance:-1.3,
        cameraRotateEnable:false,
        avatarMood: 'happy',
        ttsVolume:11,
      });
            await talkingHead.showAvatar({
          url:"https://models.readyplayer.me/654d15b95f919c5b8ade43e2.glb?morphTargets=ARKit,Oculus+Visemes,mouthOpen,mouthSmile,eyesClosed,eyesLookUp,eyesLookDown&textureSizeLimit=1024&textureFormat=png",
        // url:'https://models.readyplayer.me/64bfa15f0e72c63d7c3934a6.glb?morphTargets=ARKit,Oculus+Visemes,mouthOpen,mouthSmile,eyesClosed,eyesLookUp,eyesLookDown&textureSizeLimit=1024&textureFormat=png',
        body: 'F',
        avatarMood: 'happy',
        ttsLang: "en-GB",
        ttsVoice: "en-GB-Standard-A",
        lipsyncLang: 'en'
      });
      setHead(talkingHead);
    };

    initializeTalkingHead();
  }, []);

  let recognition; // Define recognition outside the function to make it accessible globally

const startRecording = () => {
  try {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.start();
    recognition.onresult = async (event) => {
      const result = event.results[0][0].transcript;
      setResult(result);
      console.log(result);
      if (result) {
        const response = await makeSpeech(result);
        const { blendData } = response.data;
        console.log(blendData);
        setResult(blendData);
        speakText(blendData);
      }
    };
  } catch (error) {
    console.log(error);
  }
};

  const speakText = (text) => {
    if (head) {
      head.speakText(text);
    }
  };

const stopRecording = () => {
  if (recognition) {
    recognition.stop();
  }
};
  // const handleSpeak = async () => {
  //   try {
  //     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  //     recognition.start();
  //     recognition.onresult = async (event) => {
  //       const result = event.results[0][0].transcript;
  //       setResult(result);
  //       console.log(result)
  //       if (result) {
  //         const response = await makeSpeech(result);
  //         const { blendData } = response.data;
  //         console.log(blendData)
  //         setResult(blendData);
  //         speakText(blendData);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const speakText = (text) => {
  //   if (head) {
  //     head.speakText(text);
  //   }
  // };

  // const startRecording = () => {
  //   // Start recording when the button is pressed
  //   handleSpeak();
  // };
  
  // const stopRecording = () => {
  //   // Stop recording when the button is released
  //   recognition.stop();
  // };
  

  return (
    <section id="about" className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5">
      <div className="WRAPPER mt-12 flex max-sm:flex-col gap-5">
        <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
          <h3 className="text-[#303030] dark:text-[#d6d6d6]">
            Hi, there! <br /> I am
          </h3>
          <span className="bg-clip-text  text-[#FFA53D] dark:text-[#FFA53D] ">
            Saurabh Shinde
          </span>
          <p className="ABOUT h-[200px] text-xl max-sm:text-[15px] bg-clip-text  text-[#0F0F0F] dark:text-[#d6d6d6]  max-w-[950px] mt-5 pl-1">
            Experienced ML engineer in India, skilled in diverse frameworks and eager to tackle new challenges. Expertise in model deployment,
            algorithm optimization, and staying updated on AI advancements. Actively seeking opportunities to contribute and innovate.
            Let's connect and dive into exciting ML projects together!
          </p>
          <div className="flex gap-20 max-sm:justify-center max-h-[100px]">
            <button className="py-15 px-4 bg-[#1e1e1f] font-medium text-[12px] text-[#e1e1e1] dark:text-[#d6d6d6] outline-none mt-10 mr-0 rounded border border-white dark:hover:border-[#FFA53D]  dark:hover:text-[#FFA53D] hover:bg-[#1e1e1f] hover:text-[#FFA53D]"
            // className="py-15 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300  from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-0 rounded "
            onClick={() => {
              window.open(resumePDF, '_blank')}}
            >
              <a href={resumePDF} 
                className="flex gap-2 items-center justify-center"
                target="_blank"
                download="saurabh_resume_genai.pdf"
                >
                Resume</a>
            </button>
            <button className="py-15 px-4 bg-[#1e1e1f] font-medium text-[12px] text-[#e1e1e1] dark:text-[#d6d6d6] outline-none mt-10 mr-0 rounded border border-white dark:hover:border-[#FFA53D] dark:hover:text-[#FFA53D]  hover:bg-[#1e1e1f] hover:text-[#FFA53D]" 
            // className="py-15 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600  font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-0 rounded "
            >
              <a
                href="#contact"
                className="flex gap-2 items-center justify-center"
              >Contact
              </a>
            </button>
          </div>
        </div>
        <div id="controls" className='justify-center max-w-[750px]'>
        <p className="ABOUT h-[50px] text-xl max-sm:text-[15px] bg-clip-text  dark:text-[#d6d6d6] text-[#0F0F0F] mt-5 pl-1 flex flex-col items-center" 
        // className="ABOUT h-[50px] text-xl max-sm:text-[10px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 mt-5 pl-1 flex flex-col items-center"
        >
        Looking to understand me better. Ask my assistant to assist!!
          </p>
          {/* <input ref={textInputRef} type="text" defaultValue="Hi there. How are you? I'm fine."/> */}
          <div className="flex justify-center">
            <button
              onMouseDown={startRecording} 
              onMouseUp={stopRecording} 
              onTouchStart={startRecording}
              onTouchEnd={stopRecording} 
              onClick={startRecording}
            // onClick={handleSpeak} 
            className="py-3 px-6 bg-[#1e1e1f]  font-medium dark:text-[#d6d6d6] text-[#d6d6d6]  dark:text-[#d6d6d6] outline-none mt-5 mr-0 rounded border border-white dark:hover:border-[#FFA53D] dark:hover:text-[#FFA53D]  hover:bg-[#1e1e1f] hover:text-[#FFA53D]"
            // className="py-3 px-6 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600  font-medium text-[10px] text-[#e1e1e1] dark:text-black outline-none mt-5 mr-0 rounded" 
             style={{ userSelect: 'none', touchAction: 'manipulation' }}
            >
              Hold to Ask me
              </button>
          </div>
          <div id="avatar" className='z-100 max-w-[650px]' style={{ width: '90%', height: '20rem' }}></div>
          {/* <p>{result}</p> */}
          <textarea type="text" value={result} readOnly 
          className="border border-[#303030] p-1 font-small rounded-md w-full mt-1 bg-[#1e1e1f] text-[#d6d6d6] overflow-auto scrollbar-hidden h-10"
          // className="border border-gray-300 p-2 rounded-md w-full mt-3 bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200" 
          />
          <p className="ABOUT h-[15%] text-xl max-sm:text-[15px] bg-clip-text   dark:text-[#d6d6d6] text-[#0F0F0F] mt-5 pl-1" 
          // className="ABOUT h-[15%] text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 mt-5 pl-1"
          >
            I am OpenAI powered AI assistant implemented using Prompt Engineering ,LLM, Vector DB and RAG .
          </p>
        </div>
        
      </div>

    </section>
  );
};

export default About;