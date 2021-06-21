import userState from './userState';
import projectsState from './projectsState';
import contactsState from './contactsState';
import tasksState from './tasksState';

const initialState = {
  ...userState,
  ...projectsState,
  ...contactsState,
  ...tasksState
};

export default initialState;
