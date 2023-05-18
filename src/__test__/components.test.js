import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';
import Quote from '../components/Quote';

describe('Testing Home, and Quote components render correctly', () => {
  it('Rendering Home component', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Rendering Quote component', () => {
    const { asFragment } = render(<Quote />);
    expect(asFragment()).toMatchSnapshot();
  });
});
