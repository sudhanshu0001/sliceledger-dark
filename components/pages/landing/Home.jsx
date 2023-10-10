
import React from 'react'
import Banner from './Banner'
import Counter from './Counter'
import Empowering from './empowering/Empowering'
import Navigating from './navigating/Navigating'
import UnlockingEnterprise from './UnlockingEnterprise'
import Enter from './Enter'
import EnterpriseBlockchain from './EnterpriseBlockchain'
import SliceVideo from './SliceVideo'
import Industries from './Industries'
import NewsLetter from './NewsLetter'
const Home = () => {
  return (
    <>
      <Banner />
      <Counter />
      <Empowering />
      <section className='border-wrap'>
        <Navigating />
        <UnlockingEnterprise />
        <Enter />
        <EnterpriseBlockchain />
      </section>
      <SliceVideo />
      <Industries />
      <NewsLetter />
    </>
  )
}

export default Home