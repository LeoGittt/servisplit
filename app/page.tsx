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
import TestimonialCarousel from "@/components/testimonial-carousel";
import ContactCard from "@/components/contact-card";
import ServiceCard from "@/components/service-card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import AnimatedSection from "@/components/animated-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Vercel-inspired gradient */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-blue-50">
          <div className="relative min-h-[600px] w-full flex items-center">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-8 gap-12">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 py-16 text-center lg:text-left z-10 space-y-6">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
                  Expertos en climatización
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Servisplit
                  </span>
                  <span className="block mt-4 text-2xl sm:text-3xl md:text-4xl font-light text-gray-600">
                    Soluciones inteligentes para tu confort
                  </span>
                </h1>
                <p className="mt-2 text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Instalación, mantenimiento y reparación de sistemas de
                  climatización con tecnología de punta y garantía certificada.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Solicitar Presupuesto
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400 transition-all"
                  >
                    Ver Servicios
                  </Button>
                </div>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 relative">
                <div className="relative w-full max-w-md h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-gray-100">
                  <Image
                    src="/technician-working.jpg"
                    alt="Técnico instalando aire acondicionado"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-400/10 pointer-events-none" />
                  <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-100 via-transparent to-blue-100 opacity-60 blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Vercel-style cards */}
        <AnimatedSection className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Nuestros Servicios
              </h2>
              <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
              <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
                Soluciones integrales adaptadas a cada necesidad de
                climatización
              </p>
            </div>

            {/* Grid with Vercel-style cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                      <AirVent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Instalación Profesional
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Instalación certificada de sistemas split, multisplit y
                    centralizados con máxima eficiencia.
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
                    <div className="p-3 rounded-lg bg-purple-100 text-purple-600">
                      <Tool className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Mantenimiento Preventivo
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Programas de mantenimiento para maximizar la vida útil y
                    eficiencia de tus equipos.
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
                    <div className="p-3 rounded-lg bg-pink-100 text-pink-600">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Reparación Especializada
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Diagnóstico preciso y reparación de averías con repuestos
                    originales y garantía.
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
        <AnimatedSection className="py-20 bg-gray-50">
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
                  En Servisplit combinamos tecnología avanzada con un equipo de
                  técnicos altamente cualificados para ofrecer soluciones de
                  climatización adaptadas a cada necesidad.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: "500+", label: "Clientes satisfechos" },
                    { value: "10+", label: "Años de experiencia" },
                    { value: "24/7", label: "Servicio de emergencia" },
                    { value: "100%", label: "Garantía en trabajos" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                    >
                      <p className="text-2xl font-bold text-blue-600">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                  >
                    Conoce nuestro equipo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300"
                  >
                    Ver certificaciones
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/team-working.jpg"
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
        <AnimatedSection className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
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
                Nos distinguimos por nuestro compromiso con la excelencia y la
                satisfacción total del cliente
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <CheckCircle className="h-8 w-8" />,
                  title: "Calidad Certificada",
                  description:
                    "Todos nuestros servicios incluyen garantía y utilizamos materiales de primera calidad.",
                },
                {
                  icon: <ThermometerSnowflake className="h-8 w-8" />,
                  title: "Expertos Certificados",
                  description:
                    "Técnicos con certificación oficial y formación continua en las últimas tecnologías.",
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Respuesta Rápida",
                  description:
                    "Servicio de urgencias 24/7 con tiempos de respuesta mínimos.",
                },
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: "Atención Personal",
                  description:
                    "Asesoramiento personalizado para encontrar la mejor solución a tu medida.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Details */}
        <AnimatedSection className="py-20 bg-white">
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
                      src="/installation.jpg"
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
                      src="/maintenance.jpg"
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
                      src="/repair.jpg"
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

        {/* Testimonials */}
        <AnimatedSection className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
                Testimonios
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Lo que dicen nuestros clientes
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-6 rounded-full" />
              <p className="mt-6 text-lg text-gray-600">
                La satisfacción de nuestros clientes es nuestra mejor carta de
                presentación
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className="py-28 bg-gradient-to-br from-[#fefcff] via-[#f4f8ff] to-[#fff9f9]">
          <div className="container px-4 md:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800 font-josefin">
                Contacte con nosotros
              </h2>
              <div className="w-24 h-1.5 mx-auto mt-4 mb-6 rounded-full bg-gradient-to-r from-[#C8A0F2] via-[#BFDDFF] to-[#FFBEDD] shadow-md" />
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                Estamos a su disposición para resolver cualquier duda o
                solicitud.
              </p>
            </div>

            <div className="max-w-4xl mx-auto px-4">
              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-3xl">
                <ContactCard />
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
