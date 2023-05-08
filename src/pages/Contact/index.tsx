import { useState } from "react";

import { ComponentsProps, EventForm, Mail } from "../../@types";
import { Email } from "../../service";
import { en, ptBr } from "../../utils";
import Modal from "../../components/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
import Loading from "../../components/Loading";

function Contact({ lang }: ComponentsProps) {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const validInput = (
    fromEmail: string,
    name: string,
    text: string
  ): boolean => {
    let inputEmail = fromEmail === "" || fromEmail === " ";
    let inputName = name === "" || name === " ";
    let inputText = text === "" || text === " ";

    if (inputEmail || inputName || inputText) {
      setMessage(
        lang === "pt-BR"
          ? "Preencha os campos corretamente."
          : "Fill in the fields correctly."
      );

      return false;
    }

    return true;
  };

  const sendForm = async (e: EventForm) => {
    e.preventDefault();

    const { from, name, text } = e.target;

    if (!validInput(from.value, name.value, text.value)) {
      return;
    }

    setLoading(true);

    const mail: Mail = {
      fromEmail: from.value,
      name: name.value,
      text: text.value,
    };

    const email = new Email(mail);
    email
      .send()
      .then((res) => {
        if (res.code == 401) {
          setMessage(lang == "pt-BR" ? "Token inválido." : res.message);
          return;
        }

        if (res.code == 500) {
          setMessage(lang == "pt-BR" ? "Token não encontrado." : res.message);
          return;
        }

        setMessage(
          lang == "pt-BR" ? "E-mail enviado com sucesso." : res.message
        );
      })
      .catch((error) => {
        setMessage(error.message);
      })
      .finally(() => {
        setEmail("");
        setName("");
        setText("");
        setLoading(false);
      });
  };

  return (
    <div
      id="contact"
      className="h-[100%] flex flex-col justify-center bg-[#fbfbfb] dark:bg-[#1b1d24] py-[7%] duration-[.2s]"
    >
      <h2 className="text-center text-[2rem] font-bold mb-[2%] text-[#243658] dark:text-[#c2cbd2]">
        {lang === "pt-BR" ? ptBr.contact.title : en.contact.title}
      </h2>
      <form
        className="flex flex-col items-center justify-center h-[400px]"
        onSubmit={sendForm}
      >
        {!loading ? (
          <>
            <input
              className="my-[10px] mx-[0px] tablet:w-[500px] h-[50px] pl-[10px] text-[1.2rem] rounded-[7px] border border-solid border-[#243658] dark:border-[#c2cbd2] outline-[#243658] dark:outline-[#c2cbd2] bg-transparent text-[#243658] dark:text-[#c2cbd2] phone:w-[70%]"
              type="email"
              name="from"
              placeholder={
                lang === "pt-BR"
                  ? ptBr.contact.placeholder.input1
                  : en.contact.placeholder.input1
              }
              value={email}
              onChange={(e: EventForm) => setEmail(e.target.value)}
            />
            <input
              className="my-[10px] mx-[0px] tablet:w-[500px] h-[50px] pl-[10px] text-[1.2rem] rounded-[7px] border border-solid border-[#243658] dark:border-[#c2cbd2] outline-[#243658] dark:outline-[#c2cbd2] bg-transparent text-[#243658] dark:text-[#c2cbd2] phone:w-[70%]"
              type="text"
              name="name"
              value={name}
              placeholder={
                lang === "pt-BR"
                  ? ptBr.contact.placeholder.input2
                  : en.contact.placeholder.input2
              }
              onChange={(e: EventForm) => setName(e.target.value)}
            />
            <textarea
              className="my-[10px] mx-[0px] tablet:w-[500px] h-[200px] pl-[10px] text-[1.2rem] rounded-[7px] border border-solid border-[#243658] dark:border-[#c2cbd2] outline-[#243658] dark:outline-[#c2cbd2] bg-transparent resize-none pt-[10px] text-[#243658] dark:text-[#c2cbd2] phone:w-[70%]"
              name="text"
              value={text}
              placeholder={
                lang === "pt-BR"
                  ? ptBr.contact.placeholder.input3
                  : en.contact.placeholder.input3
              }
              onChange={(e: EventForm) => setText(e.target.value)}
            ></textarea>
            <button
              className="bg-transparent py-[5px] px-[30px] text-[1.2rem] text-[#243658] rounded-[7px] my-[0px] mx-[auto] border-[#243658] border-[1px] border-solid dark:border-[#c2cbd2] dark:text-[#c2cbd2] cursor-pointer hover:opacity-80 active:ring-[1px] active:ring-[#243658] active:outline-none dark:active:ring-[#c2cbd2] active:font-semibold"
              title={lang === "pt-BR" ? ptBr.contact.button : en.contact.button}
            >
              {lang === "pt-BR" ? ptBr.contact.button : en.contact.button}
            </button>
          </>
        ) : (
          <Loading className="m-auto bg-transparent block w-[130px] h-[130px] fill-[#243658] dark:fill-[#c2cbd2]" />
        )}
      </form>
      {message && (
        <Modal
          className="absolute bg-white w-[100%] h-[20%] max-w-[500px] left-[50%] translate-x-[-50%] rounded-[15px] border-2 border-solid border-[#969292]"
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
              {lang == "pt-BR" ? ptBr.modal.title : en.modal.title}
            </h4>
            <p className="text-[1.07rem] mb-[10px] text-[#243658]">{message}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Contact;
