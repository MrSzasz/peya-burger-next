"use client";

import { AiOutlineMenu } from "react-icons/ai";
import $ from "jquery";
import { useEffect } from "react";

const Navbar = ({ tyc }) => {
  const toggleNav = () => {
    const hiddenNav = $("#hiddenNav");
    hiddenNav.slideToggle().css({
      display: "flex",
    });
  };

  useEffect(() => {
    const popUp = document.querySelector("#popUp");

    popUp.addEventListener("click", (e) => {
      const dialogDimensions = popUp.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        popUp.close();
      }
    });
  }, []);

  return (
    <nav className="flex justify-between items-center p-6 px-4 text-white bg-peya-blue z-10 lg:h-16">
      <div className="flex justify-center items-center gap-2 lg:hidden">
        <img
          src="/images/navbar/pedidosYaPagosLogoMobile.svg"
          className="w-16 lg:w-48 lg:hidden"
          alt=""
        />
        |
        <img
          src="/images/navbar/visaLogo.svg"
          className="w-14 lg:w-24"
          alt=""
        />
      </div>
      <button className="lg:hidden text-2xl" onClick={toggleNav}>
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
            <button
              onClick={() => {
                const popUp = document.querySelector("#popUp");
                popUp.showModal();
              }}
            >
              BASES Y CONDICIONES
            </button>
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
        className="fixed w-screen h-screen top-0 left-0 hidden bg-peya-blue flex-col justify-center items-center gap-20 text-3xl font-texta-bold z-50"
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
          className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:-bottom-1 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          <button
            onClick={() => {
              toggleNav();
              const popUp = document.querySelector("#popUp");
              popUp.showModal();
            }}
          >
            BASES Y CONDICIONES
          </button>
        </li>
      </ul>
      <dialog
        id="popUp"
        className="block [&:not([open])]:opacity-0 transition-all duration-300 pointer-events-none open:pointer-events-auto open:opacity-100 lg:w-[75vw] h-[90vh] p-4 pt-8 lg:p-8 inset-0"
      >
        <button
          onClick={() => {
            const popUp = document.querySelector("#popUp");
            popUp.close();
          }}
          className="absolute right-6 top-4 text-xl font-texta-bold"
        >
          X
        </button>
        <div className="grid grid-rows-main-page h-full gap-4">
          <h2 className="text-peya-blue font-texta-bold text-2xl text-center pb-4">
            BASES Y CONDICIONES DE LA PROMOCIÓN <br /> “BURGER TRAVEL”
          </h2>
          <p className="whitespace-pre-line leading-7 text-sm overflow-y-scroll colored-scrollbar">
            {tyc}
          </p>
          <button
            onClick={() => {
              const popUp = document.querySelector("#popUp");
              popUp.close();
            }}
            className="bg-peya-blue w-fit mx-auto block transition-all hover:bg-peya-blue-hover rounded-full px-10 py-2 font-bold text-peya-white"
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;
