import {
  Clock3,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"
import { strengths } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

const strengthIcons: LucideIcon[] = [
  Network,
  Lightbulb,
  ShieldCheck,
  Leaf,
  Clock3,
  HeartHandshake,
]

export function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-choose-us" aria-labelledby="why-title">
      <div className="container">
        <Reveal direction="up" className="section-heading section-heading--wide">
          <p className="eyebrow">Our Strengths</p>
          <h2 className="section-title" id="why-title">
            Why Choose Us
          </h2>
          <p className="section-intro">
            Driven by a commitment to quality, safety, and innovation, we provide end-to-end project execution, from design and engineering to installation, commissioning, and maintenance.
          </p>
        </Reveal>

        <div className="strength-grid">
          {strengths.map((strength, index) => {
            const Icon = strengthIcons[index]
            return (
              <Reveal
                key={strength.title}
                direction="pop"
                delay={(index % 3) * 65}
                className="strength-card-wrap"
              >
                <article className="strength-card">
                  <div className="strength-card__topline">
                    <span className="strength-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="strength-card__icon">
                      <Icon aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
