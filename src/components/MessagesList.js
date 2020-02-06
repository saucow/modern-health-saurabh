import React, { Component } from "react";
import { connect } from "react-redux";
import messagesActions from "../actions/Messages";
import Message from "../components/Message";
import PagesControl from "../components/PagesControl";
import { bindActionCreators } from "redux";

const NUM_MESSAGES_PER_PAGE = 5;

class MessagesList extends Component {
  state = {
    numPages: this.props.messages.messages.length
  };

  static getDerivedStateFromProps(props, state) {
    let newNumPages = Math.ceil(
      props.messages.messages.length / NUM_MESSAGES_PER_PAGE
    );
    if (newNumPages !== state.numPages) {
      return {
        numPages: newNumPages
      };
    }
    return state;
  }

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
      },
      {
        sentAt: "2012-11-13T17:29:37.003Z",
        uuid: "435453",
        content: "3",
        senderUuid: "2"
      },
      {
        sentAt: "2015-05-22T13:55:10.542Z",
        uuid: "4354353",
        content: "4",
        senderUuid: "2"
      },
      {
        sentAt: "2012-11-13T17:29:37.003Z",
        uuid: "435453",
        content: "5",
        senderUuid: "2"
      },
      {
        sentAt: "2015-05-22T13:55:10.542Z",
        uuid: "4354353",
        content: "6",
        senderUuid: "2"
      },
      {
        sentAt: "2012-11-13T17:29:37.003Z",
        uuid: "435453",
        content: "7",
        senderUuid: "2"
      },
      {
        sentAt: "2015-05-22T13:55:10.542Z",
        uuid: "4354353",
        content: "8",
        senderUuid: "2"
      },
      {
        sentAt: "2012-11-13T17:29:37.003Z",
        uuid: "435453",
        content: "9",
        senderUuid: "2"
      },
      {
        sentAt: "2015-05-22T13:55:10.542Z",
        uuid: "4354353",
        content: "10",
        senderUuid: "2"
      }
    ]);
  }

  render() {
    const { numPages } = this.state;
    var messages = this.props.messages.messages;
    var pageIndex = this.props.pages.pageIndex;
    console.log(
      messages.slice(
        pageIndex * NUM_MESSAGES_PER_PAGE,
        (pageIndex + 1) * NUM_MESSAGES_PER_PAGE
      )
    );

    console.log(pageIndex * NUM_MESSAGES_PER_PAGE);

    const messageElements = messages
      .slice(
        pageIndex * NUM_MESSAGES_PER_PAGE,
        (pageIndex + 1) * NUM_MESSAGES_PER_PAGE
      )
      .map(message => <Message message={message} />);
    return (
      <div>
        <div>{messageElements}</div>
        <PagesControl numPages={numPages} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messagesReducer.messages,
  pages: state.pagesReducer.pages
});
const mapDispatchToProps = dispatch => ({
  messagesActions: bindActionCreators(messagesActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList);
