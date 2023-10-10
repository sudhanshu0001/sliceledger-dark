import React from 'react'
import { Row, Col } from "react-bootstrap"
const NavigatingContent = () => {
    interface navigatingDataTyp {
        description: string
    }
    const navigatingData: navigatingDataTyp[] = [
        {
            description: "Transactions are processed off-chain, and only the transaction data is recorded on the main Blockchain."
        },
        {
            description: "A small group of validators verifies the transactions off-chain, ensuring their correctness and security."
        },
        {
            description: "The batch of transactions is then submitted to the Ethereum (or other Blockchain) mainnet."
        },
        {
            description: "Transactions are initially assumed to be valid (hence the term optimistic)."
        },
        {
            description: "There's a challenge period during which anyone can challenge the validity of a transaction. If a challenge occurs, the transaction is rolled back and re-evaluated."
        },
        {
            description: "Once a transaction has passed the challenge period and no issues have been raised, it's considered final and added to the main Blockchain."
        },
    ]
    return (
        <>
            <Row>
                {
                    navigatingData.map((event, index) => {
                        const { description } = event
                        return (
                            <Col sm={12} md={6} lg={6} xl={4} key={index}>
                                <article className='navigating-details-article'>
                                    <p>{description}</p>
                                </article>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default NavigatingContent