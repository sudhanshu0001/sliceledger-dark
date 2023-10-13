"use client"
import React, { useState } from 'react'
import "../../assets/style/common/_footer.scss"
import { Container, Col, Row, Form, Spinner, ToastContainer } from "react-bootstrap"
import Link from 'next/link';
import { AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin, BiLogoFacebook, BiLogoTelegram } from "react-icons/bi"
import { BsMedium } from "react-icons/bs"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import SuccessModel from './SuccessModel';
const Footer = () => {
  interface IInputs {
    name: string
    email: string
    subject: string
    message: string

  }
  interface IFormFieldTyp {
    controlId: string
    type: string
    id?: string
    placeholder: string
    min?: number
    validateProp: {
      name: string;
      [key: string]: any
    };
  }
  const { register, reset, formState: { errors }, handleSubmit } = useForm<IInputs>()
  const [loader, setLoader] = useState<boolean>(false)
  const [successModal, setSuccessModal] = useState<boolean>(false)
  const FormInput: IFormFieldTyp[] = [
    {
      id: '1',
      controlId: 'formGroupName',
      type: 'text',
      placeholder: 'Name',
      min: 3,
      validateProp: {
        ...register('name', {
          required: 'Name is Required',
          min: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
          pattern: {
            value: /\S\S+/g,
            message: "Field cannot be empty"
          }
        })
      }
    },
    {
      id: '2',
      controlId: 'formGroupEmail',
      type: 'email',
      placeholder: 'Email',
      validateProp: {
        ...register('email', {
          required: 'Email is Required',
          pattern: {
            value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/,
            message: "Invalid Email Address"
          },
        })
      }
    },
    {
      id: '3',
      controlId: 'formGroupSubject',
      type: 'text',
      placeholder: 'Subject',
      validateProp: {
        ...register('subject', {
          required: 'Subject is Required',
          pattern: {
            value: /\S\S+/g,
            message: "Field cannot be empty"
          }
        })
      }
    },
    {
      id: '4',
      controlId: 'formGroupMessage',
      type: 'textarea',
      placeholder: 'Message',
      validateProp: {
        ...register('message', {
          required: 'Message is Required',
          minLength: {
            value: 3,
            message: 'Message must be at least 3 characters',
          },
          pattern: {
            value: /\S\S+/g,
            message: "Field cannot be empty"
          }
        })
      }
    }
  ]

  const FormField = ({ controlId, type, placeholder, id, validateProp: { name, ...rest } }: IFormFieldTyp) => (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Control type={type} as={type === "textarea" ? "textarea" : "input"} placeholder={placeholder} id={id} name={name} {...rest} onBlur={(e: React.FocusEvent<HTMLInputElement>) => e.target.blur()} />
      {errors[name as keyof IInputs]?.message && (
        <small className="text-danger">
          {errors[name as keyof IInputs]?.message}
        </small>
      )}
    </Form.Group>
  )

  const onSubmit = (data: any) => {
    setLoader(true)
    const bodyFormData = {
      email: data.email,
      message: data.message,
      name: data.name,
      subject: data.subject,
    }
    axios({
      method: "post",
      url: "https://testrpc.sliceledger.io/backend/api/contactApi/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      reset();
      setLoader(false)
      console.log(response);
      setSuccessModal(true)
      document.body.style.overflow = "hidden"
      setTimeout(() => {
        document.body.style.overflow = "auto"
        setSuccessModal(false)

      }, 3000);

    }).catch((err) => {
      console.log(err);
      setLoader(false)
    });
  }

  return (
    <>
      <footer className='app-footer'>
        <Container>
          <Row>
            <Col sm={5} md={5} lg={5} xl={5}>
              <div className='footer-form-wrap'>
                <div className='form-title'>
                  <h3 className='h3-title'>Send us a Message</h3>
                </div>
                <div className='footer-form'>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    {FormInput.map(({ id, ...options }) => (
                      <FormField {...options} key={id} />
                    ))}
                    <button className='btn form-btn' type='submit'>{loader ? <Spinner animation="border" size="sm" /> : "Submit"}</button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6}>
              <div className='footer-contact-wrap'>
                <div className='form-contact-title'>
                  <h3 className='h3-title'>Contact Us</h3>
                </div>
                <div className='form-contact-info'>
                  <h6 className='h6-title'>Company Information</h6>
                  <p>Address: <br />FDRK3822 Compass Building Al Shohada Road Al Hamra Industrial Zone - FZ - Ras al Khaimah, UAE</p>
                  <p>Contact No: <br />+971 585596272</p>
                </div>
                <div className='form-contact-links'>
                  <ul className='contact-links'>
                    <li><Link href="/blog">Blog</Link></li>
                    {/* <li><Link href="https://sliceledger.io/whitepaper" target='_blank' rel="noopener noreferrer">Whitepaper</Link></li> */}
                    <li><Link href="/whitepaper.pdf" target='_blank' rel="noopener noreferrer">Whitepaper</Link></li>
                    <li><Link href="/slice-wallet">Slice Wallet</Link></li>
                    <li><Link href="/slice-extension">Slice Extension</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                  </ul>
                  <ul className='form-copy'>
                    <li><p>Copyright©2023</p></li>
                    <li><p>All rights reserved</p></li>
                    <li><p>Sliceledger</p></li>
                  </ul>
                </div>
                <div className='form-social-links-wrap'>
                  <ul>
                    <li><Link href="https://github.com/sliceledger-blockchain" className='form-social-links' target='_blank' rel="noopener noreferrer"><AiFillGithub /></Link></li>
                    <li><Link href="https://medium.com/@Slice_Ledger" className='form-social-links' target='_blank' rel="noopener noreferrer"><BsMedium /></Link></li>
                    <li><Link href="https://t.me/sliceledger" className='form-social-links' target='_blank' rel="noopener noreferrer"><BiLogoTelegram /></Link></li>
                    <li><Link href="https://www.facebook.com/SliceLedger" className='form-social-links' target='_blank' rel="noopener noreferrer"><BiLogoFacebook /></Link></li>
                    <li><Link href="https://twitter.com/LedgerSlice" className='form-social-links' target='_blank' rel="noopener noreferrer"><AiOutlineTwitter /></Link></li>
                    <li><Link href="https://www.instagram.com/slice.ledger/" className='form-social-links' target='_blank' rel="noopener noreferrer"><AiOutlineInstagram /></Link></li>
                    <li><Link href="https://www.linkedin.com/company/slice-ledger" className='form-social-links' target='_blank' rel="noopener noreferrer"><BiLogoLinkedin /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <ToastContainer />
      {successModal && <SuccessModel />}
    </>
  )
}

export default Footer