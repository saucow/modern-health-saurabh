import MessagesConstants from "../constants/Messages.js";

const setMessages = messages => dispatch => {
  dispatch({
    type: MessagesConstants.SET,
    messages
  });
};

const deleteMessage = messageID => dispatch => {
  dispatch({
    type: MessagesConstants.DELETE,
    messageID
  });
};

export default {
  setMessages,
  deleteMessage
};
