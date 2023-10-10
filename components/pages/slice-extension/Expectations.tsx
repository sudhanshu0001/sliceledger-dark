import React from 'react'
import "../../../assets/style/pages/slice-extension/_expectations.scss"
import { Col, Container, Row } from 'react-bootstrap'
const Expectations = () => {
    return (
        <>
            <section className='slice-expectations-wrap'>
                <Container fluid>
                    <div className='slice-expectations-title'>
                        <h3 className='h3-title'>Expectations from Slice <span>Wallet Extension</span> </h3>
                    </div>
                    <div className='expectations-card-wrap'>
                        <Row>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <div className='expectations-card'>
                                    <article className='expectations-article'>
                                        <h3 className='h3-title'>Seamless Trading of Assets</h3>
                                        <p>Our Wallet Extension allows users to trade their digital assets effortlessly.</p>
                                    </article>
                                </div>
                            </Col>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <div className='expectations-card'>
                                    <article className='expectations-article'>
                                        <h3 className='h3-title'>Single Platform for all assets</h3>
                                        <p>There is no need to explore multiple platforms because our platform is designed for all kinds of digital assets.</p>
                                    </article>
                                </div>
                            </Col>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <div className='expectations-card'>
                                    <article className='expectations-article'>
                                        <h3 className='h3-title'>Private Key will always be present on the device</h3>
                                        <p>We guarantee that no one will have access to your private key despite this being a wallet extension platform.</p>
                                    </article>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Expectations