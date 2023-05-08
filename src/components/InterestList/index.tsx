import { ComponentsProps } from "../../@types";

const InterestList = ({ className }: ComponentsProps) => {
  const list: string[] = [
    "Node.js",
    "Python",
    "Linux",
    "Backend development",
    "Machine Learning",
  ];

  return (
    <ul className={className}>{list && list.map((item) => <li className="w-[100%]" key={item}>{item}</li>)}</ul>
  );
};

export default InterestList;
