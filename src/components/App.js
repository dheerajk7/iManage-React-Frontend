import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Student, ProgressBar } from "../components";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="blank-nav"></div>
          <Navbar />
          <div className="blank-progress-bar"></div>
          {isLoading && <ProgressBar />}
          <Switch>
            <Route path="/student" component={Student} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.progress.isLoading,
  };
}

export default connect(mapStateToProps)(App);
