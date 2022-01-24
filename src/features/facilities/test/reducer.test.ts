import facilitiesReducer, { initialState } from '../facilities.reducer';
import { CreateFacilitySuccess, Facility } from '../facilities.types';
import { CREATE_FACILITY } from '../facilities.actionTypes';

describe('users reducer', () => {
  it('facilities reducer expected expect create facility action', () => {
    const facility: Facility = {
      name: 'Facility',
      type: 'indoor',
      address: 'Address',
      id: '1',
      createdAt: 'jhekkk',
    };
    const action: CreateFacilitySuccess = {
      type: CREATE_FACILITY.success,
      data: facility,
    };
    const updatedState = facilitiesReducer(initialState, action);

    expect(updatedState.data.facilities.results).toHaveLength(1);
    expect(updatedState.data.facilities.results).toEqual([facility]);
  });
});
