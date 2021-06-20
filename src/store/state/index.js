import {userState} from './userState';
import {projectState} from './projectState';

const initialState = {
  ...userState,
  ...projectState,
};

export default initialState;
