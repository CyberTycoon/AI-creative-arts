import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 px-4 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">AI Creative Arts</h3>
            <p className="text-sm text-muted-foreground">
              Exploring the innovative applications of AI in digital media and creative arts.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Features</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/visual-art" className="text-muted-foreground hover:text-foreground">
                  AI in Visual Art
                </Link>
              </li>
              <li>
                <Link href="/music" className="text-muted-foreground hover:text-foreground">
                  AI in Music
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-muted-foreground hover:text-foreground">
                  AI in Writing
                </Link>
              </li>
              <li>
                <Link href="/film" className="text-muted-foreground hover:text-foreground">
                  AI in Film
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AI Creative Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
