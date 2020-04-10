import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/About";
import Test from "./pages/Test";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/test' exact component={Test}></Route>
                    </div>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;