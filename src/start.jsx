console.log('asdfasdfasdf');

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import "../styles/main.scss";

class App extends React.Component {
    render() {
        return (<div>
            <div className="background">background</div>
            <div className="dialog-box">dialog box</div>
        </div>);
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));
