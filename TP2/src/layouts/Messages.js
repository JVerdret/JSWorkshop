import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";
import InputMessage from "../components/InputMessage";
import MessageList from "../components/MessageList";

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
    return <MessageLayout renderList={() => <MessageList/>} renderInput={() => <InputMessage />} />;
  }
}

export default connect(mapStateToProps)(Messages);
