import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { GoTriangleDown } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  MdLanguage,
  MdOutlineLightMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

import { ComponentsProps } from "../../@types";
import { en, handleLang, ptBr } from "../../utils/";
import Hamburger from "./Hamburger";

const Navbar = ({ lang }: ComponentsProps) => {
  const [mode, setMode] = useState<boolean>();
  const [left, setLeft] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") as string;

    if (theme == "dark") {
      setMode(true);
      return;
    }
    setMode(false);
  }, []);

  const handleTheme = () => {
    const theme = localStorage.getItem("theme") as string;

    if (theme === "light") {
      setTimeout(() => {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
        setMode(true);
      }, 100);
      return;
    }

    setTimeout(() => {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      setMode(false);
    }, 100);
  };

  return (
    <nav
      className="flex relative items-center justify-between tablet:justify-around w-[100%] py-[10px] tablet:py-[15px] px-[20px] tablet:px-[0px] bg-[#fbf0f0] dark:bg-[#23272f] text-[#243658] dark:text-[#c2cbd2] shadow-light dark:shadow-dark duration-[.2s]"
      id="navbar"
    >
      <ul className="tablet:flex justify-end list-none phone:hidden">
        <li
          className="my-[0px] mx-[10px]"
          title={lang === "pt-BR" ? ptBr.navbar.about : en.navbar.about}
        >
          <Link
            className="text-[1.3rem] no-underline"
            href="#about-txt"
            to="about-txt"
            smooth={true}
            duration={500}
          >
            {lang === "pt-BR" ? ptBr.navbar.about : en.navbar.about}
          </Link>
        </li>
        <li
          className="my-[0px] mx-[10px]"
          title={lang === "pt-BR" ? ptBr.navbar.contact : en.navbar.contact}
        >
          <Link
            className="text-[1.3rem] no-underline"
            href="#contact"
            to="contact"
            smooth={true}
            duration={500}
          >
            {lang === "pt-BR" ? ptBr.navbar.contact : en.navbar.contact}
          </Link>
        </li>
      </ul>
      <Hamburger lang={lang} left={left} onClick={() => setLeft(false)} />
      <button
        className="phone:block tablet:hidden text-[1.7rem]"
        onClick={() => setLeft(!left)}
        title=""
      >
        {left ? (
          <AiOutlineClose className="top-[1rem] absolute" />
        ) : (
          <GiHamburgerMenu className="top-[1rem] absolute" />
        )}
      </button>
      <div className="flex items-center w-[300px] justify-end tablet:justify-around list-none">
        <div className="hidden tablet:block is-dropdown">
          <button 
          className="relative w-[170px] flex items-center justify-end bg-transparent text-[1.1rem] cursor-pointer text-[rgba(52,73,94,0.85)] dark:text-[rgba(186,206,224,0.85)]"
          >
            <>
              <MdLanguage className="my-[0px] mx-[3px]" />
              {lang === "pt-BR"
                ? ptBr.navbar.dropdown.lang
                : en.navbar.dropdown.lang}
              <GoTriangleDown className="my-[0px] mx-[3px]" />
            </>
          </button>
          <ul className="hidden absolute z-[1] list-none menu bg-[#fbf0f0] dark:bg-[#23272f] border border-solid border-[#d6d3d3] dark:border-[#161d28]">
            <li className="hover:opacity-80">
              <a
                className="font-bold"
                href="#"
                title={
                  lang === "pt-BR"
                    ? ptBr.navbar.dropdown.lang
                    : en.navbar.dropdown.lang
                }
                onClick={() => handleLang(lang === "pt-BR" ? "pt-BR" : "en")}
              >
                {lang === "pt-BR"
                  ? ptBr.navbar.dropdown.lang
                  : en.navbar.dropdown.lang}
              </a>
            </li>
            <li className="hover:opacity-80">
              <a
                href="#"
                title={
                  lang === "pt-BR"
                    ? "Switch to English"
                    : "Mudar para Português"
                }
                onClick={() => handleLang(lang !== "en" ? "en" : "pt-BR")}
              >
                {lang !== "en"
                  ? en.navbar.dropdown.lang
                  : ptBr.navbar.dropdown.lang}
              </a>
            </li>
          </ul>
        </div>
        <div
          className="flex justify-between w-[70px] phone2:w-[80px] bg-[#fefefe] dark:bg-[#1b1d24] rounded-[20px] border-[#c2cbd2] border-[1px] border-solid"
          title={lang == "pt-BR" ? ptBr.navbar.switch : en.navbar.switch}
        >
          <button
            className="change-light py-[7px] pl-[7px] text-[20px]"
            onClick={handleTheme}
          >
            {!mode ? (
              <BsFillCircleFill className="dark:text-[#c2cbd2] text-[20px] phone2:text-[25px]" />
            ) : (
              <MdOutlineLightMode className="text-[15px] phone2:text-[20px]" />
            )}
          </button>
          <button
            className="change-dark py-[7px] pr-[7px] text-[#c2cbd2]"
            onClick={handleTheme}
          >
            {mode ? (
              <BsFillCircleFill className="dark:text-[#c2cbd2] text-[20px] phone2:text-[25px]" />
            ) : (
              <MdOutlineDarkMode className="text-[#243658] text-[15px] phone2:text-[20px]" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
