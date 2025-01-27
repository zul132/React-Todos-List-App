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

        const newState = reducer(initialState, action);

        // Add a few expectations to the test
        expect(newState.todos[0].title).toEqual("Read a book");

    });

    test("should mark todo as completed", () => {

    });
});

