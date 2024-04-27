import React from 'react';
import './About.css';

function About() {
    return (
        <div className="container">
            <p>
                <h3>About this App</h3>
                UFC DATABASE is an interactive dashboard and data visualizer the UFC or Ultimate Fighting Championship. Its principal aim is to provide an overview of past events and fight-cards, while also allowing the user to probe the data and explore various trends on a per-Fighter basis, right down to individual strike percentage.
            </p>
            <p>
                <h4>The Data Source</h4>
                These datasets were obtained via 3rd-party web-scrapers and fed into a backend database via FlaskSQL. The database is routed and parsed in Python and is linked to our React frontend. The charts & graphs are implemented via PlotlyJS and the event map utilizes a frontend API via a library called Mapbox.
            </p>
            <p>
                <h4>Motivation</h4>
                This project was done out of pure curiosity, a passion for sports and an opportunity to learn something new.
            </p>
            <p>
                <h4>Source Code / Links</h4>
                Interested in looking at the code for this web-application? Check out the source code in the GitHub repository, linked below. Special thanks to <span><a href="https://github.com/nick-raym">Nick Rayman</a></span> for helping out!
                <ul>
                    <li>
                        <span><strong>Adam Mannino</strong></span>
                        <span>amannino92@gmail.com</span>
                        <span><a href="https://github.com/Avmannino/ufc_phase4_project">GitHub Repo</a></span>
                        <span><a href="https://www.linkedin.com/in/adam-mannino-b00a7261/">LinkedIn</a></span>
                    </li>
                </ul>
            </p>
            <p>
                <h5 className='disclaimer'>Disclaimer:</h5>
                All product and company names are trademarks™ or registered® trademarks of the UFC™. Use of them does not imply any affiliation with or endorsement by them.

                Any product names, logos, brands and other trademarks or images featured or referred to within this website are the property of the UFC™, its entities and its subsidiaries.

                This website is for educational purposes only. No copyright infringement is intended.
            </p>
        </div>

    );
}

export default About;
