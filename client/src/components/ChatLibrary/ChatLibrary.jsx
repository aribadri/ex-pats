/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Talk from 'talkjs';

class ChatLibrary extends Component {
  constructor(props) {
    super(props);

    this.inbox = undefined;
  }

  componentDidMount() {
    // Promise can be `then`ed multiple times
    Talk.ready
      .then(() => {
        const me = new Talk.User({
          id: this.props.fromUser.id,
          name: `${this.props.fromUser.first_name}`,
          email: `${this.props.fromUser.email}`,
          photoUrl: `http://localhost:5000${this.props.fromUser.avatar_link}`,
          // welcomeMessage: 'Hey there! How are you? :-)',
        });

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 'tXXcUfCQ',
            me,
          });
        }

        const other = new Talk.User({
          id: this.props.toUser.id,
          name: `${this.props.toUser.first_name}`,
          email: `${this.props.toUser.email}`,
          photoUrl: `http://localhost:5000${this.props.toUser.avatar_link}`,
          // welcomeMessage: 'Hey there! Love to chat :-)',
        });

        // You control the ID of a conversation. oneOnOneId is a helper method that generates
        // a unique conversation ID for a given pair of users.
        const conversationId = Talk.oneOnOneId(me, other);

        const conversation = window.talkSession.getOrCreateConversation(conversationId);
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        this.inbox = window.talkSession.createInbox({
          selected: conversation,
        });
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  componentWillUnmount() {
    if (this.inbox) {
      this.inbox.destroy();
    }
  }

  render() {
    return (
      <span>
        <div style={{ height: '500px' }} ref={(c) => this.container = c}>Loading...</div>
      </span>
    );
  }
}

export default ChatLibrary;
