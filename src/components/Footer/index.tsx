import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import { contacts } from "../../utils";
import { ComponentsProps } from "../../@types";

const Footer = ({}: ComponentsProps) => {
  return (
    <footer className="flex flex-col bg-[#201c1c] h-[185px] justify-center items-center border-0 border-t-[1px] border-[#000] dark:border-solid">
      <p className="text-[#c2cbd2] text-[1.2rem] mb-[1.5rem]">
        &copy; {new Date().getUTCFullYear()} - Recco
      </p>
      <div className="flex">
        {contacts &&
          contacts.map((contact) => (
            <a
              key={contact.index}
              className="mt-[0px] mb-[0px] ml-[10px] mr-[10px] text-[2.5rem] text-[#c2cbd2] bg-transparent cursor-pointer hover:opacity-70"
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
      </div>
    </footer>
  );
};

export default Footer;
