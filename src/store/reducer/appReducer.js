import initialState from '../state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleBottomModal': {
      const bottomModal = action.payload.bottomModal;
      return {
        ...state,
        bottomModal,
      };
    }
    case 'viewTask': {
      const selectedTask = action.payload.selectedTask;
      return {
        ...state,
        selectedTask,
      };
    }
    default:
      return state;
  }
};
