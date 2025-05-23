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
} from "lucide-react";

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
        <AnimatedSection id="servicios" className="relative py-24 bg-white">
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-100 to-transparent opacity-20 rounded-full mix-blend-multiply"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-purple-100 to-transparent opacity-20 rounded-full mix-blend-multiply"></div>
          </div>
          <div className="container px-4 mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2">
                Nuestros Servicios
              </h2>
              <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Soluciones integrales adaptadas a cada necesidad de climatización
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-blue-50 text-blue-600 shadow-sm group-hover:bg-blue-100 transition-all duration-300">
                      <AirVent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Instalación Profesional
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Instalación certificada de sistemas split, multisplit y centralizados con máxima eficiencia.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "✓ Configuración óptima del sistema",
                      "✓ Pruebas de funcionamiento exhaustivas",
                      "✓ Garantía en la instalación",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-purple-50 text-purple-600 shadow-sm group-hover:bg-purple-100 transition-all duration-300">
                      <Tool className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Mantenimiento Preventivo
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Programas de mantenimiento para maximizar la vida útil y eficiencia de tus equipos.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "✓ Limpieza profunda de componentes",
                      "✓ Revisión de gas refrigerante",
                      "✓ Optimización del rendimiento",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-pink-50 text-pink-600 shadow-sm group-hover:bg-pink-100 transition-all duration-300">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Reparación Especializada
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Diagnóstico preciso y reparación de averías con repuestos originales y garantía.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "✓ Diagnóstico sin costo adicional",
                      "✓ Reparación con técnicos certificados",
                      "✓ Garantía en todas las reparaciones",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
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
                  Más de 10 años de experiencia en climatización
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
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:shadow-lg transition-all duration-300">
                    Conoce nuestro equipo
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">
                    Ver certificaciones
                  </Button>
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
        <AnimatedSection id="ventajas" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-blue-700/30 px-4 py-2 text-sm font-medium text-blue-100 mb-6">
                Nuestra ventaja competitiva
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                ¿Por qué elegir Servisplit?
              </h2>
              <div className="w-24 h-1.5 bg-blue-400 mx-auto mt-6 rounded-full" />
              <p className="mt-6 text-lg text-blue-100">
                Nos distinguimos por nuestro compromiso con la excelencia y la satisfacción total del cliente
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <CheckCircle className="h-8 w-8" />,
                  title: "Calidad Certificada",
                  description: "Todos nuestros servicios incluyen garantía y utilizamos materiales de primera calidad.",
                },
                {
                  icon: <ThermometerSnowflake className="h-8 w-8" />,
                  title: "Expertos Certificados",
                  description: "Técnicos con certificación oficial y formación continua en las últimas tecnologías.",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Respuesta Rápida",
                  description: "Servicio de urgencias 24/7 con tiempos de respuesta mínimos.",
                },
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: "Atención Personal",
                  description: "Asesoramiento personalizado para encontrar la mejor solución a tu medida.",
                },
              ].map((feature, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Details */}
        <AnimatedSection id="detalles" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
                Detalles técnicos
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Nuestros Servicios en Profundidad
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-6 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">
                Conoce cada detalle de nuestros servicios profesionales de
                climatización
              </p>
            </div>

            <Tabs defaultValue="instalacion" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-2 rounded-xl">
                {[
                  {
                    value: "instalacion",
                    icon: <AirVent className="h-5 w-5 mr-2" />,
                    label: "Instalación",
                  },
                  {
                    value: "mantenimiento",
                    icon: <Tool className="h-5 w-5 mr-2" />,
                    label: "Mantenimiento",
                  },
                  {
                    value: "reparacion",
                    icon: <Wrench className="h-5 w-5 mr-2" />,
                    label: "Reparación",
                  },
                ].map((tab, i) => (
                  <TabsTrigger
                    key={i}
                    value={tab.value}
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600 rounded-lg py-3 transition-all"
                  >
                    {tab.icon}
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Installation Content */}
              <TabsContent value="instalacion" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image
                      src="/1.jpg"
                      alt="Instalación profesional"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Instalación Profesional de Sistemas
                    </h3>
                    <p className="text-gray-600">
                      Garantizamos una instalación perfecta desde el primer
                      momento con nuestro servicio completo:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Asesoramiento técnico personalizado para seleccionar el equipo ideal",
                        "Instalación certificada por técnicos cualificados",
                        "Configuración óptima del sistema para máximo rendimiento",
                        "Pruebas de funcionamiento exhaustivas",
                        "Documentación técnica y garantía por escrito",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Solicitar Presupuesto
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Maintenance Content */}
              <TabsContent value="mantenimiento" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 order-last lg:order-first">
                    <Image
                      src="/2.jpg"
                      alt="Mantenimiento preventivo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Mantenimiento Preventivo Integral
                    </h3>
                    <p className="text-gray-600">
                      Programa de mantenimiento diseñado para maximizar la vida
                      útil y eficiencia de tus equipos:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Limpieza profunda de filtros y componentes internos",
                        "Revisión de niveles de gas refrigerante y presión",
                        "Comprobación del sistema eléctrico y electrónico",
                        "Optimización del rendimiento energético",
                        "Informe detallado del estado del equipo con recomendaciones",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Programar Mantenimiento
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Repair Content */}
              <TabsContent value="reparacion" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                    <Image
                      src="/3.jpg"
                      alt="Reparación especializada"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      Reparación Rápida y Garantizada
                    </h3>
                    <p className="text-gray-600">
                      Solucionamos cualquier problema con tu equipo de
                      climatización de forma profesional:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Diagnóstico preciso sin costo adicional",
                        "Presupuesto claro y detallado sin compromiso",
                        "Reparación realizada por técnicos certificados",
                        "Uso exclusivo de repuestos originales con garantía",
                        "Pruebas post-reparación y documentación técnica",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    >
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Solicitar Reparación
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
