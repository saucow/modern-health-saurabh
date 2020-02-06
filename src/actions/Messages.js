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

const deleteMessage = messageID => dispatch => {
  dispatch({
    type: MessagesConstants.DELETE,
    messageID
  });
};

export default {
  sortMessagesAscending,
  setMessages,
  deleteMessage
};
