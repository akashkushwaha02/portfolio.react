import React from 'react'
import ImageSection from '../components/ImageSection'
import Title from '../components/Title'

function About () {
    return(
        <div className="About">
            <Title title={'About me'} span={'About me span'} />
            <ImageSection />
        </div>
    )
}

export default About;