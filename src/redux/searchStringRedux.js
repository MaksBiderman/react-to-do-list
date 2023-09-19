
// Creator 
export const updateSearchform = payload => ({ type: 'UPDATE_SEARCHFORM', payload });

// Actions
const createActionName = actionName => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload
    default:
      return statePart;
  }
};

export default searchStringReducer;