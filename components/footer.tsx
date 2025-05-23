import Link from "next/link"
import { AirVent, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <AirVent className="h-8 w-8 text-blue-300" />
              <span className="text-2xl font-bold">Servisplit</span>
            </Link>
            <p className="text-blue-200 mb-8 text-base">
              Expertos en instalación, mantenimiento y reparación de aires acondicionados con la máxima calidad y
              garantía.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Servicios</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Sobre Nosotros</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#ventajas"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Ventajas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#detalles"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Detalles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Contacto</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-blue-200">Albardón, San Juan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200">2644646434</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200">marioamarfil25@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Boletín Informativo</h3>
            <p className="text-blue-200 mb-6">
              Suscríbase a nuestro boletín para recibir las últimas noticias y ofertas especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Su email"
                className="bg-blue-800/50 border-blue-700/50 text-white placeholder:text-blue-400 focus-visible:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-500 whitespace-nowrap">Suscribirse</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800/50 mt-12 pt-8 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Servisplit. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Creado por Leonel</p>
        </div>
      </div>
    </footer>
  )
}
