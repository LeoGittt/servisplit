"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-sky-950 overflow-hidden"
      style={{
        background: `
          linear-gradient(to right, rgba(191, 221, 255, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(191, 221, 255, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundColor: "#EAF6FF", // azul muy claro de fondo
      }}
    >
      {/* Overlay con degradado azul suave */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(191, 221, 255, 0.2) 0%, transparent 70%),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(234, 246, 255, 0.7) 100%)
          `,
        }}
      />

      <div className="container px-6 relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-5l font-extrabold tracking-tight leading-tight text-sky-900">
          Instalación y mantenimiento de{" "}
          <span className="text-sky-600">aires acondicionados</span> split y
          sistemas de{" "}
          <span className="text-sky-600">climatización</span>
        </h1>

        <p className="mt-6 text-lg text-sky-800/80 font-light">
          En <strong className="text-sky-900 font-medium">Servisplit</strong>{" "}
          ofrecemos soluciones rápidas, eficientes y profesionales para hogares,
          oficinas y comercios. Garantía y confort durante todo el año.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-sky-500 text-white hover:bg-sky-600 transition-transform duration-150 px-8 py-5 text-base font-semibold rounded-xl shadow-md"
          >
            <Link href="#contacto">Solicitar presupuesto</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white border border-sky-300 text-sky-700 hover:bg-sky-100 transition-transform duration-150 px-8 py-5 text-base font-medium rounded-xl"
          >
            <Link href="#servicios">Ver servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
