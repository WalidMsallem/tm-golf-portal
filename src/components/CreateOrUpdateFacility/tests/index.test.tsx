import React from 'react';
import { render } from '../../../utils/testing';
import Component from '../index';

describe('CreateOrUpdateFacility', () => {
  const { container } = render(<Component />);
  test('should render the basic template', async () => {
    expect(container).toMatchSnapshot();
  });
});
