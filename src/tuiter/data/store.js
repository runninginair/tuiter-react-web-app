import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../screens/counter-reducer";
import adminReducer from "../profile/profile-reducer";
import userReducer from "../../screens/profile-demo/user-reducer";
import tuitsReducer from "../tuits/tuits-reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
        admin: adminReducer,
        tuits: tuitsReducer,
    },
});

export default store;
