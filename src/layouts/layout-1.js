import React, {Component} from 'react';
import cFactory from "../configurations/components-factory";
//import TextComponent from './../components/text-component'
// class AnoterComponent extends Component {
//
//     render(){
//         return <p>inner component</p>
//     }
// }

class Layout1 extends Component {

    render() {

        const header = cFactory.build(this.props.header);
        const left = cFactory.build(this.props.left);
        const right = cFactory.build(this.props.right);
        const footer = cFactory.build(this.props.footer);

        const tableStyle = {'border-color' : this.props.bordercolor};

        return <table border={this.props.border || 0} style={tableStyle} width="80%" className={'center'}>
                <tbody>
                    <tr><td colSpan={2}>header: {header}</td></tr>
                    <tr><td width="50%">left: {left}</td><td width="50%">right: {right}</td></tr>
                    <tr><td colSpan={2}>footer: {footer}</td></tr>
                </tbody>
            </table>
    }
}

export default Layout1;