import { Component } from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
// import '../css/intro.css'
import {
    Card, CardHeader, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

export default class SkillsSection extends Component {


    render() {
        const section = {
            backgroundColor: 'white',
            minWidath: '100%',
            padding: '0px 60px 0 60px'
        }
        const heading = {
            color: "black",
            fontSize: "30px",
            fontFamily: "Uncial Antiqua",
            margin: "30px 0"
        };
        const informationSec = {
            border: '1px solid #E6ECF8',
            borderRadius: '12px',
            marginBottom: '70px',
            marginTop: '-55px',
            backgroundColor: 'white',
            display: 'inline-block',
            minWidth: '100%',

        }



        return (
            <section style={section}>
                <div style={informationSec} className='informationSec'>
                    <h1 style={heading}>
                        Skills
                 </h1>

                    <Container>
                        <ScrollAnimation animateOnce='true' animateIn='fadeIn'>

                            <Row style={{ margin: "12px 0px" }}>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Client Side</CardHeader>
                                        <CardBody>
                                            <CardTitle>Angular Js 1</CardTitle>
                                            <CardTitle>Angular Js 2+</CardTitle>
                                            <CardTitle>React</CardTitle>

                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Server Side</CardHeader>
                                        <CardBody>
                                            <CardTitle>Node</CardTitle>
                                            <CardTitle>Express</CardTitle>
                                            <CardTitle>Nest Js</CardTitle>
                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Cross Platform</CardHeader>
                                        <CardBody>
                                            <CardTitle>Ionic 1</CardTitle>
                                            <CardTitle>Ionic 2+</CardTitle>
                                            <CardTitle>React native</CardTitle>
                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </ScrollAnimation>
                        <ScrollAnimation animateOnce='true' animateIn='fadeIn'>

                            <Row style={{ margin: "12px 0px" }}>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Database</CardHeader>
                                        <CardBody>
                                            <CardTitle>MongoDB</CardTitle>
                                            <CardTitle>PostgreSQL</CardTitle>

                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Design</CardHeader>
                                        <CardBody>
                                            <CardTitle>Html/CSS/SCSS</CardTitle>
                                            <CardTitle>Bootstrap</CardTitle>

                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Languages</CardHeader>
                                        <CardBody>
                                            <CardTitle>Javascript</CardTitle>
                                            <CardTitle>Typescript</CardTitle>

                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </ScrollAnimation>
                        <ScrollAnimation animateOnce='true' animateIn='fadeIn'>

                            <Row style={{ margin: "12px 0px" }}>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Test Cases</CardHeader>
                                        <CardBody>
                                            <CardTitle>Protractor</CardTitle>
                                            <CardTitle>Jest</CardTitle>

                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>Others</CardHeader>
                                        <CardBody>
                                            <CardTitle>Git</CardTitle>
                                            <CardTitle>Heroku</CardTitle>
                                            <CardTitle>Firebase</CardTitle>

                                        </CardBody>
                                    </Card>

                                </Col>
                                <Col xs={12} md={4}>
                                    <Card>
                                        <CardHeader>OS</CardHeader>
                                        <CardBody>
                                            <CardTitle>Ubuntu</CardTitle>
                                            <CardTitle>Windows</CardTitle>

                                        </CardBody>
                                    </Card>

                                </Col>
                            </Row>
                        </ScrollAnimation>
                    </Container>




                </div>



            </section>
        )
    }
}