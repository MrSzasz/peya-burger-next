const HowToWinCard = ({ num, text }) => {
  return (
    <div className="h-[19rem] w-56 bg-peya-red p-4 items-end flex rounded-t-full relative">
      <div className="bg-peya-white shadow-2xl w-44 h-44 right-1/2 translate-x-1/2 -top-[10%] absolute rounded-full flex flex-col justify-center items-center">
        <p className="text-7xl font-texta-bold text-peya-red">
          <span className="text-peya-blue">+</span>{" "}<span>{num}</span>
        </p>
        <p className="text-peya-red text-xl">{num > 1 ? "oportunidades" : "oportunidad"}</p>
      </div>
      <div className="h-[40%] text-center text-white">
        <p className="h-fit leading-5 flex flex-wrap justify-center gap-1">{text}</p>
      </div>
    </div>
  );
};

export default HowToWinCard;
