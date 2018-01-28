import gameSequence from "./gameSequence";
// const DEFAULT_DELAY = 1000;
const DELAY_MODIFIER = process.env.DELAY_MODIFIER || .1;
const DEFAULT_DELAY = process.env.DEFAULT_DELAY || 1000;

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
        // setTimeout(() => {
        //     this.renderedSequence = [
        //         ...this.renderedSequence,
        //         this.currentSequence[this.currentIndexInSequence]
        //     ]
        //     this.update()
        //     this.nextStepInSequence();
        // }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000 * DELAY_MODIFIER) || DEFAULT_DELAY * DELAY_MODIFIER));

        if (this.currentSequence[this.currentIndexInSequence].type == "options") {
            setTimeout(() => {
                this.renderedOptions = this.currentSequence[this.currentIndexInSequence].options;
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000 * DELAY_MODIFIER) || DEFAULT_DELAY * DELAY_MODIFIER));
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
                this.nextStepInSequence();
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000 * DELAY_MODIFIER) || DEFAULT_DELAY * DELAY_MODIFIER));

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
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000 * DELAY_MODIFIER) || DEFAULT_DELAY * DELAY_MODIFIER));
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
                this.nextStepInSequence();
                this.update()
            }, ((this.currentSequence[this.currentIndexInSequence].delay * 1000 * DELAY_MODIFIER) || DEFAULT_DELAY * DELAY_MODIFIER));
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
        }
        this.renderedOptions = []
        this.update()
        this.nextStepInSequence();
    }
}

export default Engine
