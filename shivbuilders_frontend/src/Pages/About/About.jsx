import React from 'react'
import AboutHero from './AboutHero/AboutHero'
import Founders from './Founders/Founders'
import ConceptToCreation from '../Home/ConceptToCreation/ConceptToCreation'
import Showcase from '../Home/Showcase/Showcase'
import OurJourney from './Journey/OurJourney'
import AboutCta from './AboutCta/AboutCta'
import NewCtaSection from './NewCta/NewCtaSection'
import AboutImageText from './AboutImageText/AboutImageText'
import OurTeam from './OurTeam/OurTeam'
import TeamSection from './TeamSection/TeamSection'


const About = () => {
  return (
    <>

    <AboutHero/>
    <Founders/>
    <TeamSection/>
     <OurJourney/>
     <AboutImageText/>
    
    <AboutCta/>
    <Showcase/>
    <NewCtaSection/> 
    
    <ConceptToCreation/>
    {/* <OurTeam/>  */}
   
   
    </>
  )
}

export default About