import React from 'react';
import { render } from '../../../../utils/testing';
import Component from '../index';
import Children from '../../../CreateOrUpdateFacility';

const CustomModalPropsType = {
  title: 'Edit information',
  isOpen: true,
  handleCloseModal: () => {},
  handleSubmit: () => {},
  loadingSubmitButton: false,
  disabledSubmitButton: false,
  textSubmitButton: 'Submit',
};

describe('CustomModal', () => {
  test('should render the basic template', async () => {
    const { container } = render(
      <Component {...CustomModalPropsType}>
        <Children />
      </Component>
    );
    expect(container).toMatchSnapshot();
  });
});
