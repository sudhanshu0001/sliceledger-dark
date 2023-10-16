"use client"
import "../../assets/style/main.scss"
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import Grained from "../../components/common/Grained"
import { WagmiConfig, createConfig } from 'wagmi';
import { configureChains } from '@wagmi/core'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { goerli } from '@wagmi/core/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import Script from 'next/script'
import { metadata } from "./metadata"
// ================================= WAGMIN =================================
const SLICE: any = {
  id: Number(process.env.NEXT_PUBLIC_L2_CHAIN_ID),
  name: "SLICE Testnet",
  network: "SLICE",
  iconUrl: "https://i.imgur.com/Q3oIdip.png",
  iconBackground: "#000000",
  nativeCurrency: {
    decimals: 18,
    name: 'ETHEREUM',
    symbol: 'ETH'
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_L2_RPC_URL]
    },
  },
  blockExplorers: {
    default: { name: "SLICE Testnet Explorer", url: process.env.NEXT_PUBLIC_L2_EXPLORER_URL }
  },
  testnet: true

}

const { chains, publicClient } = configureChains(
  [goerli, SLICE],
  [
    jsonRpcProvider({
      rpc: chain => ({ http: chain.rpcUrls.default.http[0] })
    })
  ]
)
const connectors = [
  new MetaMaskConnector({
    chains,
    options: {
      shimDisconnect: false,
    }
  }),
];
const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
// --------------------------------- WAGMIN ---------------------------------

export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body suppressHydrationWarning={true}>
        <WagmiConfig config={config}>
          <Grained />
          <Header />
          {children}
          <Footer />
        </WagmiConfig>
        <Script src="/grained.js" />
      </body>
    </html>
  )
}
