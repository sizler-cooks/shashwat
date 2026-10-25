import { AboutSection } from "@/components/ssbl/about-section"
import { AdditionalProjectsSection } from "@/components/ssbl/additional-projects-section"
import { GlanceSection } from "@/components/ssbl/glance-section"
import { HeroSection } from "@/components/ssbl/hero-section"
import { PrestigiousProjects } from "@/components/ssbl/prestigious-projects"
import { ServicesSection } from "@/components/ssbl/services-section"
import { SiteFooter } from "@/components/ssbl/site-footer"
import { SiteHeader } from "@/components/ssbl/site-header"
import { TrustedBy } from "@/components/ssbl/trusted-by"
import { WhyChooseUs } from "@/components/ssbl/why-choose-us"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <WhyChooseUs />
        <AboutSection />
        <GlanceSection />
        <ServicesSection />
        <PrestigiousProjects />
        <AdditionalProjectsSection />
        <TrustedBy />
      </main>
      <SiteFooter />
    </>
  )
}
