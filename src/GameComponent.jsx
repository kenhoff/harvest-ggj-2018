import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';
import Engine from "./engine";
import DialogText from "./DialogText.jsx";

let engine = new Engine();

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: "farmhouse-day"
        }
    }
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
                            // console.log(dialog.id);
                            // console.log(dialog.text);
                            return (<DialogText key={dialog.id} className={`dialog-bit ${dialog.character}-response`}>
                                {dialog.text}
                            </DialogText>);
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
