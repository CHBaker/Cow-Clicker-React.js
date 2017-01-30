var React = require('react');

var Button = React.createClass({
  render: function () {
    return (
        <div id="cow">
        <img id="cow_pic" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg">
        </div>
    );
  }
});

module.exports = Button;