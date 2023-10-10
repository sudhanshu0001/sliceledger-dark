import React from 'react'
import "../../../assets/style/pages/slice-extension/_ourGoals.scss"
import { Container } from 'react-bootstrap'
const OurGoals = () => {
  return (
    <>
      <section className='our-goals-wrap'>
        <Container fluid>
          <div className='our-goals-title'>
            <h3 className='h3-title'>Our Goals</h3>
            <p>We aim to offer a fluid user experience to reduce the complexity of blockchain-based operations and transactions to enable users of all ages to access the Slice platform and engage with the various features it has to offer.</p>
          </div>
        </Container>
      </section>
    </>
  )
}

export default OurGoals