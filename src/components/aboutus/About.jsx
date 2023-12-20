import React from 'react';
import Navbar from '../../common/header/Navbar';
import AData from './AData'; 
import './About.css'; 

const About = () => {
    return (
        <div className="about-container">
        <img src={AData} alt="About Us" className="about-image" />
        <p className="about-text">
                Welcome to NBStore, where contemporary style meets the timeless elegance of Almaty's fashion essence.
                Nestled in the heart of the city at Auezov Street, Almaty, AY 77531, Kazakhstan, we are more than just a clothing store – we are a destination for fashion enthusiasts who appreciate quality, style, and a personal touch.
                Founded in 2003, NBStore began as a small boutique with a vision to bring high-quality,
                on-trend clothing to the stylish residents of Almaty. Our passion for fashion and commitment to our customers helped us grow into the online haven we are today, serving not just our local community but style-conscious individuals across Kazakhstan.
                Customer satisfaction is at the core of our business. We strive to create a shopping experience that is as enjoyable and seamless as the streets of Almaty are vibrant and lively. Our team is dedicated to providing personalized service and expert advice, ensuring that every visit to NBStore leaves you inspired and delighted.
            </p>
    </div>
    );
};

export default About;
