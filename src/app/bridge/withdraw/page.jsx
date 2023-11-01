"use client"
import React, { useState, useEffect } from 'react'
import { Ethereum, Usdc, Usdt, Dai } from 'react-web3-icons';
import { Form, Image, Spinner } from "react-bootstrap"
import  verified from "../../../../assets/images/icons/verified.png"
import TabMenu from '../../../../components/pages/bridge/TabMenu';
import { useAccount, useConnect, useNetwork, useSwitchNetwork, useBalance } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected';
import wallet from "../../../../assets/images/icons/wallet.png"
import swap from "../../../../assets/images/icons/swap.png"
const optimismSDK = require("@eth-optimism/sdk")
const ethers = require("ethers")
const Withdraw = () => {
  const [ethValue, setEthValue] = useState("")
  const [sendToken, setSendToken] = useState("ETH")
  const [isClient, setIsClient] = useState(false)
  const [errorInput, setErrorInput] = useState("")
  const [checkMetaMask, setCheckMetaMask] = useState("");
  const [loader, setLoader] = useState(false)
  const { address, isConnected } = useAccount()
  const { chain, chains } = useNetwork()
  const { connect } = useConnect({
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
  const [metaMastError, setMetaMaskError] = useState("")
  const { error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork({
    chainId: 90001,
    onError(error) {
      console.log('Error', error)
    },
    onMutate(args) {
      console.log('Mutate', args)
    },
    onSettled(data, error) {
      console.log('Settled', { data, error })
      try {
        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: process.env.NEXT_PUBLIC_L2_CHAIN_ID_WITH_HEX,
            rpcUrls: [process.env.NEXT_PUBLIC_L2_RPC_URL],
            chainName: process.env.NEXT_PUBLIC_L2_NETWORK_NAME,
            nativeCurrency: {
              name: "ETHEREUM",
              symbol: "ETH",
              decimals: 18
            },
            blockExplorerUrls: [process.env.NEXT_PUBLIC_L2_EXPLORER_URL]
          }]
        }).then((data) => {
          setMetaMaskError("")
        }).catch((err) => {
          if (err.code === -32002) {
            setMetaMaskError("Request stuck in pending state")
          }
        });
      }
      catch (error) {
        console.log(error);
      }
    },
    onSuccess(data) {
      console.log('Success', data)

    },
  })
  //========================================================== BALANCES =======================================================================

  const { data } = useBalance({ address: address, chainId: Number(process.env.NEXT_PUBLIC_L2_CHAIN_ID), watch: true })
  const dataUSDT = useBalance({ address: address, chainId: Number(process.env.NEXT_PUBLIC_L2_CHAIN_ID), token: process.env.NEXT_PUBLIC_L2_USDT, watch: true });
  const dataDAI = useBalance({ address: address, chainId: Number(process.env.NEXT_PUBLIC_L2_CHAIN_ID), token: process.env.NEXT_PUBLIC_L2_DAI, watch: true });
  const dataUSDC = useBalance({ address: address, chainId: Number(process.env.NEXT_PUBLIC_L2_CHAIN_ID), token: process.env.NEXT_PUBLIC_L2_USDC, watch: true });

  ////========================================================== WITHDRAW =======================================================================


  const handleWithdraw = async () => {
    try {
      if (!ethValue) {
        setErrorInput("Please enter the amount");
      }
      else {
        if (!parseFloat(ethValue) > 0) {
          setErrorInput("Invalid Amount Entered!");
        } else {
          setErrorInput("");
          const l1Url = process.env.NEXT_PUBLIC_L1_RPC_URL;
          const l1Provider = new ethers.providers.JsonRpcProvider(l1Url, "any");
          const l2Provider = new ethers.providers.Web3Provider(window.ethereum);
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
              l2Bridge: "0x4200000000000000000000000000000000000010",
              Adapter: optimismSDK.StandardBridgeAdapter
            },
            ETH: {
              l1Bridge: l1Contracts.L1StandardBridge,
              l2Bridge: "0x4200000000000000000000000000000000000010",
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
          //-------------------------------------------------------- SEND TOKEN VALUE -----------------------------------------------------------------

          try {
            if (sendToken == "ETH") {
              const weiValue = parseInt(ethers.utils.parseEther(ethValue)._hex, 16)
              setLoader(true);
              const response = await crossChainMessenger.withdrawETH(weiValue.toString());
              const logs = await response.wait();
              if (logs) {
                setLoader(false);
                setEthValue("");
              }

            }
            if (sendToken == "DAI") {
              var daiValue = Web3.utils.toWei(ethValue, "ether")
              setLoader(true);
              var depositTxn2 = await crossChainMessenger.withdrawERC20("0xb93cba7013f4557cDFB590fD152d24Ef4063485f", "0x7c6b91D9Be155A6Db01f749217d76fF02A7227F2", daiValue);;
              var receiptDAI = await depositTxn2.wait()
              if (receiptDAI) {
                setLoader(false);
                setEthValue("")
              }
            }

            if (sendToken == "USDT") {
              var usdtValue = parseInt(ethValue * 1000000)
              setLoader(true);
              var receiptUSDT = await crossChainMessenger.withdrawERC20("0xfad6367E97217cC51b4cd838Cc086831f81d38C2", "0x271583ba9e3D866E49A9736c626772e944dD9f2A", usdtValue)
              var getReceiptUSDT = await receiptUSDT.wait();
              if (getReceiptUSDT) {
                setLoader(false);
                setEthValue("")
              }
            }
            if (sendToken == "USDC") {
              var usdcValue = parseInt(ethValue * 1000000)
              setLoader(true);
              var receiptUSDC = await crossChainMessenger.withdrawERC20("0x07865c6E87B9F70255377e024ace6630C1Eaa37F", "0x11FED897ED37C4F526ECe58dEe0F2a54D8F36e04", usdcValue)
              var getReceiptUSDC = await receiptUSDC.wait();
              if (getReceiptUSDC) {
                setLoader(false);
                setEthValue("")
              }
            }
            //-------------------------------------------------------- SEND TOKEN VALUE END-----------------------------------------------------------------

          }
          catch (error) {
            setLoader(false);
            console.log({ error }, 98);
          }
        }
      }

    } catch (error) {
      console.log(error);
    }
  }

  const handleSwitch = () => {
    try {

      switchNetwork(process.env.NEXT_PUBLIC_L2_CHAIN_ID)
    }
    catch (error) {
      console.log(error);
    }
  }
  ////========================================================== HANDLE CHANGE =======================================================================

  const handleChange = (e) => {
    if (sendToken == "ETH") {
      if (data?.formatted < e.target.value) {
        setErrorInput("Insufficient ETH balance.")
      } else {
        setErrorInput("")
      }
      setEthValue(e.target.value)
    }
    if (sendToken == "DAI") {
      if (dataDAI.data?.formatted < e.target.value) {
        setErrorInput("Insufficient DAI balance.")
      } else {
        setErrorInput("")
      }
      setEthValue(e.target.value)
    }
    if (sendToken == "USDT") {
      if (dataUSDT.data?.formatted < e.target.value) {
        setErrorInput("Insufficient DAI balance.")
      } else {
        setErrorInput("")
      }
      setEthValue(e.target.value)
    }
    if (sendToken == "USDC") {
      if (dataUSDC.data?.formatted < e.target.value) {
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
  }, [isConnected])
  return (
    <>
      <section className='bridge_main_wrap'>
        <div className='bridge_inner'>
          <TabMenu />
          <section className='withdraw_wrap'>
            <div className='withdraw_official_wrap'>
              <div className='official_icn'>
                <Image src={verified.src} alt='verified' fluid loading='lazy'/> 
              </div>
              <div className='official_text'>
                <h3>Use the official bridge</h3>
                <p>This usually takes 7 days</p>
                <p>Bridge any token to Goerli Testnet</p>
              </div>
            </div>
            <div className='from_area'>
              <p>From</p>
              <h6>SLICE Testnet</h6>
            </div>
            <div className='input_area_wrap'>
              <div className='input_area'>
                <Form.Group controlId="ethValue">
                  <Form.Control type="number" value={ethValue} onChange={handleChange} placeholder="0" min="0" step="any" />
                </Form.Group>
                {sendToken == "ETH" ? <Ethereum /> : sendToken == "DAI" ? <Dai /> : sendToken == "USDT" ? <Usdt /> : <Usdc />}
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
            {
              sendToken === "ETH" ? isClient && <p className='wallet_bal mt-2'>Balance: {Number(data?.formatted).toFixed(5)} ETH</p> :
                sendToken === "DAI" ? isClient && <p className='wallet_bal mt-2'>Balance: {Number(dataDAI.data?.formatted).toFixed(5)} DAI</p> :
                  sendToken == "USDT" ? isClient && <p className='wallet_bal mt-2'>Balance: {Number(dataUSDT.data?.formatted).toFixed(5)} USDT</p> :
                    <p className='wallet_bal mt-2'>Balance: {Number(dataUSDC.data?.formatted).toFixed(5)} USDC</p>
            }
            <div className='to_area'>
              <p>To</p>
              <h6><Ethereum /> Goerli Testnet</h6>
            </div>
            <div className='receive_wrap'>
              {sendToken == "ETH" ? <Ethereum /> : sendToken == "DAI" ? <Dai /> : sendToken == "USDT" ? <Usdt /> : <Usdc />} You’ll receive: {ethValue ? ethValue : "0"} {sendToken}
            </div>
            <div className='withdraw_btn_wrap'>
              {
                checkMetaMask ? <a className='btn withdraw_btn' href='https://metamask.io/' target='_blank'><Image src={metamask} alt="metamask icn" fluid /> Please Install Metamask Wallet</a> :
                  !isClient ? <button className='btn withdraw_btn' onClick={() => connect()}><Image src={wallet.src} alt="wallet" fluid loading='lazy'/>Connect Wallet</button> :
                    chain?.id !== Number(process.env.NEXT_PUBLIC_L2_CHAIN_ID) ? <button className='btn withdraw_btn' onClick={handleSwitch}><Image src={swap.src} alt="swap" fluid loading='lazy'/>Switch to SLICE Testnet</button> :
                      <button className='btn withdraw_btn' onClick={handleWithdraw} disabled={loader ? true : false}>
                        {
                          loader ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner> : "Withdraw"
                        }
                      </button>
              }
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Withdraw