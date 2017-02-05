var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button.js');

var Talker = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  
  handleClick: function () {
    console.log('clicked!');
    var currentCount = this.state.count;
    this.setState({count: currentCount + 1});
  },
  
  render: function () {
    return <Button count={this.state.count}
    onClick={this.handleClick} />;
  }
});

ReactDOM.render(
  <Talker />,
  document.getElementById('root')
);
