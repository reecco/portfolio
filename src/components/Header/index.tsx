import { ComponentsProps } from "../../@types";

const Header = ({ children }: ComponentsProps) => {
  return (
    <header id="header">
      {children}
    </header>
  );
};

export default Header;