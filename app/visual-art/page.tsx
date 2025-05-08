import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedVideo from "@/components/featured-video"
import AIImageCard from "@/components/ai-image-card"

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
            <Image
              src="/visual-art.jpg"
              alt="AI-generated artwork showcasing visual art possibilities"
              fill
              className="object-cover"
            />
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
            <AIImageCard
              imageUrl="/image.jpg"
              title="Abstract Dreamscape"
              description="AI-generated abstract art exploring the boundaries of imagination"
            />
            <AIImageCard
              imageUrl="/image (1).jpg"
              title="Futuristic Cityscape"
              description="AI-imagined urban environments of tomorrow"
            />
            <AIImageCard
              imageUrl="/image (2).jpg"
              title="Digital Renaissance"
              description="Modern interpretation of classical art styles using neural networks"
            />
            <AIImageCard
              imageUrl="/image (3).jpg"
              title="Surreal Landscape"
              description="AI-generated surrealistic natural environments"
            />
            <AIImageCard
              imageUrl="/image (4).jpg"
              title="Algorithmic Portrait"
              description="Human faces reimagined through the lens of AI"
            />
            <AIImageCard
              imageUrl="/image (5).jpg"
              title="Neural Pattern"
              description="Abstract patterns generated by neural networks"
            />
          </div>
        </div>

        <div className="mb-12">
          <FeaturedVideo
            title="AI Art in Action"
            description="Watch how AI is transforming the visual arts landscape"
            thumbnailUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            videoUrl="https://youtube.com/shorts/NjBY1-f0VrA?si=oJpk-ZcMmk1wwH41"
          />
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
