import React from "react";
import { useSelector } from "react-redux";      // import useSelector hook  from react-redux

/**     2.4 Create a Hello World Redux component
 * 
 * The component uses redux's useSelector hook to extract the message from the reducer.
 * When the component loads, reducers pass their data in the function declared in useSelector.
 * In the code below, the parameter hello in (hello) => { … }, gets the object returned by the
 * reducers, e.g., {message: 'Hello World'}, therefore, (hello) => hello.message returns
 * 'Hello World', and that's the value const message is initialized with.
 * The component goes on to render 'Hello World' in an H1 element.
 */

const HelloReduxExampleComponent = () => {
    // const message = useSelector((hello) => hello.message);  // extract 'Hello World' from reducer
    const message = useSelector((state) => state.hello.message);  // extract 'Hello World' from reducer

    return (
        <h1>{message}</h1>                                  // render <h1>Hello World</h1>
    );
};

export default HelloReduxExampleComponent;