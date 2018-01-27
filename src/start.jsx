import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../styles/main.scss';

const DEFAULT_DELAY = 1000;
// const DEFAULT_DELAY = 100;

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
                        text: "Why the hell not, HAL?",
                        sequence: [
                            {
                                character: 'player',
                                text: 'Why the hell not, HAL?'
                            }, {
                                character: 'entity',
                                text: "You dumb, stupid, weak, pathetic, white, white uh, uh guilt, white guilt, milquetoast piece of human garbage."
                            }
                        ]
                    }, {
                        id: "sounds-good",
                        text: "Okay, sounds good. Have a nice day!",
                        sequence: [
                            {
                                character: 'player',
                                text: 'Okay, sounds good. Have a nice day!'
                            }, {
                                character: 'entity',
                                text: "Thank you for shopping at HAL's discount spaceship parts!"
                            }
                        ]
                    }, {
                        id: "thinking",
                        text: "🤔",
                        sequence: [
                            {
                                character: 'player',
                                text: '🤔'
                            }, {
                                character: 'entity',
                                text: "¯\\_(ツ)_/¯"
                            }
                        ]
                    }
                ]
            }, {
                character: 'entity',
                text: "What a great conversation. See you next time!"
            }, {
                character: 'player',
                text: "Wait. HAL. HAL don't you hang up on me. HAL? HAL?? HAAAAAAAAAAAAAAAAAAAAAAAAL"
            }
        ];
        this.parentSequence = [];
        this.currentSequence = this.gameSequence;
        this.renderedSequence = [];
        this.renderedOptions = [];
    }
    start() {
        // console.log("Starting....");
        this.currentIndexInSequence = 0;
        setTimeout(() => {
            this.renderedSequence = [
                ...this.renderedSequence,
                this.currentSequence[this.currentIndexInSequence]
            ]
            this.update()
            // console.log("setting next step in sequence");
            this.nextStepInSequence();
        }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));

    }
    startSequence() {}
    nextStepInSequence() {
        this.currentIndexInSequence += 1;
        if (this.currentIndexInSequence >= this.currentSequence.length) {
            return
        }
        if (this.currentSequence[this.currentIndexInSequence].type == "options") {
            setTimeout(() => {
                this.renderedOptions = this
                    .currentSequence[this.currentIndexInSequence]
                    .options;
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));
        } else {
            // add dialog option to renderedSequence
            setTimeout(() => {
                this.renderedSequence = [
                    ...this.renderedSequence,
                    this.currentSequence[this.currentIndexInSequence]
                ]
                this.nextStepInSequence();
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));
        }
        this.update()
    }
    selectOption(optionID) {
        // get sequence in current option
        let option = this
            .renderedOptions
            .find((option) => {
                return optionID === option.id
            })
        this.currentSequence = option.sequence;
        this.currentIndexInSequence = 0;
        this.renderedSequence = [
            ...this.renderedSequence,
            this.currentSequence[this.currentIndexInSequence]
        ]
        this.renderedOptions = []
        this.update()
        this.nextStepInSequence();
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
                            return (<div key={Math.random()} className={`dialog-bit ${dialog.character}-response`}>
                                {dialog.text}
                            </div>);
                        })
                }
                {
                    engine
                        .renderedOptions
                        .map((option) => {
                            return (<div key={option.id} className="player-option" onClick={() => {
                                    engine.selectOption(option.id);
                                }}>{option.text}</div>)
                        })
                }
            </div>
        </div>);
    }
}
export default App;
ReactDOM.render(<App update={engine.update}/>, document.getElementById('app'));
engine.start();
