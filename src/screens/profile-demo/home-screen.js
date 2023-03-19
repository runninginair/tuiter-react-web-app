import React from "react";
import { useSelector } from "react-redux";

function HomScreenDemo() {
    const {user} = useSelector((state) => state.user);

    // Must use the name "count" not "number" or anyone else,
    // cause the count is the object name in "counter-reducer.js" (line 4).
    const { count } = useSelector((state) => state.counter);

    return (
            <div>
                <h1>Home Screen Demo</h1>

                <h2>Welcome {user.firstName} {user.lastName}!</h2>

                <h2>Count from CounterDemo: {count}</h2>
            </div>
    );
}

export default HomScreenDemo;