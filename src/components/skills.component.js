import { Component } from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../css/intro.css'
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
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
        const infoSec = {
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
                <div style={infoSec} className='infoSec'>
                    <h1 style={heading}>
                        Skills
                 </h1>

                    <Container>
                        <Row style={{ margin: "12px 0px" }}>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>
                        <Row style={{ margin: "12px 0px" }}>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>
                        <Row style={{ margin: "12px 0px" }}>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col xs={12} md={4}>
                                <Card>
                                    <CardHeader>Skill</CardHeader>
                                    <CardBody>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                        <CardTitle>item 1</CardTitle>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>

                    </Container>




                </div>



            </section>
        )
    }
}