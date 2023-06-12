const Footer = ({ footerDict }) => {
  return (
    <footer className="bg-peya-red px-4 lg:px-peya-x py-8 lg:py-12 flex flex-col items-center justify-evenly gap-12 lg:gap-20 h-fit">
      <div className="flex lg:hidden flex-col justify-center items-center gap-8">
        <h3 className="font-texta-bold text-peya-white text-4xl tracking-wide">
          {footerDict.footerTitle}
        </h3>
        <div className="flex justify-center items-center gap-4">
          <a href={footerDict.footerDownloadAndroid} target="_blank">
            <img
              className="w-full lg:w-48"
              src="/images/download/android.png"
            />
          </a>
          <a href={footerDict.footerDownloadApple} target="_blank">
            <img className="w-full lg:w-48" src="/images/download/apple.png" />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <img
          src="/images/download/pedidosYaPagosLogo.svg"
          className="w-1/3 lg:w-48"
        />
        <img src="/images/hero/pedidosYaLogo.svg" className="w-1/3 lg:w-48" />
      </div>
    </footer>
  );
};

export default Footer;