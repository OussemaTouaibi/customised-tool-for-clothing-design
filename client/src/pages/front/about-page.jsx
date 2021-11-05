import React from 'react'
import Layout from '../../components/shared/layout'
import {Col, Container, Row} from 'reactstrap'
import aboutImg  from '../../assets/t-shirt.png'
import './about.scss'


const About = () => {
    return (
        <Layout>
            <div className="intro">
              <div className="intro-content" >  
              <h2 className="intro-title">What is NoName ?</h2>
              <br></br>
              <p className="intro-text">Our project aims to shortcut and merge two phases which are prototyping and industrialization of your product to fit your needs, much more than just design software, it's a digital interconnection platform for the fashion industry.</p>
              </div>
            </div>
            <div className="About">
              <h2 className="about-title">
                About us
              </h2>
              <Row>
                <Col md="6">
                      <div className="about-item">
                        <h3 className="about-item-title">Our goals</h3>
                        <br></br>
                        <p className="about-item-text">Improve, simplify and make sustainable the design and design of clothing for the whole fashion world, generating innovation paths that lead to significant savings in terms of time, costs and procedures, through an interactive platform that is continuously updated and improved.</p>
                      </div>
                </Col>
                <Col md="6">
                  <div className="about-item">
                        <h3 className="about-item-title">Solution</h3>
                        <br></br>
                        <p className="about-item-text">A good fit between users and the website so we ensure ergonomic product design helps improve UX satisfying our customers depanding on the diversity of the functionalities in our tool and the ease of use, plus an innovative 3d display for your design.</p>
                      </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md="6">
                      <div className="about-item">
                        <h3 className="about-item-title">State of art</h3>
                        <br></br>
                        <p className="about-item-text">Non-traditional styles such as modern stitching and laserprint appear more frequently as browsers become more able to display them reliably.</p>
                      </div>
                </Col>               
              </Row>
              <div className="about-img">
                <img src={aboutImg}/>
              </div>
            </div>
        </Layout>
      )
}
export default About;
