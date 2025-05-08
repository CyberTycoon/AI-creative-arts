"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeaturedVideoProps {
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
}

export default function FeaturedVideo({ title, description, thumbnailUrl, videoUrl }: FeaturedVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </div>

      <div className="aspect-video w-full overflow-hidden rounded-lg">
        {!isPlaying ? (
          <div
            className="relative h-full w-full cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            onClick={() => setIsPlaying(true)}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button
                size="lg"
                className="rounded-full bg-white/20 p-6 backdrop-blur-sm hover:bg-white/30"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="h-8 w-8 text-white" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
          </div>
        ) : (
          <video
            className="h-full w-full"
            src={videoUrl}
            title={title}
            controls
            autoPlay
          />
        )}
      </div>
    </div>
  )
}