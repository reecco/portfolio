import { GoTriangleDown } from "react-icons/go";
import { MdLanguage } from "react-icons/md";

import { ComponentsProps } from "../../../@types";
import { en, handleLang, ptBr } from "../../../utils";

const SwitchLang = ({ lang }: ComponentsProps) => {
  return (
    <div className="is-dropdown my-[20px]">
      <button className="relative w-[170px] flex items-center justify-center bg-transparent text-[1.5rem] cursor-pointer text-[rgba(52,73,94,0.85)] dark:text-[rgba(186,206,224,0.85)]">
        <>
          <MdLanguage className="my-[0px] mx-[3px]" />
          {lang === "pt-BR"
            ? ptBr.navbar.dropdown.lang
            : en.navbar.dropdown.lang}
          <GoTriangleDown className="my-[0px] mx-[3px]" />
        </>
      </button>
      <ul className="hidden absolute z-[1] list-none menu bg-[#fbf0f0] dark:bg-[#23272f] border border-solid border-[#d6d3d3] dark:border-[#161d28]">
        <li className="hover:opacity-80 text-[1.3rem]">
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
        <li className="hover:opacity-80 text-[1.3rem]">
          <a
            href="#"
            title={
              lang === "pt-BR" ? "Switch to English" : "Mudar para Português"
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
  );
};

export default SwitchLang;
