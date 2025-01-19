/*
    After the Action is served by the Middleware, the execution comes to the Reducer.
*/
import { ADD_TODO } from "./actions";
import { initialState } from "./initial-state";

// We use the shortid library to generate a random unique id for our new todo
import shortid from "shortid";

// reducer is a pure function which takes in a previous state and an action, and it produces a new state.
// Everytime you create a reducer function, you have to return the particular state
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const { title } = action.payload;

            const newState = {
                ...state,
                todos: [
                    ...state.todos, 
                    {
                      id: shortid(),
                      title,
                      completed: false,
                      important: false,
                    },
                ],
            };
            return newState;

        default:
            return state;
    }
}

export default reducer;