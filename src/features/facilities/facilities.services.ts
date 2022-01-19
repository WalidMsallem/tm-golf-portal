import axios from 'axios';
import { requestHeader } from '../../utils/requestHeader';
import URL from '../constants.services';
import { Facilitie } from './facilities.types';

export const createFacilitie = async (body: Facilitie): Promise<any> => {
  const result = await axios.post(URL.baseApiUrl() + URL.facilities.create, body, requestHeader({}));
  return result.data;
};
export const queryFacilities = async (query: string): Promise<any> => {
  const result = await axios.get(URL.baseApiUrl() + URL.facilities.queryFacilities(query), requestHeader({}));
  return result.data;
};

export const updateFacilitie = async (id: string, body: Facilitie): Promise<any> => {
  const result = await axios.post(URL.baseApiUrl() + URL.facilities.update(id), body, requestHeader({}));
  return result.data;
};

export const getFacilitieById = async (id: string): Promise<any> => {
  const result = await axios.get(URL.baseApiUrl() + URL.facilities.getById(id), requestHeader({}));
  return result.data;
};
export const deleteFacilitie = async (id: string): Promise<any> => {
  const result = await axios.delete(URL.baseApiUrl() + URL.facilities.delete(id), requestHeader({}));
  return result.data;
};
