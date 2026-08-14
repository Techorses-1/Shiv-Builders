import React from 'react'
import ResidentialHero from './ResidentialHero/ResidentialHero'
import GalleryShowcase from './GalleryShowcase/GalleryShowcase'
import AchievementsSlider from './Slider/AchievementsSlider'
import ResidentialCtaSection from './ResidentialCtaSection/ResidentialCtaSection'
import ResidentialShowcase from './ResidentialShowcase/ResidentialShowcase'
import Commercial from './Commercial/Commercial'
import Government from './Government/Government'
import Industrial from './Industrial/Industrial'

const Residential = () => {
    return (
        <>
            <ResidentialHero />
            {/* <GalleryShowcase/> */}
            <AchievementsSlider/>
            <Commercial/>
            <Industrial/>
            <Government/>
            <ResidentialCtaSection/>
            <ResidentialShowcase/>
        </>
    )
}

export default Residential