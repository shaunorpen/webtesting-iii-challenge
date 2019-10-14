import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gate from './Gate';
import { idText } from 'typescript';
import { exportAllDeclaration } from '@babel/types';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Gate />);
})

describe('Gate component:', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('defaults to unlocked and open', () => {
    expect(wrapper.queryByText(/Unlocked/)).toBeInTheDocument();
    expect(wrapper.queryByText(/Open/)).toBeInTheDocument();
  });

  it('cannot be closed or opened if it is locked', () => {
    rtl.fireEvent.click(wrapper.queryByText(/Close Gate/));
    rtl.fireEvent.click(wrapper.queryByText(/Lock Gate/));
    expect(wrapper.queryByText(/Locked/)).toBeInTheDocument();
    expect(wrapper.queryByText(/Closed/)).toBeInTheDocument();
    expect(wrapper.queryByText(/Unlock Gate/)).toBeEnabled();
    expect(wrapper.queryByText(/Open Gate/)).toBeDisabled();
  });
});
