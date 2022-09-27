import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database, storage } from  '../../database/Firebase.js'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { Container, Row, Col, Button } from "react-bootstrap";

import WindowsIcon from '../../icons/windows.png'
import AppleIcon from '../../icons/apple.png'
import LinuxIcon from '../../icons/linux.png'
import { useNavigate } from 'react-router-dom';

import './styles/download.css';

export default function Download() {
    const navigate = useNavigate()
    const downloadWindows = 'https://firebasestorage.googleapis.com/v0/b/perrinn-424-thrill-capital.appspot.com/o/test%2FBuild%202022-07-12%20PERRINN%20424%20Windows.zip?alt=media&token=a31a6a9f-ab19-4aa7-a26f-7856f42c9e02'
    const downloadApple = 'https://firebasestorage.googleapis.com/v0/b/perrinn-424-thrill-capital.appspot.com/o/test%2FBuild%202022-07-12%20PERRINN%20424%20Mac%20OS%20X.app.zip?alt=media&token=8a3f9652-40dd-4a03-99cb-8929fef71f0b'

    function navToLogin() {
        navigate('/user-profile')
    }


    return (
        <div>
            <div className="mb-1">
                <div className='down-grad'/>
                <div className='down-grad-info'>
                    <h1><b>Download</b></h1>
                    <h1><b>Centre</b></h1>
                </div>
            </div>
            <div className="mb-1-info-block">
                <Row className="justify-content-center align-items-center">
                    <Col xs={4} style={{paddingRight: '30px'}}>
                        <h3><b>Windows</b></h3>
                        <p>Install the Simulation driver (Windows) application to setup your car and start driving on your machine now.</p>
                        <Button variant='primary' href={downloadWindows} download>
                            <img src={WindowsIcon} style={{width: '20px', height: 'auto', display: 'inline', marginRight: '10px'}}/>
                            Download now
                        </Button>
                    </Col>
                    <Col xs={4} style={{paddingRight: '30px'}}>
                        <h3><b>MacOS</b></h3>
                        <p>Install the Simulation driver (Mac) application to setup your car and start driving on your machine now.</p>
                        <Button variant='primary' href={downloadApple} download>
                            <img src={AppleIcon} style={{width: '20px', height: 'auto', display: 'inline', marginRight: '10px'}}/>
                            Download now
                        </Button>
                    </Col>
                    <Col xs={4}>
                        <h3><b>Linux</b></h3>
                        <p>Install the Simulation driver (Linux) application to setup your car and start driving on your machine now.</p>
                        <Button variant='primary' onClick={'#!'}>
                            <img src={LinuxIcon} style={{width: '20px', height: 'auto', display: 'inline', marginRight: '10px'}}/>
                            Download now
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="mb-2-info-block">
                <Row className="justify-content-center align-items-center">
                    <Col xs={4} style={{paddingRight: '30px'}}>
                        <h3><b>Hardware requirements to run the simulation in Full HD:</b></h3>
                    </Col>
                    <Col xs={8} style={{paddingRight: '30px'}}>
                        <p>CPU: minimum Intel Core i5-7400 or Quad Core i3-10100/ AMD Ryzen 5 1600</p>
                        <p>RAM: at least 8GB</p>
                        <p>Graphics Card: Nvidia GeForce GTX 960 / AMD Radeon RX 560 or higher</p>
                        <p>Of course if you face any technical issue, don't hesitate to leave a message on ThrillCapital.com and
                        PERRINN.com, our developers will be happy to help!</p>
                        <Button variant='primary' onClick={navToLogin}>Join Competition</Button>
                    </Col>
                </Row>
            </div>
            
        </div>
    );
}
