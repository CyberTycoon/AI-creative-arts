import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface AIImageCardProps {
  imageUrl: string
  title: string
  description: string
  className?: string
}

export default function AIImageCard({ imageUrl, title, description, className }: AIImageCardProps) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${className}`}>
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
