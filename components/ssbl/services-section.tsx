import {
  ArrowUpRight,
  Building2,
  Cloud,
  Cpu,
  HardHat,
  Leaf,
  Network,
  Power,
  Radio,
  ShieldCheck,
  Sparkles,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { serviceGroups } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

const serviceIcons: LucideIcon[][] = [
  [Building2, ShieldCheck, Video, Radio, HardHat, Leaf, Power, Wrench],
  [Cpu, Sparkles, Network, Radio, Cloud, Leaf, ArrowUpRight, ShieldCheck],
]

export function ServicesSection() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal direction="up" className="section-heading section-heading--wide">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title" id="services-title">
            Services
          </h2>
        </Reveal>

        <div className="service-groups">
          {serviceGroups.map((group, groupIndex) => (
            <section
              className="service-group"
              key={group.title}
              aria-labelledby={`service-group-${groupIndex}`}
            >
              <Reveal direction={groupIndex === 0 ? "left" : "right"} className="service-group__heading">
                <span className="service-group__index">0{groupIndex + 1}</span>
                <h3 id={`service-group-${groupIndex}`}>{group.title}</h3>
                <span className="service-group__line" aria-hidden="true" />
              </Reveal>
              <div className="service-grid">
                {group.services.map((service, index) => {
                  const Icon = serviceIcons[groupIndex][index]
                  return (
                    <Reveal
                      key={service.name}
                      direction="up"
                      delay={(index % 4) * 45}
                      className="service-card-wrap"
                    >
                      <article className="service-card">
                        <div className="service-card__topline">
                          <span className="service-card__number">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="service-card__icon">
                            <Icon aria-hidden="true" />
                          </span>
                        </div>
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                      </article>
                    </Reveal>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
