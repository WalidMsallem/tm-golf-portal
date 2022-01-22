import {
  CREATE_FACILITY,
  GET_FACILITIES,
  UPDATE_FACILITY,
  DELETE_FACILITY,
  GET_FACILITY_BY_ID,
  LOAD_MOCK_DATA,
  MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL,
  MANAGE_DELETE_FACILITY_MODAL,
} from './facilities.actionTypes';
import {
  GetFacilitiesRequest,
  CreateFacilityRequest,
  UpdateFacilityRequest,
  DeleteFacilitieRequest,
  GetFacilityByIdRequest,
  Facility,
  LoadMockDataRequest,
  OpenCreateOrUpdateModal,
  FacilityPayload,
  ManageDeleteModal,
} from './facilities.types';

export const manageDeleteFacility = (toggleValue: boolean, itemId?: string): ManageDeleteModal => ({
  type: MANAGE_DELETE_FACILITY_MODAL,
  itemId,
  toggleValue,
});

export const manageCreateOrUpdateFacility = (status: string, id?: string): OpenCreateOrUpdateModal => ({
  type: MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL,
  id,
  status,
});
export const getFacilitiesRequest = (page: string, search: string, facilityType: string): GetFacilitiesRequest => ({
  type: GET_FACILITIES.request,
  page,
  search,
  facilityType,
});

export const createFacilityRequest = (body: FacilityPayload): CreateFacilityRequest => ({
  type: CREATE_FACILITY.request,
  body,
});

export const updateFacilityRequest = (id: string, body: Facility): UpdateFacilityRequest => ({
  type: UPDATE_FACILITY.request,
  body,
  id,
});

export const deleteFacilitieRequest = (id: string): DeleteFacilitieRequest => ({
  type: DELETE_FACILITY.request,
  id,
});
export const getFacilityByIdRequest = (id: string): GetFacilityByIdRequest => ({
  type: GET_FACILITY_BY_ID.request,
  id,
});
export const loadMockDataRequest = (data: Facility[]): LoadMockDataRequest => ({
  type: LOAD_MOCK_DATA.request,
  data,
});
