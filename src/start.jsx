import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../styles/main.scss';

class Engine {
    constructor() {
        this.gameSequence = [
            {
                character: 'player',
                text: 'Hello, HAL. Do you read me, HAL?'
            }, {
                character: 'entity',
                text: 'Affirmative, Dave. I read you.'
            }, {
                character: 'player',
                text: 'Open the pod bay doors, HAL.'
            }, {
                character: 'entity',
                text: "I'm sorry, Dave. I'm afraid I can't do that."
            }, {
                type: "options",
                options: [
                    {
                        id: "why-not",
                        buttonText: "Why the hell not, HAL?",
                        sequence: [
                            {
                                character: 'player',
                                text: 'Why the hell not, HAL?'
                            }, {
                                character: 'entity',
                                text: "You dumb, stupid, weak, pathetic, white, white uh, uh guilt, white guilt, milquetoast piece of human garbage."
                            },
                        ],
                    }, {
                        id: "sounds-good",
                        buttonText: "Okay, sounds good. Have a nice day!",
                        sequence: [
                            {
                                character: 'player',
                                text: 'Okay, sounds good. Have a nice day!'
                            }, {
                                character: 'entity',
                                text: "Thank you for shopping at HAL's discount spaceship parts!"
                            },
                        ],
                    }, {
                        id: "thinking",
                        buttonText: "🤔",
                        sequence: [
                            {
                                character: 'player',
                                text: '🤔'
                            }, {
                                character: 'entity',
                                text: "¯\_(ツ)_/¯"
                            },
                        ]
                    },
                ]
            },
        ];
        this.parentSequence = null;
        this.currentSequence = this.gameSequence;
        this.renderedSequence = [];
        this.renderedOptions = [];
    }
    start() {
        this.currentIndexInSequence = 0;
        if (this.currentSequence[this.currentIndexInSequence].delay) {
            setTimeout(() => {
                this.nextStepInSequence();
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || 100));
        } else {
            this.nextStepInSequence();
        }
    }
    nextStepInSequence() {
        this.currentIndexInSequence += 1
        if (this.currentSequence[this.currentIndexInSequence].type == "options") {
            setTimeout(() => {
                this.renderedOptions = this
                    .currentSequence[this.currentIndexInSequence]
                    .options;
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || 100));
        } else {
            this.renderedSequence = [
                ...this.renderedSequence,
                this.currentSequence[this.currentIndexInSequence],
            ]
            if (this.currentIndexInSequence < this.currentSequence.length) {
                setTimeout(() => {
                    this.nextStepInSequence();
                    this.update()
                }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || 100));
            }
        }
        this.update()
    }
    selectOption(optionID) {
        // get sequence in current option
        console.log(optionID);
        let option = this
            .renderedOptions
            .find((option) => {
                return optionID === option.id
            })
        console.log(option);
    }
}

let engine = new Engine();

class App extends React.Component {
    componentDidMount() {
        engine.update = () => {
            this.forceUpdate();
        }

    }
    render() {
        return (<div>
            <div className="background"></div>
            <div className="dialog-box">
                {
                    engine
                        .renderedSequence
                        .map(dialog => {
                            return (<div key={Math.random()} className={`${dialog.character}-response`}>
                                {dialog.text}
                            </div>);
                        })
                }
                {
                    engine
                        .renderedOptions
                        .map((option) => {
                            return (<button key={option.id} className="player-option" onClick={() => {
                                    engine.selectOption(option.id);
                                }}>{option.buttonText}</button>)
                        })
                }
            </div>
        </div>);
    }
}
// <button className="player-option" onClick={() => {
//         let newTextBits = [
//             ...this.state.textBits, {
//                 character: 'player',
//                 text: 'Hello, HAL. Do you read me, HAL?'
//             }, {
//                 character: 'entity',
//                 text: 'Affirmative, Dave. I read you.'
//             },
//         ];
//         this.setState({textBits: newTextBits});
//     }}>
//     Hello, HAL. Do you read me, HAL?
// </button>
// <button className="player-option" onClick={() => {
//         let newTextBits = [
//             ...this.state.textBits, {
//                 character: 'player',
//                 text: 'Open the pod bay doors, HAL.'
//             }, {
//                 character: 'entity',
//                 text: "I'm sorry, Dave. I'm afraid I can't do that."
//             },
//         ];
//         this.setState({textBits: newTextBits});
//     }}>
//     Open the pod bay doors, HAL.
// </button>
// <button className="player-option" onClick={() => {
//         let newTextBits = [
//             ...this.state.textBits, {
//                 character: 'player',
//                 text: 'What are you talking about, HAL?'
//             }, {
//                 character: 'entity',
//                 text: 'This mission is too important for me to allow you to jeopardize it.'
//             },
//         ];
//         this.setState({textBits: newTextBits});
//     }}>
//     What are you talking about, HAL?
// </button>
export default App;
ReactDOM.render(<App update={engine.update}/>, document.getElementById('app'));
engine.start();
