import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import messagesReducer from "./reducers/Messages";
import pagesReducer from "./reducers/Pages";
import MessagesList from "./components/MessagesList";
import "./style.css";

const store = createStore(
  combineReducers({
    messagesReducer,
    pagesReducer
  }),
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
