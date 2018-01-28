import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import GameComponent from "./GameComponent.jsx";
// import {Howl, Howler} from "Howler";

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "start-game"
        }
        this.endGame = this
            .endGame
            .bind(this);
        this.playAudio = this
            .playAudio
            .bind(this);
    }
    componentDidMount() {
        this.themeMusic = new Howl({src: "/music/Theme_Song_Loop_v1.0.ogg", loop: true})
        this.outsideLoop = new Howl({src: "/music/Outdoor_Music_Loop_v1.0.ogg", loop: true})
        this.insideLoop = new Howl({src: "/music/inside_house_music.ogg", loop: true})
        this.storeLoop = new Howl({src: "/music/store_music.ogg", loop: true})
        this.consoleBeeping = new Howl({src: "/sounds/Console_Notification_Loop.ogg", loop: true, volume: 0.25})
        this.consoleStart = new Howl({src: "/sounds/Console_Start.ogg"})
        this.consoleStop = new Howl({src: "/sounds/Console_Crash.ogg"})
        this.consoleLoop = new Howl({src: "/sounds/Console_Running_Loop_7.338s_delay.ogg", loop: true, preload: true})
        this.truck = new Howl({src: "/sounds/Truck.ogg"})
        this.shopkeeper1 = new Howl({src: "/sounds/robot1.ogg"})
        this.shopkeeper2 = new Howl({src: "/sounds/robot2.ogg"})
        this.shopkeeper3 = new Howl({src: "/sounds/robot3.ogg"})
        this.shopkeeper4 = new Howl({src: "/sounds/robot4.ogg"})
        this.shopkeeperAudio = [this.shopkeeper1, this.shopkeeper2, this.shopkeeper3, this.shopkeeper4];
        this
            .themeMusic
            .play();
        this
            .themeMusic
            .fade(0, 1, 2000);

    }
    playAudio(audioID) {
        // console.log(audioID);
        if (audioID === "farmhouse-outside-loop") {
            this
                .themeMusic
                .fade(1, 0, 2000);
            this
                .insideLoop
                .fade(1, 0, 2000)
            setTimeout(() => {
                this
                    .themeMusic
                    .stop();
                this
                    .insideLoop
                    .stop();
            }, 2000);
            this
                .outsideLoop
                .play();
            this
                .outsideLoop
                .fade(0, 1, 2000);
        } else if (audioID === "farmhouse-inside-loop") {
            // fade out outside loop
            this
                .outsideLoop
                .fade(1, 0, 2000)
            setTimeout(() => {
                this
                    .outsideLoop
                    .stop();
            }, 2000);

            // fade in inside loop

            this
                .insideLoop
                .play();
            this
                .insideLoop
                .fade(0, 1, 2000);

        } else if (audioID === "console-beeping-start") {
            this
                .consoleBeeping
                .play();
        } else if (audioID === "console-beeping-stop") {
            this
                .consoleBeeping
                .stop()
        } else if (audioID === "console-start") {
            this
                .consoleStart
                .play();
            this.consoleLoopTimeout = setTimeout(() => {
                this
                    .consoleLoop
                    .play();
            }, 7338);
        } else if (audioID === "console-stop") {
            clearTimeout(this.consoleLoopTimeout);
            this
                .consoleStart
                .stop();
            this
                .consoleLoop
                .stop();
            this
                .consoleStop
                .play();
        } else if (audioID === "truck") {
            this
                .truck
                .play();
        } else if (audioID === "shopkeeper") {
            this
                .shopkeeper1
                .stop();
            this
                .shopkeeper2
                .stop();
            this
                .shopkeeper3
                .stop();
            this
                .shopkeeper4
                .stop();
            // pick random shopkeeper audio file
            let shopkeeperAudio = this.shopkeeperAudio[Math.floor(Math.random() * this.shopkeeperAudio.length)]
            shopkeeperAudio.play();
        }
    }
    endGame() {
        this.setState({currentView: "credits"});
        // Howler.unload();
        clearTimeout(this.consoleLoopTimeout);
        this
            .outsideLoop
            .fade(1, 0, 2000);
        this
            .insideLoop
            .fade(1, 0, 2000);

        setTimeout(function() {
            this
                .outsideLoop
                .stop();
            this
                .insideLoop
                .stop();
        }, 2000);
        this
            .consoleStart
            .stop();
        this
            .consoleLoop
            .stop();
        this
            .consoleStop
            .play();
        this
            .themeMusic
            .play();
        this
            .themeMusic
            .fade(0, 1, 2000)
    }
    render() {
        // <audio autoPlay="true" src="/music/Theme_Song_Loop_v1.0.ogg" loop="true"></audio>

        let displayedElement;
        if (this.state.currentView === "start-game") {
            displayedElement = (<div className="start-game">
                <h1>Harvest</h1>
                <button onClick={() => {
                        this.setState({currentView: "game-running"});
                    }}>Click to begin</button>
            </div>);
        } else if (this.state.currentView === "game-running") {
            displayedElement = (<GameComponent playAudio={this.playAudio} endGame={this.endGame}></GameComponent>);
        } else if (this.state.currentView === "credits") {
            displayedElement = (<div className="credits">
                <h1>Thanks for playing!</h1>
                <div className="credits-nascar">
                    <div>
                        <p>
                            Darrell
                        </p>
                        <p className="twitter">
                            <a href="https://twitter.com/HardyTales">@HardyTales</a>
                        </p>

                    </div>
                    <div>
                        <p>
                            Elizabeth
                        </p>
                        <p className="twitter">
                            <a href="https://twitter.com/lizbernhardt">@lizbernhardt</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            Jojo
                        </p>
                        <p className="twitter">
                            <a href="https://twitter.com/Ippika_">@Ippika_</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            Joshua
                        </p>
                        <p className="twitter">
                            <a href="https://twitter.com/JoshuaDuChene">@JoshuaDuChene</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            Ken
                        </p>
                        <p className="twitter">
                            <a href="https://twitter.com/ken_hoff">@ken_hoff</a>
                        </p>
                    </div>
                    <div>
                        <p>
                            Terrence
                        </p>
                    </div>
                </div>
                <img className="bananacat" src="/art/bananacat_1024.png"></img>
                <p>{'made with <3 by Bananacat Studios'}</p>
            </div>);
        }
        return (<div>
            {displayedElement}
        </div>)
    }
}

ReactDOM.render(<Entry/>, document.getElementById('app'));
