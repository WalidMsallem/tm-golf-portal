import configureStore from 'redux-mock-store';
import {
  createFacilityRequest,
  updateFacilityRequest,
  manageDeleteFacility,
  manageCreateOrUpdateFacility,
  getFacilitiesRequest,
  deleteFacilitieRequest,
  getFacilityByIdRequest,
  loadMockDataRequest,
} from '../facilities.actions';

import { Facility, CreateOrUpdateModalStatus } from '../facilities.types';

describe('add user redux', () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  beforeEach(() => {
    reduxStore.clearActions();
  });

  describe('Facility  **Actions**', () => {
    it('should dispatch facility actions', () => {
      const facility: Facility = {
        name: 'Facility',
        type: 'indoor',
        address: 'Address',
        id: '1',
        createdAt: 'jhekkk',
      };

      const expectedActions = [
        createFacilityRequest(facility),
        updateFacilityRequest(String(facility.id), facility),
        manageDeleteFacility(true),
        manageCreateOrUpdateFacility(CreateOrUpdateModalStatus.create, 'id'),
        getFacilitiesRequest('1', '10', '', ''),
        deleteFacilitieRequest(String(facility.id)),
        getFacilityByIdRequest(String(facility.id)),
        loadMockDataRequest([facility]),
      ];
      reduxStore.dispatch(createFacilityRequest(facility));
      reduxStore.dispatch(updateFacilityRequest(String(facility.id), facility));
      reduxStore.dispatch(manageDeleteFacility(true));
      reduxStore.dispatch(manageCreateOrUpdateFacility(CreateOrUpdateModalStatus.create, 'id'));
      reduxStore.dispatch(getFacilitiesRequest('1', '10', '', ''));
      reduxStore.dispatch(deleteFacilitieRequest(String(facility.id)));
      reduxStore.dispatch(getFacilityByIdRequest(String(facility.id)));
      reduxStore.dispatch(loadMockDataRequest([facility]));

      expect(reduxStore.getActions()).toEqual(expectedActions);
    });
  });
});
