import Image from "next/image"
import { Check, MapPin } from "lucide-react"
import type { PrestigiousProject } from "@/lib/ssbl-data"
import { ProjectBackButton } from "@/components/ssbl/project-back-button"
import { Reveal } from "@/components/ssbl/reveal"

export function ProjectDetail({ project }: { project: PrestigiousProject }) {
  return (
    <main className="project-detail-page" id="main-content">
      <div className="container project-detail-shell">
        <ProjectBackButton />
        <div className="project-detail-layout">
          <Reveal direction="left" className="project-detail__visual">
            <div className="project-detail__image">
              <Image
                src={project.image}
                alt={`${project.name} project photograph`}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 54vw"
              />
            </div>
          </Reveal>
          <Reveal direction="right" className="project-detail__content">
            <p className="eyebrow">Prestigious project {project.number}</p>
            <h1>{project.name}</h1>
            {project.location ? (
              <p className="project-detail__location">
                <MapPin aria-hidden="true" /> {project.location}
              </p>
            ) : null}
            <p className="project-detail__description">{project.description}</p>
          </Reveal>
        </div>

        <Reveal direction="up" className="project-detail__scope">
          <div>
            <p className="eyebrow">Project information</p>
            <h2>Scope of work</h2>
          </div>
          <ul>
            {project.scope.map((item) => (
              <li key={item}><Check aria-hidden="true" /> {item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </main>
  )
}
