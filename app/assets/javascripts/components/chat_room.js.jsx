var ChatRoom = React.createClass({
  render: function() {
    return (
      <div>
        <MessageList messages={this.props.messages} />
        <MessageForm />
      </div>
    );
  }
});
