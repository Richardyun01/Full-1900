import React from 'react';
import {withRouter} from 'react-router-dom';

const ShowPageInfo =- withRouter(({match, location}) => {
    return <div>ShowPageInfo: {location.pathname}</div>
});

export default ShowPageInfo;