import React from 'react';
import BigText from '../BigText';
import HeaderScreen from '../HeaderScreen';
import FooterScreen from '../FooterScreen';

const Posts = () => {
    return (
        <div>
            <HeaderScreen className="header"></HeaderScreen>
            <BigText>Posts</BigText>
            <FooterScreen className="footer"></FooterScreen>
        </div>
    )
}

export default Posts;