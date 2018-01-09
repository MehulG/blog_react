var axios = require('axios');

var React = require('react');
var ReactDOM = require('react-dom');


var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var Link = require('react-router').Link;



require('./css/index.css');
//module require
var Todoitem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');



//create components

var App = React.createClass({
  render: function(){
    return(
      <Router history = {browserHistory}>
        <Route path = {'/'} component = {TodoComponent}></Route>
      </Router>
    );
  }
});


var TodoComponent = React.createClass({

  getInitialState: function(){
      this.axios();
       return{
         todo : []
       }

  },//getInitialState

  axios: function(){
    var exact = this;
    axios.get('https://www.getpostman.com/collections/1432038e84b14bc0e7fb')
    .then(function (response) {
      console.log(response);
      for (var j = 0; j < response.requests.length; j++) {
        exact.fetchThingy(response.requests[j].url)
        }
    })
    .catch(function (error) {
      console.log(error);
    });

  },

  render: function(){
    var todos = this.state.todo;
    todos = todos.map(function(item,index){
      return(
        <Todoitem item = {item.title} key = {index} onAddComment = {this.onAddComment}
          comments = {item.comments} author = {item.author}/>
      );
    }.bind(this));

    return(
      <div>
        <AddItem onAdd = {this.onAddauthor}/>
        <ul>
          {todos}
        </ul>
      </div>
    );


  },//render

  //custom functions

  onAdd: function(item){
    console.log('onAdd');
    var updatedtodos = this.state.todo;
    updatedtodos.push(item);
    console.log(updatedtodos);
    this.setState({
      todo: updatedtodos
    });

  },
  onAddauthor: function(author, title){
    console.log('onAddauthor');
    var item = {
      'author': author,
      'title': title,
      'comments':[]
    };
    var updatedtodos = this.state.todo;
    updatedtodos.push(item);
    console.log(updatedtodos);
    this.setState({
      todo: updatedtodos
    });
  },
  onAddComment: function(comment, item){
    console.log(252);
    var todos = this.state.todo;
    for (var i = 0; i < todos.length; i++) {
      if(todos[i].title == item){
        console.log(1);
        todos[i].comments.push(comment);
      }
    }
    console.log(todos);
    this.setState({
      todo: todos
    });
  },

  fetchThingy: function(url){
    var exact = this;
    axios.get(url)
    .then(function (response) {
        var comments = [];
        for(var i = 0; i < response.data.comments.length; i++){
          comments.push(response.data.comments[i].body);
        }
        exact.onAdd({'author':response.data.author, 'title':response.data.title, 'comments':comments});
    })
    .catch(function (error) {
      console.log(error);
    });


  }

});



//put component into html
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
