'use client'

import Image from "next/image";
import Simulador from "./components/Simulador";
import Brand from "./pages/Brand";
import VideoBackground from "./components/VideoBackground";
import Highlights from './components/Highlights/index';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Header from './components/Header';
import Exclusive from './components/Exclusive';
import Brands from './components/Brands';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

export default function Home() {

  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const el = document.querySelector('[data-scroll-container]');
      if (el instanceof HTMLElement) {
        const scroll = new LocomotiveScroll({
          el,
          smooth: true
        });
      }
    })(); // Falta esta invocación
  }, []);

  return (
    <main>
      <Hero />
      <Highlights />
      {/* <section data-scroll-section id="destacados" className="text-black mt-12">
        <div className="wrapper-img-destacado bg-cover bg-center bg-no-repeat text-white font-semibold text-7xl h-64 flex flex-col items-end p-12" style={{ backgroundImage: "url('/img/Barcelona.jpg')" }}>
          <div className="flex justify-between items-center w-full mb-4 mt-10">
            <span>destacados</span>
            <Image
              src="/img/FlechaDerechaSVG.svg"
              alt="Logo"
              width={25}
              height={25}
              className=""
            />
          </div>
        </div>
        <div className="text-[#1a1a1a] text-lg  px-12 mt-6 mb-24 relative">


          <div className="flex justify-between w-3/4">
            <div className="flex flex-col justify-between">
              <span>ver</span>
              <Image
                src="/img/FlechaDerechaNegroSVG.svg"
                alt="Logo"
                width={25}
                height={25}
                className=""
              />
            </div>

            <div className="flex flex-col items-end">
              <h3 className="font-semibold">Barcelona Antracita</h3>
              <span>60x120</span>
              <Image
                src="/img/ReglaSVG.svg"
                alt="Logo"
                width={25}
                height={25}
                className="mt-4"
              /></div>
          </div>
          <div data-scroll data-scroll-speed="2">
            <Image
              src="/img/BarcelonaPlaca.png"
              alt="Logo"
              width={250}
              height={250}
              className="absolute right-0 -bottom-12 mr-12 rounded-2xl mb-4 shadow-[2px_2px_5px_rgba(0,0,0,0.20)] object-cover cursor-pointer hover:scale-105 transition-transform duration-400"
            />
          </div>

        </div>
      </section> */}
      <Exclusive />
      <Brands />
      <Contact />
      <Footer />
    </main>

  );
}
