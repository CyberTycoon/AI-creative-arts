import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedVideo from "@/components/featured-video"
import AIImageCard from "@/components/ai-image-card"

export default function WritingPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">AI in Creative Writing</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Exploring how artificial intelligence is transforming storytelling and content creation
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="AI writing and storytelling visualization"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">The Written Word, Reimagined</h2>
            <p>
              Artificial intelligence is transforming the landscape of creative writing, from poetry and fiction to
              journalism and marketing content. AI language models can now generate coherent, contextually relevant text
              that mimics various writing styles and formats.
            </p>
            <p>
              These technologies are not replacing human writers but rather providing new tools for creative expression,
              collaboration, and overcoming writer's block. The result is an exciting new frontier in writing that
              combines human creativity with machine intelligence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Key AI Writing Technologies</h2>
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
                    <path d="M17 6.1H3" />
                    <path d="M21 12.1H3" />
                    <path d="M15.1 18H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Large Language Models</h3>
                <p className="mt-2 text-muted-foreground">
                  Advanced neural networks trained on vast text datasets can generate human-like text, from short
                  stories and poems to essays and articles.
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
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Content Optimization</h3>
                <p className="mt-2 text-muted-foreground">
                  AI tools can analyze and optimize written content for readability, engagement, SEO, and target
                  audience preferences.
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
                    <path d="m3 16 4 4 4-4" />
                    <path d="M7 20V4" />
                    <path d="m21 8-4-4-4 4" />
                    <path d="M17 4v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Style Transfer</h3>
                <p className="mt-2 text-muted-foreground">
                  AI can transform text from one writing style to another, allowing writers to experiment with different
                  voices and tones.
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Automated Editing</h3>
                <p className="mt-2 text-muted-foreground">
                  AI-powered tools can identify and correct grammar, spelling, and style issues, as well as suggest
                  improvements for clarity and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <FeaturedVideo
            title="AI Writing in Action"
            description="Watch how AI is transforming storytelling and content creation"
            thumbnailUrl="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            videoUrl="https://youtu.be/aTRWpGm7kCY?si=Yx-Ij-Yd-Ij-Yd-I"
          />
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">AI-Generated Writing Examples</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <AIImageCard
              imageUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              title="Digital Storytelling"
              description="AI-generated short stories that explore new narrative possibilities"
            />
            <AIImageCard
              imageUrl="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              title="Algorithmic Poetry"
              description="Poems created by neural networks trained on classic and contemporary poetry"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">AI-Generated Writing Samples</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-bold">Short Story Excerpt</h3>
                <p className="italic text-muted-foreground">
                  "The rain fell in sheets, washing away the last traces of daylight as Maria stood at the edge of the
                  pier. The letter in her hand was soggy now, the ink bleeding into abstract patterns that somehow
                  seemed more honest than the words they had formed. She hadn't expected him to return, not really, but
                  the confirmation of her suspicions brought no satisfaction. Only the hollow echo of what might have
                  been..."
                </p>
                <p className="mt-2 text-sm">
                  Generated by GPT-4 with the prompt: "Write a melancholic opening paragraph about a woman receiving bad
                  news in the rain."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 font-bold">Poem</h3>
                <div className="italic text-muted-foreground">
                  <p>Digital dreams in silicon minds,</p>
                  <p>Algorithms weaving tales untold.</p>
                  <p>Between human thought and code entwined,</p>
                  <p>New narratives unfold.</p>
                  <p>&nbsp;</p>
                  <p>We teach machines to speak our truths,</p>
                  <p>They mirror back our hopes and fears.</p>
                  <p>In this strange dance of age and youth,</p>
                  <p>The boundary disappears.</p>
                </div>
                <p className="mt-2 text-sm">
                  Generated by an AI poetry model with the prompt: "Write a poem about the relationship between humans
                  and AI in creative writing."
                </p>
              </CardContent>
            </Card>
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
            <Link href="/film">
              <Button variant="outline">AI in Film</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
