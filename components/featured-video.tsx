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

  // Function to extract video ID from various YouTube URL formats
  const getYoutubeEmbedUrl = (url: string) => {
    // Handle different YouTube URL formats
    let videoId = ""

    // Full youtube.com URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      videoId = match[2]
    } else {
      // For shorts URLs
      const shortsRegExp = /^.*(youtube.com\/shorts\/)([^#&?]*).*/
      const shortsMatch = url.match(shortsRegExp)

      if (shortsMatch && shortsMatch[2]) {
        videoId = shortsMatch[2]
      }
    }

    // Return the embed URL with autoplay parameter
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`
  }

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
          <iframe
            className="h-full w-full"
            src={getYoutubeEmbedUrl(videoUrl)}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  )
}
