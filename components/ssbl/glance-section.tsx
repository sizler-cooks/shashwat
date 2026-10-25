import { ArrowUpRight } from "lucide-react"
import { capabilityTags, glanceItems, glanceStatement } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

export function GlanceSection() {
  return (
    <section className="section glance-section" id="glance" aria-labelledby="glance-title">
      <div className="container">
        <div className="glance-heading-row">
          <Reveal direction="up" className="section-heading section-heading--wide glance-heading">
            <p className="eyebrow">SSBL at a glance</p>
            <h2 className="section-title" id="glance-title">
              At a Glance
            </h2>
          </Reveal>
          <Reveal direction="right" className="glance-statement">
            <p>{glanceStatement}</p>
          </Reveal>
        </div>

        <dl className="glance-stats">
          {glanceItems.map((item, index) => (
            <Reveal key={item.label} direction="pop" delay={index * 55} className="glance-stat-wrap">
              <dt className="glance-stat__label">{item.label}</dt>
              <dd className="glance-stat__value">{item.value}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="glance-capabilities">
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
      </div>
    </section>
  )
}
