"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChevronRight, Sparkles } from "lucide-react"
import Image from "next/image"


export default function PortfolioSection() {
  const isHovered = false;

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-sm text-white transition-transform duration-300 hover:scale-105">
          <Sparkles size={16} className="" />
          <span>Our Portfolio</span>
        </div>
        <h2 className="mx-auto max-w-4xl text-4xl font-semibold  sm:text-5xl md:text-6xl">
          Explore the projects where we played, experimented, and built something amazing.
        </h2>
      </div>

      {/* Portfolio Item */}
      <div
        className="grid grid-cols-1 gap-4 place-items-center w-full"
      >
        <Card className="rounded-[14px] overflow-hidden bg-white p-0 max-w-4xl">
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Minimalist Tree Illustration.jpeg"
                alt="Frostify ice cream branding showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-wrap gap-2">
              {["BRANDING", "PACKAGING", "STRATEGY", "DIGITAL PRESENCE"].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md transition-all duration-300 hover:bg-rose-100"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-rose-600">
              Frostify - Redefining Ice Cream Cool
            </h3>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <ExpandDetailsLink />
          </CardFooter>
        </Card>
        <Card className="rounded-[14px] overflow-hidden bg-white p-0 max-w-xl">
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Minimalist Tree Illustration.jpeg"
                alt="Frostify ice cream branding showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-wrap gap-2">
              {["BRANDING", "PACKAGING", "STRATEGY", "DIGITAL PRESENCE"].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md transition-all duration-300 hover:bg-rose-100"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-rose-600">
              Frostify - Redefining Ice Cream Cool
            </h3>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <ExpandDetailsLink />
          </CardFooter>
        </Card>
        <Card className="rounded-[14px] overflow-hidden bg-white p-0 max-w-xl">
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Minimalist Tree Illustration.jpeg"
                alt="Frostify ice cream branding showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-wrap gap-2">
              {["BRANDING", "PACKAGING", "STRATEGY", "DIGITAL PRESENCE"].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md transition-all duration-300 hover:bg-rose-100"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-rose-600">
              Frostify - Redefining Ice Cream Cool
            </h3>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <ExpandDetailsLink />
          </CardFooter>
        </Card>
        <Card className="rounded-[14px] overflow-hidden bg-white p-0 max-w-xl">
          <CardHeader className="p-0">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Minimalist Tree Illustration.jpeg"
                alt="Frostify ice cream branding showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="flex flex-wrap gap-2">
              {["BRANDING", "PACKAGING", "STRATEGY", "DIGITAL PRESENCE"].map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md transition-all duration-300 hover:bg-rose-100"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-rose-600">
              Frostify - Redefining Ice Cream Cool
            </h3>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <ExpandDetailsLink />
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

function ExpandDetailsLink() {
  return (
    <div className="relative w-full overflow-hidden">
      <a
        href="#"
        className="group flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-[#ff2609] to-[#ff4747] px-6 py-3 text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#ff5d47]/30"
      >
        <span className="font-medium">Read Case Study</span>
        <div className="relative">
          <ChevronRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-y-10 group-hover:opacity-0" />
          <ChevronRight className="absolute right-0 top-0 h-5 w-5 -translate-y-10 opacity-0 transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100" />
        </div>
        <span className="absolute bottom-0 left-0 h-1 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
      </a>
    </div>
  )
}

