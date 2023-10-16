'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Image, NavDropdown, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import "../../assets/style/common/_header.scss";
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight';
import rightIcon from "../../assets/images/icons/rightArrow.png"
import upload from "../../assets/images/icons/upload.png"
import download from "../../assets/images/icons/download.png"
import power from "../../assets/images/icons/power-off.png"
import copy from "../../assets/images/icons/copy.png"
import { usePathname } from 'next/navigation';
// import { MdContentCopy } from "react-icons/md"
// import { MdContentCopy } from "@react-icons/all-files/md/MdContentCopy"
// import { AiOutlineDownload, AiOutlineUpload } from "react-icons/ai";
// import { AiOutlineDownload } from "@react-icons/all-files/ai/AiOutlineDownload";
// import { AiOutlineUpload } from "@react-icons/all-files/ai/AiOutlineUpload";
// import { BiPowerOff } from "react-icons/bi"
// import { BiPowerOff } from "@react-icons/all-files/bi/BiPowerOff"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAccount, useConnect, useEnsName } from 'wagmi';
import { disconnect } from '@wagmi/core'
import { InjectedConnector } from 'wagmi/connectors/injected'
const Header = () => {
  const pathName = usePathname()
  const { address, isConnected } = useAccount()
  const [isClient, setIsClient] = useState<boolean>(false)
  const [copyTextSourceCode, setCopyTextSourceCode] = useState<string>("Copy address to clipboard")
  // =========================================== COPY FUNCTIONALITY ===========================================

  const handleSourceCopy = () => {
    if (copyTextSourceCode === "Copy address to clipboard") {
      setCopyTextSourceCode("Copied.")
    }
  }
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {copyTextSourceCode}
    </Tooltip>
  );
  // -----------------------------------------------------------------------------------------------------------
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const handleDisconnect = async () => {
    setIsClient(false)
    await disconnect()
  }
  useEffect(() => {
    if (isConnected) {
      setIsClient(true)
    } else {
      setIsClient(false)

    }
  }, [isConnected])
  //---------------------------------------------------------------------------------
  return (
    <header className='app-header'>
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} href="/">
            <Image src={Logo.src} alt="App Logo" fluid loading="lazy" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <NavDropdown title="Wallet" id="wallet-dropdown">
                {/* <NavDropdown.Item as={Link} href="/slice-wallet"><AiOutlineArrowRight /> Slice Wallet</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/slice-extension"><AiOutlineArrowRight /> Slice Extension</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} href="/slice-wallet"><Image src={rightIcon.src} alt='Right Icon' fluid loading='lazy' /> Slice Wallet</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/slice-extension"><Image src={rightIcon.src} alt='Right Icon' fluid loading='lazy' /> Slice Extension</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} href="/bridge" className={`${pathName === "/bridge" || pathName === "/bridge/withdraw" || pathName === "/bridge/account" || pathName === "/bridge/account/withdraw" ? "active" : ""}`}>Bridge</Nav.Link>
              <Nav.Link as={Link} href="https://slicechain.gitbook.io/docs/" target='_blank'>Developers</Nav.Link>
              <Nav.Link as={Link} href="/blog" className={`${pathName === "/blog" ? "active" : ""}`}>Blog</Nav.Link>
              {
                pathName === "/bridge" || pathName === "/bridge/withdraw" || pathName === "/bridge/account" || pathName === "/bridge/account/withdraw" ?
                  <div className='connect_wallet_wrap' >
                    {
                      isClient ?
                        <Dropdown >
                          <Dropdown.Toggle variant="success" id="slice_header_dropdown" >
                            {address && address.slice(0, 5)}...{address && address.slice(-5)}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <div className='user_profile_wrap'>
                              <figure className='user_profile'>
                                <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAsElEQVRYR2PslBX+z4AHHLiVgiLroDYHn3IGUtUzjjpg0IUAehyiRzipaYCQfow0MOoAuoeA5/dylHIAPY7RHWSt9Q5vOXD0mhDecgPdPMZRBwx4CJBaEOFNAFgkCZUbJNcFow4YDYHREBjwEKC0LkD3AMnlwKgDqB4CLYqpKO0BQvX5b5YgvOmQ9c86FHlC7QnGUQcMeAigN0jQIxg90aGnEUrVY7QJKTWQVAePOgAAXAoAZIiZ6M4AAAAASUVORK5CYII=' alt="Profile Icon" />
                              </figure>
                              <h4>{address && address.slice(0, 5)}...{address && address.slice(-5)}
                                <OverlayTrigger
                                  placement="top"
                                  delay={{ show: 250, hide: 250 }}
                                  overlay={renderTooltip}>
                                  <CopyToClipboard text={address || ""}>
                                    <span className="d-inline-block"><Image src={copy.src} alt='Copy Icon' fluid loading='lazy' onClick={handleSourceCopy} /> </span>
                                  </CopyToClipboard>
                                </OverlayTrigger>
                              </h4>
                            </div>
                            {/* <Dropdown.Item as={Link} href="/bridge/account"><AiOutlineDownload /> View Deposit</Dropdown.Item>
                            <Dropdown.Item as={Link} href="/bridge/account/withdraw"><AiOutlineUpload /> View Withdrawals</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDisconnect()}><BiPowerOff /> Disconnect</Dropdown.Item> */}
                            <Dropdown.Item as={Link} href="/bridge/account"><Image src={download.src} alt='download Icon' fluid loading='lazy' /> View Deposit</Dropdown.Item>
                            <Dropdown.Item as={Link} href="/bridge/account/withdraw"><Image src={upload.src} alt='upload Icon' fluid loading='lazy' /> View Withdrawals</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDisconnect()}><Image src={power.src} alt='power Icon' fluid loading='lazy' /> Disconnect</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        :
                        <button className='btn connect_wallet' onClick={() => connect()}>Connect Wallet</button>
                    }
                  </div> : ""
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header