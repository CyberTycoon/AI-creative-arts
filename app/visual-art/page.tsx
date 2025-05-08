import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VisualArtPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">AI in Visual Art</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Exploring how artificial intelligence is transforming visual expression
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-6">
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
                <circle cx="12" cy="12" r="10" />
                <path d="m8 12 2 2 4-4" />
                <path d="M12 7v1" />
                <path d="M12 16v1" />
                <path d="M7 12h1" />
                <path d="M16 12h1" />
                <path d="m9 9 .7.7" />
                <path d="m14.3 14.3.7.7" />
                <path d="m14.3 9.7-.7.7" />
                <path d="m9.7 14.3-.7.7" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">AI-Generated Masterpieces</h3>
                  <p className="mt-2">Redefining artistic expression</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">The AI Art Revolution</h2>
            <p>
              Artificial intelligence is revolutionizing the world of visual art, enabling new forms of creative
              expression and challenging our understanding of creativity itself. From generative adversarial networks
              (GANs) to neural style transfer, AI tools are empowering artists to explore new aesthetic territories.
            </p>
            <p>
              These technologies are not replacing human artists but rather augmenting their capabilities, offering new
              tools and techniques that expand the possibilities of visual expression. The result is a fascinating
              collaboration between human creativity and machine intelligence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Key AI Art Technologies</h2>
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
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    <path d="M12 3a6 6 0 0 1-9 9 9 9 0 0 0 9-9Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Generative Adversarial Networks (GANs)</h3>
                <p className="mt-2 text-muted-foreground">
                  GANs consist of two neural networks—a generator and a discriminator—that work together to create new,
                  original images that resemble a training dataset but are entirely novel.
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
                    <circle cx="6" cy="12" r="4" />
                    <circle cx="18" cy="12" r="4" />
                    <line x1="6" y1="12" x2="18" y2="12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Neural Style Transfer</h3>
                <p className="mt-2 text-muted-foreground">
                  This technique applies the style of one image to the content of another, allowing artists to reimagine
                  their work in the style of famous painters or create entirely new aesthetic combinations.
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
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 17 4 4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Text-to-Image Models</h3>
                <p className="mt-2 text-muted-foreground">
                  Models like DALL-E, Midjourney, and Stable Diffusion can generate images from text descriptions,
                  opening up new possibilities for visual storytelling and concept visualization.
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
                    <path d="M21 7v6h-6" />
                    <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI-Enhanced Editing</h3>
                <p className="mt-2 text-muted-foreground">
                  AI-powered tools can automate complex editing tasks, such as removing objects, enhancing resolution,
                  or colorizing black and white images with remarkable accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Featured AI Artworks</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <div className="aspect-square w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto h-16 w-16 text-primary opacity-50"
                    >
                      <path d="M12 2c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2z" />
                      <path d="M12 9c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2s-2-.9-2-2v-7c0-1.1.9-2 2-2z" />
                      <path d="M17 12h-2" />
                      <path d="M9 12H7" />
                    </svg>
                    <p className="mt-2 font-medium">AI Artwork {i + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">AI Art in Action</h2>
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
                <h3 className="text-xl font-medium">Creating Art with AI: A Demonstration</h3>
                <p className="mt-2 text-sm text-muted-foreground">Click to watch this demonstration video</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Ethical Considerations</h2>
          <div className="space-y-4">
            <p>
              As AI art tools become more sophisticated, they raise important ethical questions about authorship,
              originality, and the value of human creativity. Who owns the rights to an AI-generated artwork? How should
              we attribute works created with AI assistance? These questions are still being debated in the art world
              and legal communities.
            </p>
            <p>
              There are also concerns about the potential for AI to replicate and perpetuate biases present in training
              data, as well as questions about the environmental impact of training large AI models. As we continue to
              explore the possibilities of AI in visual art, it's important to consider these ethical dimensions.
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-accent p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Explore More Creative AI Applications</h2>
          <p className="mb-6 text-muted-foreground">Discover how AI is transforming other creative fields</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/music">
              <Button variant="outline">AI in Music</Button>
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
