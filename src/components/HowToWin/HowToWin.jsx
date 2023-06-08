"use client";

import { useEffect } from "react";
import HowToWinCard from "../HowToWinCard/HowToWinCard";

const HowToWin = ({ howToWinDict }) => {
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
    <section
      id="howToWinSection"
      className="lg:px-peya-x p-4 w-full flex justify-center items-center"
    >
      <div className="w-full lg:w-fit shadow-peya-soft-blue rounded-peya flex flex-col px-4 lg:px-peya-x py-8 items-center gap-4 lg:gap-8">
        <div className="text-center flex flex-col items-center gap-4 lg:gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-peya-blue font-texta-bold text-3xl lg:text-4xl">
              {howToWinDict.title}
            </h3>
            <p className="text-lg lg:text-xl">{howToWinDict.subtitle}</p>
          </div>
          <div className="text-center text-lg lg:text-xl text-peya-white p-4 lg:p-8 bg-peya-blue flex flex-col gap-2">
            <p>{howToWinDict.dates.firstLine}</p>
            <p className="font-texta-bold">{howToWinDict.dates.secondLine}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16 mb-12">
          <p className="font-texta-bold text-xl text-center lg:text-left lg:text-2xl">
            {howToWinDict.buttonTitle}
          </p>
          <button
            onClick={() => {
              const popUp = document.querySelector("#popUp");
              popUp.showModal();
            }}
            className="bg-peya-red hidden lg:block transition-all hover:bg-peya-red-hover rounded-full px-10 py-2 font-bold text-peya-white"
          >
            Pedir Ya
          </button>
          <a
            href="https://www.google.com/"
            target="_blank"
            className="bg-peya-red lg:hidden transition-all hover:bg-peya-red-hover rounded-full px-10 py-2 font-bold text-peya-white"
          >
            Pedir Ya
          </a>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-14 lg:gap-8">
          <HowToWinCard num={10} text={howToWinDict.opportunities.plusTen} />
          <HowToWinCard
            num={5}
            text={[
              howToWinDict.opportunities.plusFive.firstLine,
              <img
                className="h-5 lg:h-6"
                src="/images/howToWin/pedidosYaMarketLogo.svg"
              />,
              howToWinDict.opportunities.plusFive.secondLine,
            ]}
          />
          <HowToWinCard
            num={1}
            text={[
              howToWinDict.opportunities.plusOne,
              <img
                className="h-5 lg:h-6"
                src="/images/hero/pedidosYaLogo.svg"
              />,
            ]}
          />
        </div>
      </div>
      <dialog
        id="popUp"
        className="block  [&:not([open])]:opacity-0 transition-all duration-300 pointer-events-none open:pointer-events-auto open:opacity-100 w-fit h-fit p-8 rounded-peya inset-0"
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-peya-blue font-texta-bold text-4xl">
            {howToWinDict.appDownload}
          </h2>
          <img src="/images/howToWin/qr.png" alt="" className="w-72 h-72" />
          <button
            onClick={() => {
              const popUp = document.querySelector("#popUp");
              popUp.close();
            }}
            className="bg-peya-blue hidden lg:block transition-all hover:bg-peya-blue-hover rounded-full px-10 py-2 font-bold text-peya-white"
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </section>
  );
};

export default HowToWin;
