import axios from "axios";
import {
  LOGIN,
  LOGINPROCESSING,
} from "./actionTypes.js";

export const startLogin = (content) => {
  return (dispatch) => {
    dispatch(loginProcessing());
    axios
      .post("https://reqres.in/api/login", content)
      .then((res) => {
        debugger;
        dispatch(login(content));
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  };
};

const loginProcessing = () => {
  return {
    type: LOGINPROCESSING,
    payload: ""
  };
};

const login = (content) => {
  return {
    type: LOGIN,
    payload: content
  };
};
