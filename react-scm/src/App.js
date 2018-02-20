import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import rootConfig from "./configurations/root-config";
import subConfig from "./configurations/sub-config";
import cFactory from "./configurations/components-factory";

class App extends Component {

    render() {

        const rootComponent1 = cFactory.build(rootConfig.root);
        const rootComponent2 = cFactory.build(subConfig.root);

        return (
            <div>
                <br />
                <br />

                content:

                <table border="1" width="100%" height="300px"><tbody><tr><td>
                    Root component 1:
                    {rootComponent1}
                </td></tr></tbody></table>

                <br />

                <table border="1" width="100%" height="300px"><tbody><tr><td>
                    Root component 2:
                    {rootComponent2}
                </td></tr></tbody></table>
            </div>
        );
    }
}

export default App;
