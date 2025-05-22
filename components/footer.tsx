import Link from "next/link"
import { AirVent, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Linkedin } from "lucide-react"

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
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-blue-800/50 p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-blue-800/50 p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-blue-800/50 p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-blue-800/50 p-3 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
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
                  href="#testimonios"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Testimonios</span>
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
                <span className="text-blue-200">Calle Principal 123, 28001 Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200">900 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200">info@servisplit.com</span>
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
        </div>
      </div>
    </footer>
  )
}
