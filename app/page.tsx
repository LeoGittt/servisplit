import Image from "next/image"
import { AirVent, CheckCircle, Clock, Phone, ThermometerSnowflake, PenToolIcon as Tool, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ContactCard from "@/components/contact-card"
import ServiceCard from "@/components/service-card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
       
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10" />
          <div className="relative h-[600px] md:h-[700px] w-full">
            <Image
              src="/placeholder.svg?height=700&width=1400"
              alt="Técnico instalando aire acondicionado"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Servisplit</span>
              <span className="block text-blue-200 mt-2">Expertos en Climatización</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl">
              Instalación, mantenimiento y reparación de aires acondicionados con la máxima calidad y garantía
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Solicitar Presupuesto
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Nuestros Servicios
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <AnimatedSection className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 mb-6 rounded-full"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones completas para todas sus necesidades de climatización
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<AirVent className="h-12 w-12 text-blue-600" />}
                title="Instalación"
                description="Instalamos todo tipo de equipos de aire acondicionado, desde splits hasta sistemas centralizados, con profesionalidad y garantía."
                features={["Instalación certificada", "Configuración óptima", "Pruebas de funcionamiento"]}
              />
              <ServiceCard
                icon={<Tool className="h-12 w-12 text-blue-600" />}
                title="Mantenimiento"
                description="Realizamos mantenimientos preventivos para asegurar el correcto funcionamiento y prolongar la vida útil de sus equipos."
                features={["Limpieza de filtros", "Revisión de gas refrigerante", "Optimización del rendimiento"]}
              />
              <ServiceCard
                icon={<Wrench className="h-12 w-12 text-blue-600" />}
                title="Reparación"
                description="Solucionamos cualquier avería en su equipo de aire acondicionado de manera rápida y eficiente."
                features={["Diagnóstico preciso", "Reparación profesional", "Garantía en repuestos"]}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* About Us Section */}
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Sobre Servisplit</h2>
                <div className="w-24 h-1 bg-blue-600 mb-6 rounded-full"></div>
                <p className="text-lg text-gray-600 mb-6">
                  En Servisplit somos especialistas en climatización con más de 10 años de experiencia en el sector.
                  Nuestro equipo de técnicos cualificados está comprometido con ofrecer un servicio de máxima calidad.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Trabajamos con las mejores marcas del mercado y utilizamos tecnología de vanguardia para garantizar
                  soluciones eficientes y duraderas para nuestros clientes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Conocer más
                  </Button>
                  <Button size="lg" variant="outline">
                    Contactar
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Equipo de Servisplit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">¿Por qué elegirnos?</h2>
              <div className="w-24 h-1 bg-blue-300 mx-auto mt-6 mb-6 rounded-full"></div>
              <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
                Nos distinguimos por nuestro compromiso con la excelencia y la satisfacción del cliente
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-blue-800/50 backdrop-blur-sm border-blue-700/50 text-white transform transition-all hover:translate-y-[-10px] hover:shadow-xl">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-blue-300" />
                  <CardTitle className="mt-4 text-xl">Calidad Garantizada</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-base">
                    Todos nuestros servicios cuentan con garantía y utilizamos materiales de primera calidad.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-blue-800/50 backdrop-blur-sm border-blue-700/50 text-white transform transition-all hover:translate-y-[-10px] hover:shadow-xl">
                <CardHeader>
                  <ThermometerSnowflake className="h-12 w-12 text-blue-300" />
                  <CardTitle className="mt-4 text-xl">Experiencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-base">
                    Más de 10 años en el sector nos avalan como expertos en climatización.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-blue-800/50 backdrop-blur-sm border-blue-700/50 text-white transform transition-all hover:translate-y-[-10px] hover:shadow-xl">
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-300" />
                  <CardTitle className="mt-4 text-xl">Rapidez</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-base">
                    Respuesta rápida y eficiente para solucionar sus problemas de climatización.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-blue-800/50 backdrop-blur-sm border-blue-700/50 text-white transform transition-all hover:translate-y-[-10px] hover:shadow-xl">
                <CardHeader>
                  <Phone className="h-12 w-12 text-blue-300" />
                  <CardTitle className="mt-4 text-xl">Atención Personalizada</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-200 text-base">
                    Ofrecemos un trato cercano y personalizado adaptado a sus necesidades.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Details */}
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Detalles de Nuestros Servicios
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 mb-6 rounded-full"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Conozca en detalle cada uno de nuestros servicios profesionales
              </p>
            </div>
            <Tabs defaultValue="instalacion" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="instalacion" className="text-base py-3">
                  Instalación
                </TabsTrigger>
                <TabsTrigger value="mantenimiento" className="text-base py-3">
                  Mantenimiento
                </TabsTrigger>
                <TabsTrigger value="reparacion" className="text-base py-3">
                  Reparación
                </TabsTrigger>
              </TabsList>
              <TabsContent value="instalacion" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-all hover:shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Instalación de aire acondicionado"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Instalación Profesional</h3>
                    <p className="text-gray-600 mb-6 text-lg">Nuestro servicio de instalación incluye:</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Asesoramiento sobre el equipo más adecuado</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Instalación certificada por técnicos cualificados</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Configuración óptima del sistema</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Pruebas de funcionamiento</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Garantía en la instalación</span>
                      </li>
                    </ul>
                    <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
                      Solicitar Presupuesto
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mantenimiento" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-all hover:shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mantenimiento de aire acondicionado"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Mantenimiento Preventivo</h3>
                    <p className="text-gray-600 mb-6 text-lg">Nuestro servicio de mantenimiento incluye:</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Limpieza de filtros y unidades</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Revisión de niveles de gas refrigerante</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Comprobación del sistema eléctrico</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Optimización del rendimiento</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Informe detallado del estado del equipo</span>
                      </li>
                    </ul>
                    <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
                      Contratar Mantenimiento
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reparacion" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-all hover:shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Reparación de aire acondicionado"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Reparación Eficiente</h3>
                    <p className="text-gray-600 mb-6 text-lg">Nuestro servicio de reparación incluye:</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Diagnóstico preciso de la avería</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Presupuesto sin compromiso</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Reparación profesional</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Repuestos originales</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-lg">Garantía en la reparación</span>
                      </li>
                    </ul>
                    <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
                      Solicitar Reparación
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 mb-6 rounded-full"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                La satisfacción de nuestros clientes es nuestro mejor aval
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contacte con nosotros</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 mb-6 rounded-full"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Estamos a su disposición para resolver cualquier duda o solicitud
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ContactCard />
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
