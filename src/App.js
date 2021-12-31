import "./App.css";
import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";

const JsonForm = lazy(() => import("./components/JsonForm"));
const Counter = lazy(() => import("./components/Counter"));

function App() {
	return (
		<div className="App my-5">
			<Link to="/">Home</Link>
			<br />
			<Link to="/counter">Counter</Link>
			<Switch>
				<Suspense fallback={<div>Loading Page</div>}>
					<Route exact path="/">
						<JsonForm />
					</Route>
					<Route exact path="/counter">
						<Counter />
					</Route>
				</Suspense>
				<Route>
					<h1>Page not found</h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
