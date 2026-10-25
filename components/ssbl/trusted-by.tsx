import Image from "next/image"
import type { CSSProperties } from "react"
import { clients, technologyPartners } from "@/lib/ssbl-data"
import { Reveal } from "@/components/ssbl/reveal"

function ClientsGroup({ clone = false }: { clone?: boolean }) {
  return (
    <div
      className="trust-marquee__group trust-marquee__group--clients"
      aria-hidden={clone || undefined}
    >
      {clients.map((client, index) => (
        <div
          className="trust-item trust-item--client"
          key={`${clone ? "clone-" : ""}${client}`}
          style={{ "--item-index": index } as CSSProperties}
        >
          {client}
        </div>
      ))}
    </div>
  )
}

function PartnersGroup({ clone = false }: { clone?: boolean }) {
  return (
    <div
      className="trust-marquee__group trust-marquee__group--partners"
      aria-hidden={clone || undefined}
    >
      {technologyPartners.map((partner, index) => (
        <div
          className="trust-item trust-item--partner"
          key={`${clone ? "clone-" : ""}${partner.name}`}
          style={{ "--item-index": index } as CSSProperties}
        >
          <Image src={partner.image} alt={partner.name} width={220} height={100} />
        </div>
      ))}
    </div>
  )
}

export function TrustedBy() {
  return (
    <section className="section trusted-section" id="trusted-by" aria-labelledby="trusted-title">
      <div className="container">
        <Reveal direction="up" className="section-heading section-heading--center">
          <p className="eyebrow">Partnerships</p>
          <h2 className="section-title" id="trusted-title">
            Trusted By
          </h2>
          <p className="section-intro">
            25 client organizations and 12 technology partners.
          </p>
        </Reveal>

        <div className="trust-row">
          <h3 id="clients-label">Clients</h3>
          <Reveal direction="right" className="trust-marquee trust-marquee--clients">
            <div className="trust-marquee__viewport" role="group" aria-labelledby="clients-label">
              <div className="trust-marquee__track">
                <ClientsGroup />
                <ClientsGroup clone />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="trust-row trust-row--partners">
          <h3 id="partners-label">Partners</h3>
          <Reveal direction="left" className="trust-marquee trust-marquee--partners">
            <div className="trust-marquee__viewport" role="group" aria-labelledby="partners-label">
              <div className="trust-marquee__track">
                <PartnersGroup />
                <PartnersGroup clone />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
