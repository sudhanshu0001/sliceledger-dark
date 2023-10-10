import React from 'react'
import WalletBanner from './WalletBanner'
import OurGoals from './OurGoals'
import Expectations from './Expectations'
import Benefits from './Benefits'
import NewsLetter from '../landing/NewsLetter'

const SliceExtension = () => {
    return (
        <>
            <WalletBanner />
            <section className='border-wrap'>
                <OurGoals />
                <Expectations />
                <Benefits />
            </section>
            <NewsLetter />
        </>
    )
}

export default SliceExtension