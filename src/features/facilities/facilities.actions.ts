import {
  CREATE_FACILITIE,
  GET_FACILITIES,
  UPDATE_FACILITIE,
  DELETE_FACILITIE,
  GET_FACILITIE_BY_ID,
  LOAD_MOCK_DATA,
} from './facilities.actionTypes';
import {
  GetFacilitiesRequest,
  CreateFacilitieRequest,
  UpdateFacilitieRequest,
  DeleteFacilitieRequest,
  GetFacilitieByIdRequest,
  Facilitie,
  LoadMockDataRequest,
} from './facilities.types';

export const getFacilitiesRequest = (page: string, search: string, facilitietype: string): GetFacilitiesRequest => ({
  type: GET_FACILITIES.request,
  page,
  search,
  facilitietype,
});

export const createFacilitieRequest = (body: Facilitie): CreateFacilitieRequest => ({
  type: CREATE_FACILITIE.request,
  body,
});

export const updateFacilitieRequest = (id: string, body: Facilitie): UpdateFacilitieRequest => ({
  type: UPDATE_FACILITIE.request,
  body,
  id,
});

export const deleteFacilitieRequest = (id: string): DeleteFacilitieRequest => ({
  type: DELETE_FACILITIE.request,
  id,
});
export const getFacilitieByIdRequest = (id: string): GetFacilitieByIdRequest => ({
  type: GET_FACILITIE_BY_ID.request,
  id,
});
export const loadMockDataRequest = (data: Facilitie[]): LoadMockDataRequest => ({
  type: LOAD_MOCK_DATA.request,
  data,
});
