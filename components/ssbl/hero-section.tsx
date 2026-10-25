import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { company } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

export function HeroSection() {
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
          <div className="hero-showcase__frame">
            <span className="hero-showcase__corner hero-showcase__corner--top" aria-hidden="true" />
            <Image
              className="hero-showcase__logo"
              src="/assets/ssbl_logo.png"
              alt="Official SSBL logo"
              fill
              priority
              sizes="(max-width: 760px) 88vw, 42vw"
            />
            <span className="hero-showcase__corner hero-showcase__corner--bottom" aria-hidden="true" />
          </div>
          <div className="hero-showcase__caption">
            <p>{company.strapline}</p>
            <span>Established {company.established}</span>
          </div>
          <div className="hero-showcase__index" aria-hidden="true">
            SSBL <span> / </span> 01
          </div>
        </Reveal>
      </div>
      <a className="hero-scroll-cue" href="#why-choose-us" aria-label="Scroll to Why Choose Us">
        <span>Scroll to explore</span>
        <ArrowRight aria-hidden="true" />
      </a>
    </section>
  )
}
