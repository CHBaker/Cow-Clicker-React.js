var React = require('react');

// this.props.onClick handles the function 
// affecting the cow image holding the prop,
// used to pass in the click function
var Button = React.createClass({
  render: function () {
    var html = (
      <div id="container">
        <img id="cow" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
         onClick={this.props.onClick} />
        <div id="counter">
          { this.props.count }
        </div>
      </div>
    );
    return html;
  }
});

// exports this component so it can be accessed by cow.js
module.exports = Button;
