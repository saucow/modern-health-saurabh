import MessagesConstants from "../constants/Messages.js";

const sortMessagesAscending = ascending => dispatch => {
  dispatch({
    type: MessagesConstants.SORT,
    ascending
  });
};

const setMessages = messages => dispatch => {
  dispatch({
    type: MessagesConstants.SET,
    messages
  });
};

const deleteMessage = message => dispatch => {
  dispatch({
    type: MessagesConstants.DELETE,
    message
  });
};

export default {
  sortMessagesAscending,
  setMessages,
  deleteMessage
};
