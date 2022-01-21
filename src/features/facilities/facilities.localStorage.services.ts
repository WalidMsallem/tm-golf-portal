import { v4 as uuidv4 } from 'uuid';
import { Facilitie, FacilitiesList } from './facilities.types';
import { load, encryptAndSave } from '../../utils/localStorage.utils';
import { initialState as facilitiesInitialState } from './facilities.reducer';
import paginate from '../../utils/pagination.utils';
import { parseSearchUrl } from '../../utils/string.utils';
import { MODEL_NAME } from '../../constants/global.constants';

const handleError = (e: any) => {
  throw e;
};

export const createFacilitie = (body: Facilitie): Facilitie | void => {
  try {
    const initialState = facilitiesInitialState.data.facilities.results;
    const facilities = load(MODEL_NAME, initialState);

    const newfacilitie: Facilitie = { ...body, id: uuidv4() };
    facilities.unshift(newfacilitie);
    encryptAndSave(MODEL_NAME, facilities);

    return newfacilitie;
  } catch (e) {
    handleError(e);
  }
};

export const queryFacilities = (queries: string): FacilitiesList | void => {
  try {
    const { page: current } = parseSearchUrl(queries);

    const initialState = facilitiesInitialState.data.facilities.results;

    const facilities = load(MODEL_NAME, initialState);

    const {
      totalItems: totalResults,
      currentPage: page,
      pageSize: limit,
      totalPages,
      results,
    } = paginate(facilities, current, 10);

    return {
      totalResults,
      page,
      limit,
      totalPages,
      results,
    };
  } catch (e) {
    handleError(e);
  }
};

export const getFacilitieById = (id: string): Facilitie | void => {
  try {
    const initialState = facilitiesInitialState.data.facilities.results;
    const facilities: Facilitie[] = load(MODEL_NAME, initialState);

    return facilities.find((element) => element.id === id);
  } catch (e) {
    handleError(e);
  }
};

export const updateFacilitie = (id: string, body: Facilitie): Facilitie | void => {
  try {
    const initialState = facilitiesInitialState.data.facilities.results;
    let facilities = load(MODEL_NAME, initialState);

    facilities = facilities.map((element: Facilitie) => {
      if (element.id === id) {
        return body;
      }
      return element;
    });
    encryptAndSave(MODEL_NAME, facilities);

    return body;
  } catch (e) {
    handleError(e);
  }
};

export const deleteFacilitie = (id: string): Facilitie | void => {
  try {
    const initialState = facilitiesInitialState.data.facilities.results;
    let facilities = load(MODEL_NAME, initialState);

    facilities = facilities.filter((element: Facilitie) => element.id !== id);
    encryptAndSave(MODEL_NAME, facilities);

    return facilities;
  } catch (e) {
    handleError(e);
  }
};

export const loadMockData = (data: Facilitie[]): FacilitiesList | void => {
  try {
    encryptAndSave(MODEL_NAME, data);

    const { totalItems: totalResults, currentPage: page, pageSize: limit, totalPages, results } = paginate(data, 1, 10);

    return {
      totalResults,
      page,
      limit,
      totalPages,
      results,
    };
  } catch (e) {
    handleError(e);
  }
};
