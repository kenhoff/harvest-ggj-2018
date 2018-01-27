import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';
import gameSequence from "./gameSequence";

// const DEFAULT_DELAY = 1000;
const DEFAULT_DELAY = process.env.DEFAULT_DELAY || 100;

class Engine {
    constructor() {
        this.gameSequence = gameSequence;
        this.parentSequences = [];
        this.currentSequence = this.gameSequence;
        this.renderedSequence = [];
        this.renderedOptions = [];
    }
    start() {
        this.currentIndexInSequence = 0;
        setTimeout(() => {
            this.renderedSequence = [
                ...this.renderedSequence,
                this.currentSequence[this.currentIndexInSequence]
            ]
            this.update()
            this.nextStepInSequence();
        }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));

    }
    startSequence() {}
    nextStepInSequence() {
        this.currentIndexInSequence += 1;
        if (this.currentIndexInSequence >= this.currentSequence.length) {
            if (this.parentSequences.length != 0) {
                let parentSequence = this
                    .parentSequences
                    .pop();
                this.currentSequence = parentSequence.sequence;
                this.currentIndexInSequence = parentSequence.index;
                this.nextStepInSequence();
            } else {
                this.endGame();
            }
        } else if (this.currentSequence[this.currentIndexInSequence].type == "options") {
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
        this
            .parentSequences
            .push({sequence: this.currentSequence, index: this.currentIndexInSequence})
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

class Game extends React.Component {
    componentDidMount() {
        engine.update = () => {
            this.forceUpdate();
        }
        engine.endGame = () => {
            this
                .props
                .endGame();
        }
        engine.start();
    }
    render() {
        // get location from most recent sequence thingamabob
        let location = "farmhouse-day";
        if (engine.renderedSequence.length != 0) {
            location = engine
                .renderedSequence[engine.renderedSequence.length - 1]
                .location || "farmhouse-day";
        }

        return (<div>
            <div className={`background ${location}`}></div>
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

export default Game;
