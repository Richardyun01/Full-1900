import React from 'react';
import BigText from '../BigText';
import HeaderScreen from '../HeaderScreen';
import FooterScreen from '../FooterScreen';

const About = () => {
    return (
        <div>
            <HeaderScreen className="header"></HeaderScreen>
            <BigText>About</BigText>
            <FooterScreen className="footer"></FooterScreen>
        </div>
    )
}

export default About;