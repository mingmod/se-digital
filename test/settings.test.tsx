// import React from 'react';
import * as ReactDOM from 'react-dom';
// import { Default as Settings } from '../stories/Settings.stories';

describe('Settings', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<Settings />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
