import AwesomeComponent from './AwesomeComponent.jsx';
//require('./logger');
import logger from './logger';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <div>
                <p> OH HERRO!</p>
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
