import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const axiforma = localFont({
//   src: [
//     {
//       path: "../../public/font/axiforma/Axiforma-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/font/axiforma/Axiforma-Medium.woff2", 
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/font/axiforma/Axiforma-Bold.woff2",
//       weight: "700", 
//       style: "normal",
//     },
//     // Agrega más variantes según tengas
//   ],
//   variable: "--font-axiforma",
// });

export const metadata: Metadata = {
  title: "FerroconsPRO",
  description: "Portal para Profesionales Ferrocons",
  icons: {
    icon: '/img/Marca_FerrpPro.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        // ${axiforma.variable}
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


