import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GalleryCarousel } from "@/components/ssbl/gallery-carousel"
import { Reveal } from "@/components/ssbl/reveal"
import { additionalProjects } from "@/lib/ssbl-data"

export function AdditionalProjectsSection() {
  const projectCount = additionalProjects.length

  return (
    <section
      className="section additional-projects-section"
      id="additional-projects"
      aria-labelledby="additional-projects-title"
    >
      <div className="container">
        <div className="additional-projects__heading">
          <Reveal direction="up" className="section-heading section-heading--wide">
            <p className="eyebrow">More from our portfolio</p>
            <h2 className="section-title" id="additional-projects-title">
              Additional Projects
            </h2>
            <p className="section-intro">
              Browse {projectCount} more projects. Swipe or use the arrows to explore, then open a card for its location, status, and details.
            </p>
          </Reveal>
          <Reveal direction="up" delay={120} className="additional-projects__action">
            <Link className="text-link" href="/gallery">
              View all {projectCount} projects <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <GalleryCarousel />
      </div>
    </section>
  )
}
