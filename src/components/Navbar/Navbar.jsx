"use client";

import { AiOutlineMenu } from "react-icons/ai";
import $ from "jquery";

const Navbar = () => {
  const toggleNav = () => {
    const hiddenNav = $("#hiddenNav");
    hiddenNav.slideToggle().css({
      display: "flex",
    });
  };

  return (
    <nav className="flex justify-between items-center p-6 px-4 text-white bg-peya-blue lg:h-16">
      <div className="flex justify-center items-center gap-2 lg:hidden">
        <img
          src="/images/navbar/pedidosYaPagosLogoMobile.svg"
          className="w-28 lg:w-48 lg:hidden"
          alt=""
        />
        |
        <img
          src="/images/navbar/visaLogo.svg"
          className="w-18 lg:w-24"
          alt=""
        />
      </div>
      <button className="lg:hidden text-4xl" onClick={toggleNav}>
        <AiOutlineMenu />
      </button>
      <div className="justify-center items-center gap-2 lg:gap-24 hidden lg:flex">
        <img
          src="/images/navbar/visaLogo.svg"
          className="w-12 lg:w-24"
          alt=""
        />
        <ul className="hidden lg:flex justify-evenly gap-8 text-sm">
          <li
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
          before:-bottom-1 before:left-0 before:bg-white
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            <a href="#travelSection">EL VIAJE MÁS PEDIDO</a>
          </li>
          <li
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
          before:-bottom-1 before:left-0 before:bg-white
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
          before:transition before:ease-in-out before:duration-300"
          >
            <a href="#howToWinSection">¿CÓMO PARTICIPAR?</a>
          </li>
          <li
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
          before:-bottom-1 before:left-0 before:bg-white
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
          before:transition before:ease-in-out before:duration-300"
          >
            <a href="#">BASES Y CONDICIONES</a>
          </li>
        </ul>
      </div>
      <img
        src="/images/navbar/pedidosYaPagosLogo.svg"
        className="w-14 lg:w-48 hidden lg:block"
        alt=""
      />
      <ul
        id="hiddenNav"
        className="fixed w-screen h-screen top-0 left-0 hidden bg-peya-blue flex-col justify-center items-center gap-20 text-3xl font-texta-bold z-10"
      >
        <button className="absolute text-4xl top-3 right-5" onClick={toggleNav}>
          X
        </button>
        <li
          onClick={toggleNav}
          className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:-bottom-1 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          <a href="#travelSection">EL VIAJE MÁS PEDIDO</a>
        </li>
        <li
          onClick={toggleNav}
          className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:-bottom-1 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          <a href="#howToWinSection">¿CÓMO PARTICIPAR?</a>
        </li>
        <li
          onClick={toggleNav}
          className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:-bottom-1 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          <a href="#">BASES Y CONDICIONES</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
