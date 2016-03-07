var MessageList = React.createClass({
  render: function() {
    var nodes = this.props.messages.map(function(message) {
      return <div className='message' key={message.id}>{message.content}</div>;
    });

    return <div id='messages'>{nodes}</div>;
  }
});
