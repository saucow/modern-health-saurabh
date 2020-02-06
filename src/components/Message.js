import React, { Component } from "react";
import { connect } from "react-redux";
import messagesActions from "../actions/Messages";
import { bindActionCreators } from "redux";

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return <h4>{message.content}</h4>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  messagesActions: bindActionCreators(messagesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
