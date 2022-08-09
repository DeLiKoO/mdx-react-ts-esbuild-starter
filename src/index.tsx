import * as React from 'react'
import * as ReactDOM from 'react-dom/client';
import Page from './Page.mdx'

window.onload = function() {
    // let Greet = () => <h1>Hello, world!</h1>
    console.log('Well, that\'s kewll ! :)')
    const rootDiv = document.getElementById('root');
    console.log(document);
    console.log({rootDiv});
    const root = ReactDOM.createRoot(
        rootDiv
    );
    root.render((
    <>
        <header className='flex text-center'>    
            <h1 className='text-3xl font-bold underline'>
                Hello world!
            </h1>
        </header>
        <div id='content' className=''>

            <Page />
        </div>
        <footer>

        </footer>
    </>
    ));
}
