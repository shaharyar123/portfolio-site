import { Component } from 'react';
import React from 'react';
import avatar from '../images/avatar.svg';
import hero from '../images/hero.svg';
import ScrollAnimation from 'react-animate-on-scroll';

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

        const heroImg = {

            height: '40vmin',
            maxWidth: '100%'


        }

        return (
            <section className="App-header">

                <div>
                    <ScrollAnimation animateOnce='true' animateIn='bounceInRight' animateOut='bounceOutLeft'>

                        <h1 style={heading}>
                            Fullstack JavaScript Developer
                 </h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce='true' animateIn='bounceInLeft' animateOut='bounceOutRight'>

                        <h2 style={subHeading}>I design and code beautifully simple things, and I love what I do.</h2>
                    </ScrollAnimation>
                </div>

                <div>
                    <img src={avatar} className="App-logo" alt="logo" />

                </div>
                <div style={heroMachineSec}>
                    <ScrollAnimation animateOnce='true' animateIn='flipInY'
                        animateOut='flipOutY'>
                        <img style={heroImg} src={hero} alt="logo" />
                    </ScrollAnimation>
                </div>



            </section>
        )
    }
}