import { Component } from 'react';
import React from 'react';
import { ListGroup } from 'react-bootstrap'
import '../css/contributions.css'
export default class ContributionsSection extends Component {

    render() {
        const section = {
            backgroundColor: '#816CF8',

            padding: '120px 20px 120px 20px'
        }
        const heading = {
            color: "white",
            fontSize: "24px",
            fontFamily: "Uncial Antiqua",
            // marginBottom: "15px"

        };
        const subHeading = {
            color: "#141c3a",
            fontFamily: "Martel+Sans",
            marginBottom: "25px",
            fontSize: "25px",
            fontWeight: 'bold'
        };

        const infoSec = {
            border: '1px solid #E6ECF8',
            borderRadius: '12px',
            marginBottom: '70px',
            marginTop: '-55px',
            backgroundColor: 'white',
            display: 'inline-block',
            minWidth: '100%',
            backgroundColor: '#141c3a',
            padding: '3.5rem 1.25rem'
        }


        return (
            <section style={section}>
                <div style={infoSec}>
                    <h1 style={heading}>
                        Some awsome open source contributions \(*_*)/
                 </h1>


                </div>

                <div>
                    <h3 style={subHeading}>Github</h3>

                    <ol class="gradient-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>
                        <li>Curabitur in orci vel risus facilisis accumsan.</li>
                        <li>Morbi eleifend tortor lacinia sapien sagittis, quis pellentesque felis egestas.</li>
                        <li>Aenean viverra dui quis leo lacinia fringilla.</li>
                        <li>Sed varius lectus ac condimentum egestas.</li>


                    </ol>

                </div>
                <div>
                    <h3 style={subHeading}>Articles</h3>

                    <ol class="gradient-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>
                        <li>Curabitur in orci vel risus facilisis accumsan.</li>


                    </ol>

                </div>

                <div>
                    <h3 style={subHeading}>Others</h3>

                    <ol class="gradient-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.</li>
                        <li>Curabitur in orci vel risus facilisis accumsan.</li>

                    </ol>

                </div>



            </section>
        )
    }
}