import React from 'react'
import "../../../assets/style/pages/landing/_industries.scss";
import { Container, Row, Col, Image } from "react-bootstrap"
import dots from "../../../assets/images/dots.png"
const Industries = () => {
    return (
        <>
            <section className='industries-wrap'>
                <Container fluid>
                    <div className='industries-title'>
                        <h2 className='h2-title'>Versatility and Flexibility across Various Industries</h2>
                        <p>Unlocking the Power of Roll-ups</p>
                    </div>
                    <div className='industries-card-wrap'>
                        <Row>
                            <Col sm={12} md={4} lg={4} xl={3}>
                                <div className="industries-card">
                                    <article className="industries-article">
                                        <h3 className="h3-title">DeFi Innovations</h3>
                                        <p>Increase the power of DeFi platforms with Slice Ledger's swift transactions and optimized execution.</p>
                                    </article>
                                </div>
                            </Col>
                            <Col sm={12} md={4} lg={4} xl={3}>
                                <div className="industries-card">
                                    <article className="industries-article">
                                        <h3 className="h3-title">Gaming Evolution</h3>
                                        <p>Elevate gaming experiences with lightning-fast in-game transactions and immersive gameplay.</p>
                                    </article>
                                </div>
                            </Col>
                            <Col sm={12} md={2} lg={2} xl={2}>
                            <figure className="industries-card-img">
                                    <Image src={dots.src} alt="dots" fluid loading="lazy"/>
                                </figure>
                            </Col>
                        </Row>
                    </div>
                    <div className='industries-card-wrap'>
                        <Row>
                        <Col sm={12} md={4} lg={4} xl={3}>
                                <div className="industries-card bottom-industries">
                                    <article className="industries-article">
                                        <h3 className="h3-title">NFT Revolution</h3>
                                        <p>Create vibrant NFT marketplaces with swift asset transfers, transforming digital art trading.</p>
                                    </article>
                                </div>
                            </Col>
                            <Col sm={12} md={4} lg={4} xl={3}>
                                <div className="industries-card bottom-industries">
                                    <article className="industries-article">
                                        <h3 className="h3-title">Supply Chain Transparency</h3>
                                        <p>Revolutionize supply chain management with Slice Ledger's Ethereum L2 solution.</p>
                                    </article>
                                </div>
                            </Col>
                            <Col sm={12} md={2} lg={2} xl={2}>
                                <figure className="industries-card-img bottom-industries img">
                                    <Image src={dots.src} alt="dots" fluid loading="lazy"/>
                                </figure>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Industries