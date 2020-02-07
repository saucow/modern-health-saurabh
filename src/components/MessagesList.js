import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import messagesActions from "../actions/Messages";
import Message from "../components/Message";
import PagesControl from "../components/PagesControl";
import messagesData from "../data.json";

const NUM_MESSAGES_PER_PAGE = 5;

class MessagesList extends Component {
  state = {
    sortOrder: "ascending",
    numPages: this.props.messages.messages.length
  };

  static getDerivedStateFromProps(props, state) {
    // Update number of pages
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

    // Set messages from json
    messagesActions.setMessages(messagesData.messages);
  }

  render() {
    const { numPages, sortOrder } = this.state;
    var messages = this.props.messages.messages;
    var pageIndex = this.props.pages.pageIndex;
    const { messagesActions } = this.props;

    // Get messages per page
    const messageElements = messages
      .slice(
        pageIndex * NUM_MESSAGES_PER_PAGE,
        (pageIndex + 1) * NUM_MESSAGES_PER_PAGE
      )
      .map(message => (
        <Message key={`${message.uuid}${message.content}`} message={message} />
      ));

    return (
      <div
        style={{
          width: "75%"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid lightgray",
            marginBottom: "20px"
          }}
        >
          <h3>Messages:</h3>
          <select
            value={sortOrder}
            onChange={e => {
              let newSortOrder = e.target.value;
              this.setState({ sortOrder: newSortOrder });

              if (newSortOrder === "ascending") {
                messagesActions.sortMessagesAscending(true);
              } else {
                messagesActions.sortMessagesAscending(false);
              }
            }}
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
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
