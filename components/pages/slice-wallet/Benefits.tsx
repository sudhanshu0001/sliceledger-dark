import React from 'react'
import "../../../assets/style/pages/slice-wallet/_benefits.scss"
import { Col, Container, Row } from 'react-bootstrap'
const Benefits = () => {
    return (
        <>
            <section className='benefits-wrap'>
                <Container fluid>
                    <div className='benefits-title'>
                        <h3 className='h3-title'>The wonderful benefits that the Slice Wallet delivers</h3>
                    </div>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={4}>
                            <article className='benefits-card-article'>
                                <p>It is open-source blockchain software, and developers are constantly trying to improve it.</p>
                            </article>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={4}>
                            <article className='benefits-card-article'>
                                <p>In addition to being straightforward, the user interface also demonstrates excellent intuitive features that can help consumers maintain a seamless and uninterrupted cryptocurrency experience.</p>
                            </article>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={4}>
                            <article className='benefits-card-article'>
                                <p>The platform provides dependable, 24/7 customer support that consistently works.</p>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Benefits