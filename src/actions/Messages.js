import MessagesConstants from "../constants/Messages.js";

const setMessages = messages => dispatch => {
  dispatch({
    type: MessagesConstants.SET,
    messages
  });
};

export default {
  setMessages
};
