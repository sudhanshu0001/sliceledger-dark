import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import enterpriseBlockchainImg from "../../../assets/images/enterpriseBlockchain.png"
import "../../../assets/style/pages/landing/_enterpriseBlockchain.scss"
const EnterpriseBlockchain = () => {
    return (
        <>
            <section className='enterprise-blockchain-wrap'>
                <Container fluid>
                    <div className='enterprise-blockchain-inner'>
                        <Row>
                            <Col sm={5} md={5} lg={5} xl={5}>
                                <figure className='enterprise-blockchain-img'>
                                    <Image src={enterpriseBlockchainImg.src} alt='Enterprise Blockchain Img' fluid loading='lazy' />
                                </figure>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <article className='enterprise-blockchain-article'>
                                    <div className='enterprise-blockchain-title'>
                                        <h3 className='h3-title'>The applications of Sliceledger in enterprise Blockchain are virtually limitless</h3>
                                    </div>
                                    <div className='enterprise-blockchain-list'>
                                        <ul>
                                            <li>Supply Chain Management:Enhance transparency and traceability in supply chain operations.</li>
                                            <li>VFinancial Services:Streamline payment processing, trade settlements, and asset tokenization.</li>
                                            <li>Healthcare:Securely manage patient data, ensuring privacy and integrity.</li>
                                            <li>Government:Improve record-keeping and data verification for government services.</li>
                                            <li>Energy:Optimize energy trading and grid management.</li>
                                        </ul>
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

export default EnterpriseBlockchain