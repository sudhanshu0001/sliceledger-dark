import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import unlockingImg from "../../../assets/images/unlocking.png"
import "../../../assets/style/pages/landing/_unlocking.scss"
const UnlockingEnterprise = () => {
    return (
        <>
            <section className='unlocking-enterprise-wrap'>
                <Container fluid>
                    <div className='unlocking-enterprise-inner'>
                        <Row>
                            <Col sm={5} md={5} lg={5} xl={5}>
                                <figure className='unlocking-img'>
                                    <Image src={unlockingImg.src} alt='unlocking Img' fluid loading='lazy' />
                                </figure>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <article className='unlocking-article'>
                                    <div className='unlocking-title'>
                                        <h3 className='h3-title'>Unlocking Enterprise Potential with Sliceledger</h3>
                                        <p>Welcome to the future of enterprise Blockchain solutions. Sliceledger has emerged as a powerful tool for businesses seeking to leverage the benefits of Blockchain technology while addressing scalability and performance challenges.</p>
                                        <p className='unlocking-about'>Blockchain technology has captured the imagination of enterprises across industries, promising transparency, security, and efficiency. However, as enterprises increasingly adopt Blockchain solutions, they face a common hurdle: scalability. Traditional Blockchain, like Ethereum, struggle to handle the high transaction volumes and complex smart contracts demanded by enterprise applications.</p>
                                    </div>
                                </article>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default UnlockingEnterprise