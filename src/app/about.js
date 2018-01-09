const React = require('react');
var Link = require('react-router').Link;

var About = React.createClass({
  render: function(){
    return(
      <div>
        <Link to = {'/'}>Home</Link>
        <h1>All about this small app</h1>
      </div>
    );
  }
});

module.exports = About;
