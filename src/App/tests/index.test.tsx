import React from 'react';
import { render } from '../../utils/testing';
import Component from '../index';

describe('App', () => {
  test('should render the basic template', async () => {
    const { container } = render(<Component />);
    expect(container).toMatchSnapshot();
  });
});
