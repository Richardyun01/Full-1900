import React from 'react';
import BigText from '../BigText';
import HeaderScreen from '../HeaderScreen';
import FooterScreen from '../FooterScreen';

const Mypage = () => {
    return (
        <div>
            <HeaderScreen className="header"></HeaderScreen>
            <BigText>Mypage</BigText>
            <FooterScreen className="footer"></FooterScreen>
        </div>
    )
}

export default Mypage;