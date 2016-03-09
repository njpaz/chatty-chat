var MessageForm = React.createClass({
  getInitialState: function() {
    return {content: '', username: ''};
  },

  handleSubmit: function(evt) {
    App.room.speak(this.state.content, this.state.username);
    this.setState({content: ''});
    evt.preventDefault();
  },

  handleContentChange: function(evt) {
    this.setState({content: evt.target.value});
  },

  handleUsernameChange: function(evt) {
    this.setState({username: evt.target.value});
  },

  render: function() {
    return (
      <div className='row'>
        <div className='col-md-4'>
          <form className='form-horizontal'>
            <div className='form-group'>
              <label className='control-label'>Who are you?</label>
              <input type='text' className='form-control' value={this.state.username} placeholder='A Person' onChange={this.handleUsernameChange} />
            </div>
          </form>
        </div>
        <div className='col-md-8'>
          <form className='form-horizontal' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label className='control-label'>Say something:</label>
              <input type='text' className='form-control' value={this.state.content} placeholder='Hello, world!' onChange={this.handleContentChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
});
