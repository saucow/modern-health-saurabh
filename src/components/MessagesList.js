import React, { Component } from "react";
import { connect } from "react-redux";
import messagesActions from "../actions/Messages";
import Message from "../components/Message";
import { bindActionCreators } from "redux";

class MessagesList extends Component {
  constructor(props) {
    super(props);
    const { messagesActions } = this.props;

    messagesActions.setMessages([
      {
        sentAt: "2012-11-13T17:29:37.003Z",
        uuid: "435453",
        content: "1",
        senderUuid: "2"
      },
      {
        sentAt: "2015-05-22T13:55:10.542Z",
        uuid: "4354353",
        content: "2",
        senderUuid: "2"
      }
    ]);
  }

  render() {
    const { messages } = this.props;

    const messageElements = messages.map(message => (
      <Message message={message} />
    ));
    return <div>{messageElements}</div>;
  }
}

const mapStateToProps = state => ({
  messages: state.messages.messages
});
const mapDispatchToProps = dispatch => ({
  messagesActions: bindActionCreators(messagesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
