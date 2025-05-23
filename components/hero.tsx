"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-sky-950 overflow-hidden"
      style={{
        background: `
          linear-gradient(to right, rgba(191, 221, 255, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(191, 221, 255, 0.15) 1px, transparent 1px),
          radial-gradient(ellipse at 80% 20%, rgba(135, 206, 250, 0.15) 0%, transparent 70%),
          radial-gradient(ellipse at 20% 80%, rgba(135, 206, 250, 0.15) 0%, transparent 70%)
        `,
        backgroundSize: "50px 50px",
        backgroundColor: "#f5fbff",
      }}
    >
      {/* Efecto de partículas animadas */}
      <HeroParticlesEffect />

      {/* Overlay con degradado */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 70% 30%, rgba(173, 216, 230, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.1) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(245, 251, 255, 0.9) 100%)
          `,
        }}
      />

      <div className="container px-6 relative z-10 text-center max-w-5xl">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-sky-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">Instalación profesional de</span>
          <span className="relative inline-block mt-4">
            <span className="relative z-10">
              aires acondicionados{" "}
              <span className="text-sky-600">split</span>
            </span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-sky-200/60 z-0"></span>
          </span>
          <span className="block mt-2">y sistemas de <span className="text-sky-600">climatización</span></span>
        </motion.h1>

        <motion.p 
          className="mt-8 text-xl text-sky-800/90 font-light max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          En <strong className="text-sky-900 font-medium">Servisplit</strong>{" "}
          ofrecemos soluciones <span className="font-medium">personalizadas</span> con la máxima{" "}
          <span className="font-medium">eficiencia energética</span> para hogares, oficinas y comercios.
        </motion.p>

        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 transition-all duration-300 px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Link href="#contacto">
              <span className="relative z-10">Solicitar presupuesto</span>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="relative overflow-hidden bg-white/90 border border-sky-300 text-sky-700 hover:bg-sky-50/90 hover:text-sky-800 transition-all duration-300 px-10 py-6 text-lg font-medium rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <Link href="#servicios">
              <span className="relative z-10">Ver nuestros servicios</span>
              <span className="absolute inset-0 bg-sky-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </Button>
        </motion.div>

        {/* Elemento decorativo */}
        <motion.div 
          className="mt-16 mx-auto w-24 h-1.5 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </section>
  );
}

// Componente separado para el efecto de partículas del Hero para manejar la hidratación
const HeroParticlesEffect = () => {
  const [particles, setParticles] = useState<Array<{ id: number, style: React.CSSProperties, animate: any, transition: any }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          style: {
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          },
           animate: {
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0.7, 0.3],
            },
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []); // Ejecutar solo una vez en el cliente

  return (
     <div className="absolute inset-0 overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-sky-300/30"
            style={particle.style}
            animate={particle.animate}
            transition={particle.transition}
          />
        ))}
      </div>
  );
};