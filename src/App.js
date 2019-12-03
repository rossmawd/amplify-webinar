import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import { Analytics, AnalyticsClass } from 'aws-amplify'




class App extends React.Component {

  recordEvent = () => {
    console.log("about to record event")
    Analytics.record({
      name: 'Test Event 1',
      attributes: {
        username: 'dabit3'
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">``
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to HELLo.
        </p>
          <button onClick={this.recordEvent} >Record Event</button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
