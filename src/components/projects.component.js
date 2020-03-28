import { Component } from 'react';
import React from 'react';
import { Table } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';


export default class ProjectsSection extends Component {


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
        const infoSecProject = {
            border: '1px solid #E6ECF8',
            borderRadius: '12px',
            marginBottom: '70px',
            marginTop: '-55px',
            backgroundColor: 'white',
            display: 'inline-block',
            minWidth: '100%',
            width: '100%',
            overflow: 'auto'

        }



        return (
            // <ScrollAnimation animateOnce='true' animateIn='flipInX'>

            <section style={section}>
                <div style={infoSecProject}  >
                    <h1 style={heading}>
                        &lt;(^_^)/ Some Successful Projects  \(^_^)>
                 </h1>


                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >Larry the Bird</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >Larry the Bird</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td >Larry the Bird</td>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>



                </div>



            </section>
            // </ScrollAnimation>
        )
    }
}