import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { capabilityTags, glanceItems, glanceStatement, prestigiousProjects } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

export function GlanceSection() {
  const featuredProject = prestigiousProjects[0]

  return (
    <section className="section glance-section" id="glance" aria-labelledby="glance-title">
      <div className="container">
        <Reveal direction="up" className="section-heading section-heading--wide">
          <p className="eyebrow">SSBL at a glance</p>
          <h2 className="section-title" id="glance-title">
            At a Glance
          </h2>
        </Reveal>

        <div className="glance-stats">
          {glanceItems.map((item, index) => (
            <Reveal key={item.label} direction="pop" delay={index * 55} className="glance-stat-wrap">
              <div className="glance-stat">
                <span className="glance-stat__value">{item.value}</span>
                <span className="glance-stat__label">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="glance-bottom">
          <div className="glance-summary">
            <p>{glanceStatement}</p>
            <div className="capability-tags" aria-label="Core capabilities">
              {capabilityTags.map((tag, index) => (
                <Reveal key={tag} direction="up" delay={(index % 3) * 45}>
                  <a className="capability-tag" href="#services" aria-label={`Explore ${tag} services`}>
                    {tag} <ArrowUpRight aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal direction="right" className="glance-photo-wrap">
            <figure className="glance-photo">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.name} project photograph`}
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
              />
              <figcaption className="glance-photo__caption">
                <span>Prestigious Project {featuredProject.number}</span>
                <strong>{featuredProject.name}</strong>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
