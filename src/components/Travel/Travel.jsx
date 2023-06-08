const Travel = ({ travelDict }) => {
  return (
    <section id="travelSection" className="px-peya-x py-8 text-peya-blue">
      <div className="text-4xl lg:text-5xl text-center">
        <h2 className="font-texta-bold leading-[1em] pb-4">
          {travelDict.title}
        </h2>
        <p className="text-2xl leading-[1em]">
          {travelDict.subtitle.firstLine}{" "}
          <span className="font-texta-bold">
            {travelDict.subtitle.secondLine}{" "}
          </span>{" "}
          {travelDict.subtitle.thirdLine}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center py-8 items-center gap-4">
        <img
          className="lg:w-[40%] object-contain"
          src="/images/travel/mainTravelImage.webp"
          alt=""
        />
        <div className="flex flex-col gap-8">
            <h3 className="lg:hidden text-peya-blue font-texta-bold text-4xl text-center lg:text-left pb-0 pt-2">
              Vas a poder disfrutar
            </h3>
          <ul className="list-disc flex flex-col gap-2 pl-8 text-lg lg:text-xl">
            <h3 className="hidden lg:block text-peya-blue font-texta-bold text-4xl text-center lg:text-left pb-6">
              Vas a poder disfrutar
            </h3>
            {travelDict.bullets.map((bullet, i) => (
              <li className="text-2xl lg:text-xl" key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Travel;
