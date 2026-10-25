"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, MapPin, Phone } from "lucide-react"
import { contact, footerStatement } from "@/lib/ssbl-data"

const socialMarks = [
  { name: "Instagram", mark: "ig" },
  { name: "Facebook", mark: "f" },
  { name: "LinkedIn", mark: "in" },
]

function SocialMarks() {
  return (
    <div className="social-marks" aria-label="Social profiles not provided">
      {socialMarks.map((social) => (
        <span
          className="social-mark"
          key={social.name}
          role="img"
          aria-label={`${social.name} profile not provided`}
          title={`${social.name} profile not provided`}
        >
          {social.mark}
        </span>
      ))}
    </div>
  )
}

export function SiteFooter() {
  const pathname = usePathname()
  const homeSection = (section: string) =>
    pathname === "/" ? `#${section}` : `/#${section}`

  const footerLinks = [
    { label: "Home", href: homeSection("home") },
    { label: "About", href: homeSection("about") },
    { label: "Services", href: homeSection("services") },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: homeSection("contact") },
  ]

  return (
    <>
      <section className="contact-strip" id="contact" aria-labelledby="contact-title">
        <div className="container contact-strip__inner">
          <div className="contact-strip__heading">
            <p className="eyebrow eyebrow--light">Contact</p>
            <h2 id="contact-title">Talk to SSBL</h2>
            <p>Shashwat Samya Buildcon Private Limited</p>
          </div>
          <div className="contact-strip__details">
            <a className="contact-method" href={contact.phoneHref}>
              <span className="contact-method__icon"><Phone aria-hidden="true" /></span>
              <span><small>Telephone</small><strong>{contact.phone}</strong></span>
            </a>
            <a className="contact-method" href={contact.emailHref}>
              <span className="contact-method__icon"><Mail aria-hidden="true" /></span>
              <span><small>Email</small><strong>{contact.email}</strong></span>
            </a>
            <address className="contact-method contact-method--address">
              <span className="contact-method__icon"><MapPin aria-hidden="true" /></span>
              <span><small>Address</small><strong>{contact.address}</strong></span>
            </address>
            <div className="contact-method contact-method--social">
              <span><small>Social</small><strong>Profiles not provided</strong></span>
              <SocialMarks />
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer__main">
          <div className="footer-brand">
            <Link href="/" className="footer-brand__logo">
              <Image
                src="/assets/ssbl_logo.png"
                alt="Shashwat Samya Buildcon Private Limited"
                width={200}
                height={80}
              />
            </Link>
            <p>{footerStatement}</p>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <h3>Company</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><Link href={homeSection("contact")}>Contact</Link></li>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={contact.emailHref}>{contact.email}</a></li>
            </ul>
          </div>

          <div className="footer-column footer-column--social">
            <h3>Social</h3>
            <SocialMarks />
            <p>Social profile links have not been provided.</p>
          </div>
        </div>
        <div className="container site-footer__bottom">
          <span>{"Shashwat Samya Buildcon Private Limited"}</span>
          <span>Quality. Safety. Innovation.</span>
        </div>
      </footer>
    </>
  )
}
