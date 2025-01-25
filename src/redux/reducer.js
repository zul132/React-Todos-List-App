/*
    After the Action is served by the Middleware, the execution comes to the Reducer.
*/
import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from "./actions";
import { initialState } from "./initial-state";

// We use the shortid library to generate a random unique id for our new todo
import shortid from "shortid";

/* We will save the new state of our Todos app in our Browser's local storage */
function saveStateToBrowser(state) {
    window.localStorage.setItem("ttb-todos", JSON.stringify(state));
}

// reducer is a pure function which takes in a previous state and an action, and it produces a new state.
// Everytime you create a reducer function, you have to return the particular state
function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
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

            saveStateToBrowser(newState);
            return newState;
        }
        case TOGGLE_COMPLETED: {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            const newState = {
                ...state,
                todos: newTodos,
            };

            saveStateToBrowser(newState);
            return newState;
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            const newTodos = state.todos.filter((todo) => todo.id !== id);

            const newState = {
                ...state,
                todos: newTodos,
            };

            saveStateToBrowser(newState);
            return newState;
        }
        case TOGGLE_IMPORTANT: {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.important = !todo.important;
                }
                return todo;
            });

            const newState = {
                ...state,
                todos: newTodos,
            };

            saveStateToBrowser(newState);
            return newState;
        } 
        default:
            return state;
    }
}

export default reducer;