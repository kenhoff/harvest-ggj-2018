import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';
import Engine from "./engine";

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
        let location = "farmhouse-day";
        // iterate through the array backwards until you find an item with a location
        for (var i = engine.renderedSequence.length - 1; i >= 0; i--) {
            if (engine.renderedSequence[i].location) {
                location = engine
                    .renderedSequence[i]
                    .location;
                break;
            }
        }

        let dialogBox = null;
        if (engine.renderedSequence.length > 0) {

            dialogBox = (<div className="dialog-box">
                {
                    engine
                        .renderedSequence
                        .map(dialog => {
                            return (<div key={Math.random()} className={`dialog-bit ${dialog.character}-response`}>
                                {dialog.text}
                            </div>);
                        })
                }
            </div>)
        }

        return (<div>
            <div className={`background ${location}`}>
                <div className="dialog-container">
                    {dialogBox}
                    <div className="responses">
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
                </div>
            </div>
        </div>);
    }
}

export default Game;
