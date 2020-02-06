import PagesConstants from "../constants/Pages.js";

const nextPage = () => dispatch => {
  dispatch({
    type: PagesConstants.NEXT
  });
};

const previousPage = () => dispatch => {
  dispatch({
    type: PagesConstants.PREVIOUS
  });
};

export default {
  nextPage,
  previousPage
};
