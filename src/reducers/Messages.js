import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import MessagesConstants from "../constants/Messages.js";

const messages = handleActions(
  {
    [MessagesConstants.SET]: (state, action) => {
      const { messages } = action;
      return {
        ...state,
        messages
      };
    },
    [MessagesConstants.DELETE]: (state, action) => {
      const { messageID } = action;

      var messages = state.messages.filter(function(message) {
        return message.content != messageID;
      });

      return {
        ...state,
        messages
      };
    }
  },
  {
    messages: []
  }
);

export default combineReducers({
  messages
});
