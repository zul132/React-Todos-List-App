import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
