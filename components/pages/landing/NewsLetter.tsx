"use client"
import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import "../../../assets/style/pages/landing/_newsLetter.scss"
import { useForm } from 'react-hook-form'
import axios from 'axios'
const NewsLetter = () => {

    // ================================= Newsletter ================================
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loader, setLoader] = useState<boolean>(false)
    const onSubmit = (data: any) => {
        setLoader(true)
        const bodyFormData = {
            email: data.email,
        }
        axios({
            method: "post",
            url: "https://sliceledger.io/backend/api/emailSubscribe",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(function (response) {
            reset();
            setLoader(false)
        }).catch(((err) => { console.log(err) }));
    }
    // ================================= Newsletter ================================

    return (
        <>
            <section className='news-letter-wrap'>
                <Container fluid>
                    <figure className='news-letter-img'>
                        <svg width="1720" height="543" viewBox="0 0 1720 543" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="M10 10V456H393L440.5 533H1710V46H1437L1395.5 10H1049.12L1033.5 22H722.5L702.75 10H10Z" fill="#0052FF" />
                            <mask id="mask0_135_6670" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="10" y="10" width="1700" height="523">
                                <path d="M10 10V456H393L440.5 533H1710V46H1437L1395.5 10H1049.12L1033.5 22H722.5L702.75 10H10Z" fill="#0052FF" />
                            </mask>
                            <g mask="url(#mask0_135_6670)">
                                <g style={{ mixBlendMode: "overlay" }} opacity="0.38">
                                    <path d="M10 594H94.9V509.1H10V594Z" fill="url(#pattern0)" />
                                    <path d="M94.8999 594H179.8V509.1H94.8999V594Z" fill="url(#pattern1)" />
                                    <path d="M179.8 594H264.7V509.1H179.8V594Z" fill="url(#pattern2)" />
                                    <path d="M264.7 594H349.6V509.1H264.7V594Z" fill="url(#pattern3)" />
                                    <path d="M349.6 594H434.5V509.1H349.6V594Z" fill="url(#pattern4)" />
                                    <path d="M434.5 594H519.4V509.1H434.5V594Z" fill="url(#pattern5)" />
                                    <path d="M519.4 594H604.3V509.1H519.4V594Z" fill="url(#pattern6)" />
                                    <path d="M604.3 594H689.2V509.1H604.3V594Z" fill="url(#pattern7)" />
                                    <path d="M689.2 594H774.1V509.1H689.2V594Z" fill="url(#pattern8)" />
                                    <path d="M774.1 594H859V509.1H774.1V594Z" fill="url(#pattern9)" />
                                    <path d="M859 594H943.9V509.1H859V594Z" fill="url(#pattern10)" />
                                    <path d="M943.9 594H1028.8V509.1H943.9V594Z" fill="url(#pattern11)" />
                                    <path d="M1028.8 594H1113.7V509.1H1028.8V594Z" fill="url(#pattern12)" />
                                    <path d="M1113.7 594H1198.6V509.1H1113.7V594Z" fill="url(#pattern13)" />
                                    <path d="M1198.6 594H1283.5V509.1H1198.6V594Z" fill="url(#pattern14)" />
                                    <path d="M1283.5 594H1368.4V509.1H1283.5V594Z" fill="url(#pattern15)" />
                                    <path d="M1368.4 594H1453.3V509.1H1368.4V594Z" fill="url(#pattern16)" />
                                    <path d="M1453.3 594H1538.2V509.1H1453.3V594Z" fill="url(#pattern17)" />
                                    <path d="M1538.2 594H1623.1V509.1H1538.2V594Z" fill="url(#pattern18)" />
                                    <path d="M1623.1 594H1708V509.1H1623.1V594Z" fill="url(#pattern19)" />
                                    <path d="M1708 594H1792.9V509.1H1708V594Z" fill="url(#pattern20)" />
                                    <path d="M10 509.1H94.9V424.2H10V509.1Z" fill="url(#pattern21)" />
                                    <path d="M94.8999 509.1H179.8V424.2H94.8999V509.1Z" fill="url(#pattern22)" />
                                    <path d="M179.8 509.1H264.7V424.2H179.8V509.1Z" fill="url(#pattern23)" />
                                    <path d="M264.7 509.1H349.6V424.2H264.7V509.1Z" fill="url(#pattern24)" />
                                    <path d="M349.6 509.1H434.5V424.2H349.6V509.1Z" fill="url(#pattern25)" />
                                    <path d="M434.5 509.1H519.4V424.2H434.5V509.1Z" fill="url(#pattern26)" />
                                    <path d="M519.4 509.1H604.3V424.2H519.4V509.1Z" fill="url(#pattern27)" />
                                    <path d="M604.3 509.1H689.2V424.2H604.3V509.1Z" fill="url(#pattern28)" />
                                    <path d="M689.2 509.1H774.1V424.2H689.2V509.1Z" fill="url(#pattern29)" />
                                    <path d="M774.1 509.1H859V424.2H774.1V509.1Z" fill="url(#pattern30)" />
                                    <path d="M859 509.1H943.9V424.2H859V509.1Z" fill="url(#pattern31)" />
                                    <path d="M943.9 509.1H1028.8V424.2H943.9V509.1Z" fill="url(#pattern32)" />
                                    <path d="M1028.8 509.1H1113.7V424.2H1028.8V509.1Z" fill="url(#pattern33)" />
                                    <path d="M1113.7 509.1H1198.6V424.2H1113.7V509.1Z" fill="url(#pattern34)" />
                                    <path d="M1198.6 509.1H1283.5V424.2H1198.6V509.1Z" fill="url(#pattern35)" />
                                    <path d="M1283.5 509.1H1368.4V424.2H1283.5V509.1Z" fill="url(#pattern36)" />
                                    <path d="M1368.4 509.1H1453.3V424.2H1368.4V509.1Z" fill="url(#pattern37)" />
                                    <path d="M1453.3 509.1H1538.2V424.2H1453.3V509.1Z" fill="url(#pattern38)" />
                                    <path d="M1538.2 509.1H1623.1V424.2H1538.2V509.1Z" fill="url(#pattern39)" />
                                    <path d="M1623.1 509.1H1708V424.2H1623.1V509.1Z" fill="url(#pattern40)" />
                                    <path d="M1708 509.1H1792.9V424.2H1708V509.1Z" fill="url(#pattern41)" />
                                    <path d="M10 424.2H94.9V339.3H10V424.2Z" fill="url(#pattern42)" />
                                    <path d="M94.8999 424.2H179.8V339.3H94.8999V424.2Z" fill="url(#pattern43)" />
                                    <path d="M179.8 424.2H264.7V339.3H179.8V424.2Z" fill="url(#pattern44)" />
                                    <path d="M264.7 424.2H349.6V339.3H264.7V424.2Z" fill="url(#pattern45)" />
                                    <path d="M349.6 424.2H434.5V339.3H349.6V424.2Z" fill="url(#pattern46)" />
                                    <path d="M434.5 424.2H519.4V339.3H434.5V424.2Z" fill="url(#pattern47)" />
                                    <path d="M519.4 424.2H604.3V339.3H519.4V424.2Z" fill="url(#pattern48)" />
                                    <path d="M604.3 424.2H689.2V339.3H604.3V424.2Z" fill="url(#pattern49)" />
                                    <path d="M689.2 424.2H774.1V339.3H689.2V424.2Z" fill="url(#pattern50)" />
                                    <path d="M774.1 424.2H859V339.3H774.1V424.2Z" fill="url(#pattern51)" />
                                    <path d="M859 424.2H943.9V339.3H859V424.2Z" fill="url(#pattern52)" />
                                    <path d="M943.9 424.2H1028.8V339.3H943.9V424.2Z" fill="url(#pattern53)" />
                                    <path d="M1028.8 424.2H1113.7V339.3H1028.8V424.2Z" fill="url(#pattern54)" />
                                    <path d="M1113.7 424.2H1198.6V339.3H1113.7V424.2Z" fill="url(#pattern55)" />
                                    <path d="M1198.6 424.2H1283.5V339.3H1198.6V424.2Z" fill="url(#pattern56)" />
                                    <path d="M1283.5 424.2H1368.4V339.3H1283.5V424.2Z" fill="url(#pattern57)" />
                                    <path d="M1368.4 424.2H1453.3V339.3H1368.4V424.2Z" fill="url(#pattern58)" />
                                    <path d="M1453.3 424.2H1538.2V339.3H1453.3V424.2Z" fill="url(#pattern59)" />
                                    <path d="M1538.2 424.2H1623.1V339.3H1538.2V424.2Z" fill="url(#pattern60)" />
                                    <path d="M1623.1 424.2H1708V339.3H1623.1V424.2Z" fill="url(#pattern61)" />
                                    <path d="M1708 424.2H1792.9V339.3H1708V424.2Z" fill="url(#pattern62)" />
                                    <path d="M10 339.3H94.9V254.4H10V339.3Z" fill="url(#pattern63)" />
                                    <path d="M94.8999 339.3H179.8V254.4H94.8999V339.3Z" fill="url(#pattern64)" />
                                    <path d="M179.8 339.3H264.7V254.4H179.8V339.3Z" fill="url(#pattern65)" />
                                    <path d="M264.7 339.3H349.6V254.4H264.7V339.3Z" fill="url(#pattern66)" />
                                    <path d="M349.6 339.3H434.5V254.4H349.6V339.3Z" fill="url(#pattern67)" />
                                    <path d="M434.5 339.3H519.4V254.4H434.5V339.3Z" fill="url(#pattern68)" />
                                    <path d="M519.4 339.3H604.3V254.4H519.4V339.3Z" fill="url(#pattern69)" />
                                    <path d="M604.3 339.3H689.2V254.4H604.3V339.3Z" fill="url(#pattern70)" />
                                    <path d="M689.2 339.3H774.1V254.4H689.2V339.3Z" fill="url(#pattern71)" />
                                    <path d="M774.1 339.3H859V254.4H774.1V339.3Z" fill="url(#pattern72)" />
                                    <path d="M859 339.3H943.9V254.4H859V339.3Z" fill="url(#pattern73)" />
                                    <path d="M943.9 339.3H1028.8V254.4H943.9V339.3Z" fill="url(#pattern74)" />
                                    <path d="M1028.8 339.3H1113.7V254.4H1028.8V339.3Z" fill="url(#pattern75)" />
                                    <path d="M1113.7 339.3H1198.6V254.4H1113.7V339.3Z" fill="url(#pattern76)" />
                                    <path d="M1198.6 339.3H1283.5V254.4H1198.6V339.3Z" fill="url(#pattern77)" />
                                    <path d="M1283.5 339.3H1368.4V254.4H1283.5V339.3Z" fill="url(#pattern78)" />
                                    <path d="M1368.4 339.3H1453.3V254.4H1368.4V339.3Z" fill="url(#pattern79)" />
                                    <path d="M1453.3 339.3H1538.2V254.4H1453.3V339.3Z" fill="url(#pattern80)" />
                                    <path d="M1538.2 339.3H1623.1V254.4H1538.2V339.3Z" fill="url(#pattern81)" />
                                    <path d="M1623.1 339.3H1708V254.4H1623.1V339.3Z" fill="url(#pattern82)" />
                                    <path d="M1708 339.3H1792.9V254.4H1708V339.3Z" fill="url(#pattern83)" />
                                    <path d="M10 254.4H94.9V169.5H10V254.4Z" fill="url(#pattern84)" />
                                    <path d="M94.8999 254.4H179.8V169.5H94.8999V254.4Z" fill="url(#pattern85)" />
                                    <path d="M179.8 254.4H264.7V169.5H179.8V254.4Z" fill="url(#pattern86)" />
                                    <path d="M264.7 254.4H349.6V169.5H264.7V254.4Z" fill="url(#pattern87)" />
                                    <path d="M349.6 254.4H434.5V169.5H349.6V254.4Z" fill="url(#pattern88)" />
                                    <path d="M434.5 254.4H519.4V169.5H434.5V254.4Z" fill="url(#pattern89)" />
                                    <path d="M519.4 254.4H604.3V169.5H519.4V254.4Z" fill="url(#pattern90)" />
                                    <path d="M604.3 254.4H689.2V169.5H604.3V254.4Z" fill="url(#pattern91)" />
                                    <path d="M689.2 254.4H774.1V169.5H689.2V254.4Z" fill="url(#pattern92)" />
                                    <path d="M774.1 254.4H859V169.5H774.1V254.4Z" fill="url(#pattern93)" />
                                    <path d="M859 254.4H943.9V169.5H859V254.4Z" fill="url(#pattern94)" />
                                    <path d="M943.9 254.4H1028.8V169.5H943.9V254.4Z" fill="url(#pattern95)" />
                                    <path d="M1028.8 254.4H1113.7V169.5H1028.8V254.4Z" fill="url(#pattern96)" />
                                    <path d="M1113.7 254.4H1198.6V169.5H1113.7V254.4Z" fill="url(#pattern97)" />
                                    <path d="M1198.6 254.4H1283.5V169.5H1198.6V254.4Z" fill="url(#pattern98)" />
                                    <path d="M1283.5 254.4H1368.4V169.5H1283.5V254.4Z" fill="url(#pattern99)" />
                                    <path d="M1368.4 254.4H1453.3V169.5H1368.4V254.4Z" fill="url(#pattern100)" />
                                    <path d="M1453.3 254.4H1538.2V169.5H1453.3V254.4Z" fill="url(#pattern101)" />
                                    <path d="M1538.2 254.4H1623.1V169.5H1538.2V254.4Z" fill="url(#pattern102)" />
                                    <path d="M1623.1 254.4H1708V169.5H1623.1V254.4Z" fill="url(#pattern103)" />
                                    <path d="M1708 254.4H1792.9V169.5H1708V254.4Z" fill="url(#pattern104)" />
                                    <path d="M10 169.5H94.9V84.6H10V169.5Z" fill="url(#pattern105)" />
                                    <path d="M94.8999 169.5H179.8V84.6H94.8999V169.5Z" fill="url(#pattern106)" />
                                    <path d="M179.8 169.5H264.7V84.6H179.8V169.5Z" fill="url(#pattern107)" />
                                    <path d="M264.7 169.5H349.6V84.6H264.7V169.5Z" fill="url(#pattern108)" />
                                    <path d="M349.6 169.5H434.5V84.6H349.6V169.5Z" fill="url(#pattern109)" />
                                    <path d="M434.5 169.5H519.4V84.6H434.5V169.5Z" fill="url(#pattern110)" />
                                    <path d="M519.4 169.5H604.3V84.6H519.4V169.5Z" fill="url(#pattern111)" />
                                    <path d="M604.3 169.5H689.2V84.6H604.3V169.5Z" fill="url(#pattern112)" />
                                    <path d="M689.2 169.5H774.1V84.6H689.2V169.5Z" fill="url(#pattern113)" />
                                    <path d="M774.1 169.5H859V84.6H774.1V169.5Z" fill="url(#pattern114)" />
                                    <path d="M859 169.5H943.9V84.6H859V169.5Z" fill="url(#pattern115)" />
                                    <path d="M943.9 169.5H1028.8V84.6H943.9V169.5Z" fill="url(#pattern116)" />
                                    <path d="M1028.8 169.5H1113.7V84.6H1028.8V169.5Z" fill="url(#pattern117)" />
                                    <path d="M1113.7 169.5H1198.6V84.6H1113.7V169.5Z" fill="url(#pattern118)" />
                                    <path d="M1198.6 169.5H1283.5V84.6H1198.6V169.5Z" fill="url(#pattern119)" />
                                    <path d="M1283.5 169.5H1368.4V84.6H1283.5V169.5Z" fill="url(#pattern120)" />
                                    <path d="M1368.4 169.5H1453.3V84.6H1368.4V169.5Z" fill="url(#pattern121)" />
                                    <path d="M1453.3 169.5H1538.2V84.6H1453.3V169.5Z" fill="url(#pattern122)" />
                                    <path d="M1538.2 169.5H1623.1V84.6H1538.2V169.5Z" fill="url(#pattern123)" />
                                    <path d="M1623.1 169.5H1708V84.6H1623.1V169.5Z" fill="url(#pattern124)" />
                                    <path d="M1708 169.5H1792.9V84.6H1708V169.5Z" fill="url(#pattern125)" />
                                    <path d="M10 84.6001H94.9V-0.299896H10V84.6001Z" fill="url(#pattern126)" />
                                    <path d="M94.8999 84.6001H179.8V-0.299896H94.8999V84.6001Z" fill="url(#pattern127)" />
                                    <path d="M179.8 84.6001H264.7V-0.299896H179.8V84.6001Z" fill="url(#pattern128)" />
                                    <path d="M264.7 84.6001H349.6V-0.299896H264.7V84.6001Z" fill="url(#pattern129)" />
                                    <path d="M349.6 84.6001H434.5V-0.299896H349.6V84.6001Z" fill="url(#pattern130)" />
                                    <path d="M434.5 84.6001H519.4V-0.299896H434.5V84.6001Z" fill="url(#pattern131)" />
                                    <path d="M519.4 84.6001H604.3V-0.299896H519.4V84.6001Z" fill="url(#pattern132)" />
                                    <path d="M604.3 84.6001H689.2V-0.299896H604.3V84.6001Z" fill="url(#pattern133)" />
                                    <path d="M689.2 84.6001H774.1V-0.299896H689.2V84.6001Z" fill="url(#pattern134)" />
                                    <path d="M774.1 84.6001H859V-0.299896H774.1V84.6001Z" fill="url(#pattern135)" />
                                    <path d="M859 84.6001H943.9V-0.299896H859V84.6001Z" fill="url(#pattern136)" />
                                    <path d="M943.9 84.6001H1028.8V-0.299896H943.9V84.6001Z" fill="url(#pattern137)" />
                                    <path d="M1028.8 84.6001H1113.7V-0.299896H1028.8V84.6001Z" fill="url(#pattern138)" />
                                    <path d="M1113.7 84.6001H1198.6V-0.299896H1113.7V84.6001Z" fill="url(#pattern139)" />
                                    <path d="M1198.6 84.6001H1283.5V-0.299896H1198.6V84.6001Z" fill="url(#pattern140)" />
                                    <path d="M1283.5 84.6001H1368.4V-0.299896H1283.5V84.6001Z" fill="url(#pattern141)" />
                                    <path d="M1368.4 84.6001H1453.3V-0.299896H1368.4V84.6001Z" fill="url(#pattern142)" />
                                    <path d="M1453.3 84.6001H1538.2V-0.299896H1453.3V84.6001Z" fill="url(#pattern143)" />
                                    <path d="M1538.2 84.6001H1623.1V-0.299896H1538.2V84.6001Z" fill="url(#pattern144)" />
                                    <path d="M1623.1 84.6001H1708V-0.299896H1623.1V84.6001Z" fill="url(#pattern145)" />
                                    <path d="M1708 84.6001H1792.9V-0.299896H1708V84.6001Z" fill="url(#pattern146)" />
                                </g>
                            </g>
                            <path d="M1458 391.11V385L1442 401H1448.2L1457.99 391.11H1458Z" fill="#0052FF" />
                            <path d="M10 464H390.5L432 533H10V464Z" fill="#D9D9D9" />
                            <path d="M177.565 443H190.718L157.153 476.565H144L177.565 443ZM230.396 443H217.243L183.677 476.565H196.83L230.396 443ZM210.557 443H197.404L163.839 476.565H176.992L210.557 443ZM309.751 443H296.598L263.032 476.565H276.185L309.751 443ZM250.234 443H237.082L203.516 476.565H216.669L250.234 443ZM289.912 443H276.759L243.194 476.565H256.346L289.912 443ZM270.073 443H256.92L223.355 476.565H236.508L270.073 443Z" fill="white" stroke="white" />
                            <path d="M723.254 11.4355L723.369 11.5H723.5H1032H1032.15L1032.27 11.4198L1049.15 0.5H1396.32L1437.18 35.3803L1437.32 35.5H1437.5H1719.5V542.5H0.5V0.5H703.869L723.254 11.4355Z" stroke="#D9D9D9" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern6" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern7" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern8" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern9" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern10" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern11" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern12" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern13" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern14" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern15" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern16" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern17" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern18" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern20" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern21" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern22" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern23" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern24" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern25" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern26" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern27" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern28" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern29" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern30" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern31" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern32" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern33" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern34" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern35" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern36" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern37" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern38" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern39" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern40" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern41" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern42" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern43" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern44" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern45" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern46" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern47" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern48" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern49" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern50" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern51" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern52" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern53" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern54" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern55" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern56" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern57" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern58" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern59" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern60" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern61" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern62" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern63" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern64" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern65" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern66" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern67" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern68" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern69" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern70" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern71" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern72" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern73" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern74" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern75" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern76" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern77" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern78" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern79" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern80" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern81" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern82" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern83" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern84" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern85" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern86" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern87" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern88" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern89" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern90" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern91" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern92" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern93" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern94" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern95" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern96" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern97" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern98" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern99" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern100" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern101" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern102" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern103" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern104" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern105" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern106" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern107" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern108" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern109" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern110" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern111" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern112" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern113" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern114" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern115" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern116" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern117" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern118" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern119" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern120" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern121" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern122" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern123" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern124" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern125" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern126" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern127" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern128" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern129" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern130" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern131" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern132" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern133" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern134" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern135" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern136" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern137" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern138" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern139" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern140" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern141" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern142" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern143" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern144" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern145" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <pattern id="pattern146" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_135_6670" transform="translate(-1.4165e-10 -0.00155763) scale(0.00909091)" />
                                </pattern>
                                <image id="image0_135_6670" width="110" height="110" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA/UExURUdwTC0tLS4uLi0tLSwsLC4uLi0tLS4uLi4uLjAwMC4uLi4uLiAgIC0tLSsrKy4uLi0tLS0tLSwsLCgoKC4uLkBuB1cAAAAUdFJOUwCggL8g70D+ARCQ3xBQMHBfr5AhGUB7AgAAAalJREFUaN7tmctuQyEMBY/BpgHuI2nP/39rF7lpFt1gV+rK3o8GuEGKBgDQSteIAgBwuqh5UbvRRutYmt6EtP2yWVnjehuTPAFgJx+LrueokHfgJIeD64U8ATUWOKfQVOnlCnmgUuCewTr9qxys+PmEnulGzh6gENkcUMgRocAW0TVGuEawR3SdEa4TRGgY4lKXutSlLnWpS13qUpe61KUudalL3W/dP6eAfw4dJaITRrhB0AKnopMBbptEjdQmYQ1whTMcGI9IYFTg/q69i2fyIHfgJIvjPLfxyrVGStsWqfZp7zg8P9e4rRW7bM/a65mq7x+MgzpebomVdl+hfy3ymN7SPg8AuJujtMu8PsFhP+LFS1dpB7D7SrsKuQM6/RdocHb/BSq0Lwir/5pXivgj9oMVZKC0qzHAxUv7YOz5IUt7/jVKXepSl7rUpS51qUtd6lKXutSlLnX5jvCbQiS0A8JYoActkuAYeUdQMhwYKx/+zQl6LJ+qGsvNA90KTf8Uh+VrXbgNfjxj9PS+IzzT926c0rbbwmytGO1+Ldcb9vtrmx+OqQrgGxDGR1saeK6/AAAAAElFTkSuQmCC" />
                            </defs>
                        </svg>
                        <div className='news-letter-inner-wrap'>
                            <div className='news-letter-title'>
                                <p>Access to latest news & events</p>
                                <h2 className='h2-title'>Subscribe<br /> to Our Newsletter</h2>
                            </div>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <div className='news-letter-input'>
                                    <input type="email" placeholder='Enter your email' className='form-control'  aria-invalid={errors.mail ? "true" : "false"}  {...register("email", {
                                        required: 'Email is Required',
                                        pattern: {
                                            value: /[A-Za-z0-9]+@[A-Za-z0-9.-]+[A-Z|a-z]{2,}/ym,
                                            message: "Invalid Email Address"
                                        }
                                    })} />
                                    <div className='input-btn-wrap'>
                                        <button className='btn input-btn' type='submit'>Submit</button>
                                    </div>
                                </div>
                                    {errors.email?.message && (<p className='text-danger'>{errors.email.message}</p>)}
                            </Form>
                        </div>
                    </figure>
                </Container>
            </section>
        </>
    )
}

export default NewsLetter