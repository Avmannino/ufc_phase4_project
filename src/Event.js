import React, { useState, useEffect } from 'react';
import './Event.css';
import ESPN from './assets/ESPN.png'
import Fighter1Image from './assets/fighter1.png';
import Fighter2Image from './assets/fighter2.png';
import Fighter3Image from './assets/fighter3.png';
import Fighter4Image from './assets/fighter4.png';
import Fighter5Image from './assets/fighter5.png';
import Fighter6Image from './assets/fighter6.png';
import Fighter7Image from './assets/fighter7.png';
import Fighter8Image from './assets/fighter8.png';
import Fighter9Image from './assets/fighter9.png';
import Fighter10Image from './assets/fighter10.png';
import Comments from './Comments';
import { Link } from 'react-router-dom';

export default function Event() {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:5555/events")
            .then((response) => response.json())
            .then((events) => {
                for (let i = 0; i < events.length; i++) {
                    if (events[i].event_num === "300") {
                        setEvent(events[i]);
                        break
                    }
                }
            });
    }, []);
    return (
        <div className="forum-container">
            <header className="forum-header">
                <h3>UFC 300</h3>
                <h1>PEREIRA</h1>
                <h4> _____    vs    _____ </h4>
                <h1>HILL</h1>
                <p>
                    <button className="login-button"><Link to='/login' className='link-log'>LOGIN</Link></button>
                    Sat, Apr 13 / 10:00 PM EDT
                </p>
                <p>
                    T-Mobile Arena, Las Vegas United States
                </p>
            </header>
            <main className="forum-main">
                <h5 className='watch-espn'>STREAMING ONLY ON <img className="centered-img" src={ESPN} alt="ESPN Logo" /></h5>
                <h2>MAIN CARD</h2>
                {/* Fight 1 */}
                <div className="fight-card">
                    <div className="fighter left-side">
                        <h6>LIGHT HEAVYWEIGHT TITLE BOUT</h6>
                        <img src={Fighter1Image} alt="Fighter_1" />
                        <p> 🇧🇷 🥇 ALEX PEREIRA</p>
                        <div className='record-left'>9-2-0</div>
                    </div>
                    <div className="versus">vs</div>
                    <div className="fighter right-side">
                        <img src={Fighter2Image} alt="Fighter_2" />
                        <p>🇺🇸 JAMAHAL HILL</p>
                        <div className='record-right'>12-1-0</div>
                    </div>
                </div>
                {/* Fight 2 */}
                <div className="fight-card">
                    <div className="fighter left-side">
                        <h6>WOMEN'S STRAWWEIGHT TITLE BOUT</h6>
                        <img src={Fighter3Image} alt="Fighter_3" />
                        <p>🇨🇳 🥇 ZHANG WEILI</p>
                        <div className='record-left'>24-3-0</div>
                    </div>
                    <div className="versus">vs</div>
                    <div className="fighter right-side">
                        <img src={Fighter4Image} alt="Fighter_4" />
                        <p>🇨🇳 YAN XIAONAN</p>
                        <div className='record-right'>17-3-0</div>
                    </div>
                </div>
                {/* Fight 3 */}
                <div className="fight-card">
                    <div className="fighter left-side">
                        <h6>LIGHWEIGHT BOUT</h6>
                        <img src={Fighter5Image} alt="Fighter_5" />
                        <p>🇺🇸 JUSTIN GAETHJE</p>
                        <div className='record-left'>26-4-0</div>
                    </div>
                    <div className="versus">vs</div>
                    <div className="fighter right-side">
                        <img src={Fighter6Image} alt="Fighter_6" />
                        <p>🇺🇸 MAX HOLLOWAY</p>
                        <div className='record-right'>25-7-0</div>
                    </div>
                </div>
                {/* Fight 4 */}
                <div className="fight-card">
                    <div className="fighter left-side">
                        <h6>LIGHTWEIGHT BOUT</h6>
                        <img src={Fighter7Image} alt="Fighter_7" />
                        <p>🇧🇷 CHARLES OLIVIERA</p>
                        <div className='record-left'>34-9-0</div>
                    </div>
                    <div className="versus">vs</div>
                    <div className="fighter right-side">
                        <img src={Fighter8Image} alt="Fighter_8" />
                        <p>🇦🇲 ARMAN TSARUKYAN</p>
                        <div className='record-right'>21-3-0</div>
                    </div>
                </div>
                {/* Fight 5 */}
                <div className="fight-card">
                    <div className="fighter left-side">
                        <h6>MIDDLEWEIGHT BOUT</h6>
                        <img src={Fighter9Image} alt="Fighter_9" />
                        <p>🇺🇸 BO NICKAL</p>
                        <div className='record-left'>5-0-0</div>
                    </div>
                    <div className="versus">vs</div>
                    <div className="fighter right-side">
                        <img src={Fighter10Image} alt="Fighter_10" />
                        <p>🇺🇸 CODY BRUNDAGE</p>
                        <div className='record-right'>10-5-0</div>
                    </div>
                </div>
                <Comments event={event} />
            </main>
        </div>
    );
}
