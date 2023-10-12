"use client"
import React from 'react'
import "../../../assets/style/pages/slice-extension/_walletBanner.scss"
import { Container, Row, Col, Image } from 'react-bootstrap';
import extensionBanner from "../../../assets/images/extension/extensionBanner.png"
const WalletBanner = () => {
  return (
    <>
      <section className='wallet-banner-wrap'>
        <Container fluid>
          <h3 className='h3-title'>Slice Extension</h3>
        </Container >
        <div className='bottom-line'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="42" viewBox="0 0 1920 42" fill="none">
            <path d="M0 41H159H228.5H438.5H605.658C608.806 41 611.874 40.0095 614.428 38.1689L662.072 3.83114C664.626 1.99048 667.694 1 670.842 1H1920" stroke="white" />
          </svg>
        </div>
      </section>
      <section className='wallet-banner-article-wrap'>
        <Container fluid>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6}>
              <article className='wallet-banner-article'>
                <p>Sliceledger Wallet Extension is a free, client-side interface helping you interact with Sliceledger Chain. Our easy-to-use, open-source platform allows you to generate wallets and so much more.You can create a new wallet, import an existing wallet, vote for Master nodes, and transfer/receive SLICE Token.</p>
                <div className='wallet-banner-btn-wrap'>
                  <button type='button' className='btn wallet-banner-btn' onClick={() => window.open("https://chrome.google.com/webstore/detail/slice/ngkboaddmfaodpbcmhnehklfbkpajbdp", '_ blank')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="163" height="56" viewBox="0 0 163 56" fill="none">
                      <path d="M1 0H162.18V31.7L142.88 50H1V0Z" fill="#0052FF" />
                      <g filter="url(#filter0_d_184_4528)">
                        <path d="M5.16016 4.60986H157.38V30.032L139.649 46.3999H5.16016V4.60986Z" stroke="white" strokeWidth="2" shapeRendering="crispEdges" />
                      </g>
                      <path d="M162 40.1099V34L146 50H152.202L161.989 40.1099H162Z" fill="#0052FF" />
                      <defs>
                        <filter id="filter0_d_184_4528" x="0.160156" y="3.60986" width="162.22" height="51.79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_184_4528" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_184_4528" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                    <div className='wallet-banner-btn-icn'>
                      <div className='wallet-banner-btn-icn-text'>
                        <h6>Add Extension</h6>
                      </div>
                    </div>
                  </button>
                </div>
              </article>
            </Col>
            <Col sm={5} md={5} lg={5} xl={5}>
              <figure className='wallet-banner-img'>
                <Image src={extensionBanner.src} alt='Wallet Banner' fluid loading='lazy' />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WalletBanner