import React from 'react';
import BigText from '../BigText';
import HeaderScreen from '../HeaderScreen';
import FooterScreen from '../FooterScreen';

const Search = () => {
    return (
        <div>
            <HeaderScreen className="header"></HeaderScreen>
            <BigText>Search</BigText>
            <FooterScreen className="footer"></FooterScreen>
        </div>
    )
}

export default Search;