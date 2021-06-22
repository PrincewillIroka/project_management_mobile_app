import userState from './userState';
import projectsState from './projectsState';
import membersState from './membersState';
import tasksState from './tasksState';

const initialState = {
  ...userState,
  ...projectsState,
  ...membersState,
  ...tasksState
};

export default initialState;
