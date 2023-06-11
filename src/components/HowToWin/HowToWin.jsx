"use client";

import { useEffect } from "react";
import HowToWinCard from "../HowToWinCard/HowToWinCard";
import { motion } from "framer-motion";

const HowToWin = ({ howToWinDict }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1,
        type: "tween",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, transform: "translateY(+50%)" },
    show: { opacity: 1, transform: "translateY(0)" },
  };

  // useEffect(() => {
  //   const popUp = document.querySelector("#popUp");

  //   popUp.addEventListener("click", (e) => {
  //     const dialogDimensions = popUp.getBoundingClientRect();
  //     if (
  //       e.clientX < dialogDimensions.left ||
  //       e.clientX > dialogDimensions.right ||
  //       e.clientY < dialogDimensions.top ||
  //       e.clientY > dialogDimensions.bottom
  //     ) {
  //       popUp.close();
  //     }
  //   });
  // }, []);

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          type: "tween",
          damping: 25,
          stiffness: 500,
        },
      }}
      viewport={{ once: true }}
      exit={{
        opacity: 1,
      }}
      id="howToWinSection"
      className="lg:px-peya-x p-4 w-full flex justify-center items-center overflow-y-hidden"
    >
      <div className="w-full lg:w-fit shadow-peya-soft-blue rounded-peya flex flex-col px-4 lg:px-peya-x py-8 items-center gap-4 lg:gap-8">
        <div className="text-center flex flex-col items-center gap-4 lg:gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-peya-blue font-texta-bold text-3xl lg:text-4xl">
              {howToWinDict.title}
            </h3>
            <p className="text-xl">{howToWinDict.subtitle}</p>
          </div>
          <div className="text-center text-2xl text-peya-white p-4 lg:p-8 bg-peya-blue flex flex-col gap-2">
            <p>{howToWinDict.dates.firstLine}</p>
            <p className="font-texta-bold">{howToWinDict.dates.secondLine}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
          <p className="text-2xl text-center lg:text-left">
            {howToWinDict.buttonTitle}
          </p>
          {/* <button
            onClick={() => {
              const popUp = document.querySelector("#popUp");
              popUp.showModal();
            }}
            className="bg-peya-red hidden lg:block transition-all hover:bg-peya-red-hover rounded-full px-10 py-2 font-bold text-peya-white"
          >
            Pedir Ya
          </button> */}
          <a
            href={howToWinDict.link}
            target="_blank"
            className="bg-peya-red transition-all text-xl lg:text-base hover:bg-peya-red-hover rounded-full px-10 py-2 font-bold text-peya-white"
          >
            Pedir Ya
          </a>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-8"
        >
          <motion.div variants={item}>
            <HowToWinCard
              num={10}
              numTitle={howToWinDict.opportunities.plusTen.numTitle}
              span={howToWinDict.opportunities.span}
              text={howToWinDict.opportunities.plusTen.text}
            />
          </motion.div>
          <motion.div variants={item}>
            <HowToWinCard
              num={5}
              numTitle={howToWinDict.opportunities.plusFive.numTitle}
              text={howToWinDict.opportunities.plusFive.text}
            />
          </motion.div>
          <motion.div variants={item}>
            <HowToWinCard
              num={1}
              numTitle={howToWinDict.opportunities.plusOne.numTitle}
              text={howToWinDict.opportunities.plusOne.text}
            />
          </motion.div>
        </motion.div>
      </div>
      {/* <dialog
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
      </dialog> */}
    </motion.section>
  );
};

export default HowToWin;
