import React, {Component} from 'react';

class TextComponent extends Component {

    render() {
        return <span>just a text component with props = "{this.props.t}"</span>;
    }
}

export default TextComponent;
