// Writetest.js

import React from 'react';
import './writetest.css';
function Writetest() {
    return (
        <div className="container">
            <header>
                <h1>Language Learning Exam</h1>
                <p>Subject: <span className="subject">[Language]</span></p>
                <p>Date: <span className="date">[Exam Date]</span></p>
            </header>
            <section className="instructions">
                <h2>Instructions</h2>
                <p>Please complete all parts of the exam. Write clearly and legibly.</p>
            </section>

            {/* COMPREHENSION Section */}
            <section className="comprehension">
                <h2>COMPREHENSION</h2>
                <div className="main-question">
                    <h3>Question 1</h3>
                    <div className="reading-passage">
                        <p>[1] Greta Thunberg is a climate youth activist who has received worldwide recognition for her efforts to fight climate change. Greta was born on January 3, 2003 in Sweden. Her mother, Malena Ernman, is an opera singer, and her father, Svante, is an actor. She began her climate activism at the age of 15.<br />
                        [2] In May 2018, Greta won a climate change essay competition in a local newspaper. Three months later, she started protesting in front of the Swedish parliament and skipping classes with the simple message “School strike for climate”. Thanks to social media, her actions have spread rapidly and influenced millions of young people around the world.<br />
                        [3] The teen activist has been invited to numerous meetings to speak on behalf of the climate youth movement. In December 2018, her speech at the United Nations COP24 in Poland got millions of likes, shares and views. At the summit, she expressed her deep worry about the environment, saying "I don't care about being popular. I care about climate justice and the living planet."<br />
                        [4] Greta had another opportunity to speak at the UN Climate Action Summit in New York City in September 2019. That is where she walked in the largest climate protest in history with a total of 4 million people.<br />
                        [5] The world's eyes were on Greta when she condemned world leaders in her emotional “How Dare You!” speech at the UN, telling them: "You have stolen my dreams and my childhood with your empty words. ... People are suffering. People are dying. Entire ecosystems are collapsing... How dare you! We will never forgive you." In reaction to Greta’s attitude, Anne Hidalgo, the mayor of Paris, said that “It is truly inspiring to see young people making their voices heard.”<br />
                        [6] In COP25 in Madrid, Greta again blamed leaders for not acting to save the planet because greenhouse gas emissions continue to rise. She realised that her school strikes “haven’t achieved anything”, and that “we need more activists”. For her great efforts to make a difference about climate change, Greta Thunberg was nominated for the Nobel Peace Prize in March 2019.</p>
                    </div>
                    <div className="sub-question">
                        <h4>Question 1.1</h4>
                        <p>What inspired Greta Thunberg to start her climate activism?</p>
                        <textarea rows="3" placeholder="Write your answer here..."></textarea>
                    </div>
                    <div className="sub-question">
                        <h4>Question 1.2</h4>
                        <p>Describe the impact of Greta's "School strike for climate" campaign.</p>
                        <textarea rows="3" placeholder="Write your answer here..."></textarea>
                    </div>
                    <div className="sub-question">
                        <h4>Question 1.3</h4>
                        <p>How did Greta Thunberg’s speech at the United Nations COP24 influence the climate movement?</p>
                        <textarea rows="3" placeholder="Write your answer here..."></textarea>
                    </div>
                </div>
            </section>

            {/* LANGUAGE Section */}
            <section className="language">
                <h2>LANGUAGE</h2>
                <div className="main-question">
                    <h3>Question 1</h3>
                    <div className="sub-question">
                        <h4>Question 1.1</h4>
                        <p>[Insert language question here]</p>
                        <textarea rows="3" placeholder="Write your answer here..."></textarea>
                    </div>
                    <div className="sub-question">
                        <h4>Question 1.2</h4>
                        <p>[Insert language question here]</p>
                        <textarea rows="3" placeholder="Write your answer here..."></textarea>
                    </div>
                    {/* Add more sub-questions as needed */}
                </div>
                {/* Add more main questions as needed */}
            </section>

            {/* WRITING Section */}
            <section className="writing">
                <h2>WRITING</h2>
            <div class="main-question">
                <h3>Question 1</h3>
                <p>[Insert writing prompt here]</p>
                <textarea rows="10" placeholder="Write your answer here..."></textarea>
            </div>
            </section>

            {/* LISTENING Section */}
            <section className="listening">
                <h2>LISTENING</h2>
                <div className="main-question">
                    <h3>Question 1</h3>
                    <p>[Insert listening prompt here]</p>

                    <audio controls>
                        <source src="[audio-file-url]" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
            
                    <div className="sub-question">
                        <h4>Question 1.1</h4>
                        <p>[Insert sub-question related to the listening prompt here]</p>
                        <textarea rows="3" placeholder="Write your answer here..." />
                    </div>
                    <div className="sub-question">
                        <h4>Question 1.2</h4>
                        <p>[Insert sub-question related to the listening prompt here]</p>
                        <textarea rows="3" placeholder="Write your answer here..." />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Writetest;
