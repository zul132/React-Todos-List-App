import { ADD_TODO } from "./actions";

import { takeEvery } from "redux-saga/effects";

// Note: function* is the syntax for creating Generator Functions in plain JS

export function* addTodo() {
    yield takeEvery(ADD_TODO, function*(){
        // We can perform async operations here
    });
}

export default function*() {
    yield* addTodo();
}