import React, { Component } from "react";
import { connect } from "react-redux";
import messagesActions from "../actions/Messages";
import { bindActionCreators } from "redux";

class MessagesList extends Component {
  constructor(props) {
    super(props);

    // props.setMessages({ messages: ["a"] });
    console.log(props);
    props.messagesActions.setMessages({ messages: [] });
  }

  render() {
    return <p>Messages</p>;
  }
}

const mapStateToProps = state => ({
  messages: state.messages
});
const mapDispatchToProps = dispatch => ({
  messagesActions: bindActionCreators(messagesActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);
