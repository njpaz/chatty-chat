var ChatRoom = React.createClass({
  getInitialState: function() {
    var messages = this.props.messages || [];
    return {messages: messages};
  },

  updateMessageList: function(message) {
    var messages = this.state.messages;
    messages.push(message);
    this.setState({messages: messages});
  },

  componentDidMount: function() {
    App.room = App.cable.subscriptions.create({channel: "RoomChannel", room_id: this.props.room_id}, {
      connected: function() {},

      disconnected: function() {},

      received: function(data) {
        this.updateMessageList(data.message);
      },

      speak: function(message) {
        return this.perform('speak', { message: message });
      },

      updateMessageList: this.updateMessageList
    });
  },

  render: function() {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <MessageList messages={this.state.messages} />
          <div className='col-md-12'>
            <MessageForm />
          </div>
        </div>
      </div>
    );
  }
});
