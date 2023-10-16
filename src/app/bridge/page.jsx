"use client"
import React, { useEffect, useState } from 'react'
import { Ethereum, Dai, Usdt, Usdc } from 'react-web3-icons';
import { Form, Image, Spinner } from "react-bootstrap"
// import sliceLogo from "../../public/images/bridge/sliceIcn.png"
// import { FaWallet } from "react-icons/fa"
// import { FaWallet } from "@react-icons/all-files/fa/FaWallet"
import wallet from "../../../assets/images/icons/wallet.png"
import swap from "../../../assets/images/icons/swap.png"
import TabMenu from '../../../components/pages/bridge/TabMenu';
import { useAccount, useConnect, useNetwork, useSwitchNetwork, useBalance, useToken } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
// import { HiSwitchHorizontal } from "react-icons/hi";
// import { HiSwitchHorizontal } from "@react-icons/all-files/hi/HiSwitchHorizontal";
import Web3 from 'web3';
const optimismSDK = require("@eth-optimism/sdk")
const ethers = require("ethers")
const Page = () => {
  const [ethValue, setEthValue] = useState("")
  const [sendToken, setSendToken] = useState("ETH")
  const { data: accountData, address, isConnected } = useAccount()
  const [errorInput, setErrorInput] = useState("")
  const [loader, setLoader] = useState(false)
  const { chain, chains } = useNetwork()
  const [checkMetaMask, setCheckMetaMask] = useState(false);
  const [isClient, setIsClient] = useState(false)
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect({
    connector: new InjectedConnector({ chains }), onError(error) {
      console.log('Error', error)
    },
    onMutate(args) {
      console.log('Mutate', args)
      if (args.connector.ready === true) {
        setCheckMetaMask(false)
      } else {
        setCheckMetaMask(true)
      }
    },
    onSettled(data, error) {
      console.log('Settled', { data, error })
    },
    onSuccess(data) {
      console.log('Success', data)
    },
  })
  const { switchNetwork } = useSwitchNetwork({
    throwForSwitchChainNotSupported: true,
    onError(error) {
      console.log('Error', error)
    },
    onMutate(args) {
      console.log('Mutate', args)
    },
    onSettled(data, error) {
      console.log('Settled', { data, error })
    },
    onSuccess(data) {
      console.log('Success', data)
    },
  })
  const { data } = useBalance({ address: address, watch: true, refetchInterval: true, chainId: Number(process.env.NEXT_PUBLIC_L1_CHAIN_ID) })
  const dataUSDT = useBalance({ address: address, token: process.env.NEXT_PUBLIC_L1_USDT, refetchInterval: true, watch: true, chainId: Number(process.env.NEXT_PUBLIC_L1_CHAIN_ID) })
  const dataDAI = useBalance({ address: address, token: process.env.NEXT_PUBLIC_L1_DAI, watch: true, refetchInterval: true, chainId: Number(process.env.NEXT_PUBLIC_L1_CHAIN_ID) })
  const dataUSDC = useBalance({ address: address, token: process.env.NEXT_PUBLIC_L1_USDC, watch: true, refetchInterval: true, chainId: Number(process.env.NEXT_PUBLIC_L1_CHAIN_ID) })

  const handleSwitch = () => {
    switchNetwork(process.env.NEXT_PUBLIC_L1_CHAIN_ID)
  }


  const handleDeposit = async () => {
    try {
      if (!ethValue) {
        setErrorInput("Please enter the amount");
      }
      else {
        if (!parseFloat(ethValue) > 0) {
          setErrorInput("Invalid Amount Entered!");
        } else {

          const l2Url = process.env.NEXT_PUBLIC_L2_RPC_URL;
          const l1Provider = new ethers.providers.Web3Provider(window.ethereum);
          const l2Provider = new ethers.providers.JsonRpcProvider(l2Url, 'any')
          const l1Signer = l1Provider.getSigner(address)
          const l2Signer = l2Provider.getSigner(address)
          const zeroAddr = "0x".padEnd(42, "0");
          const l1Contracts = {
            StateCommitmentChain: zeroAddr,
            CanonicalTransactionChain: zeroAddr,
            BondManager: zeroAddr,
            AddressManager: process.env.NEXT_PUBLIC_LIB_ADDRESSMANAGER,
            L1CrossDomainMessenger: process.env.NEXT_PUBLIC_PROXY_OVM_L1CROSSDOMAINMESSENGER,
            L1StandardBridge: process.env.NEXT_PUBLIC_PROXY_OVM_L1STANDARDBRIDGE,
            OptimismPortal: process.env.NEXT_PUBLIC_OPTIMISM_PORTAL_PROXY,
            L2OutputOracle: process.env.NEXT_PUBLIC_L2_OUTPUTORACLE_PROXY,
          }
          const bridges = {
            Standard: {
              l1Bridge: l1Contracts.L1StandardBridge,
              l2Bridge: process.env.NEXT_PUBLIC_L2_BRIDGE,
              Adapter: optimismSDK.StandardBridgeAdapter
            },
            ETH: {
              l1Bridge: l1Contracts.L1StandardBridge,
              l2Bridge: process.env.NEXT_PUBLIC_L2_BRIDGE,
              Adapter: optimismSDK.ETHBridgeAdapter
            }
          }
          const crossChainMessenger = new optimismSDK.CrossChainMessenger({
            contracts: {
              l1: l1Contracts,
            },
            bridges: bridges,
            l1ChainId: Number(process.env.NEXT_PUBLIC_L1_CHAIN_ID),
            l2ChainId: Number(process.env.NEXT_PUBLIC_L2_CHAIN_ID),
            l1SignerOrProvider: l1Signer,
            l2SignerOrProvider: l2Signer,
            bedrock: true,
          })
          if (sendToken === "ETH") {
            if (Number(data?.formatted) > Number(ethValue)) {
              console.log(sendToken);
              const weiValue = parseInt(ethers.utils.parseEther(ethValue)._hex, 16)
              setLoader(true);
              var depositETHEREUM = await crossChainMessenger.depositETH(weiValue.toString())
              const receiptETH = await depositETHEREUM.wait()
              if (receiptETH) {
                getFormattedBalance(sendToken)
                setLoader(false);
                setEthValue("")
              }
            }
          }
          if (sendToken === "DAI") {
            if (Number(dataDAI.data?.formatted) > Number(ethValue)) {
              var daiValue = Web3.utils.toWei(ethValue, "ether")
              setLoader(true);
              var depositTxn2 = await crossChainMessenger.approveERC20("0xb93cba7013f4557cDFB590fD152d24Ef4063485f", "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2", daiValue)
              await depositTxn2.wait()
              var receiptDAI = await crossChainMessenger.depositERC20("0xb93cba7013f4557cDFB590fD152d24Ef4063485f", "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2", daiValue)
              var getReceiptDAI = await receiptDAI.wait()
              if (getReceiptDAI) {
                console.log("getReceiptDAI", getReceiptDAI);
                setLoader(false);
                setEthValue("")
              }
            }
          }
          if (sendToken === "USDT") {
            if (Number(dataUSDT.data?.formatted) > Number(ethValue)) {
              var usdtValue = parseInt(ethValue * 1000000)
              setLoader(true);
              var depositTxn1 = await crossChainMessenger.approveERC20("0xfad6367E97217cC51b4cd838Cc086831f81d38C2", "0x271583ba9e3D866E49A9736c626772e944dD9f2A", usdtValue)
              await depositTxn1.wait()
              var receiptUSDT = await crossChainMessenger.depositERC20("0xfad6367E97217cC51b4cd838Cc086831f81d38C2", "0x271583ba9e3D866E49A9736c626772e944dD9f2A", usdtValue)
              var getReceiptUSDT = await receiptUSDT.wait()
              if (getReceiptUSDT) {
                console.log("getReceiptUSDT", getReceiptUSDT);
                setLoader(false);
                setEthValue("")
              }
            }
          }
          if (sendToken === "USDC") {
            if (Number(dataUSDC.data?.formatted) > Number(ethValue)) {
              var usdcValue = parseInt(ethValue * 1000000)
              setLoader(true);
              var depositTxn3 = await crossChainMessenger.approveERC20("0x07865c6E87B9F70255377e024ace6630C1Eaa37F", "0x11FED897ED37C4F526ECe58dEe0F2a54D8F36e04", usdcValue)
              await depositTxn3.wait()
              var receiptUSDC = await crossChainMessenger.depositERC20("0x07865c6E87B9F70255377e024ace6630C1Eaa37F", "0x11FED897ED37C4F526ECe58dEe0F2a54D8F36e04", usdcValue)
              var getReceiptUSDC = await receiptUSDC.wait()
              if (getReceiptUSDC) {
                console.log("getReceiptUSDC", getReceiptUSDC);
                setLoader(false);
                setEthValue("")
              }
            }
          }
        }
      }
    } catch (error) {
      console.log(error)
      setLoader(false);
    }
  }

  const handleChange = (e) => {
    console.log("data", typeof e.target.value);
    if (sendToken == 'ETH') {
      if (Number(data?.formatted) < Number(e.target.value)) {
        setErrorInput("Insufficient ETH balance.")
      } else {
        setErrorInput("")
      }
      setEthValue(e.target.value)
    }
    if (sendToken == 'DAI') {
      if (Number(dataDAI.data?.formatted) < Number(e.target.value)) {
        setErrorInput("Insufficient DAI balance.")
      } else {
        setErrorInput("")
      }
      setEthValue(e.target.value)
    }
    if (sendToken == 'USDT') {
      if (Number(dataUSDT.data?.formatted) < Number(e.target.value)) {
        setErrorInput("Insufficient USDT balance.")
      } else {
        setErrorInput("")
      }
      setEthValue(e.target.value)
    }
    if (sendToken == 'USDC') {
      if (Number(dataUSDC.data?.formatted) < Number(e.target.value)) {
        setErrorInput("Insufficient USDC balance.")
      } else {
        setErrorInput("")
      }
      setEthValue(e.target.value)
    }

  }

  useEffect(() => {
    if (isConnected) {
      setIsClient(true)
    } else {
      setIsClient(false)
    }
  }, [isConnected, dataUSDT, dataDAI, dataUSDC, data, sendToken])
  useEffect(() => {
    console.log("Number(data?.formatted).toFixed(5)", Number(data?.formatted).toFixed(5));
  }, [isConnected, dataUSDT, dataDAI, dataUSDC, data, sendToken])

  const getFormattedBalance = (token) => {
    switch (token) {
      case 'ETH':
        return `Balance: ${Number(data?.formatted).toFixed(5)} ETH`;
      case 'DAI':
        return `Balance: ${Number(dataDAI.data?.formatted).toFixed(5)} DAI`;
      case 'USDT':
        return `Balance: ${Number(dataUSDT.data?.formatted).toFixed(5)} USDT`;
      case 'USDC':
        return `Balance: ${Number(dataUSDC.data?.formatted).toFixed(5)} USDC`;
      default:
        return '';
    }
  };
  return (
    <>
      <section className='bridge_main_wrap'>
        <div className='bridge_inner'>
          <TabMenu />
          <section className='deposit_wrap'>
            <div className='from_area'>
              <p>From</p>
              <h6><Ethereum /> Goerli Testnet</h6>
            </div>
            <div className='input_area_wrap'>
              <div className='input_area'>
                <Form.Group controlId="ethValue">
                  <Form.Control type="number" value={ethValue} onChange={handleChange} placeholder="0" min="0" step="any" />
                </Form.Group>
                {
                  sendToken == "ETH" ? <Ethereum /> :
                    sendToken == "DAI" ? <Dai /> :
                      sendToken == "USDT" ? <Usdt /> : <Usdc />
                }
              </div>
              <div className='input_select'>
                <Form.Select aria-label="eth select" onChange={({ target }) => setSendToken(target.value)}>
                  <option value="ETH">ETH</option>
                  <option value="DAI">DAI</option>
                  <option value="USDT">USDT</option>
                  <option value="USDC">USDC</option>
                </Form.Select>
              </div>
            </div>
            {errorInput && <small className='text-danger'>{errorInput}</small>}
            {isClient && <p className='wallet_bal mt-2'>{getFormattedBalance(sendToken)}</p>}
            <div className='to_area'>
              <p>To</p>
              {/* <h6><Image src={sliceLogo.src} alt="Slice" loading='lazy' /> SLICE</h6> */}
              <h6>SLICE Testnet</h6>
            </div>
            <div className='receive_wrap'>
              {sendToken == "ETH" ? <Ethereum /> : sendToken == "DAI" ? <Dai /> : sendToken == "USDT" ? <Usdt /> : <Usdc />}  receive: {ethValue ? ethValue : "0"} {sendToken}
            </div>
            <div className='deposit_btn_wrap'>
              {checkMetaMask ?
                <a className='btn bridge_btn' href='https://metamask.io/' target='_blank'>
                  <Image width={30} src={metamask} alt="metamask icn" fluid /> Please Install Metamask Wallet</a> :
                !isClient ?
                  <button className='btn bridge_btn' onClick={() => connect()}><Image src={wallet.src} alt="wallet" fluid loading='lazy'/>Connect Wallet</button> :
                  chain?.id !== Number(process.env.NEXT_PUBLIC_L1_CHAIN_ID) ?
                    <button className='btn bridge_btn' onClick={handleSwitch}><Image src={swap.src} alt="swap" fluid loading='lazy'/>Switch to goerli</button> :
                    <button className='btn bridge_btn' onClick={handleDeposit} disabled={loader ? true : false}> {loader ?
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner> : "Deposit"}
                    </button>}

            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Page