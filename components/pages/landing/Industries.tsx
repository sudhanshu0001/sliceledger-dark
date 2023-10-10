import React from 'react'
import "../../../assets/style/pages/landing/_industries.scss";
import { Container, Row, Col } from "react-bootstrap"
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
                            <Col sm={10} md={10} lg={10} xl={10}>
                                <div className="industries-card">fhdgzf</div>
                            </Col>
                            <Col sm={2} md={2} lg={2} xl={2}>
                                <div className="industries-card">fdhfhg</div>
                            </Col>
                        </Row>
                    </div>
                    <div className='industries-card-wrap'>
                        <Row>
                            <Col sm={7} md={7} lg={7} xl={7}>
                                <div className="industries-card">fhdgzf</div>
                            </Col>
                            <Col sm={5} md={5} lg={5} xl={5}>
                                <div className="industries-card">fdhfhg</div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Industries