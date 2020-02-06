import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import PagesConstants from "../constants/Pages.js";

const pages = handleActions(
  {
    [PagesConstants.NEXT]: (state, action) => {
      console.log("next");
      return {
        ...state,
        pageIndex: state.pageIndex + 1
      };
    },
    [PagesConstants.PREVIOUS]: (state, action) => {
      return {
        ...state,
        pageIndex: state.pageIndex - 1
      };
    }
  },
  {
    pageIndex: 0
  }
);

export default combineReducers({
  pages
});
