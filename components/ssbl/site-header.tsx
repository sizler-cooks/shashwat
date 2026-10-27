"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const homeSection = (section: string) =>
    pathname === "/" ? `#${section}` : `/#${section}`

  const links = [
    { label: "Home", href: homeSection("home") },
    { label: "About", href: homeSection("about") },
    { label: "Services", href: homeSection("services") },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: homeSection("contact") },
  ]

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link
          className="site-header__brand"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/ssbl_logo_transparent.png"
            alt="SSBPL logo"
            width={200}
            height={80}
            priority
          />
        </Link>

        <button
          className="site-header__menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          <ul className="site-nav__list">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={
                    link.label === "Gallery" && pathname === "/gallery"
                      ? "page"
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
