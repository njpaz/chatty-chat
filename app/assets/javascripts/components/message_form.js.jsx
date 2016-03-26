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
      <div className='row'>
        <div className='col-md-12'>
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
