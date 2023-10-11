"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "../../../../assets/style/pages/blog/_blogDetails.scss"
import blogJsonData from '../../../../components/common/BlogJson'
import { usePathname } from 'next/navigation'
const Slug = () => {
  interface blogResponseTyp {
    img: any
    title: string
  }
  const router = usePathname();
  const [blogData, setBlogData] = useState<blogResponseTyp>({ img: '', title: "" })
  const raf = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    blogJsonData.map((ele) => {
      if (ele.slug === router.split("/").pop()) {
        if (raf.current) {
          raf.current.innerHTML = ele.jsonData
          setBlogData(ele)
        }
      }
    })
  }, [raf])
  return (
    <>
      <section className='blog-details-wrap'>
        <Container fluid>
          <div className='head_box'>
            <h3 className='h3-title'>{blogData.title}</h3>
          </div>
        </Container>
        <div className='bottom-line'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="42" viewBox="0 0 1920 42" fill="none">
            <path d="M0 41H159H228.5H438.5H605.658C608.806 41 611.874 40.0095 614.428 38.1689L662.072 3.83114C664.626 1.99048 667.694 1 670.842 1H1920" stroke="white" />
          </svg>
        </div>
      </section>
      <section className='blog-details-inner-wrap'>
        <Container fluid>
          <Row>
            <Col sm={8} md={8} lg={8} xl={8}>
              <div className="blog-details">
                <Image src={blogData.img?.src} fluid alt='blog image' loading='lazy' />
                <div ref={raf}></div>
              </div>
            </Col>
            <Col sm={4} md={4} lg={4} xl={4}>
              <div className="recent-blogs-list">
                <h3 className='h3-title'>Recent Blogs</h3>
                <div className="blog-item">
                  <Image src="https://sliceledger.io/_next/static/media/blog5.e69dff33.jpg" fluid alt='latest blog' loading='lazy' />
                  <Link href="/blog/layer1-vs-layer2-blockchain-network-protocols">Layer 1 vs Layer 2 Blockchain Network Protocols: Key Differences</Link>
                </div>
                <div className="blog-item">
                  <Image src="https://sliceledger.io/_next/static/media/blog5.e69dff33.jpg" fluid alt='latest blog' loading='lazy' />
                  <Link href={'/blog/blockchain-as-a-service'}>Blockchain Trends: Blockchain-as-a-Service</Link>
                </div>
                <div className="blog-item">
                  <Image src="https://sliceledger.io/_next/static/media/blog3.51e443b0.png" fluid alt='latest blog' loading='lazy' />
                  <Link href={'/blog/blockchain-the-missing-component-in-supply-chain'}>Blockchain-The missing component in Supply Chain!</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Slug