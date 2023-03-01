import React from "react";

// import the component that consumes the data
import HelloReduxExampleComponent from "./hello-redux-example-component";

// // import reducer that calculates/generates the data
import hello from "./reducers/hello";

import todos from "./reducers/todos-reducer";
import Todos from "./todos-component";

// import createStore to store data from reducers
// import { createStore } from "redux";
// instead of createStore, import the configureStore function
import { configureStore } from "@reduxjs/toolkit";

// import Provider which will deliver the data
import { Provider } from "react-redux";

// create data storage
// const store = createStore(hello);
const store = configureStore({reducer: {hello, todos}});


const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};
export default ReduxExamples;