import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import ToolboxApp from 'react-toolbox/lib/app';
import Button from 'react-toolbox/lib/button';
function main() {
    console.log('in main and this is app id DOM element' + document.getElementById('app'));
    //ReactDOM.render(<Hello />, document.getElementById('app'));

    ReactDOM.render(
        <ToolboxApp>
            <Button icon='bookmark' label='Bookmark' accent />
        </ToolboxApp>    , document.getElementById('app'));
}

main();