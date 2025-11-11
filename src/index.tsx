import React from 'react';
import { createRoot } from 'react-dom/client'; // <-- Import createRoot

const App = () => { 
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Hello world!</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

const rootElement = document.getElementById('root'); // <-- Get the root node
if (rootElement) {
    createRoot(rootElement).render(<App />); // <-- Render your App
}

export default App;