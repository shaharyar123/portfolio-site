import { Component } from 'react';
import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaStackOverflow, FaFacebook, FaEnvelope, FaDownload } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ContactSection extends Component {

    render() {
        const section = {
            backgroundColor: '#816CF8',

            padding: '120px 20px 120px 20px'
        }
        const heading = {
            color: "white",
            fontSize: "40px",
            fontFamily: "Uncial Antiqua",
        };

        const info = {
            marginTop: '30px',
            color: "white",
            fontSize: "18px",
            fontFamily: "Martel+Sans",
        };

        const fontMartel = {
            fontFamily: "Martel+Sans",

        }

        const iconSec = {
            margin: '50px 0'
        }

        const iconWrapper = {
            border: '2px solid white',
            borderRadius: '50px',
            padding: '10px',
            margin: '0 7px',

            cursor: 'pointer'

        }

        const icon = {
            color: 'white',
            fontSize: '20px'
        }




        return (
            <section style={section} id="hireMe">
                {/* <ScrollAnimation animateOnce='true' */}
                {/* animateIn='zoomInDown' > */}
                <h1 style={heading}>
                    Ping Me!
                 </h1>
                {/* </ScrollAnimation> */}
                <div style={info}>
                    <h3 style={fontMartel}>M Shaharyar</h3>
                    <p style={fontMartel}>I love what i do. Even if I had a different occupation, I would be coding something in my spare time!</p>
                    <p style={fontMartel}>shairy333@gmail.com | +92 334 3823232</p>
                    <ScrollAnimation animateOnce='true' animateIn='jello'
                        initiallyVisible={true}>
                        <p style={fontMartel}>

                            <FaDownload style={icon}  ></FaDownload> <b>Download Resume</b>
                        </p>
                    </ScrollAnimation>

                </div>
                <div style={iconSec} >
                    {/* <ScrollAnimation animateOnce='true' animateIn='bounce'> */}
                    <span style={iconWrapper} className="icon-wrapper">
                        <a href="https://twitter.com/shairy123" target='_blank'>
                            <FaTwitter style={icon} className="contact-icon"></FaTwitter>

                        </a>
                    </span>
                    <span style={iconWrapper} className="icon-wrapper">
                        <a href="https://www.linkedin.com/in/muhammad-shaharyar-2b41bb116/" target='_blank'>
                            <FaLinkedinIn style={icon} className="contact-icon"></FaLinkedinIn>
                        </a>
                    </span>
                    <span style={iconWrapper} className="icon-wrapper">
                        <a href="https://github.com/shaharyar123" target='_blank'>

                            <FaGithub style={icon} className="contact-icon"></FaGithub>
                        </a>
                    </span>
                    <span style={iconWrapper} className="icon-wrapper">
                        <a href="https://stackoverflow.com/users/6747191/muhammad-shaharyar" target='_blank'>
                            <FaStackOverflow style={icon} className="contact-icon"></FaStackOverflow>
                        </a>
                    </span>
                    <span style={iconWrapper} className="icon-wrapper">
                        <a href="https://www.facebook.com/shaharyar123" target='_blank'>

                            <FaFacebook style={icon} className="contact-icon"></FaFacebook>
                        </a>
                    </span>
                    <span style={iconWrapper} className="icon-wrapper" >
                        <a href="mailto:shairy333@gmail.com" target='_blank'>
                            <FaEnvelope style={icon} className="contact-icon" ></FaEnvelope>
                        </a>
                    </span>
                    {/* </ScrollAnimation> */}
                </div>
            </section >
        )
    }
}