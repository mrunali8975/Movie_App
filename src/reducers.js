
const initialState = {
  authToken: null,
  data:[]
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN':
        return {
          ...state, //copy all previous states
          authToken: action.payload,
        }
      case 'USER':
        return {
          ...state,
          data:action.payload,
        }
      case 'LOGOUT':
        return {
          authToken: null,
        }
      default:
        return state;
    }
  }