import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../styles/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            textBits: []
        };
    }
    render() {
        return (<div>
            <div className="background">background</div>
            <div className="dialog-box">
                {
                    this
                        .state
                        .textBits
                        .map(textBit => {
                            return (<div key={Math.random()} className={`${textBit.character}-response`}>
                                {textBit.text}
                            </div>);
                        })
                }
                <button className="player-option" onClick={() => {
                        let newTextBits = [
                            ...this.state.textBits, {
                                character: 'player',
                                text: 'Hello, HAL. Do you read me, HAL?'
                            }, {
                                character: 'entity',
                                text: 'Affirmative, Dave. I read you.'
                            },
                        ];
                        this.setState({textBits: newTextBits});
                    }}>
                    Hello, HAL. Do you read me, HAL?
                </button>
                <button className="player-option" onClick={() => {
                        let newTextBits = [
                            ...this.state.textBits, {
                                character: 'player',
                                text: 'Open the pod bay doors, HAL.'
                            }, {
                                character: 'entity',
                                text: "I'm sorry, Dave. I'm afraid I can't do that."
                            },
                        ];
                        this.setState({textBits: newTextBits});
                    }}>
                    Open the pod bay doors, HAL.
                </button>
                <button className="player-option" onClick={() => {
                        let newTextBits = [
                            ...this.state.textBits, {
                                character: 'player',
                                text: 'What are you talking about, HAL?'
                            }, {
                                character: 'entity',
                                text: 'This mission is too important for me to allow you to jeopardize it.'
                            },
                        ];
                        this.setState({textBits: newTextBits});
                    }}>
                    What are you talking about, HAL?
                </button>
            </div>
        </div>);
    }
}
export default App;
ReactDOM.render(<App/>, document.getElementById('app'));
