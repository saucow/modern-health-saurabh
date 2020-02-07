import React, { Component } from "react";
import { connect } from "react-redux";
import messagesActions from "../actions/Messages";
import { bindActionCreators } from "redux";
import moment from "moment";

class Message extends Component {
  state = {
    showDeleteButton: false
  };

  render() {
    const { message, messagesActions } = this.props;
    const { showDeleteButton } = this.state;

    let momentDate = moment(new Date(message.sentAt));

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "10px"
        }}
        onMouseEnter={() => {
          this.setState({
            showDeleteButton: true
          });
        }}
        onMouseLeave={() => {
          this.setState({
            showDeleteButton: false
          });
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end"
          }}
        >
          <div>{message.senderUuid}</div>
          <div
            style={{
              fontSize: "12px",
              color: "darkgray"
            }}
          >
            {momentDate.format("dddd MMMM Do, YYYY")}
            &nbsp;at&nbsp;
            {momentDate.format("h:mm:ss a")}
          </div>
        </div>
        <div
          style={{
            background: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            borderRadius: "5px",
            marginLeft: "10px"
          }}
        >
          {message.content}
        </div>
        {showDeleteButton ? (
          <button
            style={{
              marginLeft: "10px"
            }}
            onClick={() => {
              messagesActions.deleteMessage(message.content);
            }}
          >
            Delete Message
          </button>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  messagesActions: bindActionCreators(messagesActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
