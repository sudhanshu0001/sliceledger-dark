import React from 'react';
import "../../../assets/style/pages/landing/_banner.scss";
import { Container, Row, Col, Image } from 'react-bootstrap';
// import video from "../../../assets/images/mov_bbb.mp4";
const Banner = () => {
    return (
        <>
            <section className='banner-wrap'>
                <Container fluid>
                    <Row>
                        <Col sm={7} md={7} lg={7} xl={7}>
                            <article className='banner-article'>
                                <h1 className='h1-title'>Revolutionizing <br /><span>Blockchain</span><br /> Scalability</h1>
                                <p>Welcome to Sliceledger, a game-changing technology that is transforming the world of Blockchain scalability. <br />In this era of decentralized finance (DeFi) and non-fungible tokens (NFTs), Blockchain scalability has become<br /> a pressing issue. Sliceledger offer an optimistic solution, and this is where we delve into the details.</p>
                                <div className='banner-btn-wrap'>
                                    <button className='btn banner-btn' type='button'>Explorer</button>
                                    <button className='btn banner-btn' type='button'>Document</button>
                                </div>
                            </article>
                        </Col>
                        <figure className='banner-img-wrap'>
                            {/* <Image src={bannerImg.src} alt="Banner Image" fluid loading='lazy'/> */}
                            <video  controls={false} muted loop autoPlay={true} playsInline>
                                <source src="/video.mp4" type="video/mp4" />
                                <source src="/video.mp4" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </figure>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner