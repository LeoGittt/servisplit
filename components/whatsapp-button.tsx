"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageSquare, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  useEffect(() => {
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Mostrar el tooltip después de 3 segundos
    const tooltipTimer = setTimeout(() => {
      setIsTooltipVisible(true)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleCloseTooltip = () => {
    setIsTooltipVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 w-64 animate-fade-in">
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6" onClick={handleCloseTooltip}>
            <X className="h-4 w-4" />
          </Button>
          <p className="text-gray-800 mb-2">¿Necesita ayuda con su aire acondicionado?</p>
          <p className="text-gray-600 text-sm">Contáctenos por WhatsApp para una respuesta rápida.</p>
        </div>
      )}
      <Link href="https://wa.me/34900123456" target="_blank" rel="noopener noreferrer" className="block">
        <Button className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center animate-bounce-slow">
          <MessageSquare className="h-8 w-8" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </Button>
      </Link>
    </div>
  )
}
