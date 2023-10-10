import React from 'react'
import "../../../../assets/style/pages/landing/_empoweringContent.scss"
const EmpoweringContent = () => {
  interface EmpoweringDataTyp {
    title: string,
    description: string
  }
  const empoweringData: EmpoweringDataTyp[] = [
    {
      title: "Scalability",
      description: "Sliceledger greatly increase the throughput of Blockchain networks, allowing for more transactions to be processed per second."
    },
    {
      title: "Reduced Costs",
      description: "With fewer computational demands, transaction fees are lowered, making Blockchain more accessible to users."
    },
    {
      title: "Seamless Integration",
      description: "Navigate and interact seamlessly with dApps through Slice Ledger's user-centric, efficient design, making them an ideal choice for applications demanding high throughput, including decentralized exchanges and prediction markets."
    },
    {
      title: "Compatibility",
      description: "Sliceledger is compatible with existing smart contracts and dApps, minimizing the need for significant changes to existing infrastructure."
    },
    {
      title: "Security",
      description: "While being more efficient, they still maintain a high level of security through the dispute resolution mechanism."
    },
    {
      title: "User Friendly",
      description: "Users benefit from improved transaction speeds and lower costs without needing to understand the technical details."
    },
  ]
  return (
    <>
      <section className='empowering-content-wrap'>
        {
          empoweringData.map((event, index) => {
            const { title, description } = event
            return (
              <div className='empowering-content-card' key={index}>
                <h3 className='h3-title'>{title}</h3>
                <p>{description}</p>
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default EmpoweringContent