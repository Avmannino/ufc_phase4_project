import React, { useState } from 'react';
import './About.css'; 

function About() {
    const [text, setText] = useState(""); 

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container">
            <textarea
                className="textarea"
                placeholder="Type your text here..."
                value={text}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default About;

