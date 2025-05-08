import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeaturedVideo from "@/components/featured-video"

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
            <Image
              src="/about.jpg"
              alt="AI Creative Arts team working on projects"
              fill
              className="object-cover"
            />
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

        <div className="mb-12">
          <FeaturedVideo
            title="Our Mission and Vision"
            description="Learn about our approach to AI in creative arts"
            thumbnailUrl="https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            videoUrl="https://youtu.be/aD6jYCI7u4o?si=1-p20rMG_bi8CrD3"
          />
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
            <Image
              src="/approach.jpg"
              alt="AI and human collaboration in creative process"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Alex Chen",
                role: "AI Researcher",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
              },
              {
                name: "Maya Johnson",
                role: "Creative Director",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
              },
              {
                name: "James Wilson",
                role: "Technical Lead",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
              },
              {
                name: "Sophia Lee",
                role: "Content Strategist",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
              },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Team Member - ${member.role}`}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
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
