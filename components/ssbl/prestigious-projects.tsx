import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, MapPin } from "lucide-react"
import { prestigiousProjects, type PrestigiousProject } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

function ProjectRow({ project, index }: { project: PrestigiousProject; index: number }) {
  const imageDirection = index % 2 === 0 ? "left" : "right"
  const textDirection = index % 2 === 0 ? "right" : "left"
  const isReversed = index % 2 === 1

  return (
    <article className={`project-row${isReversed ? " project-row--reversed" : ""}`}>
      <Reveal direction={imageDirection} className="project-row__visual">
        <div className="project-image">
          <Image
            src={project.image}
            alt={`${project.name} project photograph`}
            fill
            sizes="(max-width: 760px) 100vw, (max-width: 1100px) 48vw, 620px"
            priority={index === 0}
          />
          <span className="project-image__number">{project.number}</span>
        </div>
      </Reveal>

      <Reveal direction={textDirection} className="project-row__content">
        <span className="project-row__eyebrow">Prestigious project {project.number}</span>
        <h3 className="project-row__title">{project.name}</h3>
        {project.location ? (
          <p className="project-row__location">
            <MapPin aria-hidden="true" /> {project.location}
          </p>
        ) : null}
        <p className="project-row__description">{project.description}</p>
        <div className="project-row__scope">
          <h4>Scope of work</h4>
          <ul>
            {project.scope.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          More <ArrowUpRight aria-hidden="true" />
        </Link>
      </Reveal>
    </article>
  )
}

export function PrestigiousProjects() {
  return (
    <section className="section prestigious-section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal direction="up" className="section-heading section-heading--wide">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title" id="projects-title">
            Prestigious Projects
          </h2>
          <p className="section-intro">
            Our legacy of excellence is built upon strategic collaborations with the most esteemed organizations in the industry. These partnerships empower us to harness cutting-edge technologies, unparalleled expertise, and industry best practices, enabling us to engineer and deliver solutions of uncompromising quality. Our distinguished projects include:
          </p>
        </Reveal>

        <div className="project-list">
          {prestigiousProjects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
