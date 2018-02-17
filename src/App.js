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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
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
