import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TimeCountdown from '../src/';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimeCountdown deadlineTimestamp={5*1000+Date.now()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
