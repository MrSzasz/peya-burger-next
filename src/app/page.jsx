import Link from "next/link";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: "Experiencias PedidosYa",
  description: "Experiencias PedidosYa",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "Pagos, PedidosYa Pagos, PedidosYa, Visa, Visa Crédito, Crédito, pedidosya, pedidos, rápido, compra, tarjeta, visa, crédito, débito, beneficios, compras, descuentos, gana, premio, concurso, chances, supermercados, restaurantes, mercados, farmacias, tiendas, helados, mascotas, despegar, viajes, viajar, viaje, tour, new york, nueva york, manhattan, hamburguesa, burga, burger",
};

export default function Home() {
  return (
    <section className="min-h-screen grid grid-rows-main-page font-texta">
      <div className="flex justify-center items-center gap-4 p-4 h-min bg-peya-blue text-peya-white">
        <img
          src="/images/navbar/pedidosYaPagosLogoMobile.svg"
          className="w-20 lg:w-48 lg:hidden"
          alt=""
        />
        <img
          src="/images/navbar/pedidosYaPagosLogo.svg"
          className="w-14 lg:w-48 hidden lg:block"
          alt=""
        />
        |
        <img
          src="/images/navbar/visaLogo.svg"
          className="w-14 lg:w-20"
          alt=""
        />
      </div>
      <div className="px-peya-x py-8">
        <div className="flex flex-col lg:flex-row justify-evenly px-peya-x py-8 text-4xl items-center flex-wrap text-peya-white font-texta-bold bg-peya-blue h-full lg:gap-12">
          <Link
            href={"/ar/burgertour"}
            className="flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span class="fi fi-ar h-6 rounded-peya"></span>
            Argentina
          </Link>
          {/* <Link
            href={"/cl/burgertour"}
            className="flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span class="fi fi-cl h-6 rounded-peya"></span>
            Chile
          </Link> */}
          <Link
            href={"/pe/burgertour"}
            className="flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span class="fi fi-pe h-6 rounded-peya"></span>
            Perú
          </Link>
          {/* <Link
            href={"/rd/burgertour"}
            className="flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span class="fi fi-do h-6 rounded-peya"></span>
            Rep. Dominicana
          </Link> */}
          {/* <Link
            href={"/uy/burgertour"}
            className="flex justify-center items-center gap-2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:-bottom-1 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
          >
            <span class="fi fi-uy h-6 rounded-peya"></span>
            Uruguay
          </Link> */}
        </div>
      </div>
      <div className="flex justify-between items-center w-full px-4 lg:px-peya-x h-fit bg-peya-red py-8">
        <img
          src="/images/download/pedidosYaPagosLogo.svg"
          className="w-32 lg:w-48"
        />
        <img src="/images/hero/pedidosYaLogo.svg" className="w-28 lg:w-48" />
      </div>
    </section>
  );
}
