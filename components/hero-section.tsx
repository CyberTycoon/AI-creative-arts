import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">AI in Creative Arts</h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Discover how artificial intelligence is transforming the landscape of creative expression across visual
                art, music, writing, and film.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/visual-art">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Explore AI Art
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full max-w-[450px] overflow-hidden rounded-lg sm:h-[400px] md:h-[450px]">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-full w-full text-white opacity-20"
                >
                  <path d="M12 2c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2z" />
                  <path d="M12 9c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2s-2-.9-2-2v-7c0-1.1.9-2 2-2z" />
                  <path d="M17 12h-2" />
                  <path d="M9 12H7" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">AI-Generated Art</h3>
                    <p className="mt-2">The future of creative expression</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
