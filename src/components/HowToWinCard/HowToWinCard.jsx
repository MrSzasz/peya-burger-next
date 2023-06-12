const HowToWinCard = ({ num, text, span, numTitle }) => {
  return (
    <div className="min-h-[60vw] lg:min-h-0 h-fit w-full lg:min-w-[14rem] lg:h-full bg-peya-blue grid justify-stretch text-peya-white px-4 py-8 lg:py-8 lg:px-4">
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-8xl lg:text-7xl font-texta-bold"
          style={{
            lineHeight: ".75",
          }}
        >
          <span className="text-peya-turquoise">+</span>
          <span>{num}</span>
        </p>
        <p className="text-3xl lg:text-xl text-peya-turquoise font-texta-bold">
          {numTitle}
        </p>
      </div>
      <div className="flex text-center text-white h-full ">
        <p className="text-2xl lg:text-base px-6 w-[75%] lg:px-0 lg:w-44 mx-auto lg:leading-5 h-full leading-6 flex flex-wrap justify-center gap-1 lg:gap-0">
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
