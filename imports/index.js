import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Test = () => <div>Test</div>;
const Signin = () => <div>Signin</div>;

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Test} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </Router>
    );
  }
}
