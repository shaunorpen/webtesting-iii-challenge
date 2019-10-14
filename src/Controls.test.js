import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

describe('Controls component:', () => {
    it('renders correctly', () => {
      wrapper = rtl.render(<Controls />);
      expect(wrapper.container).toMatchSnapshot();
    });

    it('provides buttons to toggle the closed and locked states.', () => {
      wrapper = rtl.render(<Controls />);
      expect(wrapper.getByText(/Close Gate/)).toBeInTheDocument();
      expect(wrapper.getByText(/Lock Gate/)).toBeInTheDocument();
    });

    it('button text changes to reflect the state the door will be in if clicked', () => {
      wrapper = rtl.render(<Controls />);
    });

    it('the closed toggle button is disabled if the gate is locked', () => {
      wrapper = rtl.render(<Controls locked={true}/>);
      expect(wrapper.getByText(/Close Gate/)).toBeDisabled();
    });

    it('the locked toggle button is disabled if the gate is open', () => {
      wrapper = rtl.render(<Controls open={true}/>);
      expect(wrapper.getByText(/Lock Gate/)).toBeDisabled();
    });
});