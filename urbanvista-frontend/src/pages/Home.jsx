import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import FeaturedProperties from '../components/home/FeaturedProperties'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import StatsSection from '../components/home/StatsSection'
import CTASection from '../components/home/CTASection'
import FooterSection from '../components/home/FooterSection'

function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      <Hero />

      <Services />

      <FeaturedProperties />

      <WhyChooseUs />

      <StatsSection />
      <Testimonials />

      <FAQ />


      <CTASection />

      <FooterSection/>
    </main>
  )
}

export default Home