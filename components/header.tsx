"use client"

import { useState } from "react"
import Link from "next/link"
import { AirVent, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <AirVent className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Servisplit
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "/", label: "Inicio" },
            { href: "#servicios", label: "Servicios" },
            { href: "#nosotros", label: "Nosotros" },
            { href: "#testimonios", label: "Testimonios" },
            { href: "#contacto", label: "Contacto" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10" />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
              <Phone className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">900 123 456</span>
          </div>
          <Button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            Solicitar Presupuesto
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
          <span className="sr-only">Menú</span>
        </Button>

        {/* Mobile Menu */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetContent side="right" className="w-[85vw] sm:w-[350px] px-0">
            <div className="flex flex-col h-full">
              <div className="px-6 pb-6 border-b border-gray-100">
                <Link 
                  href="/" 
                  className="flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <AirVent className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Servisplit
                  </span>
                </Link>
              </div>
              
              <nav className="flex flex-col px-6 py-4 gap-1">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "#servicios", label: "Servicios" },
                  { href: "#nosotros", label: "Nosotros" },
                  { href: "#testimonios", label: "Testimonios" },
                  { href: "#contacto", label: "Contacto" }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto px-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-6 p-3 bg-blue-50 rounded-lg">
                  <div className="p-1.5 bg-blue-100 rounded-full">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">900 123 456</span>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg shadow-lg hover:shadow-blue-500/20 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicitar Presupuesto
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}