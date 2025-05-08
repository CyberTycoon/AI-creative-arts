import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MusicPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">AI in Music</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Exploring how artificial intelligence is transforming music creation and production
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-6">
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
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">AI Music Composition</h3>
                  <p className="mt-2">The future of sound creation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">The Sound of AI</h2>
            <p>
              Artificial intelligence is revolutionizing the music industry, from composition and production to
              distribution and recommendation. AI algorithms can now generate original melodies, harmonies, and even
              complete compositions in various styles and genres.
            </p>
            <p>
              These technologies are not replacing human musicians but rather providing new tools for creative
              expression and collaboration. The result is an exciting new frontier in music creation that combines human
              creativity with machine intelligence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Key AI Music Technologies</h2>
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
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Composition</h3>
                <p className="mt-2 text-muted-foreground">
                  Neural networks trained on vast datasets of music can generate original compositions in various
                  styles, from classical to pop to experimental electronic music.
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
                    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
                    <path d="M6 18h12" />
                    <path d="M6 14h12" />
                    <rect width="12" height="4" x="6" y="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Intelligent Production</h3>
                <p className="mt-2 text-muted-foreground">
                  AI-powered tools can assist with mixing, mastering, and sound design, helping producers achieve
                  professional-quality results more efficiently.
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
                    <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
                    <path d="M12 22v-3.5" />
                    <path d="M12 2v3.5" />
                    <path d="M4.2 4.2l2.5 2.5" />
                    <path d="M19.8 4.2l-2.5 2.5" />
                    <path d="M2 12h3.5" />
                    <path d="M18.5 12H22" />
                    <path d="M4.2 19.8l2.5-2.5" />
                    <path d="M19.8 19.8l-2.5-2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Adaptive Music</h3>
                <p className="mt-2 text-muted-foreground">
                  AI can create dynamic soundtracks that adapt to user interactions in games, apps, virtual reality
                  experiences, and other interactive media, enhancing immersion and emotional engagement.
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 12-4-4-4 4" />
                    <path d="M12 16V8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Music Transcription</h3>
                <p className="mt-2 text-muted-foreground">
                  AI algorithms can transcribe music from audio to notation with increasing accuracy, making it easier
                  for musicians to document and share their compositions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">AI Music in Action</h2>
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
                <h3 className="text-xl font-medium">Creating Music with AI: A Demonstration</h3>
                <p className="mt-2 text-sm text-muted-foreground">Click to watch this demonstration video</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured AI Music Tools</h2>
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
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">AI Music Tool {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    {i === 1
                      ? "An AI composer that creates original music for films, games, and commercials."
                      : i === 2
                        ? "AI-powered music creation platform for content creators and producers."
                        : "AI-driven mastering platform that provides professional-quality results."}
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
            <Link href="/writing">
              <Button variant="outline">AI in Writing</Button>
            </Link>
            <Link href="/film">
              <Button variant="outline">AI in Film</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
