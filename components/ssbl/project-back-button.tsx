import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function ProjectBackButton() {
  return (
    <Link className="back-link" href="/#projects">
      <ChevronLeft aria-hidden="true" /> Back to projects
    </Link>
  )
}
