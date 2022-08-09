import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import App from './App'

window.onload = function() {
    const rootDiv = document.getElementById('root');
    const root = ReactDOM.createRoot(rootDiv);
    root.render((<App />));
}
