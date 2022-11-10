import React from "react";

interface Props {
  children: string;
  classname?: string;
}

const Button = ({ children, classname }: Props) => {
  return (
    <>
      <button
        className={`bg-[#395B64] py-2 px-7 rounded-full text-white text-sm font-bold hover:bg-slate-500 transition duration-150 ${classname}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
