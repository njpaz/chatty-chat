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
      <form className='form-horizontal' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label className='col-lg-2 control-label'>Say something:</label>
          <div className='col-lg-10'>
            <input type='text' className='form-control' value={this.state.content} onChange={this.handleContentChange} />
          </div>
        </div>
      </form>
    );
  }
});
