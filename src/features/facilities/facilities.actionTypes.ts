import { generateActionTypes } from '../../utils/generic-redux';

const root = 'app/Facilities/';

const CREATE_FACILITY = generateActionTypes(root, 'CREATE_FACILITY');
const GET_FACILITIES = generateActionTypes(root, 'GET_FACILITIES');
const UPDATE_FACILITY = generateActionTypes(root, 'UPDATE_FACILITY');
const DELETE_FACILITY = generateActionTypes(root, 'DELETE_FACILITY');
const GET_FACILITY_BY_ID = generateActionTypes(root, 'GET_FACILITY_BY_ID');

const LOAD_MOCK_DATA = generateActionTypes(root, 'LOAD_MOCK_DATA');

const MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL = root + 'MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL';

export {
  CREATE_FACILITY,
  GET_FACILITIES,
  UPDATE_FACILITY,
  DELETE_FACILITY,
  GET_FACILITY_BY_ID,
  LOAD_MOCK_DATA,
  MANAGE_CREATE_OR_UPDATE_FACILITY_MODAL,
};
