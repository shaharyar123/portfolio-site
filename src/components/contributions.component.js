import { Component } from 'react';
import React from 'react';
import '../css/contributions.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ContributionsSection extends Component {

    render() {
        const section = {
            backgroundColor: '#F7F7F7',

            padding: '120px 20px 120px 20px'
        }
        const heading = {
            color: "white",
            fontSize: "30px",
            fontFamily: "Uncial Antiqua",
        };
        const subHeading = {
            color: "#141c3a",
            fontFamily: "Martel+Sans",
            marginBottom: "25px",
            fontSize: "25px",
            fontWeight: 'bold'
        };

        const listing = {
            padding: ' 0 10%'
        }

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

                <div style={listing}>

                    <h3 style={subHeading}>Github</h3>
                    <ScrollAnimation animateOnce='true' animateIn='fadeIn'>

                        <ol className="gradient-list">
                            <li> <a href='https://github.com/GoogleChrome/rendertron' target="_blank">https://github.com/GoogleChrome/rendertron</a></li>
                            <li> <a href='https://github.com/rickwest/devsnippets' target="_blank">https://github.com/rickwest/devsnippets</a> </li>
                            <li><a href='https://github.com/AhsanAyaz/html5-canvas-snake-game' target="_blank">https://github.com/AhsanAyaz/html5-canvas-snake-game</a></li>
                            <li><a href='https://github.com/smtaha512/ionic-collection' target="_blank">https://github.com/smtaha512/ionic-collection</a></li>
                            <li><a href='https://github.com/shaharyar123/ionic4-multi-slides' target="_blank">https://github.com/shaharyar123/ionic4-multi-slides</a></li>
                            <li><a href='https://github.com/shaharyar123/ionic-4-image-uploader' target="_blank">https://github.com/shaharyar123/ionic-4-image-uploader</a></li>


                        </ol>
                    </ScrollAnimation>

                </div>
                <div style={listing}>
                    <h3 style={subHeading}>Articles</h3>
                    <ScrollAnimation animateOnce='true' animateIn='fadeIn'>

                        <ol className="gradient-list">
                            <li><a href='https://medium.com/@shairy333/angular-9-in-a-nutshell-99b0f7b6ff0e' target="_blank">https://medium.com/@shairy333/angular-9-in-a-nutshell-99b0f7b6ff0e</a></li>
                            <li><a href='https://medium.com/@shairy333/understanding-framework-and-library-is-like-preparing-a-sandwich-57bc92a859e9' target="_blank">https://medium.com/@shairy333/understanding-framework-and-library-is-like-preparing-a-sandwich-57bc92a859e9</a></li>
                            <li><a href='https://gulp-api.blogspot.com' target="_blank">https://gulp-api.blogspot.com </a></li>
                            <li><a href=' http://node-heroku.blogspot.com' target="_blank"> http://node-heroku.blogspot.com</a></li>


                        </ol>
                    </ScrollAnimation>

                </div>

                <div style={listing}>
                    <h3 style={subHeading}>Others</h3>
                    <ScrollAnimation animateOnce='true' animateIn='fadeIn'>

                        <ol className="gradient-list">
                            <li>Mentor for ngGirls, Circle(techKaro) </li>
                            <li>Conducted workshops on web development and carrer counselling</li>
                            <li>Volunteer/managment in many tech events</li>

                        </ol>
                    </ScrollAnimation>

                </div>



            </section>
        )
    }
}