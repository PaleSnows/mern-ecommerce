import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  const [navBar, setNavBar] = useState(false);

  const showNavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <>
      <div className="flex justify-around py-3 ">
        <RxHamburgerMenu
          className="sm:hidden mt-4 "
          onClick={showNavBar}
        />

        <div className="flex px-3 py-3">
          <IoIosCart className="mt-[-6px]" size={40} />
          <h1>Nepbazar</h1>
        </div>

        <ul className="hidden sm:flex flex-row justify-around gap-5 py-4 ">
          <Link to={'/'} className="focus:underline decoration-2">Shop</Link>
          <Link to={'men'}  className="focus:underline decoration-2">Men</Link>
          <Link to={'women'}  className="focus:underline decoration-2">Women</Link>
          <Link to={'kids'}  className="focus:underline decoration-2">Kids</Link>
        </ul>

        <div className="flex flex-row gap-3 py-1">
          <button className="px-10 py-3 bg-transparent border text-slate-900 rounded-3xl">
            Login
          </button>
          <BsCart3 className="mt-3" size={24} />
        </div>
      </div>
      

      <hr className="text-black mt-3" />
      {navBar && <div className="flex flex-col p-5 gap-3">
        <Link to={'/'}>Shop</Link>
        <Link to={'/men'}>Men</Link>
        <Link to={'/women'}>Women</Link>
        <Link to={'/kids'}>Kids</Link>
        </div>}
    </>
  );
};

export default Header;
