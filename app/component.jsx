import React from 'react';
import Bton from 'react-toolbox/lib/button';

export default class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Bton icon='bookmark' label='Bookmark' accent />
            </div>
        );
    }
}
