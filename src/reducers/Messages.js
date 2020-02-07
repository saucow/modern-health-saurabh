import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import MessagesConstants from "../constants/Messages.js";
import { sortBy, uniqWith, remove } from "lodash";

const messages = handleActions(
  {
    [MessagesConstants.SORT]: (state, action) => {
      const { ascending } = action;

      let sortedMessages = sortBy(state.messages, function(message) {
        return new Date(message.sentAt);
      });

      if (!ascending) {
        sortedMessages = sortedMessages.reverse();
      }

      return {
        ...state,
        messages: sortedMessages
      };
    },
    [MessagesConstants.SET]: (state, action) => {
      const { messages } = action;

      const dedupedMessages = uniqWith(
        messages,
        (messageA, messageB) =>
          messageA.content === messageB.content &&
          messageA.uuid === messageB.uuid
      );

      const sortedMessages = sortBy(dedupedMessages, function(message) {
        return new Date(message.sentAt);
      });

      return {
        ...state,
        messages: sortedMessages
      };
    },
    [MessagesConstants.DELETE]: (state, action) => {
      const { message } = action;

      let messages = state.messages;
      remove(messages, function(messageObj) {
        return (
          messageObj.content === message.content &&
          messageObj.uuid === message.uuid
        );
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
