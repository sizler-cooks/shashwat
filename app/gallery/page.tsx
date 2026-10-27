import type { Metadata } from "next"
import { GalleryCarousel } from "@/components/ssbl/gallery-carousel"
import { SiteFooter } from "@/components/ssbl/site-footer"
import { SiteHeader } from "@/components/ssbl/site-header"
import { Reveal } from "@/components/ssbl/reveal"

export const metadata: Metadata = {
  title: "Additional Projects | SSBPL",
  description: "Additional projects from Shashwat Samya Buildcon Private Limited.",
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="gallery-hero" aria-labelledby="gallery-title">
          <div className="container gallery-hero__inner">
            <Reveal direction="left">
              <p className="eyebrow eyebrow--light">Project gallery</p>
              <h1 id="gallery-title">Additional Projects</h1>
              <p>Eleven additional projects from the SSBPL portfolio.</p>
            </Reveal>
          </div>
        </section>
        <section className="section gallery-section" aria-labelledby="gallery-section-title">
          <div className="container">
            <Reveal direction="up" className="section-heading section-heading--wide">
              <p className="eyebrow">Additional work</p>
              <h2 className="section-title" id="gallery-section-title">
                Project gallery
              </h2>
              <p className="section-intro">
                Browse all eleven projects, then open a card to see its available details.
              </p>
            </Reveal>
            <GalleryCarousel />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
