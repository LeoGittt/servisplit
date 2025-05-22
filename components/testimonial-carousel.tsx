"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "Propietaria de Restaurante",
    content:
      "Excelente servicio. Instalaron el sistema de aire acondicionado en nuestro restaurante de manera rápida y profesional. El equipo funciona perfectamente y el ambiente es muy agradable para nuestros clientes.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Gerente de Oficina",
    content:
      "Contratamos a Servisplit para el mantenimiento anual de nuestros equipos de aire acondicionado en la oficina. Su trabajo fue impecable y notamos una mejora significativa en el rendimiento de los equipos.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Propietaria de Vivienda",
    content:
      "Tuve un problema con mi aire acondicionado y Servisplit lo solucionó en tiempo récord. El técnico fue muy amable y profesional, explicándome todo el proceso. Totalmente recomendable.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Antonio Sánchez",
    role: "Director de Hotel",
    content:
      "Llevamos años confiando en Servisplit para el mantenimiento de todos los equipos de climatización de nuestro hotel. Su servicio es siempre puntual, eficiente y de alta calidad.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-12 w-12 text-blue-600 mb-6 rotate-180" />
                    <p className="text-xl text-gray-700 mb-8 italic">{testimonial.content}</p>
                    <div className="flex flex-col items-center">
                      <div className="relative h-20 w-20 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-xl">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full h-12 w-12 border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Anterior</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => {
              setAutoplay(false)
              setActiveIndex(index)
            }}
            className={`w-3 h-3 p-0 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-300"}`}
          >
            <span className="sr-only">Testimonio {index + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full h-12 w-12 border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>
    </div>
  )
}
