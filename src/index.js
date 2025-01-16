import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import path

const App = () => {
    return <div>Hello world!</div>;
};

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
