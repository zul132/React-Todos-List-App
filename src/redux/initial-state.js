/* 
    Depicts what the initial state will be when the app loads
*/

// We need to convert the browser's local state into a JSON object
export const initialState = JSON.parse(
  window.localStorage.getItem("ttb-todos")) || {
    todos: [
      {
        id: 0,
        title: "Buy milk",
        completed: false,
        important: false,
      },
      {
        id: 1,
        title: "Clean my room",
        completed: true,
        important: false,
      },
      {
        id: 2,
        title: "Get medicines",
        completed: false,
        important: true,
      },
      {
        id: 3,
        title: "Car service",
        completed: false,
        important: true,
      },
      {
        id: 4,
        title: "Prepare for meeting",
        completed: true,
        important: false,
      },
    ],
};