"use client"
import React, { useState } from 'react'
import { Container, Image, Modal } from "react-bootstrap"
import sliceVideo from "../../../assets/images/sliceVideo.png"
import "../../../assets/style/pages/landing/_landingVideo.scss"
const SliceVideo = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className='slice-video-wrap'>
                <Container fluid>
                    <figure className='slice-video'>
                        <Image src={sliceVideo.src} alt="video" fluid loading="lazy" />
                        <button className='btn' type='button' onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="71" viewBox="0 0 64 71" fill="none">
                                <path d="M32 1.07587L63 18.7902L63 52.2098L32 69.9241L0.999998 52.2098L0.999999 18.7902L32 1.07587Z" fill="white" fillOpacity="0.16" stroke="white" />
                                <path d="M48 36L24 49.8564L24 22.1436L48 36Z" fill="white" />
                                <path d="M1 18.6309L32 36M32 70V36M32 36L63 18.6309" stroke="white" strokeOpacity="0.09" />
                            </svg>
                        </button>
                    </figure>
                </Container>
            </section>
            {/* ============================== MODAL ============================== */}
            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose} animation={true}>
                <Modal.Body>
                    <div className='overview_video'>
                        <iframe width="100%" height="700" src="https://www.youtube.com/embed/G3EIChDGjQU" title="Slice Ledger Blockchain Network - An Overview"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SliceVideo