import React from 'react'
import ImageParallax from './components/ImageParallax'
import MaskCursor from './components/MaskCursor'
import NavbarSticky from './components/NavbarSticky'
import FuzzyOverlayExample from './components/FuzzyOverlayExample'
import { ParallaxContent } from './components/ParallaxContent'
import  VelocityText  from './components/VelocityText'
import StickySection from './components/StickySection'
import FooterText  from './components/FooterText'
import  {Journey}  from './components/Journey'

const Home = () => {
  return (
    <div>
        <NavbarSticky />
        <FuzzyOverlayExample />
        <VelocityText />
        <div className='border-b-2 border-white' />
        <Journey />
        <FooterText />
        {/* <StickySection /> */}
        {/* <FuzzyOverlayExample /> */}
        {/* <ImageParallax /> */}
        {/* <MaskCursor /> */}
    </div>
  )
}

export default Home