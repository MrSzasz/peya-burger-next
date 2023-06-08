import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PedidosYa',
  description: 'PedidosYa',
  icons: {
    icon: '/favicon.png',
  },
  keywords: "Pagos, PedidosYa Pagos, PedidosYa, Visa, Visa Crédito, Crédito, pedidosya, pedidos, rápido, compra, tarjeta, visa, crédito, débito, beneficios, compras, descuentos, gana, premio, concurso, chances, supermercados, restaurantes, mercados, farmacias, tiendas, helados, mascotas, despegar, viajes, viajar, viaje, tour, new york, nueva york, manhattan, hamburguesa, burga, burger"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
