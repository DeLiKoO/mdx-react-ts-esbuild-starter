import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import Page from './Page.mdx'

window.onload = function() {
    // let Greet = () => <h1>Hello, world!</h1>
    const rootDiv = document.getElementById('root');
    console.log(document);
    console.log({rootDiv});
    const root = ReactDOM.createRoot(
        rootDiv
    );
    root.render((<Page />));
}
