import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">About AI Creative Arts</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Our mission is to showcase the transformative power of AI in creative expression
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-6">
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
                <path d="M12 2c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2z" />
                <path d="M12 9c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2s-2-.9-2-2v-7c0-1.1.9-2 2-2z" />
                <path d="M17 12h-2" />
                <path d="M9 12H7" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="mt-2">Bridging technology and creativity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p>
              At AI Creative Arts, we believe that artificial intelligence is not just a tool, but a collaborative
              partner in the creative process. Our platform is dedicated to exploring and showcasing the innovative ways
              AI is transforming the landscape of creative expression across various disciplines.
            </p>
            <p>
              We aim to bridge the gap between technology and art, demonstrating how AI can enhance human creativity
              rather than replace it. Through our curated content, we hope to inspire artists, designers, musicians,
              writers, and filmmakers to embrace AI as a means to expand their creative horizons.
            </p>
          </div>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 md:order-2">
            <h2 className="text-2xl font-bold">Our Approach</h2>
            <p>
              We take a multidisciplinary approach to exploring AI in creative arts, focusing on four key areas: visual
              art, music, writing, and film. By examining how AI is being used in each of these domains, we provide a
              comprehensive overview of the current state of AI in creative expression and its future potential.
            </p>
            <p>
              Our content is designed to be both informative and accessible, catering to both tech enthusiasts and
              creative professionals. We believe that understanding the capabilities and limitations of AI is essential
              for harnessing its full potential in creative endeavors.
            </p>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg md:order-1 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center p-6">
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
                <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Our Approach</h3>
                  <p className="mt-2">Multidisciplinary exploration of AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Dr. Alex Chen", role: "AI Researcher" },
              { name: "Maya Johnson", role: "Creative Director" },
              { name: "James Wilson", role: "Technical Lead" },
              { name: "Sophia Lee", role: "Content Strategist" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-16 w-16 text-primary opacity-50"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Project Objectives</h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Showcase Innovation</h3>
              <p>Highlight cutting-edge applications of AI in various creative fields</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Educate and Inform</h3>
              <p>Provide accessible information about AI technologies and their creative applications</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Inspire Collaboration</h3>
              <p>Encourage collaboration between technologists and creative professionals</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="font-bold">Explore Ethical Considerations</h3>
              <p>Address the ethical implications of AI in creative expression</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-accent p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Join Our Community</h2>
          <p className="mb-6 text-muted-foreground">
            Connect with other artists, technologists, and enthusiasts interested in the intersection of AI and creative
            arts
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
