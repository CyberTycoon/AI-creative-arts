import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedVideo from "@/components/featured-video"
import AIImageCard from "@/components/ai-image-card"

export default function FilmPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">AI in Film & Video</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Exploring how artificial intelligence is transforming filmmaking and video production
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="AI film production visualization"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">The Future of Filmmaking</h2>
            <p>
              Artificial intelligence is revolutionizing the film and video industry, from pre-production planning to
              post-production effects. AI algorithms can now assist with scriptwriting, storyboarding, visual effects,
              editing, and even acting through deepfake technology.
            </p>
            <p>
              These technologies are not replacing human filmmakers but rather providing new tools for creative
              expression and streamlining production workflows. The result is an exciting new frontier in filmmaking
              that combines human creativity with machine intelligence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Key AI Film Technologies</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M15.24 2H8.76a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h6.48a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" />
                    <path d="M10 16V8l5 4-5 4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Visual Effects</h3>
                <p className="mt-2 text-muted-foreground">
                  AI-powered tools can generate realistic visual effects, from weather conditions to entire digital
                  environments, reducing the need for expensive practical effects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M8 13h2" />
                    <path d="M8 17h2" />
                    <path d="M14 13h2" />
                    <path d="M14 17h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Script Analysis</h3>
                <p className="mt-2 text-muted-foreground">
                  AI can analyze scripts for pacing, emotional impact, and commercial potential, helping filmmakers
                  refine their storytelling.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    <path d="M12 3a6 6 0 0 1-9 9 9 9 0 0 0 9-9Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Deepfake Technology</h3>
                <p className="mt-2 text-muted-foreground">
                  AI can create realistic digital doubles of actors, enabling new creative possibilities and potentially
                  reducing production costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M4 11v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
                    <path d="M4 11V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4" />
                    <path d="M2 15h20" />
                    <path d="M10 7V3" />
                    <path d="M14 7V3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Automated Editing</h3>
                <p className="mt-2 text-muted-foreground">
                  AI-powered editing tools can analyze footage and suggest cuts based on pacing, continuity, and
                  emotional impact, streamlining the post-production process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <FeaturedVideo
            title="AI Film in Action"
            description="Watch how AI is transforming filmmaking and video production"
            thumbnailUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            videoUrl="https://youtu.be/w3XS900kg1U?si=Yx-Ij-Yd-Ij-Yd-I"
          />
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">AI-Generated Film Examples</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <AIImageCard
              imageUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80"
              title="Neural Cinematography"
              description="AI-generated visual compositions that push the boundaries of traditional filmmaking"
            />
            <AIImageCard
              imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
              title="Algorithmic VFX"
              description="Special effects created by neural networks trained on blockbuster films"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured AI Film Tools</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg border">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80"
                  alt="AI visual effects software interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">RunwayML</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered creative tools for video editing, visual effects, and content generation.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="AI script analysis software interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">ScriptBook</h3>
                <p className="text-sm text-muted-foreground">
                  AI platform that analyzes scripts to predict audience engagement and box office potential.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border">
              <div className="relative h-[200px]">
                <Image
                  src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1749&q=80"
                  alt="AI video editing software interface"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold">Flawless</h3>
                <p className="text-sm text-muted-foreground">
                  AI technology that can modify actors' lip movements to match dubbed dialogue in foreign languages.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-accent p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Explore More Creative AI Applications</h2>
          <p className="mb-6 text-muted-foreground">Discover how AI is transforming other creative fields</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/visual-art">
              <Button variant="outline">AI in Visual Art</Button>
            </Link>
            <Link href="/music">
              <Button variant="outline">AI in Music</Button>
            </Link>
            <Link href="/writing">
              <Button variant="outline">AI in Writing</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
