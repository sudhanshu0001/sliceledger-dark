'use client';
import Link from 'next/link';
import React from 'react'
import { Navbar, Container, Nav, Image, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import "../../assets/style/common/_header.scss";
import { AiOutlineArrowRight } from 'react-icons/ai';
const Header = () => {
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
                <NavDropdown.Item as={Link} href="/slice-wallet"><AiOutlineArrowRight /> Slice Wallet</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/slice-extension"><AiOutlineArrowRight /> Slice Extension</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} href="/">Bridge</Nav.Link>
              <Nav.Link as={Link} href="https://slicechain.gitbook.io/docs/" target='_blank'>Developers</Nav.Link>
              <Nav.Link as={Link} href="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header