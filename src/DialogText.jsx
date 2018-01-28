import React from 'react'
import PropTypes from 'prop-types'

class DialogText extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     renderedCharacters: ""
        // }
        // let i = 0;
        // let typewriterInterval = setInterval(() => {
        //     if (i >= this.props.children.length) {
        //         clearInterval(typewriterInterval);
        //     } else {
        //         this.setState({
        //             renderedCharacters: [
        //                 ...this.state.renderedCharacters,
        //                 this
        //                     .props
        //                     .children[i]
        //             ]
        //         });
        //         i++;
        //     }
        // }, 10);
    }
    render() {

        return (<div className={this.props.className}>{this.props.children}</div>)
    }
}

export default DialogText;
