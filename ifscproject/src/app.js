import React from 'react';
import { render } from 'react-dom';
import Home from "../shared/home";



if(typeof window !== 'undefined') {
    render(<Home />, document.getElementById('root'));
}

