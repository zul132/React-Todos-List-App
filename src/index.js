import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import path

import { Provider } from "react-redux"; 
import { store } from "./redux/store";
import ConnectedApp from "./App";

// use Provider to bind the store to our app
const ReduxApp = () => {
    return (
        <Provider store={store}>
            <ConnectedApp />
        </Provider>
    )
};

const App = () => {
    return <div>Hello world!</div>;
};

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReduxApp />);
