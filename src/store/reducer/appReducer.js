import initialState from '../state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case '': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
