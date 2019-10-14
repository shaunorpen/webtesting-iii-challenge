import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<App />);
})

describe('App component:', () => {
  it('renders correctly', () => {
    expect(wrapper.queryByText(/Unlocked/)).toBeInTheDocument();
    expect(wrapper.queryByText(/Open/)).toBeInTheDocument();
    expect(wrapper.queryByText(/Lock Gate/)).toBeInTheDocument();
    expect(wrapper.queryByText(/Close Gate/)).toBeInTheDocument();
  });
});
