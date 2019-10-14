import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './Gate';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<App />);
})

describe('Controls component:', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });
// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class
});