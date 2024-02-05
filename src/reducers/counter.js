
const initialState = {
  count: 0,
  clicks: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
    case 'RESET_COUNT':
      return {
        ...state,
        count: 0
      };
    case 'RESET_CLICKS':
      return {
        ...state,
        clicks: 0
      };
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: parseInt(action.payload), 
        clicks: 0
      };
    case 'ADD_NUMBER':
      return {
        ...state,
        count: parseInt(action.payload), 
        clicks: state.clicks + 1
      };
    default:
      return state;
  }
};

export default counterReducer;
