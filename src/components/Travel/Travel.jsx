"use client";

import { motion } from "framer-motion";

const Travel = ({ travelDict }) => {
  return (
    <section id="travelSection" className="px-peya-x py-8 text-peya-blue">
      <div className="text-4xl lg:text-5xl text-center">
        <h2 className="font-texta-bold leading-[1em] pb-4">
          {travelDict.title}
        </h2>
        <p className="text-2xl leading-[1em]">{travelDict.subtitle}</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center py-8 items-center gap-4">
        <img
          className="lg:w-[40%] object-contain animate-soft-bounce"
          src="/images/travel/mainTravelImage.webp"
          alt=""
        />
        <motion.div
          initial={{
            transform: "translateX(+100%)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translateX(0%)",
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
            transform: "translateX(0%)",
            opacity: 1,
          }}
          className="flex flex-col gap-8"
        >
          <h3 className="lg:hidden text-peya-blue font-texta-bold text-4xl text-center lg:text-left pb-0 pt-2">
            Vas a poder disfrutar
          </h3>
          <ul className="list-disc flex flex-col gap-2 pl-8 text-lg lg:text-xl">
            <h3 className="hidden lg:block text-peya-blue font-texta-bold text-4xl text-center lg:text-left pb-6">
              Vas a poder disfrutar
            </h3>
            {travelDict.bullets.map((bullet, i) => (
              <li
                className="text-2xl lg:text-xl lg:list-inside w-[75%] lg:w-full mx-auto"
                key={i}
              >
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Travel;
