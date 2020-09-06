import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Student } from "../components";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="blank-nav"></div>
          <Navbar />
          <div className="blank-progress-bar"></div>
          {/* {isLoading && <ProgressBar />} */}
          <Switch>
            <Route path="/student" component={Student} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
