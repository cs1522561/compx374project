import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

import PerrinnLogo from '../../images/PERRINN_logo_Whiteback.png'
import ThrillLogo from '../../images/ThrillCapitalLOGO.png'
import P424Car from '../../images/Perrin424_4.png'
import Nurburg from '../../images/PERRINNNurburgring.png'
import david_tomlinson from '../../images/David Tomlinson.png'

import './styles/about.css'

export default function About() {
    return(
        <>
            <div style={{marginTop: '90px'}}>
                <div className='about-grad'/>
                <div className='about-grad-info'>
                    <h1><b>About Us</b></h1>
                </div>
            </div>
            <div className="info-block-1">
                <Row className="justify-content-center align-items-center">
                    <Col xs={3}>
                        <img src={PerrinnLogo} title='The Challenge' height={85}/>
                    </Col>
                    <Col xs={5} >
                        <h2><b>PERRINN</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis risus, sit amet porttitor
                            elit. Proin sagittis aliquam orci sagittis sodales. Praesent ut sapien enim. Nam at dui et lacus efficitur
                            finibus nec et turpis. Donec malesuada ac nunc ut placerat. Morbi euismod ligula nec arcu commodo, a aliquam
                            lorem vestibulum. Suspendisse potenti. Nunc id imperdiet ex. Nam venenatis varius metus non tincidunt. Duis
                            tempus, purus eget semper dignissim, odio lorem convallis elit, at interdum sem quam ac velit. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nam ut metus purus......</p>
                        <Button variant='primary' href='https://discover.perrinn.com/'>Learn more</Button>
                    </Col> 
                </Row>
            </div>

            <div className="info-block-2">
                <Row className="justify-content-center align-items-center">
                    <Col xs={5} >
                        <h2><b>ThrillCapital</b></h2>
                        <br/>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={2}>
                                <img src={david_tomlinson} title='David Tomlinson' height={85}/>
                            </Col>
                            <Col xs={10}>
                                <h5><b>David Tomlinson</b></h5>
                                <h6><b>Founder</b></h6>
                            </Col>
                        </Row>
                        <br/>
                        
                        <p>ThrillCapital combines David’s passion for the Financial Markets and Motorsport. 
                        He is an active trader and previously traded his own Forex account with Westpac Institutional Bank. David holds a 
                        BEng (Electrical) from Auckland University New Zealand and a MBA from Rutgers University New Jersey.</p>
                        <h5><b>ThrillCapital Motorsport Technology Fund</b></h5>
                        <p>
                        Monetising the development of racing technologies is the best way to get racing talent funded. We are actively 
                        looking to invest in early stage Motorsport Technology companies.
                        <br/><br/>
                        Technologies of interest include; Gaming/Simulation – AI/AV – EV – VR/AR – Cloud based Design – Vehicle Dynamics – 
                        Composites.
                        <br/><br/>
                        Target companies will seed a Racing Technology Fund and R&D Hub. The ThrillCapital Motorsport Technology Fund is a 
                        Private Equity Search Fund with search costs financed by ThrillCapital. We co-invest or have a carried interest in Fund 
                        portfolio companies. No Fund Management fees will be charged to investors.
                        <br/><br/>
                        A cornerstone project for the Fund is the Perrinn 424 Le Mans Car. This is an incredibly exciting initiative to build 
                        the world’s fastest electric car. The Fund is actively seeking to engage with any technology, commercial, government or 
                        educational partners tangential to the Perrinn 424 project.
                        <br/><br/>
                        Interested Companies, Accredited Investors or Partners can email <b>david@thrillcapital.com</b>
                        </p>
                        <Button variant='primary' href='https://thrillcapital.com/'>Learn more</Button>
                    </Col> 
                    <Col xs={3}>
                        <img src={ThrillLogo} title='The Challenge' height={85}/>
                    </Col>
                </Row>
            </div>

            <div className="info-block-3">
                <Row className="justify-content-center align-items-center">
                    <Col xs={3}>
                        <img src={P424Car} title='The Challenge' height={300}/>
                    </Col>
                    <Col xs={5} >
                        <h2><b>P424 The Car</b></h2>
                        <p>"The objective of Project 424 is to develop the fastest electric hypercar in the world and a source of 
                            inspiration for those who want to innovate, learn and collaborate."</p>
                        <Button variant='primary' href='https://discover.perrinn.com/'>Learn more</Button>
                    </Col> 
                </Row>
            </div>

            <div className="info-block-4">
                <Row className="justify-content-center align-items-center">
                    <Col xs={5} >
                        <h2><b>The Track</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis risus, sit amet porttitor
                            elit. Proin sagittis aliquam orci sagittis sodales. Praesent ut sapien enim. Nam at dui et lacus efficitur
                            finibus nec et turpis. Donec malesuada ac nunc ut placerat. Morbi euismod ligula nec arcu commodo, a aliquam
                            lorem vestibulum. Suspendisse potenti. Nunc id imperdiet ex. Nam venenatis varius metus non tincidunt. Duis
                            tempus, purus eget semper dignissim, odio lorem convallis elit, at interdum sem quam ac velit. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nam ut metus purus.</p>
                        <Button variant='primary' href='https://discover.perrinn.com/perrinn-com/our-project-424'>Learn more</Button>
                    </Col> 
                    <Col xs={3}>
                        <img src={Nurburg} title='The Challenge' height={250}/>
                    </Col>
                </Row>
            </div>
        </>
    );
}

{/*
<div className="about">
            <h1>About ThrillCapital</h1>
            <h2>David Tomlinson</h2>
            <h3>Founder</h3>
            <img src={david_tomlinson} alt='David Tomlinson'></img>
            <p>ThrillCapital combines David’s passion for the Financial Markets and Motorsport. He is an active trader and previously traded his own Forex account with Westpac Institutional Bank. David holds a BEng (Electrical) from Auckland University New Zealand and a MBA from Rutgers University New Jersey.</p>
            <h3>ThrillCapital Motorsport Technology Fund</h3>
            <p>Monetising the development of racing technologies is the best way to get racing talent funded. We are actively looking to invest in early stage Motorsport Technology companies.</p>
            <p>Technologies of interest include; Gaming/Simulation – AI/AV – EV – VR/AR – Cloud based Design – Vehicle Dynamics – Composites.</p>
            <p>Target companies will seed a Racing Technology Fund and R&D Hub. The ThrillCapital Motorsport Technology Fund is a Private Equity Search Fund with search costs financed by ThrillCapital. We co-invest or have a carried interest in Fund portfolio companies. No Fund Management fees will be charged to investors.</p>
            <p>A cornerstone project for the Fund is the Perrinn 424 Le Mans Car. This is an incredibly exciting initiative to build the world’s fastest electric car. The Fund is actively seeking to engage with any technology, commercial, government or educational partners tangential to the Perrinn 424 project.</p>
            <p>Interested Companies, Accredited Investors or Partners can email <b>david@thrillcapital.com</b></p> 
        </div>
*/}
  