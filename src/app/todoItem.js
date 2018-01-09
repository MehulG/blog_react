var React = require('react');
var AddComment = require('./addcomment');


var Todoitem = React.createClass({

  render: function(){
    var comments = this.props.comments;
    comments = comments.map(function(item,index){
      return(
        <li>{item}</li>
      );
    }.bind(this));
    return(
      <li>
        <div className = 'todo-item'>
          <span className = 'item-name'>
            {this.props.item}
          </span>
          <p>{this.props.author}</p>
          <br/>
          <AddComment onAddComment = {this.props.onAddComment} item={this.props.item}></AddComment>
        </div>
        <ul>
          {comments}
        </ul>
      </li>
    );
  },

  //custom functions

  handleDelete: function(){
    //console.log('ghj');
    this.props.onDelete(this.props.item);
  }
});

module.exports = Todoitem;
