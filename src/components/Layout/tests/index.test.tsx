import React from 'react';
import { render } from '../../../utils/testing';
import Component from '../index';
import Children from '../../../pages/FacilitiesManagement';

describe('Layout', () => {
  test('should render the basic template', async () => {
    const { container } = render(
      <Component>
        <Children />
      </Component>
    );
    expect(container).toMatchSnapshot();
  });
});
