import { ArrowUpRight } from "lucide-react"
import { company, missionPoints } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

export function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container about-layout">
        <Reveal direction="left" className="about-copy">
          <p className="eyebrow eyebrow--light">About SSBL</p>
          <h2 className="section-title section-title--light" id="about-title">
            About Us
          </h2>
          {company.aboutParagraphs.map((paragraph) => (
            <p className="about-copy__paragraph" key={paragraph.slice(0, 36)}>
              {paragraph}
            </p>
          ))}
          <p className="about-copy__strapline">{company.shortStatement}</p>
        </Reveal>

        <Reveal direction="right" className="about-panels">
          <div className="vision-panel">
            <div className="vision-panel__heading">
              <span className="eyebrow">Our Vision</span>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <p>{company.vision}</p>
          </div>
          <div className="mission-panel">
            <div className="mission-panel__heading">
              <span className="eyebrow eyebrow--light">Our Mission</span>
              <span className="mission-panel__rule" aria-hidden="true" />
            </div>
            <div className="mission-grid">
              {missionPoints.map((point, index) => (
                <div className="mission-point" key={point.title}>
                  <span className="mission-point__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
