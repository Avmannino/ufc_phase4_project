import React from 'react';
import './About.css';

function About() {
    return (
        <div className="container">
            <p>
                <h3>About this App</h3>
                UFC FIGHT MAPS is an interactive dashboard based on the highest level of mixed martial arts, the UFC or Ultimate Fighting Championship. Its principal aim is to provide an overview of past events and fight-cards, whilst allowing the user to probe the data and explore various trends on a per-Fighter basis, right down to individual strike percentage.
            </p>
            <p>
                <h4>About The Data Source</h4>
                Certain data was web-scraped via a third-party API and manually entered into a master JSON file. Certain packages we used did not allow for the use of parsing data via a backend server such as FlaskSql. We did, however, manage to obtain additional datasets for the more granular fight and fighter data. This was entered into a Flask db and is routed into our frontend React components.
            </p>
            <p>
                <h4>Motivation</h4>
                This project was done out of pure curiosity, inspiration, and willingness to pass Phase-4.
            </p>
            <p>
                <h4>GitHub Code</h4>
                Interested in looking at the code for this web-application? Check out the repository in our GitHub, linked below (and pls hire us!)
            </p>
            <div className='contact'>
                <h4 className='developers'>Developed By:</h4>
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
