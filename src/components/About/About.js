import React from 'react';
import './About.css';

const About = ({ onSiteChange }) => {
    return (
        <div className = "aboutBack">
            <div className = "aboutCard">
                <p className = "desc">
                <h2 className = "titleW"><h2><h2 className = "we1" >W</h2>ord<h2 className = "we1" >E</h2>d</h2></h2> helps you to learn new English words.<br></br> It provides definitions, synonyms, and explanations of words, along with example sentences and images representing the word.<br></br> The definitions are gathered from resources including Vocabulary.com, Dictionary.com and Wordnik.com.<br></br> The example sentences are obtained from the Wordnik API.  
                </p>
                <p></p>
                <button onClick = { () => onSiteChange('home')} >Learn Words</button>
                <p></p>
            </div>
            <div className = "aboutEnd">
                <div className = "rowEnd">
                    <div></div>
                    <div className = "aboutEndBox">
                        <p className = "credits" >This is a React-based app, that uses Node.js at the backend and uses Postgres database. The link to github repository with the source code of the app is given below.</p>
                        <div className = "fill" ></div>
                        <a href = "https://github.com/Suri-MM/worded" ><img src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className = "gitico" alt = "GitHub"></img></a>
                    </div>
                    <div></div>
                </div>
                <div className = "greet" >
                    <p className = "greetText" >Glad you are taking a look at this website.</p>
                    <p>Have a good day.</p>
                </div>
            </div>
        </div>
    );
}

export default About;