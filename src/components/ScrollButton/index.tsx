import { AiOutlineToTop } from "react-icons/ai";
import { Link } from "react-scroll";

const ScrollButton = () => {
  return (
    <div className="fixed bottom-[0] right-[20px] w-[200px] h-[100px] z-[1] flex justify-end items-start">
      <Link
        href="#header"
        to="header"
        id="btn-top"
        smooth={true}
        duration={500}
        className="text-[30px] rounded-full p-[5px] bg-slate-800 border-slate-800 border-[2px] border-solid dark:bg-white text-white dark:text-slate-800 hover:bg-transparent hover:text-slate-800 dark:border-white dark:border-[2px] dark:border-solid dark:hover:bg-transparent dark:hover:text-white"
      >
        <AiOutlineToTop />
      </Link>
    </div>
  );
};

export default ScrollButton;
