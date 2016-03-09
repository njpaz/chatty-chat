var MessageList = React.createClass({
  getInitialState: function() {
    return {height: 0, shouldScroll: false};
  },

  componentDidMount: function() {
    var thisNode = ReactDOM.findDOMNode(this);
    thisNode.scrollTop = thisNode.scrollHeight;
  },

  componentWillReceiveProps: function() {
    var thisNode = ReactDOM.findDOMNode(this);
    var shouldScroll = thisNode.scrollHeight <= thisNode.scrollTop + thisNode.offsetHeight;
    this.setState({shouldScroll: shouldScroll});
  },

  componentDidUpdate: function() {
    var thisNode = ReactDOM.findDOMNode(this);

    if (this.state.shouldScroll) {
      thisNode.scrollTop = thisNode.scrollHeight;
    }
  },

  render: function() {
    var nodes = this.props.messages.map(function(message) {
      return <li className='list-group-item' key={message.id}><strong>{message.username}</strong> {message.content}</li>;
    });

    return <ul className='list-group fixed-height message-box'>{nodes}</ul>;
  }
});
