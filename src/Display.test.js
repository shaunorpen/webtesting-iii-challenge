import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display component:', () => {
    it('renders correctly', () => {
      const wrapper = rtl.render(<Display closed={false} locked={false} />);
      expect(wrapper.container).toMatchSnapshot();
    });

    it('displays if gate is open/closed and if it is locked/unlocked', () => {
      const wrapper = rtl.render(<Display closed={false} locked={false} />);
      expect(wrapper.queryByText(/Unlocked/)).toBeInTheDocument();
      expect(wrapper.queryByText(/Open/)).toBeInTheDocument();
    });

    it('displays Closed if the closed prop is true and Open if otherwise', () => {
      const wrapper = rtl.render(<Display closed={true} locked={false} />);
      expect(wrapper.queryByText(/Closed/)).toBeInTheDocument();
    });

    it('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
      const wrapper = rtl.render(<Display closed={false} locked={true} />);
      expect(wrapper.queryByText(/Locked/)).toBeInTheDocument();
    });

    it('when locked or closed use the red-led class', () => {
      const wrapper = rtl.render(<Display closed={true} locked={true} />);
      expect(wrapper.queryByText(/Locked/)).toHaveClass('red-led');
      expect(wrapper.queryByText(/Closed/)).toHaveClass('red-led');
    });

    it('when unlocked or open use the green-led class', () => {
      const wrapper = rtl.render(<Display closed={false} locked={false} />);
      expect(wrapper.queryByText(/Unlocked/)).toHaveClass('green-led');
      expect(wrapper.queryByText(/Open/)).toHaveClass('green-led');
    });
});