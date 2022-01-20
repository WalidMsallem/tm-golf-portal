import { generateActionTypes } from '../../utils/generic-redux';

const root = 'app/Facilities/';

const CREATE_FACILITIE = generateActionTypes(root, 'CREATE_FACILITIE');
const GET_FACILITIES = generateActionTypes(root, 'GET_FACILITIES');
const UPDATE_FACILITIE = generateActionTypes(root, 'UPDATE_FACILITIE');
const DELETE_FACILITIE = generateActionTypes(root, 'DELETE_FACILITIE');
const GET_FACILITIE_BY_ID = generateActionTypes(root, 'GET_FACILITIE_BY_ID');

const LOAD_MOCK_DATA = generateActionTypes(root, 'LOAD_MOCK_DATA');

export { CREATE_FACILITIE, GET_FACILITIES, UPDATE_FACILITIE, DELETE_FACILITIE, GET_FACILITIE_BY_ID, LOAD_MOCK_DATA };
