import React from 'react'
import "../../../../assets/style/pages/landing/_navigating.scss"
import { Container, Row, Col, Image } from "react-bootstrap"
import navigatingImg from "../../../../assets/images/navigating.png"
import NavigatingContent from './NavigatingContent'
function Navigating() {
    return (
        <>
            <section className='navigating-wrap'>
                    <Container fluid>
                        <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <article className='navigating-article'>
                                    <div className='navigating-title'>
                                        <h3 className='h3-title'>Navigating the Slice Ledger Experience</h3>
                                        <p>At their core, Sliceledger are an off-chain scaling technique that allows most transactions to be processed off the main Blockchain, which reduces congestion and fees. Here's a simplified breakdown of how they work</p>
                                    </div>
                                    <div className='navigating-details'>
                                        <NavigatingContent />
                                    </div>
                                </article>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <figure className='navigating-img-wrap'>
                                    <Image src={navigatingImg.src} alt='navigating' fluid loading='lazy' />
                                </figure>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </>
    )
}

export default Navigating