import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-full w-full text-white opacity-10"
              >
                <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" />
                <line x1="7" x2="7" y1="2" y2="22" />
                <line x1="17" x2="17" y1="2" y2="22" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <line x1="2" x2="7" y1="7" y2="7" />
                <line x1="2" x2="7" y1="17" y2="17" />
                <line x1="17" x2="22" y1="17" y2="17" />
                <line x1="17" x2="22" y1="7" y2="7" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">AI in Filmmaking</h3>
                  <p className="mt-2">Revolutionizing visual storytelling</p>
                </div>
              </div>
            </div>
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
          <h2 className="mb-6 text-2xl font-bold">AI Film in Action</h2>
          <div className="mx-auto max-w-3xl">
            <div className="aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto mb-4 text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                <h3 className="text-xl font-medium">Creating Films with AI: A Demonstration</h3>
                <p className="mt-2 text-sm text-muted-foreground">Click to watch this demonstration video</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured AI Film Tools</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <div className="relative h-[200px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-24 w-24 text-primary opacity-50"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" />
                      <line x1="7" x2="7" y1="2" y2="22" />
                      <line x1="17" x2="17" y1="2" y2="22" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <line x1="2" x2="7" y1="7" y2="7" />
                      <line x1="2" x2="7" y1="17" y2="17" />
                      <line x1="17" x2="22" y1="17" y2="17" />
                      <line x1="17" x2="22" y1="7" y2="7" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">AI Film Tool {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    {i === 1
                      ? "AI-powered creative tools for video editing, visual effects, and content generation."
                      : i === 2
                        ? "AI platform that analyzes scripts to predict audience engagement and box office potential."
                        : "AI technology that can modify actors' lip movements to match dubbed dialogue in foreign languages."}
                  </p>
                </div>
              </div>
            ))}
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
