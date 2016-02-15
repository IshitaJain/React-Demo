import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

function main() {
    console.log('in main and this is app id DOM element' + document.getElementById('app'));
    ReactDOM.render(<Hello />, document.getElementById('app'));
}

main();