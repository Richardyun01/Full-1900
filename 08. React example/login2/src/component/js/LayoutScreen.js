import React, {Component} from 'react';
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';
import SectionScreen from './SectionScreen';

class LayoutScreen extends Component {
    render() {
        return(
            <div>
                <HeaderScreen className="header"></HeaderScreen>
                <SectionScreen className="header"></SectionScreen>
                <FooterScreen className="header"></FooterScreen>
            </div>
        );
    }
}

export default LayoutScreen;