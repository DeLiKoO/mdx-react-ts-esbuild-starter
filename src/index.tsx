import * as React from 'react'
import * as ReactDOM from 'react-dom/client';

window.onload = function() {
    let Greet = () => <h1>Hello, world!</h1>
    const rootDiv = document.getElementById('root');
    console.log(document);
    console.log({rootDiv});
    const root = ReactDOM.createRoot(
        rootDiv
    );
    root.render((<Greet />));
}
