import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/ssbl/project-detail"
import { SiteFooter } from "@/components/ssbl/site-footer"
import { SiteHeader } from "@/components/ssbl/site-header"
import { prestigiousProjects } from "@/lib/ssbl-data"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = prestigiousProjects.find((item) => item.slug === slug)

  if (!project) return { title: "Project Not Found | SSBL" }

  return {
    title: `${project.name} | SSBL`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = prestigiousProjects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <>
      <SiteHeader />
      <ProjectDetail project={project} />
      <SiteFooter />
    </>
  )
}
