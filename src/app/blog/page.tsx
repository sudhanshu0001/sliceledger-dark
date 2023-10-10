import React from 'react'
import "../../../assets/style/pages/blog/_blog.scss"
import { Col, Container, Image, Row } from 'react-bootstrap'
import Link from 'next/link'
import blog1 from "../../../assets/images/blog/blog1.png"
import blog2 from "../../../assets/images/blog/blog2.png"
import blog3 from "../../../assets/images/blog/blog3.png"
import blog4 from "../../../assets/images/blog/blog4.png"
import blog5 from "../../../assets/images/blog/blog5.jpg"
import blog6 from "../../../assets/images/blog/blog6.png"
const page = () => {
    interface blogDataTyp {
        title: string
        description: string
        slug: string
        img: any
    }
    const blogData: blogDataTyp[] = [
        {
            title: "SliceLedger At GITEX North Star Event 2022 Dubai: What To Expect?",
            description: "One of the most futuristic cities in the world is Dubai. It has established itself as an epicenter for significant global developments. GITEX, or the Gulf Information Technology Exhibition, is a conference and exhibition held in the Dubai World Trade Center. Numerous participants from all around the world have been drawn to it.",
            slug: "/sliceledger-at-GITEX-north-star-event-2022-dubai",
            img: blog1
        },
        {
            title: "An Introduction to Slice Ledger Protocol",
            description: "Slice Ledger is a blockchain protocol for developing, testing and launching financial products and applications. It promotes the ideology of decentralization and a trustworthy economy. It also offers decentralized solutions to various on-chain partners, including small businesses, big-tech companies, and investment management funds.",
            slug: "/an-introduction-to-sliceledger-protocol",
            img: blog2
        }
        , {
            title: "Blockchain-The missing component in Supply Chain!",
            description: "Blockchain technology has completely changed the way we do business The majority, if not all, of organizations, might see their productivity and profitability grow due to the incorporation of blockchain.",
            slug: "/blockchain-the-missing-component-in-supply-chain",
            img: blog3
        },
        {
            title: "Blockchain Trends: Blockchain-as-a-Service",
            description: "Blockchain-as-a-service (BaaS) is the formation and management of cloud-based networks by a third party for businesses that develop blockchain applications. In this fast-developing field of blockchain technology, these third-party services have been very useful. Blockchain technology is used for safe transactions of many kinds, far beyond its most well-known application in bitcoin transactions. As a result, there is a need for hosting services as well.",
            slug: "/blockchain-as-a-service",
            img: blog4
        },
        {
            title: "Layer 1 vs Layer 2 Blockchain Network Protocols: Key Differences",
            description: "Let's first study blockchain scalability and its function to make it simpler for you to understand what layer-1 and layer-2 are. Blockchain scalability refers to the platform's capacity to handle both a growth in the number of transactions and network nodes.",
            slug: "/layer1-vs-layer2-blockchain-network-protocols",
            img: blog5
        }
        , {
            title: "The List of Best Blockchain Protocols in Dubai",
            description: "The popularity and growth witnessed in the blockchain sector resulted in the development of several blockchain protocols. Every protocol is unique. While one can handle the issue of network congestion, others can offer interoperability and scalability.",
            slug: "/best-blockchain-protocols-in-dubai",
            img: blog6
        }

    ]
    return (
        <>
            <section className='blog-banner-wrap'>
                <Container fluid>
                    <h3 className='h3-title'>Blog</h3>
                </Container >
                <div className='blog-bottom-line'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="42" viewBox="0 0 1920 42" fill="none">
                        <path d="M0 41H159H228.5H438.5H495.658C498.806 41 501.874 40.0095 504.428 38.1689L552.072 3.83114C554.626 1.99048 557.694 1 560.842 1H1920" stroke="white" />
                    </svg>
                </div>
            </section>
            <section className='blog-card-wrap'>
                <Container fluid>
                    <Row>
                        {
                            blogData.map(({ title, description, slug, img }, id) => {
                                return (
                                    <Col sm={3} md={3} lg={3} xl={3} key={id}>
                                        <div className='blog-card'>
                                            <figure className='blog-card-img'>
                                                <Image src={img.src} alt="Blog Image" fluid loading="lazy" />
                                            </figure>
                                            <article className='blog-card-article'>
                                                <h3 className='h3-title'>{title}</h3>
                                                <p>{description}</p>
                                                <Link href={`/blog${slug}`}>Read More...</Link>
                                            </article>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default page