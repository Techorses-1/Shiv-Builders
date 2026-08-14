import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import AboutSection from './AboutSection/AboutSection'
import MissionVision from './MissionVision/MissionVison'
import ConceptToCreation from './ConceptToCreation/ConceptToCreation'
import Services from './Services/Services'
import CTASection from './CTASection/CTASection'
import BannerProjects from './BannerProjects/BannerProjects'
import FloorPlan from './FloorPlan/FloorPlan'
import Showcase from './Showcase/Showcase'
import Testimonials from './Testimonials/Testimonials'


const Home = () => {
  return (
    <>

    <HeroSection/>
    <AboutSection/>
    <MissionVision/>
    <ConceptToCreation/>
    <Services/>
    <CTASection/>
    <Showcase/>
    <BannerProjects/>
    
    
    <Testimonials/>
    <FloorPlan/>
    
    </>
  )
}

export default Home