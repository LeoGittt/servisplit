"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
            <p className="text-gray-600">
              Gracias por contactar con nosotros. Nos pondremos en contacto con usted lo antes posible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label>Servicio de interés</Label>
              <RadioGroup defaultValue="instalacion">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="instalacion" id="instalacion" />
                  <Label htmlFor="instalacion" className="cursor-pointer">
                    Instalación
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mantenimiento" id="mantenimiento" />
                  <Label htmlFor="mantenimiento" className="cursor-pointer">
                    Mantenimiento
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reparacion" id="reparacion" />
                  <Label htmlFor="reparacion" className="cursor-pointer">
                    Reparación
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="otro" id="otro" />
                  <Label htmlFor="otro" className="cursor-pointer">
                    Otro
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" rows={4} required />
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
