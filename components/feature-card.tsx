import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}

export default function FeatureCard({ title, description, icon, link }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-[200px] w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <div className="flex h-full w-full items-center justify-center p-6">
          <div className="h-32 w-32 text-primary">{icon}</div>
        </div>
      </div>
      <CardHeader className="p-5">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-5 pb-2 text-sm">
        <p>Explore how artificial intelligence is revolutionizing this creative field.</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Link href={link} className="w-full">
          <Button className="w-full">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
