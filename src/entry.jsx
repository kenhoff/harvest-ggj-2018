import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import Game from "./game.jsx";

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "start-game"
        }
        this.endGame = this
            .endGame
            .bind(this);
    }
    endGame() {
        this.setState({currentView: "credits"});
    }
    render() {
        switch (this.state.currentView) {
            case "start-game":
                return (<div className="start-game">
                    <h1>Harvest</h1>
                    <audio autoPlay="true" src="/music/Theme_Song_Loop_v1.0.ogg" loop="true"></audio>
                    <button onClick={() => {
                            this.setState({currentView: "game-running"});
                        }}>Click to begin</button>
                </div>);
            case "game-running":
                return (<Game endGame={this.endGame}></Game>);
            case "credits":
                return (<div className="credits">
                    <audio autoPlay="true" src="/music/Theme_Song_Loop_v1.0.ogg" loop="true"></audio>
                    <h1>Credits</h1>
                    <p>Darrell</p>
                    <p>Elizabeth</p>
                    <p>Jojo</p>
                    <p>Ken</p>
                    <p>Terrence</p>
                </div>)

        }
    }
}

ReactDOM.render(<Entry/>, document.getElementById('app'));
