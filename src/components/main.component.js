import { Component } from 'react';
import React from 'react';
import avatar from '../images/avatar.svg';
import hero from '../images/hero.svg';
export default class MainSection extends Component {

    render() {
        const heading = {
            color: "#141c3a",
            fontSize: "3rem",
            fontFamily: "Uncial Antiqua",
            marginTop: "100px",
            marginBottom: "15px"

        };
        const subHeading = {
            color: "rgba(10, 10, 10, 0.9)",
            fontFamily: "Martel+Sans",
            marginBottom: "25px",
            fontSize: "25px"
        };
        const heroMachineSec = {
            marginTop: "50px"
        }


        return (
            <section className="App-header">
                <div>
                    <h1 style={heading}>
                        Fullstack JavaScript Developer
                 </h1>
                    <h2 style={subHeading}>I design and code beautifully simple things, and I love what I do.</h2>
                </div>
                <div>
                    <img src={avatar} className="App-logo" alt="logo" />

                </div>
                <div style={heroMachineSec}>
                    <img src={hero} className="App-logo" alt="logo" />

                </div>



            </section>
        )
    }
}