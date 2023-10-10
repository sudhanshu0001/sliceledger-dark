"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "../../../../assets/style/pages/blog/_blogDetails.scss"
import blogJsonData from '../../../../components/common/BlogJson'
import { usePathname } from 'next/navigation'
const Slug = () => {
  const router = usePathname()
  useEffect(() => {
    console.log("blogJsonData", blogJsonData);

    console.log("route", router.split("/").pop());
  }, [router])
  return (
    <>
      {
        blogJsonData.map((ele, id) => {
          if (ele.slug === router.split("/").pop()) {
            return (
              <div key={id}>
                <section className='blog-details-wrap'>
                  <Container fluid>
                    <div className='head_box'>
                      <h3 className='h3-title'>{ele.title}</h3>
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
                          <Image src="https://sliceledger.io/_next/static/media/blog1.0095427c.png" fluid alt='blog image' loading='lazy' />
                          <div dangerouslySetInnerHTML={{__html: ele.jsonData}}></div>
                          {/* <p>Let's first study blockchain scalability and its function to make it simpler for you to understand what layer-1 and layer-2 are. Blockchain scalability refers to the platform's capacity to handle both a growth in the number of transactions and network nodes.</p>
                          <h3 className='h3-title'>Layer 1-What is it?</h3>
                          <p>Generally, we refer to a blockchain as a Layer-1 network in the decentralized ecosystem. Scalability increases by incorporating layer-1 scaling solutions within the blockchain protocol's foundation layer. Several approaches that directly increase the scalability of blockchain networks are currently being researched and put into use.</p>
                          <p>Layer 1 solutions can validate, confirm, and complete trades without relying on a different network. These lowest gas fees crypto have native cryptocurrency coins that assist in covering the transaction costs. Layer-1 scaling solutions aim to strengthen the technical underpinnings of the blockchain protocol to increase scalability.</p>
                          <h3 className='h3-title'>Layer 1 blockchain protocol issue that everyone needs to know</h3>
                          <p>The most evident issue of Layer 1 is scalability. As the number of users increases, Layer 1 starts crumbling. Slow processing speed, slow confirmation and transaction time and slow throughput are all the shortcomings of Layer 1 Blockchain protocols.</p>
                          <h3 className='h3-title'>Introducing Layer 2 - How will it scale blockchain networks?</h3>
                          <p>The fundamental logic behind developing a Layer 2 protocol is that the blockchain industry is experiencing enormous growth and promise. Layer-2 solutions are secondary frameworks built on top of an existing blockchain ecosystem. Their main objectives are to improve transaction execution speed and lessen scaling challenges that the blockchain industry is currently facing.</p>
                          <h3 className='h3-title'>Advantages of Layer 2 solutions</h3>
                          <ol>
                            <li>Increased transactions per second (TPS) can lower network congestion on the mainnet and enhance user experience.</li>
                            <li>Before being recorded onto the mainnet, transactions are combined into a single package to reduce gas fees.</li>
                            <li>Any upgrades do not affect the underlying blockchain, enhancing network security as Layer 2 solutions are built upon existing blockchains.</li>
                          </ol>
                          <h3 className='h3-title'>Common Layer 2 Solutions</h3>
                          <p><b> RollUps </b>- Rollups are of two types. They are ZK-Rollups and Optimistic Rollups.</p>
                          <p>ZK-Rollups, also known as zero-knowledge rollups, are collections of data that are moved off-chain for processing and computation while being collateralized by a smart contract on the main chain. With the capacity to handle 2,000 TPS, they can produce a block in about a minute. Without actually disclosing the information, all verifiers can be certain they have it. This is known as zero-knowledge.</p>
                          <p>Optimistic rollups are implemented so that a large number of smart contracts can be executed without overwhelming the network. They continue to enjoy the same high-security levels as the Ethereum main chain. Merkle roots will be computed by data aggregators to boost transaction speeds. They provide less throughput than ZK Rollups and Plasma, though.</p>
                          <p><b> SideChains </b>- Blockchain sidechains are separate networks with their validators. The main chain and sidechain connect through smart contracts, which also operate as a way to validate the sidechain network. You need to make sure the sidechain is working properly because it can control the assets on the main chain.</p>
                          <p><b> State Channels </b>- A state channel serves as a line of communication between the participants of the transaction in both directions. The parties link a sealed-off portion of the underlying blockchain to an off-chain transaction channel. This can typically be accomplished through a multi-signature or pre-negotiated smart contract. The parties then conduct a transaction or series of transactions off-chain without immediately uploading transaction data to the underlying distributed ledger (i.e., the main chain). Once each transaction in the set is finished, the final "state" of the channel is broadcast to the blockchain for verification. With this technique, transactions process more quickly, increasing the network's overall capacity.</p>
                          <p><b> Nested Blockchains </b>- A nested blockchain is essentially a blockchain that is stacked on top of or inside another blockchain. The executions occur on a web of subsidiary chains interconnected in the layered blockchain architecture, which typically consists of a core blockchain that provides the rules for a broader network. The underlying base blockchain does not take part in the network operations of subsidiary chains unless it becomes necessary for dispute resolution.</p>
                          <h3 className='h3-title'>Summing Up</h3>
                          <p>The blockchain's layers are concerned with increasing scalability. The original blockchain technology is modified to make Layer 1 more scalable. The Layer 2 scaling of the blockchain depends on other technologies, networks, or protocols to boost its scalability. With the assistance of off-chain solutions that share the weight of the blockchain network, scalability is easier to achieve.</p> */}
                        </div>
                      </Col>
                      <Col sm={4} md={4} lg={4} xl={4}>
                        <div className="recent-blogs-list">
                          <h3 className='h3-title'>Recent Blogs</h3>
                          <div className="blog-item">
                            <Image src="https://sliceledger.io/_next/static/media/blog5.e69dff33.jpg" fluid alt='latest blog' loading='lazy' />
                            <Link href="/">Layer 1 vs Layer 2 Blockchain Network Protocols: Key Differences</Link>
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
              </div>
            )
          }

        })
      }

    </>
  )
}

export default Slug