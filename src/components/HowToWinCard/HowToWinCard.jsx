const HowToWinCard = ({ num, text }) => {
  return (
    <div className="h-[20rem] lg:h-[16rem] w-60 lg:w-44 bg-peya-red p-4 items-end flex relative">
      <div className="text-peya-white border-8 border-peya-white bg-peya-blue w-64 lg:w-48 h-64 lg:h-48 right-1/2 translate-x-1/2 -top-[30%] absolute rounded-full flex flex-col justify-center items-center">
        <p className="text-8xl lg:text-7xl font-texta-bold">
          <span>+</span>{" "}<span>{num}</span>
        </p>
        <p className="text-3xl lg:text-xl">{num > 1 ? "chances" : "chance"}</p>
      </div>
      <div className="h-[50%] flex justify-center items-center text-center text-white">
        <p className="text-xl lg:text-base lg:leading-5 h-fit leading-5 flex flex-wrap justify-center gap-1 lg:gap-0">{text}</p>
      </div>
    </div>
  );
};

export default HowToWinCard;
