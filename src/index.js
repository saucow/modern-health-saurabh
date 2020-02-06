import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/Messages";
import messagesActions from "./actions/Messages";
import MessagesList from "./components/MessagesList";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "./style.css";

// This is the list of messages.
import { messages } from "./data.json";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MessagesList />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
