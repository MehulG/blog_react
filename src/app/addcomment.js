var React = require('react');

var AddItem = React.createClass({

  render: function(){
    return(
      <form id= 'add-todo' onSubmit={this.handleSubmit}>
        <input type = 'text' required ref = 'newItem'/>
        <input type = 'submit' value = 'Comment' />
      </form>
    );
  },

  //custom functions

  handleSubmit: function(event){
    event.preventDefault();
    console.log(this.refs.newItem.value);
    this.props.onAddComment(this.refs.newItem.value, this.props.item);
    this.refs.newItem.value = "";
  }

});


module.exports = AddItem;
