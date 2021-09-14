import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import Select from "react-select";
import { Link, Route, Switch } from "react-router-dom";
import JsonForm from "./components/JsonForm";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App my-5">
      <Link to="/">Home</Link>
      <br />
      <Link to="/counter">Counter</Link>
      <Switch>
        <Route exact path="/">
          <JsonForm />
        </Route>
        <Route exact path="/counter">
          <Counter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
