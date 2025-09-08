'use client';
import Header from'../components/common/Header';
 import Footer from'../components/common/Footer';
 import HeroSection from'./HeroSection';
 import ServicesSection from'./ServicesSection';
 import StorySection from'./StorySection';
 import PartnersSection from'./PartnersSection';
 import ProjectsSection from'./ProjectsSection';
 import FeaturesSection from'./FeaturesSection';
 import AwardsSection from'./AwardsSection';
 import PricingSection from'./PricingSection';
 import CTASection from'./CTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StorySection />
        <PartnersSection />
        <ProjectsSection />
        <FeaturesSection />
        <AwardsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}