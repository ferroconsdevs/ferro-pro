'use client';

import React, { useState, useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Destacados() {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const horizontalContainer = useRef(null);
    const firstProductContent = useRef(null);

    const productos = [
        {
            id: 0,
            nombre: "Barcelona Antracita",
            dimensiones: "120x60",
            backgroundImage: "/img/Barcelona.jpg",
            productImage: "/img/BarcelonaPlaca.png"
        },
        {
            id: 1,
            nombre: "Black Supreme",
            dimensiones: "120x60",
            backgroundImage: "/img/Supreme.jpg",
            productImage: "/img/SupremePlaca.png"
        },
        {
            id: 2,
            nombre: "Bianco Di Elba",
            dimensiones: "60x120",
            backgroundImage: "/img/BiancoDiElba.jpg",
            productImage: "/img/BiancoDiElbaPlaca.png"
        }
    ];

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const sections = horizontalContainer.current.children;
            const firstProductContentEl = firstProductContent.current;
            const totalScrollWidth = horizontalContainer.current.scrollWidth;
            const scrollLength = totalScrollWidth - window.innerWidth;

            // Fase vertical: aparición del primer producto
            gsap.set(firstProductContentEl, {
                y: "100vh",
                opacity: 0
            });

            // Timeline con ambas fases
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    pin: true,
                    scrub: 0.6,
                    start: "top top",
                    end: `+=${scrollLength + window.innerHeight}`,
                }
            });

            // Fase 1: animación vertical del primer producto
            tl.to(firstProductContentEl, {
                y: "0vh",
                opacity: 1,
                duration: 1
            });

            // Fase 2: animación horizontal suave
            tl.to(horizontalContainer.current, {
                x: () => `-${scrollLength}px`,
                ease: "none",
                duration: 1
            }, ">");

            // Actualiza índice seleccionado mientras scrolleás
            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: `+=${scrollLength + window.innerHeight}`,
                scrub: true,
                onUpdate: (self) => {
                    const horizontalStart = 1 / (productos.length); // comienza al 33% aprox
                    const progress = Math.max(0, self.progress - 0.25) / 0.75;
                    const index = Math.min(productos.length - 1, Math.floor(progress * productos.length));
                    if (index !== selectedProject) setSelectedProject(index);
                }
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            id="destacados"
            style={{
                height: '100vh',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <div
                ref={horizontalContainer}
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${productos.length * 100}vw`
                }}
            >
                {productos.map((producto, index) => (
                    <div
                        key={producto.id}
                        style={{
                            width: '100vw',
                            height: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            flexShrink: 0,
                            position: 'relative'
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: `url('${producto.backgroundImage}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '16rem',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '3rem',
                                color: 'white',
                                fontWeight: '600',
                                fontSize: '4.5rem',
                                position: 'relative',
                                zIndex: 2
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}
                            >
                                <span>destacados</span>
                                <Image
                                    src="/img/FlechaDerechaSVG.svg"
                                    alt="Flecha derecha"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        </div>

                        <div
                            ref={index === 0 ? firstProductContent : null}
                            style={{
                                backgroundColor: 'white',
                                color: '#1a1a1a',
                                fontSize: '1.125rem',
                                padding: '0 3rem',
                                marginTop: '1.5rem',
                                marginBottom: '6rem',
                                position: index === 0 ? 'absolute' : 'relative',
                                top: index === 0 ? '16rem' : 'auto',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                flex: 1,
                                zIndex: 1
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '75%'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <span>ver</span>
                                    <Image
                                        src="/img/FlechaDerechaNegroSVG.svg"
                                        alt="Ver producto"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end'
                                }}>
                                    <h3 style={{ fontWeight: '600', margin: 0 }}>{producto.nombre}</h3>
                                    <span>{producto.dimensiones}</span>
                                    <Image
                                        src="/img/ReglaSVG.svg"
                                        alt="Dimensiones"
                                        width={25}
                                        height={25}
                                        style={{ marginTop: '1rem' }}
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    position: 'absolute',
                                    right: '3rem',
                                    bottom: '-3rem'
                                }}
                            >
                                <Image
                                    src={producto.productImage}
                                    alt={producto.nombre}
                                    width={250}
                                    height={250}
                                    style={{
                                        borderRadius: '1rem',
                                        boxShadow: '2px 2px 5px rgba(0,0,0,0.20)',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                        transition: 'transform 0.4s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
