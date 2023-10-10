import React from 'react'
import "../../../assets/style/pages/slice-wallet/_walletBanner.scss"
import { Container, Row, Col, Image } from 'react-bootstrap';
import walletBanner from "../../../assets/images/wallet/banner.png"
const WalletBanner = () => {
  return (
    <>
      <section className='wallet-banner-wrap'>
        <Container fluid>
          <h3 className='h3-title'>Slice wallet</h3>
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
            <Col sm={12} md={6} lg={6} xl={6}>
              <article className='wallet-banner-article'>
                <p>Sliceledger Wallet is a free, client-side interface helping you interact with Sliceledger Chain. Our easy-to-use, open-source platform allows you to generate wallets and so much more. You can create a new wallet, import an existing wallet, vote for Master nodes, and transfer/receive SLICE Token.</p>
                <div className='wallet-banner-btn-wrap'>
                  <button type='button' className='btn wallet-banner-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="211" height="62" viewBox="0 0 211 62" fill="none">
                      <path d="M211 0H0V30V62H191L211 42V0Z" fill="white" />
                    </svg>
                    <div className='wallet-banner-btn-icn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_173_3407)">
                          <path d="M27.9548 0.019987C27.8698 -0.075013 24.8073 0.0574871 22.1423 2.94999C19.4773 5.83999 19.8873 9.15499 19.9473 9.23999C20.0073 9.32499 23.7473 9.45749 26.1348 6.09499C28.5223 2.73249 28.0398 0.117487 27.9548 0.019987ZM36.2398 29.3525C36.1198 29.1125 30.4273 26.2675 30.9573 20.7975C31.4873 15.325 35.1448 13.825 35.2023 13.6625C35.2598 13.5 33.7098 11.6875 32.0673 10.77C30.8614 10.1231 29.5266 9.75251 28.1598 9.68499C27.8898 9.67749 26.9523 9.44749 25.0248 9.97499C23.7548 10.3225 20.8923 11.4475 20.1048 11.4925C19.3148 11.5375 16.9648 10.1875 14.4373 9.82999C12.8198 9.51749 11.1048 10.1575 9.87731 10.65C8.65231 11.14 6.32231 12.535 4.69231 16.2425C3.06231 19.9475 3.91481 25.8175 4.52481 27.6425C5.13481 29.465 6.08731 32.4525 7.70731 34.6325C9.14731 37.0925 11.0573 38.8 11.8548 39.38C12.6523 39.96 14.9023 40.345 16.4623 39.5475C17.7173 38.7775 19.9823 38.335 20.8773 38.3675C21.7698 38.4 23.5298 38.7525 25.3323 39.715C26.7598 40.2075 28.1098 40.0025 29.4623 39.4525C30.8148 38.9 32.7723 36.805 35.0573 32.5575C35.9248 30.5825 36.3198 29.515 36.2398 29.3525Z" fill="black" />
                          <path d="M27.9548 0.019987C27.8698 -0.075013 24.8073 0.0574871 22.1423 2.94999C19.4773 5.83999 19.8873 9.15499 19.9473 9.23999C20.0073 9.32499 23.7473 9.45749 26.1348 6.09499C28.5223 2.73249 28.0398 0.117487 27.9548 0.019987ZM36.2398 29.3525C36.1198 29.1125 30.4273 26.2675 30.9573 20.7975C31.4873 15.325 35.1448 13.825 35.2023 13.6625C35.2598 13.5 33.7098 11.6875 32.0673 10.77C30.8614 10.1231 29.5266 9.75251 28.1598 9.68499C27.8898 9.67749 26.9523 9.44749 25.0248 9.97499C23.7548 10.3225 20.8923 11.4475 20.1048 11.4925C19.3148 11.5375 16.9648 10.1875 14.4373 9.82999C12.8198 9.51749 11.1048 10.1575 9.87731 10.65C8.65231 11.14 6.32231 12.535 4.69231 16.2425C3.06231 19.9475 3.91481 25.8175 4.52481 27.6425C5.13481 29.465 6.08731 32.4525 7.70731 34.6325C9.14731 37.0925 11.0573 38.8 11.8548 39.38C12.6523 39.96 14.9023 40.345 16.4623 39.5475C17.7173 38.7775 19.9823 38.335 20.8773 38.3675C21.7698 38.4 23.5298 38.7525 25.3323 39.715C26.7598 40.2075 28.1098 40.0025 29.4623 39.4525C30.8148 38.9 32.7723 36.805 35.0573 32.5575C35.9248 30.5825 36.3198 29.515 36.2398 29.3525Z" fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_173_3407">
                            <rect width="40" height="40" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className='wallet-banner-btn-icn-text'>
                        <p>Download on the</p>
                        <h6>App store</h6>
                      </div>
                    </div>
                  </button>
                  <button type='button' className='btn wallet-banner-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="211" height="62" viewBox="0 0 211 62" fill="none">
                      <path d="M211 0H0V30V62H191L211 42V0Z" fill="white" />
                    </svg>
                    <div className='wallet-banner-btn-icn'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M25.4141 18.3047L8.17188 1.01562L30.1094 13.6094L25.4141 18.3047ZM3.67188 0C2.65625 0.53125 1.97656 1.5 1.97656 2.75781V37.2344C1.97656 38.4922 2.65625 39.4609 3.67188 39.9922L23.7188 19.9922L3.67188 0ZM36.8906 17.625L32.2891 14.9609L27.1563 20L32.2891 25.0391L36.9844 22.375C38.3906 21.2578 38.3906 18.7422 36.8906 17.625ZM8.17188 38.9844L30.1094 26.3906L25.4141 21.6953L8.17188 38.9844Z" fill="black" />
                      </svg>
                      <div className='wallet-banner-btn-icn-text'>
                        <p>Download on the</p>
                        <h6>Play store</h6>
                      </div>
                    </div>
                  </button>
                </div>
              </article>
            </Col>
            <Col sm={12} md={6} lg={6} xl={5}>
              <figure className='wallet-banner-img'>
                <Image src={walletBanner.src} alt='Wallet Banner' fluid loading='lazy' />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WalletBanner