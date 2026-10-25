import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { company, prestigiousProjects } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

export function HeroSection() {
  const featuredProject = prestigiousProjects[0]

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-section__grid" aria-hidden="true" />
      <div className="container hero-layout">
        <Reveal direction="left" className="hero-copy">
          <p className="eyebrow eyebrow--light">{company.legalName}</p>
          <h1 className="hero-title" id="hero-title">
            Empowering <span>Smart, Scalable, and Sustainable</span> Technology
          </h1>
          <div className="hero-rule" aria-hidden="true">
            <span />
          </div>
          <p className="hero-subline">{company.heroSubline}</p>
          <div className="hero-actions">
            <a className="button button--accent" href="#projects">
              Explore projects <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--quiet" href="#about">
              About SSBL <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" className="hero-showcase">
          <Link
            className="hero-featured-project"
            href={`/projects/${featuredProject.slug}`}
            aria-label={`View the ${featuredProject.name} project`}
          >
            <div className="hero-showcase__frame hero-showcase__frame--project">
              <Image
                className="hero-showcase__image"
                src={featuredProject.image}
                alt={`${featuredProject.name} project in ${featuredProject.location ?? "India"}`}
                fill
                priority
                sizes="(max-width: 760px) 88vw, 42vw"
              />
              <span className="hero-showcase__badge">Featured project {featuredProject.number}</span>
              <span className="hero-showcase__corner hero-showcase__corner--top" aria-hidden="true" />
              <span className="hero-showcase__corner hero-showcase__corner--bottom" aria-hidden="true" />
            </div>
            <div className="hero-showcase__caption">
              <p>{featuredProject.name}</p>
              <span>{featuredProject.location ?? "Project spotlight"}</span>
            </div>
            <div className="hero-showcase__index" aria-hidden="true">
              SSBL <span> / </span> {featuredProject.number}
            </div>
          </Link>
        </Reveal>
      </div>
      <a className="hero-scroll-cue" href="#why-choose-us" aria-label="Scroll to Why Choose Us">
        <span>Scroll to explore</span>
        <ArrowRight aria-hidden="true" />
      </a>
    </section>
  )
}
