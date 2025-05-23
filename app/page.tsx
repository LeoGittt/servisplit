"use client";
import Image from "next/image";
import {
  AirVent,
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Phone,
  ThermometerSnowflake,
  PenToolIcon as Tool,
  Wrench,
  MapPin,
  Mail,
  Check,
  UserCheck,
  HeartHandshake,
  Zap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactCard from "@/components/contact-card";
import ServiceCard from "@/components/service-card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import AnimatedSection from "@/components/animated-section";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
        <AnimatedSection id="servicios" className="relative py-28 bg-white overflow-hidden">
  {/* Fondos decorativos mejorados */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-r from-blue-50/40 to-transparent rounded-full filter blur-[80px]"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-l from-purple-50/40 to-transparent rounded-full filter blur-[80px]"></div>
  </div>

  <div className="container px-5 mx-auto relative z-10">
    {/* Encabezado con más énfasis */}
    <div className="text-center mb-20">
      <span className="inline-block mb-3 text-sm font-semibold tracking-wider text-blue-600 uppercase">
        Soluciones a medida
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
        Nuestros <span className="relative whitespace-nowrap">
          <span className="relative z-10">Servicios</span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-100/70 z-0"></span>
        </span>
      </h2>
      <div className="w-32 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Soluciones integrales adaptadas a cada necesidad de climatización con la máxima eficiencia energética
      </p>
    </div>

    {/* Tarjetas de servicios mejoradas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
      {/* Tarjeta 1 */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-5">
            <div className="p-4 rounded-xl bg-blue-50 text-blue-600 shadow-sm group-hover:bg-blue-100 group-hover:scale-105 transition-all duration-300">
              <AirVent className="w-7 h-7" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Instalación Profesional
            </h3>
          </div>
          <p className="text-gray-600 mb-5 text-lg leading-relaxed">
            Sistemas split, multisplit y centralizados instalados con certificación oficial y máxima eficiencia energética.
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              "Configuración óptima del sistema",
              "Pruebas de funcionamiento exhaustivas",
              "Garantía extendida en la instalación"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600">
                    <Check className="h-3 w-3" />
                  </div>
                </div>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-5">
            <div className="p-4 rounded-xl bg-purple-50 text-purple-600 shadow-sm group-hover:bg-purple-100 group-hover:scale-105 transition-all duration-300">
              <Tool className="w-7 h-7" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Mantenimiento Preventivo
            </h3>
          </div>
          <p className="text-gray-600 mb-5 text-lg leading-relaxed">
            Programas personalizados para maximizar la vida útil, eficiencia y rendimiento de tus equipos.
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              "Limpieza profunda de componentes",
              "Revisión de niveles y presión",
              "Optimización del consumo energético"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-100 text-purple-600">
                    <Check className="h-3 w-3" />
                  </div>
                </div>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-5">
            <div className="p-4 rounded-xl bg-pink-50 text-pink-600 shadow-sm group-hover:bg-pink-100 group-hover:scale-105 transition-all duration-300">
              <Wrench className="w-7 h-7" />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Reparación Especializada
            </h3>
          </div>
          <p className="text-gray-600 mb-5 text-lg leading-relaxed">
            Diagnósticos precisos y reparaciones con componentes originales y garantía de servicio.
          </p>
          <ul className="space-y-3 text-gray-700">
            {[
              "Diagnóstico gratuito sin compromiso",
              "Técnicos certificados por fabricantes",
              "Garantía en todas las reparaciones"
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-pink-100 text-pink-600">
                    <Check className="h-3 w-3" />
                  </div>
                </div>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</AnimatedSection>

        {/* About Us Section */}
        <AnimatedSection id="nosotros" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-gradient-to-r from-purple-100 to-transparent opacity-20 rounded-full mix-blend-multiply"></div>
            <div className="absolute bottom-1/2 right-0 w-1/3 h-1/3 bg-gradient-to-l from-blue-100 to-transparent opacity-20 rounded-full mix-blend-multiply"></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  Sobre Nosotros
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Más de 3 años de experiencia en climatización
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                <p className="text-lg text-gray-600">
                  En Servisplit combinamos tecnología avanzada con un equipo de técnicos altamente cualificados para ofrecer soluciones de climatización adaptadas a cada necesidad.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: "10+", label: "Clientes satisfechos" },
                    { value: "3+", label: "Años de experiencia" },
                    { value: "24/7", label: "Servicio de emergencia"},
                    { value: "100%", label: "Garantía en trabajos" },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/airee.jpg"
                  alt="Equipo de Servisplit trabajando"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection id="ventajas" className="relative py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          {/* Efecto de partículas/estrellas sutiles */}
          <ParticlesEffect />
  
          <div className="container mx-auto px-6 relative z-10">
            {/* Encabezado mejorado */}
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 mb-6 border border-white/20 backdrop-blur-sm shadow-sm hover:bg-white/15 transition-colors duration-300">
                <Sparkles className="h-4 w-4 mr-2 text-blue-300" />
                Nuestra ventaja competitiva
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight mb-6 leading-tight">
                ¿Por qué elegir <span className="text-blue-300">Servisplit</span>?
              </h2>
              <div className="flex justify-center">
                <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" />
              </div>
              <p className="mt-8 text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                Nos distinguimos por nuestra <span className="font-semibold text-white">excelencia técnica</span> y un <span className="font-semibold text-white">compromiso absoluto</span> con la satisfacción del cliente
              </p>
            </div>

            {/* Características mejoradas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <ShieldCheck className="h-7 w-7" />,
                  title: "Calidad Certificada",
                  description: "Garantía extendida en todos nuestros servicios con materiales premium y procesos certificados.",
                  color: "text-blue-300"
                },
                {
                  icon: <UserCheck className="h-7 w-7" />,
                  title: "Expertos Certificados",
                  description: "Técnicos especializados con formación continua en las últimas tecnologías del mercado.",
                  color: "text-teal-300"
                },
                {
                  icon: <Zap className="h-7 w-7" />,
                  title: "Respuesta Inmediata",
                  description: "Servicio de urgencias 24/7 con respuesta garantizada en menos de 2 horas.",
                  color: "text-amber-300"
                },
                {
                  icon: <HeartHandshake className="h-7 w-7" />,
                  title: "Atención Personalizada",
                  description: "Soluciones customizadas con seguimiento post-venta y asesoramiento continuo.",
                  color: "text-purple-300"
                },
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="relative group bg-gradient-to-b from-white/5 to-white/[0.03] rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  {/* Efecto de hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icono con fondo animado */}
                  <div className={`relative z-10 mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors duration-500 ${feature.color}`}>
                    <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-blue-100/80 leading-relaxed relative z-10">{feature.description}</p>
                  
                  {/* Efecto de borde inferior */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${i === 0 ? 'from-blue-400 to-blue-600' : i === 1 ? 'from-teal-400 to-teal-600' : i === 2 ? 'from-amber-400 to-amber-600' : 'from-purple-400 to-purple-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              ))}
            </div>

            {/* Efecto de marca de agua */}
            <div className="absolute -bottom-20 -right-20 text-[15rem] font-bold opacity-5 pointer-events-none select-none">
              SERVISPLIT
            </div>
          </div>
        </AnimatedSection>

        {/* Services Details - Minimalist */}
        <AnimatedSection id="detalles" className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
                Detalles técnicos
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Nuestros Servicios en Profundidad
              </h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Conoce cada detalle de nuestros servicios profesionales de climatización.
              </p>
            </div>

            {/* Stacked Service Details */}
            <div className="space-y-12 sm:space-y-16">

              {/* Installation Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm">
                <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/1.jpg"
                    alt="Instalación profesional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Instalación Profesional</h3>
                  <p className="text-gray-600 text-base">
                    Instalación certificada de sistemas split, multisplit y centralizados con máxima eficiencia.
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {[ "Configuración óptima", "Pruebas de funcionamiento", "Garantía en la instalación", ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#contacto" passHref>
                    <Button size="sm" className="mt-4 bg-blue-600 hover:bg-blue-700">
                      Solicitar Presupuesto
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Maintenance Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm">
                 <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden shadow-md md:order-last">
                  <Image
                    src="/2.jpg"
                    alt="Mantenimiento preventivo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4 md:order-first">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mantenimiento Preventivo</h3>
                  <p className="text-gray-600 text-base">
                    Programas de mantenimiento para maximizar la vida útil y eficiencia de tus equipos.
                  </p>
                   <ul className="space-y-2 text-gray-700 text-sm">
                    {[ "Limpieza profunda", "Revisión de gas refrigerante", "Optimización del rendimiento", ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#contacto" passHref>
                    <Button size="sm" className="mt-4 bg-purple-600 hover:bg-purple-700">
                      Programar Mantenimiento
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Repair Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 sm:p-8 rounded-xl shadow-sm">
                 <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/3.jpg"
                    alt="Reparación especializada"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Reparación Especializada</h3>
                  <p className="text-gray-600 text-base">
                    Diagnóstico preciso y reparación de averías con repuestos originales y garantía.
                  </p>
                   <ul className="space-y-2 text-gray-700 text-sm">
                    {[ "Diagnóstico sin costo", "Reparación con técnicos certificados", "Garantía en reparaciones", ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#contacto" passHref>
                    <Button size="sm" className="mt-4 bg-pink-600 hover:bg-pink-700">
                      Solicitar Reparación
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        
        <AnimatedSection id="contacto" className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#fefcff] via-[#f4f8ff] to-[#fff9f9]">
          <div className="container px-4 md:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800 font-josefin">
                Contacte con nosotros
              </h2>
              <div className="w-20 sm:w-24 h-1.5 mx-auto mt-3 sm:mt-4 mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-[#C8A0F2] via-[#BFDDFF] to-[#FFBEDD] shadow-md" />
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
                Estamos a su disposición para resolver cualquier duda o solicitud.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8">
                {/* Información de Contacto */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Información de Contacto</h3>
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    {/* Ubicación */}
                    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-sm group-hover:shadow-md transition-all">
                          <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Ubicación</h4>
                          <p className="text-gray-600 text-sm sm:text-base">Albardón, San Juan, Argentina</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Zona Centro</p>
                        </div>
                      </div>
                    </div>

                    {/* Teléfono / Llamar */}
                    <a
                      href="tel:+542644646434"
                      className="group block relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-sm group-hover:shadow-md transition-all">
                          <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Teléfono / Llamar</h4>
                          <p className="text-gray-600 text-sm sm:text-base">+54 264 464-6434</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Haga clic para llamar</p>
                        </div>
                        <div className="text-purple-600 group-hover:translate-x-1 transition-transform">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:marioamarfil25@gmail.com"
                      className="group block relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-sm group-hover:shadow-md transition-all">
                          <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Email</h4>
                          <p className="text-gray-600 text-sm sm:text-base break-all">marioamarfil25@gmail.com</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Respuesta en 24 horas / Haga clic para enviar email</p>
                        </div>
                        <div className="text-pink-600 group-hover:translate-x-1 transition-transform">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/542644646434"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center gap-3 sm:gap-4">
                        <div className="p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-sm group-hover:shadow-md transition-all">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">WhatsApp</h4>
                          <p className="text-gray-600 text-sm sm:text-base">Chatea con nosotros</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Haga clic para chatear</p>
                        </div>
                        <div className="text-green-600 group-hover:translate-x-1 transition-transform">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Horario de Atención */}
                  <div className="mt-6 sm:mt-8 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                    <div className="relative">
                      <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Horario de Atención</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm sm:text-base">Lunes a Viernes</span>
                          <span className="font-medium text-gray-800 text-sm sm:text-base">8:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm sm:text-base">Sábados</span>
                          <span className="font-medium text-gray-800 text-sm sm:text-base">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm sm:text-base">Domingos</span>
                          <span className="font-medium text-gray-800 text-sm sm:text-base">Cerrado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

// Componente separado para el efecto de partículas para manejar la hidratación
const ParticlesEffect = () => {
  const [particles, setParticles] = useState<Array<{ id: number, style: React.CSSProperties }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          style: {
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
          },
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []); // Ejecutar solo una vez en el cliente

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {particles.map(particle => (
          <div
            key={particle.id}
            style={particle.style}
            className="absolute rounded-full bg-white"
          />
        ))}
      </div>
    </div>
  );
};
