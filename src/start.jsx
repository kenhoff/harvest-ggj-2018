import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import "../styles/main.scss";

let textOptions = ["Open the pod bay doors, hal.", "I'm afraid i can't do that, dave.", "daisy, daisy",]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            textBits: [],
        }
    }
    render() {
        return (<div>
            <div className="background">background</div>
            <div className="dialog-box">
                {
                    this
                        .state
                        .textBits
                        .map((textBit) => {
                            return (<div key={Math.random()}>{textBit}</div>)
                        })
                }
            </div>
            <div>
                <button onClick={() => {
                        let newTextBits = [
                            ...this.state.textBits,
                            textOptions[Math.floor(Math.random() * textOptions.length)],
                        ];
                        this.setState({textBits: newTextBits, inputText: "",});

                    }}>
                    add new text bit ></button>
            </div>
        </div>); } } export default App; ReactDOM.render(<App/>, document.getElementById('app'));
