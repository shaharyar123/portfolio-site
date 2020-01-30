import { Component } from 'react';
import React from 'react';
import avatar from '../images/avatar.svg';
import hero from '../images/hero.svg';
export default class IntroSection extends Component {

    constructor(props) {
        super(props);


    }



    render() {
        const section = {
            backgroundColor: '#816CF8',

            padding: '120px 20px 120px 20px'
        }
        const heading = {
            color: "white",
            fontSize: "24px",
            fontFamily: "Uncial Antiqua",
            marginBottom: "15px"

        };
        const infoPara = {
            color: "white",
            fontFamily: "Martel+Sans",
            // marginBottom: "25px",
            fontSize: "21px"
        };
        const infoSec = {
            margin: '0 150px 0 150px'
        }


        return (
            <section style={section}>
                <div style={infoSec}>
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
                    {/* <h2 style={subHeading}>I design and code beautifully simple things, and I love what I do.</h2> */}
                </div>
                {/* <div>
                    <img src={avatar} className="App-logo" alt="logo" />

                </div>
                <div style={heroMachineSec}>
                    <img src={hero} className="App-logo" alt="logo" />

                </div> */}



            </section>
        )
    }
}