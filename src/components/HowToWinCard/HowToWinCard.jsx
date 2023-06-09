const HowToWinCard = ({ num, text, span, numTitle }) => {
  return (
    <div className="h-96 lg:w-64 lg:h-56 bg-peya-blue grid grid-rows-2 gap-8 text-peya-white p-16 lg:p-8">
      <div className="flex flex-col justify-center items-center">
        <p className="text-8xl lg:text-7xl font-texta-bold">
          <span className="text-peya-turquoise">+</span> <span>{num}</span>
        </p>
        <p className="text-3xl lg:text-xl">{numTitle}</p>
      </div>
      <div className="flex justify-center items-center text-center text-white">
        <p className="text-xl lg:text-base px-6 lg:px-0 lg:leading-5 h-fit leading-5 flex flex-wrap justify-center gap-1 lg:gap-0">
          {span && (
            <span className="text-peya-turquoise font-texta-bold">{span}</span>
          )}
          {text}
        </p>
      </div>
    </div>
  );
};

export default HowToWinCard;
