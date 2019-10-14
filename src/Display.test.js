import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Display />);
})

describe('Display component:', () => {
    it('renders correctly', () => {
        wrapper.debug();
        expect(wrapper.container).toMatchSnapshot();
    });

    it('displays if gate is open/closed and if it is locked/unlocked', () => {

    });

    it('displays Closed if the closed prop is true and Open if otherwise', () => {

    });

    it('displays Locked if the locked prop is true and Unlocked if otherwise', () => {

    });

    it('when locked or closed use the red-led class', () => {

    });

    it('when unlocked or open use the green-led class', () => {

    });
});