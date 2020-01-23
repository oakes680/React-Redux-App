import { ADD_JOKE, FETCHING_ACTIVITY_SUCCESS, FETCHING_ACTIVITY_FAILURE} from '../actions'

const initialState = {
  
  isLoading: false,
  joke: null,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOKE:
        return {
          ...state,
          isLoading: true
        }

    case FETCHING_ACTIVITY_SUCCESS:
      return{
        ...state,
        isLoading: false,
        joke: action.payload
      }
      default: return state;
  }
};
