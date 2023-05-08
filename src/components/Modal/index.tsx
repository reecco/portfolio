import { ComponentsProps } from "../../@types";

const Modal = ({ children, className, onClick }: ComponentsProps) => {
  return (
    <>
      <div 
        className="flex justify-center items-center w-screen h-screen fixed bg-[#000] opacity-40 top-[0] left-[0]"
        onClick={onClick}>
      </div>
      <div className={className}>
        {children}
      </div>
    </>
  );
};

export default Modal;
