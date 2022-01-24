import React from 'react';
import { render } from '../../../../utils/testing';
import Component from '../index';

const FacilitiesCardProps = {
  facilitieItem: {
    name: 'FACILITY',
    type: 'indoor',
    address: '58 Taksim mermesh',
    id: '1',
    createdAt: '1/2/1992',
  },
};

describe('FacilityCard', () => {
  test('should render the basic template', async () => {
    const { container } = render(<Component {...FacilitiesCardProps} />);
    expect(container).toMatchSnapshot();
  });
});
