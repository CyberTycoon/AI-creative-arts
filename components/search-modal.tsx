"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Link from "next/link"

type SearchResult = {
  title: string
  description: string
  url: string
}

const searchData: SearchResult[] = [
  {
    title: "AI in Visual Art",
    description: "Discover how AI is transforming the world of visual arts and design.",
    url: "/visual-art",
  },
  {
    title: "AI Music Composition",
    description: "Learn about AI-powered music creation and composition tools.",
    url: "/music",
  },
  {
    title: "AI in Creative Writing",
    description: "Explore how AI is being used to generate and enhance written content.",
    url: "/writing",
  },
  {
    title: "AI in Film Production",
    description: "See how AI is revolutionizing filmmaking and video production.",
    url: "/film",
  },
  {
    title: "About Our Project",
    description: "Learn about our mission to showcase AI in creative arts.",
    url: "/about",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team to learn more about AI in creative arts.",
    url: "/contact",
  },
]

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([])
      return
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setResults(filteredResults)
  }, [searchQuery])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <div className="flex items-center border-b pb-4">
          <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
          <Input
            type="text"
            placeholder="Search for anything..."
            className="flex h-10 w-full rounded-md border-0 bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          <Button variant="ghost" size="icon" className="ml-2" onClick={() => setSearchQuery("")}>
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        </div>
        <div className="mt-4 max-h-[300px] overflow-y-auto">
          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={onClose}
                  className="block rounded-lg border p-3 hover:bg-accent"
                >
                  <h3 className="font-medium">{result.title}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </Link>
              ))}
            </div>
          ) : searchQuery.trim() !== "" ? (
            <p className="py-4 text-center text-muted-foreground">No results found for &quot;{searchQuery}&quot;</p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
