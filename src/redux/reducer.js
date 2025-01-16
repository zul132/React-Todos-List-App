/*
    After the Action is served by the Middleware, the execution comes to the Reducer.
*/
import { initialState } from "./initial-state";

// reducer is a pure function which takes in a previous state and an action, and it produces a new state.
// Everytime you create a reducer function, you have to return the particular state
function reducer(state = initialState, action) {
    return state;
}

export default reducer;