import { createSlice } from "@reduxjs/toolkit"; // import slice
// import whoArray from "./who.json";
import whoArray from "../data/who.json"         // import data from JSON file

const whoSlice = createSlice(                   // create the slice
    {
        name: "who",                            // name the reducer
        initialState: whoArray                  // initialize the reducer's state
    }
);

export default whoSlice.reducer;                // export the reducer