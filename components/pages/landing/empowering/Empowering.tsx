import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import "../../../../assets/style/pages/landing/_empowering.scss"
import EmpoweringImg from "../../../../assets/images/empowering.png"
import EmpoweringContent from './EmpoweringContent';
import shape from "../../../../assets/images/plusshape.png"
// import { AiOutlinePlus } from "react-icons/ai"
// import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus"
import plus from "../../../../assets/images/icons/plus.png"
const Empowering = () => {
    return (
        <>
            <section className='empowering-wrap'>
                <Container fluid>
                    <div className='empowering-title'>
                        <div className='upper-box'></div>
                        <h2 className='h2-title'>Empowering Possibilities with <span>Slice Ledger</span></h2>
                        <p><span></span> Unlocking the Power of Roll-ups</p>
                    </div>
                    <div className='plus-shape'>
                        <Image src={shape.src} alt='shape' fluid loading='lazy' className='plus-shape-icn' />
                        <div className='icn-wrap'>
                            <Image src={plus.src} alt='plus' fluid loading='lazy' className='plus-icn'/>
                            {/* <AiOutlinePlus /> */}
                        </div>
                    </div>
                    <div className='empowering-details'>
                        <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <figure className='empowering-img-wrap'>
                                    <Image src={EmpoweringImg.src} alt='Empowering Img' fluid loading='lazy' />
                                </figure>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <EmpoweringContent />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Empowering