const Travel = ({ travelDict }) => {
  return (
    <section id="travelSection" className="px-peya-x py-8 text-peya-blue">
      <div className="text-3xl lg:text-5xl text-center">
        <h2 className="font-texta-bold leading-[1em] pb-4">
          {travelDict.title}
        </h2>
        <p className="text-xl lg:text-2xl leading-[1em]">
          {travelDict.subtitle.firstLine}{" "}
          <span className="font-texta-bold">
            {travelDict.subtitle.secondLine}{" "}
          </span>{" "}
          {travelDict.subtitle.thirdLine} <br />
          {travelDict.subtitle.fourthLine}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center py-8 items-center gap-4">
        <img
          className="lg:w-[40%] object-contain"
          src="/images/travel/mainTravelImage.webp"
          alt=""
        />
        <div className="flex flex-col gap-8">
          <ul className="list-disc flex flex-col gap-2 pl-8 text-lg lg:text-xl">
            {travelDict.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Travel;
