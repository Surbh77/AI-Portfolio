const Img_prop = ({ img, name }) => {
  return (
    <>
      <div className="relative w-[100px] max-sm:w-[75px] h-[100px] max-sm:h-[75px] shadow-xl shadow-slate-300 dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl from-[#ccc] to-[#eee] dark:from-[#051937] dark:to-[#222] rounded-full place-content-center grid translate-x-[100px] max-sm:translate-x-1 ">
        <img src={img} alt="html" className="max-sm:h-[45px] h-[55px] rounded-full" /> 
        <p className='absolute top-5 left-[120px] h-[40px] text-xl max-sm:text-[25px] bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 mt-5 pl-1 hidden sm:block'>
          {name}
        </p>
      </div>
    </>
  );
};
export default Img_prop;