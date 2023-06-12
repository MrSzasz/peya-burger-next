import MainBase from "@/components/MainBase/MainBase";

export const metadata = {
  title: "Viaja a New York | Perú",
  description: "En PedidosYa paga con Visa y gana",
};

const index = () => {
  return (
    <MainBase
      dict={{
        hero: {
          title:
            "En PedidosYa paga con Visa y gana un viaje a New York, para probar hamburguesas en Manhattan.",
          imageRegion: "Pe",
        },
        travel: {
          title: "Gánate un viaje a New York",
          subtitle: "y prueba hamburguesas en Manhattan",
          bullets: [
            "Viaje para 2 personas",
            "Vuelos ida y regreso a New York",
            "4 noches de estadía en hotel 4 estrellas",
          ],
        },
        howToWin: {
          title: "En PedidosYa paga con Visa",
          subtitle: "Y empieza a viajar antes de viajar",
          dates: {
            firstLine:
              "Acumula oportunidades desde el 13/6/2023 hasta el 31/7/2023",
            secondLine: "El sorteo se realizará el 3/8/2023",
          },
          buttonTitle: "Empieza ya a sumar oportunidades",
          opportunities: {
            span: "¡Acelera tus oportunidades!",
            plusTen: {
              numTitle: "oportunidades",
              text: "Tus pedidos mayores a s/40 suman más",
            },
            plusFive: {
              numTitle: "oportunidades",
              text: "Por tus pedidos en Restaurantes",
            },
            plusOne: {
              numTitle: "oportunidad",
              text: "Por tus pedidos en Mercados y Tiendas",
            },
          },
          link: "https://pwdh.adj.st/?adjust_t=84samxj_ec0dled&adjust_campaign=other__other_mix_eat_ma_fintech_visa&adjust_deeplink=pedidosya%3A%2F%2Fwww.pedidosya.com.pe/&adjust_fallback=https%3A%2F%2Fwww.pedidosya.com.pe%2F%3F%26pycat%3Dother%26utm_source%3Dweb-referral%26utm_medium%3Dreferral%26utm_campaign%3Dother_other_mix_eat_ma_fintech_visa",
          appDownload: "Descarga la app",
        },
        footer: {
          footerTitle: "Descarga la app",
          footerDownloadAndroid:
            "https://play.google.com/store/apps/details?id=com.pedidosya&hl=es_AR&gl=US",
          footerDownloadApple:
            "https://apps.apple.com/cl/app/pedidosya-delivery-app/id490099807",
        },
      }}
    />
  );
};

export default index;
