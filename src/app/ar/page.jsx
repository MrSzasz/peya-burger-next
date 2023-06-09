import MainBase from "@/components/MainBase/MainBase";

export const metadata = {
  title: "Viajá a New York | Argentina",
  description: "En PedidosYa pagá con Visa y ganá",
};

const index = () => {
  return (
    <MainBase
      dict={{
        hero: {
          title:
            "Pagá con Visa en PedidosYa y ganá un viaje a New York a probar las mejores hamburguesas de Manhattan.",
          imageRegion: "Ar",
        },
        travel: {
          title: "Ganate un viaje a Nueva York",
          subtitle: "y probá hamburguesas en Manhattan",
          bullets: [
            "Viaje para 2 personas",
            "Vuelos ida y vuelta a New York",
            "6 noches de estadía en hotel 4 estrellas",
          ],
        },
        howToWin: {
          title: "En PedidosYa pagá con Visa",
          subtitle: "Y empezá a viajar antes de viajar",
          dates: {
            firstLine: "Acumulá chances desde el 13/6 hasta 31/7",
            secondLine: "El sorteo se realizará el 3 de agosto de 2023",
          },
          buttonTitle: "Empezá ya a sumar chances",
          opportunities: {
            span: "¡Acelerá tus chances!",
            plusTen: {
              numTitle: "chances",
              text: "Tus compras mayores a $7.500 suman más",
            },
            plusFive: {
              numTitle: "chances",
              text: "Por tus pedidos en Mercados y tiendas",
            },
            plusOne: {
              numTitle: "chance",
              text: "Por tus compras en Restaurantes",
            },
          },
          link: "https://pwdh.adj.st/restaurantes/?adjust_t=84samxj_ec0dled&adjust_campaign=other__other_mix_eat_ma_fintech_visa&adjust_deeplink=pedidosya%3A%2F%2Fwww.pedidosya.com.ar/restaurantes/&adjust_fallback=https%3A%2F%2Fwww.pedidosya.com.ar%2Frestaurantes%2F%3F%26pycat%3Dother%26utm_source%3Dweb-referral%26utm_medium%3Dreferral%26utm_campaign%3Dother_other_mix_eat_ma_fintech_visa",
          appDownload: "Descargá la app",
        },
        footer: "Descargá la app",
      }}
    />
  );
};

export default index;
