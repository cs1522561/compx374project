import { Container, Row, Col, Button } from "react-bootstrap";
import LMP1Porsche from '../../images/PORSCHE-JAPAN.jpg'
import Carousel424 from '../../images/Unity9.png'
import Electric424 from '../../images/Project424Graphic.png'
import Nurburgring from '../../images/Nürburg.png'
import Podium from '../../images/podium.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  function navToComp() {
    navigate('/competition')
  }

  function navToAbout() {
    navigate('/about')
  }
  function navToLogin() {
    navigate('/user-profile')
  }



  return(
    <>
    <div className="info-block" style={{backgroundColor: 'black', marginTop: '90px'}}>
      <div>
        <iframe src="https://www.youtube.com/embed/t9O40ANfknE?autoplay=1&mute=1" title="YouTube video player" allowfullscreen width="100%" height="315"/>
      </div>
    </div>

    <div className="info-block"  style={{backgroundColor: '#06538B', color: 'white'}}>
      <Row className="justify-content-center align-items-center">
        <Col xs={4}>
          <img src={LMP1Porsche} title='The Challenge' height={260}/>
        </Col>
        <Col xs={6}>
          <h2><b>Competition Details</b></h2>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis risus, sit amet porttitor
            elit. Proin sagittis aliquam orci sagittis sodales. Praesent ut sapien enim. Nam at dui et lacus efficitur
            finibus nec et turpis. Donec malesuada ac nunc ut placerat. Praesent ut sapien enim. Nam at dui et lacus efficitur
            finibus nec et turpis. Donec malesuada ac nunc ut placerat.Nam venenatis varius metus non tincidunt. Duis
            tempus, purus eget semper dignissim, odio lorem convallis elit, at interdum .....
          </p>
          <Button variant='primary' onClick={navToComp}>Learn more</Button>
        </Col>
      </Row>
    </div>

    <div className="info-block"  style={{backgroundColor: '#ffffff', color: '#464646'}}>
      <Row className="justify-content-center align-items-center">
        <Col xs={6}>
          <h2><b>Registration Details</b></h2>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis risus, sit amet porttitor
            elit. Proin sagittis aliquam orci sagittis sodales. Praesent ut sapien enim. Nam at dui et lacus efficitur
            finibus nec et turpis. Donec malesuada ac nunc ut placerat. Morbi euismod ligula nec arcu commodo, a aliquam
            lorem vestibulum. Suspendisse potenti.
          </p>
          <Button variant='primary' onClick={navToLogin}>Learn more</Button>
        </Col>
        <Col xs={4}>
          <img src={Carousel424} title='The Challenge' height={250}/>
        </Col>
      </Row>
    </div>

    <div className="info-block"  style={{backgroundColor: '#464646', color: 'white'}}>
      <Row className="justify-content-center align-items-center">
        <Col xs={4}>
          <img src={Electric424} title='The Challenge' height={280}/>
        </Col>
        <Col xs={6}>
          <h2><b>ThrillCapital & PERRIN</b></h2>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis risus, sit amet porttitor
            elit. Proin sagittis aliquam orci sagittis sodales. Praesent ut sapien enim. Nam at dui et lacus efficitur
            finibus nec et turpis. Donec malesuada ac nunc ut placerat. Morbi euismod ligula nec arcu commodo, a aliquam
            lorem vestibulum. Suspendisse potenti. Nunc id imperdiet ex. Nam venenatis varius metus non tincidunt. Duis
            tempus, purus eget semper dignissim, odio lorem convallis elit, at interdum sem quam ac velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nam ut metus purus......
          </p>
          <Button variant='primary' onClick={navToAbout}>Learn more</Button>
        </Col>
      </Row>
    </div>

    <div className="info-block"  style={{backgroundColor: '#06538B', color: 'white'}}>
      <Row className="justify-content-center align-items-center">
        <Col xs={6} className=''>
          <h2><b>P424 Car & Track</b></h2>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis risus, sit amet porttitor
            elit. Proin sagittis aliquam orci sagittis sodales. Praesent ut sapien enim. Nam at dui et lacus efficitur
            finibus nec et turpis. Donec malesuada ac nunc ut placerat. Morbi euismod ligula nec arcu commodo, a aliquam
            lorem vestibulum. Suspendisse potenti. Nunc id imperdiet ex. Nam venenatis varius metus non tincidunt. Duis
            tempus, purus eget semper dignissim, odio lorem convallis elit, at interdum sem quam ac velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nam ut metus purus......
          </p>
          <Button variant='primary' onClick={navToAbout}>Learn more</Button>
        </Col>
        <Col xs={4}>
          <img src={Nurburgring} title='The Challenge' height={400}/>
        </Col>
      </Row>
    </div>
    
    <div className="info-block"  style={{backgroundColor: '#464646', color: 'white'}}>
      <Row className="justify-content-center align-items-center">
        <Col xs={4}>
          <img src={Podium} title='The Challenge' height={280}/>
        </Col>
        <Col xs={6}>
          <h2><b>Prize Money</b></h2>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis risus, sit amet porttitor
            elit. Proin sagittis aliquam orci sagittis sodales. Praesent ut sapien enim. Nam at dui et lacus efficitur
            finibus nec et turpis. Nunc id imperdiet ex. Nam venenatis varius metus non tincidunt. Duis
            tempus, purus eget semper dignissim, odio lorem convallis elit, at interdum sem quam ac velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nam ut metus purus......
          </p>
          <Button variant='primary' onClick={navToAbout}>Learn more</Button>
        </Col>
      </Row>
    </div>
    </>
    )
}

