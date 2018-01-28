import gameSequence from "./gameSequence";
// const DEFAULT_DELAY = 1000;
const DELAY_MODIFIER = process.env.DELAY_MODIFIER;
const DEFAULT_DELAY = process.env.DEFAULT_DELAY;
console.log(DEFAULT_DELAY);

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

        if (this.currentSequence[this.currentIndexInSequence].type == "options") {
            setTimeout(() => {
                this.renderedOptions = this.currentSequence[this.currentIndexInSequence].options;
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));
        } else {
            // add dialog option to renderedSequence
            setTimeout(() => {
                if (this.currentSequence[this.currentIndexInSequence].clear) {
                    this.renderedSequence = [];
                }
                this.renderedSequence = [
                    ...this.renderedSequence,
                    this.currentSequence[this.currentIndexInSequence]
                ]
                if (this.currentSequence[this.currentIndexInSequence].audio) {
                    this.playAudio(this.currentSequence[this.currentIndexInSequence].audio);
                }
                this.nextStepInSequence();
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));

        }

    }
    playAudio(arrayOrString) {
        console.log(arrayOrString);
        if (typeof arrayOrString === 'string') {
            this.dispatchAudio(arrayOrString)
        } else if (Array.isArray(arrayOrString)) {
            for (let audioID of arrayOrString) {
                this.dispatchAudio(audioID)
            }
        }
    }
    nextStepInSequence() {
        this.currentIndexInSequence += 1;
        if (this.currentIndexInSequence >= this.currentSequence.length) {
            if (this.parentSequences.length != 0) {
                let parentSequence = this.parentSequences.pop();
                this.currentSequence = parentSequence.sequence;
                this.currentIndexInSequence = parentSequence.index;
                this.nextStepInSequence();
            } else {
                this.endGame();
            }
        } else if (this.currentSequence[this.currentIndexInSequence].type == "options") {
            setTimeout(() => {
                this.renderedOptions = this.currentSequence[this.currentIndexInSequence].options;
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));
        } else {
            // add dialog option to renderedSequence
            setTimeout(() => {
                if (this.currentSequence[this.currentIndexInSequence].clear) {
                    this.renderedSequence = [];
                }
                this.renderedSequence = [
                    ...this.renderedSequence,
                    this.currentSequence[this.currentIndexInSequence]
                ]
                if (this.currentSequence[this.currentIndexInSequence].audio) {
                    this.playAudio(this.currentSequence[this.currentIndexInSequence].audio);
                }
                this.nextStepInSequence();
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000) || DEFAULT_DELAY));
        }
        this.update()
    }
    selectOption(optionID) {
        // get sequence in current option
        let option = this.renderedOptions.find((option) => {
            return optionID === option.id
        })
        if (!option.sequence || option.sequence.length > 0) {
            this.parentSequences.push({sequence: this.currentSequence, index: this.currentIndexInSequence})
            this.currentSequence = option.sequence;
            this.currentIndexInSequence = 0;
            this.renderedSequence = [
                ...this.renderedSequence,
                this.currentSequence[this.currentIndexInSequence]
            ]
            if (this.currentSequence[this.currentIndexInSequence].audio) {
                this.playAudio(this.currentSequence[this.currentIndexInSequence].audio);
            }
        }
        this.renderedOptions = []
        this.update()
        this.nextStepInSequence();
    }
}

export default Engine
