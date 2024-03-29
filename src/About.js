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
                <h4>About The Data Source</h4>
                These datasets were obtained via 3rd-party web-scrapers and fed into a backend database via Flask. The database is routed and parsed in Python and is linked to our React frontend. The graphs are provided via PlotlyJS and the event map utilizes a frontend API through a library called Mapbox.  
            </p>
            <p>
                <h4>Motivation</h4>
                This project was done out of pure curiosity, inspiration, and willingness to pass Phase-4.
            </p>
            <p>
                <h4>GitHub Code</h4>
                Interested in looking at the code for this web-application? Check out the repository in our GitHub, linked below.
            </p>
            <div className='contact'>
                <h4 className='developers'>Developed By:</h4>
                <p>
                        <h5 className='disclaimer'>Disclaimer:</h5> 
                        All product and company names are trademarks™ or registered® trademarks of the UFC™. Use of them does not imply any affiliation with or endorsement by them.

                        Any product names, logos, brands and other trademarksor images featured or referred to within this website are the property of the UFC™, its entities and its subsidiaries.

                        This website is for educational purposes only. No copyright infringement is intended.
                </p>
                <ul>
                    <li>
                        <strong>Adam Mannino</strong>
                        amannino92@gmail.com
                        <a href="https://github.com/Avmannino">https://github.com/Avmannino</a>




                        <strong>Nick Rayman</strong>
                        nlhrayman@gmail.com
                        <a href="https://github.com/nick-raym">https://github.com/nick-raym</a>



                        <strong>Adham Farghaly</strong>
                        afarghaly@gmail.com
                        <a href="https://github.com/adam-farghaly">https://github.com/adam-farghaly</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
