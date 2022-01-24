import React from 'react';
import { render } from '../../../../utils/testing';
import Component from '../index';

const EmptyDataPropsType = {
  minHeight: '10',
  message: 'Error',
};

describe('EmptyData', () => {
  test('should render the basic template', async () => {
    const { container } = render(<Component {...EmptyDataPropsType} />);
    expect(container).toMatchSnapshot();
  });
});
