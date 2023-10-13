"use client"
import React from 'react'
import CountUp from 'react-countup';
import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/style/pages/landing/_counter.scss"
const Counter = () => {
    return (
        <>
            <section className='counter-wrap'>
                <Container fluid>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={3}>
                            <div className='counter-inner-wrap'>
                                <h6 className='h6-title'>Min. cost per transaction</h6>
                                <div className='counter-number'>
                                    <CountUp start={0} end={0.000018} decimals={6} decimal="." />
                                </div>
                                <div className='counter-shape'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={3}>
                            <div className='counter-inner-wrap'>
                                <h6 className='h6-title'>Block Time</h6>
                                <div className='counter-number'>
                                    <CountUp start={0} end={2} decimals={1} decimal="." />
                                </div>
                                <div className='counter-shape'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={3}>
                            <div className='counter-inner-wrap'>
                                <h6 className='h6-title'>Block Size</h6>
                                <div className='counter-number'>
                                    <CountUp start={0} end={1700} decimals={0} decimal="." />
                                </div>
                                <div className='counter-shape'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={3}>
                            <div className='counter-inner-wrap'>
                                <h6 className='h6-title'>Transaction Time</h6>
                                <div className='counter-number'>
                                    <CountUp start={0} end={1.5} decimals={1} decimal="." />
                                </div>
                                <div className='counter-shape'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Counter