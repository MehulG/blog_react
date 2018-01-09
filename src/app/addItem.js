var React = require('react');

//require('./css/additem.css');

var AddItem = React.createClass({

  render: function(){
    return(
      <form id= 'add-todo' onSubmit={this.handleSubmit}>
        <input type = 'text' required ref = 'newItem' />
        <input type = 'text' required ref = 'newItem_Author'/>
        <input type = 'submit' value = 'Add' />
      </form>
    );
  },


  //custom functions

  handleSubmit: function(event){
    event.preventDefault();
    console.log(this.refs.newItem.value);
    this.props.onAdd(this.refs.newItem_Author.value,this.refs.newItem.value);
    this.refs.newItem.value = "";
    this.refs.newItem_Author.value = "";
  }

});


module.exports = AddItem;
