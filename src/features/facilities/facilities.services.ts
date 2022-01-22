import axios from 'axios';
import { requestHeader } from '../../utils/requestHeader';
import URL from '../constants.services';
import { Facility, FacilitiesList } from './facilities.types';

export const createFacility = async (body: Facility): Promise<Facility> => {
  const result = await axios.post(URL.baseApiUrl() + URL.facilities.create, body, requestHeader({}));
  return result.data;
};
export const queryFacilities = async (query: string): Promise<FacilitiesList> => {
  const result = await axios.get(URL.baseApiUrl() + URL.facilities.queryFacilities(query), requestHeader({}));
  return result.data;
};

export const updateFacility = async (id: string, body: Facility): Promise<Facility> => {
  const result = await axios.post(URL.baseApiUrl() + URL.facilities.update(id), body, requestHeader({}));
  return result.data;
};

export const getFacilityById = async (id: string): Promise<Facility> => {
  const result = await axios.get(URL.baseApiUrl() + URL.facilities.getById(id), requestHeader({}));
  return result.data;
};
export const deleteFacilitie = async (id: string): Promise<Facility> => {
  const result = await axios.delete(URL.baseApiUrl() + URL.facilities.delete(id), requestHeader({}));
  return result.data;
};
