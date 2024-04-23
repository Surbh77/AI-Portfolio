import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="NAVBAR flex  justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl dark:text-[#FFA53D] text-[#FFA53D] max-sm:text-2xl "
            >
              {"<Surbh/>"}

            </a>
          </div>
          <div className="NAVLINKS text-[20px] translate-x-[80px] max-sm:hidden flex gap-12 text-[#0F0F0F] dark:text-[#FFA53D] ">
            <a href="#about" className=" hover:text-[#FFA53D] dark:hover:text-[#d6d6d6] ">
              Home
            </a>
            <a href="#experience" className="hover:text-[#FFA53D] dark:hover:text-[#d6d6d6]">
              Experience
            </a>
            <a href="#education" className="hover:text-[#FFA53D] dark:hover:text-[#d6d6d6] ">
              Education
            </a>
            <a href="#projects" className="hover:text-[#FFA53D] dark:hover:text-[#d6d6d6] ">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#FFA53D] dark:hover:text-[#d6d6d6] ">
              Contact
            </a>
            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl hover:text-[#FFA53D] dark:hover:text-[#d6d6d6]" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl hover:text-[#FFA53D] dark:hover:text-[#d6d6d6]" />
              )}
            </button>
          </div>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#FFA53D] dark:text-[#FFA53D] text-[32px] " />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};
export default Navbar;
