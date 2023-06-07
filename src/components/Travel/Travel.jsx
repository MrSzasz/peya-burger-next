const Travel = () => {
  return (
    <section id="travelSection" className="px-peya-x py-8 text-peya-blue">
      <div className="text-3xl lg:text-5xl text-center">
        <h2 className="font-texta-bold leading-[1em] pb-4">
          Ganate un viaje a Nueva York
        </h2>
        <p className="text-xl lg:text-2xl leading-[1em]">
          a conocer las{" "}
          <span className="font-texta-bold">
            hamburgueserías mejores rankeadas
          </span>{" "}
          de Manhattan. <br />Y disfrutá de todo esto:
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
            <li>Vuelo ida y vuelta a New York para 2 personas</li>
            <li>4 noches en Hotel 4 estrellas</li>
            <li>
              Tour gastronómico por las mejores Hamburgueserías de Manhattan
            </li>
            <li>Excursiones diarias, y mucho más!</li>
          </ul>
        </div>
      </div>
      {/* <h3 className="w-full text-center pt-4 lg:pt-8 text-3xl lg:text-5xl font-texta-bold">
        ESTAS MUY CERCA DE GANAR
      </h3> */}
    </section>
  );
};

export default Travel;
