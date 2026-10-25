"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"
import { additionalProjects, type AdditionalProject } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

function ProjectCard({
  project,
  clone,
  onOpen,
}: {
  project: AdditionalProject
  clone: boolean
  onOpen: (project: AdditionalProject) => void
}) {
  return (
    <button
      className="gallery-card"
      type="button"
      aria-label={`View details for ${project.name}`}
      tabIndex={clone ? -1 : undefined}
      onClick={() => onOpen(project)}
    >
      <span className={`gallery-card__image${project.imageFit === "contain" ? " gallery-card__image--contain" : ""}`}>
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.name} project image`}
          fill
          sizes="(max-width: 760px) 82vw, (max-width: 1100px) 46vw, 360px"
        />
        <span className={`project-status${project.status === "Completed" ? " project-status--complete" : " project-status--active"}`}>
          {project.status}
        </span>
      </span>
      <span className="gallery-card__body">
        <span className="gallery-card__location"><MapPin aria-hidden="true" /> {project.location}</span>
        <span className="gallery-card__title">{project.name}</span>
        <span className="gallery-card__work">{project.natureOfWork}</span>
        <span className="gallery-card__action">View project details <ChevronRight aria-hidden="true" /></span>
      </span>
    </button>
  )
}

export function GalleryCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const firstSetRef = useRef<HTMLDivElement>(null)
  const loopWidthRef = useRef(0)
  const autoPausedRef = useRef(false)
  const resumeTimerRef = useRef<number | undefined>(undefined)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [activeProject, setActiveProject] = useState<AdditionalProject | null>(null)
  const [loopReady, setLoopReady] = useState(false)

  const normalizeScroll = useCallback(() => {
    const viewport = viewportRef.current
    const width = loopWidthRef.current
    if (!viewport || width <= 0) return

    if (viewport.scrollLeft >= width * 2) {
      viewport.scrollLeft -= width
    } else if (viewport.scrollLeft < width) {
      viewport.scrollLeft += width
    }
  }, [])

  const pauseAuto = useCallback(() => {
    autoPausedRef.current = true
    if (resumeTimerRef.current !== undefined) {
      window.clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = undefined
    }
  }, [])

  const resumeAutoSoon = useCallback(() => {
    if (resumeTimerRef.current !== undefined) {
      window.clearTimeout(resumeTimerRef.current)
    }
    resumeTimerRef.current = window.setTimeout(() => {
      autoPausedRef.current = false
      resumeTimerRef.current = undefined
    }, 1800)
  }, [])

  useEffect(() => {
    const viewport = viewportRef.current
    const firstSet = firstSetRef.current
    if (!viewport || !firstSet) return

    const measure = () => {
      const width = firstSet.getBoundingClientRect().width
      if (width <= 0) return
      loopWidthRef.current = width
      setLoopReady(true)
      if (viewport.scrollLeft < width || viewport.scrollLeft >= width * 2) {
        viewport.scrollLeft = width
      }
    }

    measure()
    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null
    resizeObserver?.observe(firstSet)
    window.addEventListener("resize", measure)

    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let lastFrame = 0

    const tick = (time: number) => {
      const viewport = viewportRef.current
      if (!motionPreference.matches && !autoPausedRef.current && viewport) {
        const elapsed = lastFrame ? Math.min(time - lastFrame, 32) : 16
        viewport.scrollLeft += elapsed * 0.025
      }
      lastFrame = time
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => {
      window.cancelAnimationFrame(frame)
      if (resumeTimerRef.current !== undefined) {
        window.clearTimeout(resumeTimerRef.current)
      }
    }
  }, [])

  const openProject = (project: AdditionalProject) => {
    setActiveProject(project)
    window.requestAnimationFrame(() => {
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal()
      }
    })
  }

  const closeProject = () => dialogRef.current?.close()

  const moveByCard = (direction: -1 | 1) => {
    pauseAuto()
    resumeAutoSoon()
    const viewport = viewportRef.current
    if (!viewport) return
    const firstCard = viewport.querySelector<HTMLElement>(".gallery-card")
    const cardGap = firstCard?.parentElement
      ? Number.parseFloat(window.getComputedStyle(firstCard.parentElement).gap) || 18
      : 18
    const distance = (firstCard?.offsetWidth ?? 340) + cardGap
    viewport.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    })
  }

  const projects = additionalProjects

  return (
    <>
      <div
        className="gallery-carousel"
        role="region"
        aria-label="Additional projects gallery"
        aria-roledescription="carousel"
        data-loop-ready={loopReady}
      >
        <div className="gallery-carousel__controls">
          <p><span>11</span> additional projects</p>
          <div className="gallery-carousel__arrows">
            <button
              className="carousel-arrow"
              type="button"
              onClick={() => moveByCard(-1)}
              aria-label="Show previous projects"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              className="carousel-arrow"
              type="button"
              onClick={() => moveByCard(1)}
              aria-label="Show next projects"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <Reveal direction="up" className="gallery-carousel__reveal">
          <div
            className="gallery-carousel__viewport"
            ref={viewportRef}
            tabIndex={0}
            aria-label="Scroll through all additional projects"
            onScroll={normalizeScroll}
            onPointerEnter={pauseAuto}
            onPointerLeave={resumeAutoSoon}
            onPointerDown={pauseAuto}
            onPointerUp={resumeAutoSoon}
            onWheel={() => {
              pauseAuto()
              resumeAutoSoon()
            }}
            onTouchStart={pauseAuto}
            onTouchEnd={resumeAutoSoon}
            onFocusCapture={pauseAuto}
            onBlurCapture={resumeAutoSoon}
          >
            <div className="gallery-carousel__track">
              {[0, 1, 2].map((copy) => (
                <div
                  className="gallery-carousel__set"
                  key={`gallery-set-${copy}`}
                  ref={copy === 0 ? firstSetRef : undefined}
                  aria-hidden={copy === 1 ? undefined : true}
                >
                  {projects.map((project) => (
                    <ProjectCard
                      key={`${copy}-${project.name}`}
                      project={project}
                      clone={copy !== 1}
                      onOpen={openProject}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <dialog
        className="gallery-dialog"
        ref={dialogRef}
        aria-labelledby="gallery-dialog-title"
        onClose={() => setActiveProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProject()
        }}
      >
        {activeProject ? (
          <div className="gallery-dialog__surface">
            <button
              className="gallery-dialog__close"
              type="button"
              onClick={closeProject}
              aria-label="Close project details"
            >
              <X aria-hidden="true" />
            </button>
            <div className="gallery-dialog__image">
              <Image
                src={activeProject.image}
                alt={activeProject.imageAlt ?? `${activeProject.name} project image`}
                fill
                sizes="(max-width: 760px) 92vw, 680px"
              />
            </div>
            <div className="gallery-dialog__content">
              <p className="eyebrow">Additional project</p>
              <h2 id="gallery-dialog-title">{activeProject.name}</h2>
              <p className="gallery-dialog__location"><MapPin aria-hidden="true" /> {activeProject.location}</p>
              <div className="gallery-dialog__fields">
                <div>
                  <span>Status</span>
                  <strong>{activeProject.status}</strong>
                </div>
                <div>
                  <span>Nature of work</span>
                  <strong>{activeProject.natureOfWork}</strong>
                </div>
                {activeProject.description ? (
                  <div className="gallery-dialog__description">
                    <span>Description</span>
                    <p>{activeProject.description}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}
