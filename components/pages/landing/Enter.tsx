import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import enterImg from "../../../assets/images/enter.png"
import "../../../assets/style/pages/landing/_enter.scss"
const Enter = () => {
    return (
        <>
            <section className='enter-wrap'>
                <Container fluid>
                    <div className='enter-inner'>
                        <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <article className='enter-article'>
                                    <div className='enter-title'>
                                        <h3 className='h3-title'>Enter Sliceledger</h3>
                                        <p>Sliceledger offer an innovative solution to the scalability dilemma. These layer 2 scaling solutions enable enterprise Blockchain to process a significantly higher number of transactions per second, ensuring smooth and cost-effective operations.</p>
                                    </div>
                                    <div className='enter-list'>
                                        <ul>
                                            <li>Data Offloading: Most transactions are processed off-chain, reducing congestion on the main Blockchain and minimizing gas costs.</li>
                                            <li>Validation:A selected group of validators, often comprised of trusted enterprise entities, verifies the transactions off-chain to ensure accuracy and security.</li>
                                            <li>Optimistic Processing: Transactions are initially assumed to be valid, accelerating their processing and reducing latency.</li>
                                            <li>Challenge and Resolution:During a challenge period, any discrepancies or issues with transactions can be raised and resolved, maintaining security.</li>
                                            <li>Finality:Once transactions have passed the challenge period and proven their validity, they are added to the main Blockchain for ultimate transparency.</li>
                                        </ul>
                                    </div>
                                </article>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <figure className='enter-img'>
                                    <Image src={enterImg.src} alt='enter Img' fluid loading='lazy' />
                                </figure>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Enter