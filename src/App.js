import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/About";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                        </div>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        );
    }
}

export default App;