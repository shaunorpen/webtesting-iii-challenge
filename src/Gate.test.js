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
});
