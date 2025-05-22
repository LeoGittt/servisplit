import Link from "next/link"
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactCard() {
  return (
    <Card className="shadow-xl border-none overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600/30 p-3 rounded-full mt-1">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">Teléfono</h4>
                <Link href="tel:+34900123456" className="text-blue-200 hover:text-white transition-colors text-lg">
                  +34 900 123 456
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/30 p-3 rounded-full mt-1">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">WhatsApp</h4>
                <Link
                  href="https://wa.me/34900123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors text-lg"
                >
                  +34 900 123 456
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/30 p-3 rounded-full mt-1">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">Email</h4>
                <Link
                  href="mailto:info@servisplit.com"
                  className="text-blue-200 hover:text-white transition-colors text-lg"
                >
                  info@servisplit.com
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/30 p-3 rounded-full mt-1">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">Dirección</h4>
                <p className="text-blue-200 text-lg">Calle Principal 123, 28001 Madrid</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600/30 p-3 rounded-full mt-1">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-xl mb-1">Horario</h4>
                <p className="text-blue-200 text-lg">Lunes a Viernes: 9:00 - 20:00</p>
                <p className="text-blue-200 text-lg">Sábados: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <CardContent className="p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">¿Cómo podemos ayudarle?</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Estamos a su disposición para resolver cualquier duda o solicitud. Contáctenos por cualquiera de nuestros
            canales y le atenderemos lo antes posible.
          </p>

          <div className="space-y-4">
            <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="tel:+34900123456">
                <Phone className="mr-2 h-5 w-5" /> Llamar ahora
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full py-6 text-lg border-blue-200 text-blue-700 hover:bg-blue-50"
              asChild
            >
              <Link href="https://wa.me/34900123456" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> Contactar por WhatsApp
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full py-6 text-lg border-blue-200 text-blue-700 hover:bg-blue-50"
              asChild
            >
              <Link href="mailto:info@servisplit.com">
                <Mail className="mr-2 h-5 w-5" /> Enviar email
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
