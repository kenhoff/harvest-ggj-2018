import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import GameComponent from "./GameComponent.jsx";

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
                return (<GameComponent endGame={this.endGame}></GameComponent>);
            case "credits":
                return (<div className="credits">
                    <audio autoPlay="true" src="/music/Theme_Song_Loop_v1.0.ogg" loop="true"></audio>
                    <h1>Thanks for playing!</h1>
                    <div className="credits-nascar">
                        <div>
                            <p>
                                Darrell
                            </p>
                            <p>
                                <a href="https://twitter.com/HardyTales">@HardyTales</a>
                            </p>

                        </div>
                        <div>
                            <p>
                                Elizabeth
                            </p>
                            <p>
                                <a href="https://twitter.com/lizbernhardt">@lizbernhardt</a>
                            </p>
                        </div>
                        <div>
                            <p>
                                Jojo
                            </p>
                            <p>
                                <a href="https://twitter.com/Ippika_">@Ippika_</a>
                            </p>
                        </div>
                        <div>
                            <p>
                                Joshua
                            </p>
                            <p>
                                <a href="https://twitter.com/JoshuaDuChene">@JoshuaDuChene</a>
                            </p>
                        </div>
                        <div>
                            <p>
                                Ken
                            </p>
                            <p>
                                <a href="https://twitter.com/ken_hoff">@ken_hoff</a>
                            </p>
                        </div>
                        <div>
                            <p>
                                Terrence
                            </p>
                        </div>
                    </div>
                </div>)

        }
    }
}

ReactDOM.render(<Entry/>, document.getElementById('app'));
