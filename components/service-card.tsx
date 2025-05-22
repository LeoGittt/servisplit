import type { ReactNode } from "react"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl hover:translate-y-[-10px] border-t-4 border-t-blue-600 h-full">
      <CardHeader className="flex flex-col items-center text-center pt-8">
        <div className="bg-blue-50 p-4 rounded-full mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mt-2">{title}</h3>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-8 text-lg">{description}</p>
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center pt-6">
        <Button className="bg-blue-600 hover:bg-blue-700">Más Información</Button>
      </CardFooter>
    </Card>
  )
}
