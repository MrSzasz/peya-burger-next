const Hero = () => {
  return (
    <section>
      <div className="relative flex flex-col lg:flex-row justify-center">
        <div className="lg:w-[35%] h-[75%] flex flex-col gap-4 p-4 lg:pt-16">
          <img
            src="/images/hero/title.svg"
            className="w-[15em] lg:w-[25em] mx-auto lg:mx-0"
          />
          <h2 className="font-texta-bold text-peya-blue text-xl lg:text-2xl leading-6 text-center lg:text-left lg:w-[75%]">
            Pagá con Visa en PedidosYa y ganá un viaje a New York a probar las
            mejores hamburguesas de Manhattan.
          </h2>
        </div>
        <div className="lg:w-[45%] w-[90%] mx-auto lg:mx-0 relative lg:h-[40vw] pb-12">
          <img
            src="/images/hero/heroMainImage.webp"
            className="lg:absolute -bottom-10"
          />
        </div>
        <img
          src="/images/hero/despegar.svg"
          className="absolute left-4 bottom-4 w-20"
        />
      </div>
      <div className="bg-peya-red flex justify-end py-4 px-4">
        <img src="/images/hero/pedidosYaLogo.svg" className="w-20 lg:w-32" />
      </div>
    </section>
  );
};

export default Hero;
