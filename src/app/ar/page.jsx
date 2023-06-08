import MainBase from "@/components/MainBase/MainBase";

const index = () => {
  return (
    <MainBase
      dict={{
        hero: "Pagá con Visa en PedidosYa y ganá un viaje a New York a probar las mejores hamburguesas de Manhattan.",
        travel: {
          title: "Ganate un viaje a Nueva York",
          subtitle: {
            firstLine: "a conocer las",
            secondLine: "hamburgueserías mejores rankeadas",
            thirdLine: "de Manhattan.",
            fourthLine: "Y disfrutá de todo esto:",
          },
          bullets: [
            "Vuelo ida y vuelta a New York para 2 personas.",
            "4 noches en Hotel 4 estrellas.",
            "Tour gastronómico por las mejores Hamburgueserías de Manhattan.",
            "Excursiones diarias, y mucho más!",
          ],
        },
        howToWin: {
          title: "Pagá con Visa en PedidosYa y participá",
          subtitle: "Y empezá a viajar antes de viajar",
          dates: {
            firstLine: "Acumulá oportunidades desde el 13/6 hasta 31/7",
            secondLine: "El sorteo se realizará el 2 de agosto de 2023",
          },
          buttonTitle: "Empezá ya a sumar oportunidades",
          opportunities: {
            plusTen:
              "¡Acelerá tus oportunidades! Por tus compras mayores a $7.500 sumas 10 oportunidades",
            plusFive: {
              firstLine: "Por cada compra en",
              secondLine:
                "Kioscos, Farmacias, Mascotas, Tiendas, Bebidas y Envíos",
            },
            plusOne: "Por tus compras en Restaurantes y Café y Deli en ",
          },
          appDownload: "Descargá la app",
        },
        footer: "Descargá la app",
      }}
    />
  );
};

export default index;
