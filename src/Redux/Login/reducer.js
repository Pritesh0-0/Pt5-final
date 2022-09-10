import {
    LOGIN,
    LOGINPROCESSING,
  } from "./actionTypes.js";
  
  export const loginReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, loggedIn: true };
      
      case LOGINPROCESSING:
        return { ...state, loginProcessing: true };
        
      default:
        return state;
    }
  };
  