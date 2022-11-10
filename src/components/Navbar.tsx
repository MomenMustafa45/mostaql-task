import React from "react";
import Button from "../UI/Button";

const Navbar = () => {
  const links = ["الرئيسية", "الاسعار", "المدونة", "تجربة المنصة"];

  return (
    <>
      <nav className="flex justify-evenly flex-row-reverse p-10">
        <div>
          <p className="text-[#78a4dd] font-bold text-4xl cursor-pointer">
            منصة تجربة
          </p>
        </div>
        <ul className="flex flex-row-reverse">
          {links.map((link) => (
            <li className="mx-2 font-semibold text-black cursor-pointer hover:text-slate-500 transition-all duration-300">
              {link}
            </li>
          ))}
        </ul>
        <div className="">
          <Button classname="mr-4">الاشتراك</Button>
          <button className="font-bold hover:text-gray-500 transition-all duration-500">
            تسجيل الدخول
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
