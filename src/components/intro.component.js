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
                        A well performed, full stack Sr. Javascript Developer. Have experience of developing end to end web and cross platform hybrid mobile apps using MEAN, MERN, Ionic and Cordova.
                        I have experience of 4years with these techonologies and also have a bachelors degree in computer engineering.
                           </p>

                    <p style={infoPara}>
                        I like good teams with people smarter than me, clean code, good architecture, reasonable solutions, modern technologies, challenges and thinking before doing.
                        I always pay attention to the architecture, code flexibility, maintainability and long-term effects of every taken decision.
                 </p>
                </div>



            </section>
        )
    }
}