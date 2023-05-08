import { useState } from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillCloseCircle,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { me } from "../../assets/";
import { contacts, en, ptBr } from "../../utils";
import { ComponentsProps } from "../../@types";
import Modal from "../../components/Modal";
import InterestList from "../../components/InterestList";

function About({ lang }: ComponentsProps) {
  const [message, setMessage] = useState<string>();

  const copyEmail = () => {
    navigator.clipboard.writeText("recco.fred01@gmail.com");
    setMessage(
      lang === "pt-BR"
        ? "E-mail copiado para área de transferência."
        : "Email copied to clipboard."
    );
  };

  return (
    <div
      id="about"
      className="bg-white dark:bg-[#1b1d24] text-[#243658] dark:text-[#c2cbd2] px-14 phone2:px-20 tablet:px-32 flex desktop:flex-row items-center desktop:justify-center pt-[3rem] duration-[.2s] pb-[3rem] phone:flex-col phone:justify-around"
    >
      <div className="desktop:w-[40%] tablet:w-[100%] h-[100%] flex flex-col items-center phone:mt-[5rem] desktop:mt-[0]">
        <div>
          <div
            className="bg-center bg-no-repeat bg-cover w-44 h-44 rounded-full"
            style={{ backgroundImage: `url(${me})` }}
          ></div>
        </div>
        <div className="w-80 h-32 rounded-3xl pt-1 pb-1 my-0 mx-auto tablet:mt-[1rem] desktop:mt-0">
          <h1
            className="text-[3rem] text-center"
            style={{ textShadow: "1px 1px 2px #243658" }}
          >
            Fred Recco
          </h1>
          <h2 className="text-[1.7rem] font-semibold text-center">
            Software Developer
          </h2>
        </div>
        <div className="flex mt-[3%]">
          <>
            {contacts &&
              contacts.map((contact) => (
                <a
                  key={contact.index}
                  className="mt-[0px] mb-[0px] ml-[10px] mr-[10px] text-[2.5rem] bg-transparent cursor-pointer hover:opacity-70"
                  title={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.title == "GitHub" ? (
                    <AiOutlineGithub />
                  ) : (
                    <AiFillLinkedin />
                  )}
                </a>
              ))}
            <button
              className="mt-[0px] mb-[0px] ml-[10px] mr-[10px] text-[2.5rem] bg-transparent cursor-pointer hover:opacity-70"
              title="Email"
              onClick={copyEmail}
            >
              <MdEmail />
            </button>
          </>
        </div>
      </div>
      <div
        id="about-txt"
        className="desktop:w-[60%] phone:w-[100%] h-[100%] tablet:flex flex-col tablet:justify-between tablet:items-start phone:pt-[5rem] desktop:pt-[1rem] desktop:block tablet:flex-row"
      >
        <div className="phone:w-[100%] tablet:w-[54%] desktop:w-[100%] tablet:justify-center text-justify desktop:text-start desktop:block">
          <h3 className="text-[2.1rem] font-semibold phone2:text-[2.5rem]">
            {lang === "pt-BR" ? ptBr.about.title1 : en.about.title1}
          </h3>
          <div className="mt-[2%] text-[1.15rem] desktop:w-[70%]">
            <p>{lang === "pt-BR" ? ptBr.about.text1 : en.about.text1}</p>
            <p>{lang === "pt-BR" ? ptBr.about.text2 : en.about.text2}</p>
            <p>{lang === "pt-BR" ? ptBr.about.text3 : en.about.text3}</p>
          </div>
        </div>
        <div className="mt-[1rem] desktop:mt-[2rem] desktop:block tablet:w-[30%] laptop:w-[40%]">
          <h3 className="text-[1.5rem] font-semibold phone2:text-[1.7rem]">
            {lang === "pt-BR" ? ptBr.about.title2 : en.about.title2}
          </h3>
          <InterestList className="mt-[3%] pl-[30px] text-[1.15rem] list-disc" />
        </div>
      </div>
      {message && (
        <Modal
          className="absolute bg-white w-[100%] h-[20%] max-w-[500px] phone:top-[40%] desktop:top-auto left-[50%] translate-x-[-50%] rounded-[15px] border-2 border-solid border-[#969292]"
          onClick={() => setMessage("")}
        >
          <div className="flex justify-end h-[20%] w-[100%]">
            <button
              className="text-[32px] text-red-600 hover:text-slate-800 p-[2px]"
              onClick={() => setMessage("")}
            >
              <AiFillCloseCircle />
            </button>
          </div>
          <div className="flex flex-col items-center justify-around h-[80%]">
            <h4 className="text-[1.2rem] font-semibold text-[#243658]">
              {lang == "pt-BR" ? "Mensagem" : "Message"}
            </h4>
            <p className="text-[1.07rem] mb-[10px] text-[#243658]">{message}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default About;
