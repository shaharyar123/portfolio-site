import { Component } from 'react';
import React from 'react';
import '../css/intro.css'
export default class IntroSection extends Component {

    render() {
        const section = {
            backgroundColor: '#816CF8',

            padding: '120px 20px 170px 20px'
        }
        const heading = {
            color: "white",
            fontSize: "24px",
            fontFamily: "Uncial Antiqua",
            marginBottom: "15px"

        };
        const infoPara = {
            color: "white",
            fontFamily: "c",
            // marginBottom: "25px",
            fontSize: "21px",
        };
        const infoSec = {
            margin: '0 150px 0 150px',

        }


        return (
            <section style={section}>
                <div style={infoSec} className="infoSec">
                    <h1 style={heading}>
                        Hi, I’m Shaharyar. Nice to meet you.
                 </h1>

                    <p style={infoPara}>
                        Since beginning my journey as a freelance designer nearly 8 years ago,
                         I've done remote work for agencies, consulted for startups, and collaborated
                          with talented people to create digital products for both business and consumer use.
                           I'm quietly confident, naturally curious, and perpetually working on improving my chops
                           one design problem at a time.
                 </p>
                </div>



            </section>
        )
    }
}