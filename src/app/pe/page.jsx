import MainBase from "@/components/MainBase/MainBase";

export const metadata = {
  title: "Viaja a New York | Perú",
  description: "En PedidosYa paga con Visa y gana",
};

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
            firstLine: "Acumulá chances desde el 13/6 hasta 31/7",
            secondLine: "El sorteo se realizará el 3 de agosto de 2023",
          },
          buttonTitle: "Empezá ya a sumar chances",
          opportunities: {
            plusTen:
              "¡Acelerá tus chances! Tus compras mayores a $7.500 suman más",
            plusFive: {
              firstLine: "Por tus compras en",
              secondLine:
                "Kioscos, Farmacias, Mascotas, Tiendas, Bebidas y Envíos",
            },
            plusOne: "Por tus compras en Restaurantes dentro de  ",
          },
          appDownload: "Descargá la app",
        },
        footer: "Descargá la app",
      }}
    />
  );
};

export default index;
