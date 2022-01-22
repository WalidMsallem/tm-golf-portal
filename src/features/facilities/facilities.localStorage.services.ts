import { v4 as uuidv4 } from 'uuid';
import { Facility, FacilitiesList, FacilityPayload } from './facilities.types';
import { load, encryptAndSave } from '../../utils/localStorage.utils';
import { initialState as facilitiesInitialState } from './facilities.reducer';
import paginate from '../../utils/pagination.utils';
import { parseSearchUrl, isEmptySting } from '../../utils/string.utils';
import { MODEL_NAME, regExpMatchAll } from '../../constants/global.constants';

const handleError = (e: any) => {
  throw e;
};

export const createFacility = (body: FacilityPayload): Facility | void => {
  try {
    const isFieldsNotFilled = Object.values(body).some((element) => isEmptySting(element));
    if (isFieldsNotFilled) {
      handleError(' All fields are required!');
    } else {
      const initialState = facilitiesInitialState.data.facilities.results;
      const facilities = load(MODEL_NAME, initialState);

      const now = new Date();

      const newfacilitie: Facility = { ...body, id: uuidv4(), createdAt: now.toLocaleDateString('en-US') };
      facilities.unshift(newfacilitie);
      encryptAndSave(MODEL_NAME, facilities);

      return newfacilitie;
    }
  } catch (e) {
    handleError(e);
  }
};

export const queryFacilities = (queries: string): FacilitiesList | void => {
  try {
    const { page: current, search, type } = parseSearchUrl(queries);

    const initialState = facilitiesInitialState.data.facilities.results;

    let facilities: Facility[] = load(MODEL_NAME, initialState);

    const searchRegExp = isEmptySting(search) ? regExpMatchAll : new RegExp(search, 'i');
    const typeRegExp = isEmptySting(type) ? regExpMatchAll : new RegExp(type, 'i');

    facilities = facilities.filter((facilitie) => searchRegExp.test(facilitie.name) && typeRegExp.test(facilitie.type));

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

export const getFacilityById = (id: string): Facility | void => {
  try {
    const initialState = facilitiesInitialState.data.facilities.results;
    const facilities: Facility[] = load(MODEL_NAME, initialState);

    return facilities.find((element) => String(element.id) === id);
  } catch (e) {
    handleError(e);
  }
};

export const updateFacility = (id: string, body: Facility): Facility | void => {
  try {
    const isFieldsNotFilled = Object.values(body).some((element) => isEmptySting(element));
    if (isFieldsNotFilled) {
      handleError(' All fields are required!');
    } else {
      const initialState = facilitiesInitialState.data.facilities.results;
      let facilities = load(MODEL_NAME, initialState);

      facilities = facilities.map((element: Facility) => {
        if (String(element.id) === id) {
          return body;
        }
        return element;
      });
      encryptAndSave(MODEL_NAME, facilities);

      return body;
    }
  } catch (e) {
    handleError(e);
  }
};

export const deleteFacilitie = (id: string): Facility | void => {
  try {
    const initialState = facilitiesInitialState.data.facilities.results;
    let facilities = load(MODEL_NAME, initialState);
    const facility = getFacilityById(id);
    facilities = facilities.filter((element: Facility) => String(element.id) !== id);
    encryptAndSave(MODEL_NAME, facilities);

    return facility;
  } catch (e) {
    handleError(e);
  }
};

export const loadMockData = (data: Facility[]): FacilitiesList | void => {
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
