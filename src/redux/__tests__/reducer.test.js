/* For testing purpose, you need to first mock the unnecessary imports. */
jest.mock("../initial-state", () => {
    return {
        initialState: {
            todos: [],
        },
    };
});

import reducer from "../reducer";

describe("Reducer", () => {

    /* We need to declare the global window object before each test */
    beforeEach(() => {
        // Give a mock function to the window object so that it doesn't throw an error
        global.window = {
            localStorage: {
                setItem: jest.fn(),
            },
        };
    });
    
    // Clear the global window object after each test
    afterEach(() => {
        global.window = null;   
    });

    test("should add a todo item", () => {

        const initialState = {
            todos: [],
        };

        // Create an ADD_TODO action with a sample title
        const action = {
            type: "ADD_TODO",
            payload: {
                title: "Read a book",
            },
        };

        // When you call reducer(), it should add the sample todo that we provided
        const newState = reducer(initialState, action);

        // Add expectations to the test
        expect(newState.todos[0].title).toEqual("Read a book");
        /* By default, the new todo will not be marked completed and not marked important */
        expect(newState.todos[0].completed).toBeFalsy();    
        expect(newState.todos[0].important).toBeFalsy();
    });

    test("should mark todo as completed", () => {
        const initialState = {
          todos: [
            {
              id: "12345",
              title: "Read a book",
              completed: false,
              important: false,
            },   
          ],
        };

        const action = {
            type: "TOGGLE_COMPLETED",
            payload: {
                id: "12345",
            },
        };

        // When you call reducer(), it should mark the todos with id "12345" as completed
        const newState = reducer(initialState, action);

        expect(newState.todos[0].completed).toBeTruthy();
    });
});

