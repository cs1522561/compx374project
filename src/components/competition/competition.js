import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import './styles/competition.css';


import Nurburgring from '../../images/Nürburg.png'

function Competition() {
    const navigate = useNavigate()
    
    
    function navToComp() {
        navigate('/competition')
    }

    function navToDown() {
        navigate('/download')
    }

    function navToLogin() {
        navigate('/user-profile')
    }
    

    return(
        <>
            <div className="mb-1">
                <div className='comp-grad'/>
                <div className='comp-grad-info'>
                    <h1><b>Competition</b></h1>
                    <h1><b>Details</b></h1>
                </div>
            </div>

            <div className="mb-1-info-block">
                <Row className="justify-content-center align-items-center">
                    <Col xs={4} style={{paddingRight: '30px'}}>
                        <h3><b>1: 424 Unity Simulation</b></h3>
                        <p style={{textAlign: 'justify'}}>Engineer - learn - gaming. Race the 424 inside a virtual simulation of the Nürburgring Nordschleife. We will
                        assign 6 engineering tasks for teams to work at, and race to test the designs.</p>
                    </Col>
                    <Col xs={4} style={{paddingRight: '30px'}}>
                        <h3><b>2: Nürburgring lap</b></h3>
                        <p style={{textAlign: 'justify'}}>We are targeting to beat the electric record and possibly the all time record with the 424 at the Nürburgring. 
                        First with the digital car, and then with a ‘real world’ lap.</p>
                    </Col>
                    <Col xs={4}>
                        <h3><b>3: Le Mans 24hr</b></h3>
                        <p style={{textAlign: 'justify'}}>"Racing at Le Mans 24h is the ultimate goal for our electric car. I know this race very well, I have designed
                        and engineered a few cars there. I cannot wait to go to Le Mans with 424."</p>
                    </Col>
                </Row>
            </div>

            <div className="mb-2-info-block" style={{}} >
                <Row className="justify-content-center align-items-center">
                    <Col xs={4} style={{paddingRight: '30px'}}>
                        <h3><b>Registration</b></h3>
                        <p>To participate in the Perrinn424 competition, Teams must complete the registration process on the Website by
                        11:59:59 p.m on XX/XX/XXXX.</p>
                        <Button variant='primary' onClick={navToLogin}>Learn more</Button>
                    </Col>
                        <Col xs={4} style={{paddingRight: '30px'}}>
                        <h3><b>Eligibility</b></h3>
                        <p>The competition is open to all Perrinn members. Anyone can compete including academic institutions,
                        corporations and gamers. Collaborations are encouraged.</p>
                        <Button variant='primary' onClick={navToComp}>View Rules</Button>
                    </Col>
                    <Col xs={4}>
                        <h3><b>Prizes</b></h3>
                        <p>The team winning each engineering task wins US$XXXX.XX
                        The sim driving team with the fastest lap at each task stage wins US$XXXX.XX</p>
                        <Button variant='primary' onClick={navToComp}>Learn more</Button>
                    </Col>
                </Row>
            </div>

            <div className="mb-3-info-block" >
                <Row className="justify-content-center align-items-center">
                    <Col xs={7} style={{paddingRight: '30px'}}>
                        <h2 ><b>For Sim Racing Teams:</b></h2>
                        <h3><b>How it works:</b></h3>
                        <p>There are also 6 Compettion Driving Stages. Each Driving Stage is synchronised with an Engineering and Design Stage. 
                        During any stage, the sim racers can race the current PERRINN approved version of the 424 as many times as they like around the
                        P424 Unity Simulation of the Nürburgring Nordschleife. The fastest lap from each team will automatically move
                        to a Leaderboard. At the end of the task stage, the competition will briefly close while the Judges verify and select the
                        winning lap time.
                        Like in any high performance race team, this simulation tool will help PERRINN contributors to validate
                        technical choices made on 424 design. The influence of design or set-up modifications on performance and even
                        reliability (behaviour of the battery for example) can be evaluated even before any 424 prototype is built.
                        </p>
                        <Button variant='primary' onClick={navToDown}>Download Unity Simulation</Button>
                    </Col>
                    <Col xs={5}>
                        <img src={Nurburgring} title='The Challenge' height={400}/>
                    </Col>
                </Row>
            </div>


        </>
    );
}
  
export default Competition;
  