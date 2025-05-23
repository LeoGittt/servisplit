"use client"

import { useState } from "react"
import Link from "next/link"
import { AirVent, Menu, Phone, X, PenToolIcon, Calendar, AlertCircle } from "lucide-react"

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
        <nav className="hidden md:flex items-center gap-4">
          {[
            { href: "/", label: "Inicio", icon: <AirVent className="h-4 w-4" /> },
            { href: "#servicios", label: "Servicios", icon: <PenToolIcon className="h-4 w-4" /> },
            { href: "#nosotros", label: "Nosotros", icon: <Calendar className="h-4 w-4" /> },
            
            { href: "#contacto", label: "Contacto", icon: <Phone className="h-4 w-4" /> }
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 relative"
            >
              {item.icon}
              <span>{item.label}</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 rounded-lg transition-all duration-300 group-hover:opacity-100 opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-lg transition-all duration-300 group-hover:opacity-100 opacity-0" />
            </Link>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
              <Phone className="h-4 w-4 text-blue-600" />
            </div>
            <a href="https://wa.me/+542644646434" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            +54 264 4646434
          </a>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <a href="https://wa.me/+542644646434?text=Hola%2C+me+gustar%C3%ADa+solicitar+un+presupuesto+para+servicios+de+climatizaci%C3%B3n." target="_blank" rel="noopener noreferrer">
              Solicitar Presupuesto
            </a>
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
                  <span className="text-lg font-medium text-gray-700">+54 264 4646434</span>
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