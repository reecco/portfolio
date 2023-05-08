import { Link } from "react-scroll";

import { ComponentsProps } from "../../../@types";
import { en, ptBr } from "../../../utils";
import SwitchLang from "../SwitchLang";

const Hamburger = ({ lang, onClick, left }: ComponentsProps) => {
  return (
    <>
      <ul
        className="fixed w-[100%] h-[100%] top-[0] flex tablet:hidden flex-col justify-center items-center bg-[#fbf0f0] dark:bg-[#23272f]"
        id="nav-hamburger"
        style={{ left: left ? "0" : "-100%" }}
      >
        <li
          className="my-[20px]"
          title={lang === "pt-BR" ? ptBr.navbar.about : en.navbar.about}
        >
          <Link
            className="text-[1.875rem] no-underline"
            href="#about-txt"
            to="about-txt"
            smooth={true}
            duration={500}
            onClick={onClick as any}
          >
            {lang === "pt-BR" ? ptBr.navbar.about : en.navbar.about}
          </Link>
        </li>
        <li
          className="my-[20px]"
          title={lang === "pt-BR" ? ptBr.navbar.contact : en.navbar.contact}
        >
          <Link
            className="text-[1.875rem] no-underline"
            href="#contact"
            to="contact"
            smooth={true}
            duration={500}
            onClick={onClick as any}
          >
            {lang === "pt-BR" ? ptBr.navbar.contact : en.navbar.contact}
          </Link>
        </li>
        <SwitchLang lang={lang} />
      </ul>
    </>
  );
};

export default Hamburger;