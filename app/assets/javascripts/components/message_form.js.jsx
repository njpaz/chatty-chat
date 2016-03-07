var MessageForm = React.createClass({
  getInitialState: function() {
    return {content: ''};
  },

  handleSubmit: function(evt) {
    App.room.speak(this.state.content);
    this.setState({content: ''});
    evt.preventDefault();
  },

  handleContentChange: function(evt) {
    this.setState({content: evt.target.value});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Say something:</label><br />
        <input type="text" value={this.state.content} onChange={this.handleContentChange} />
      </form>
    );
  }
});
