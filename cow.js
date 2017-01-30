var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button.js');

var countNum = (
                <div id="counter">
                    {counter}
                </div>
               );

var counter = 0;

var ClickCow = React.createClass ({
    Handleclick: function () {
        counter ++;
    },

    render: function () {
        return <Button onClick={this.handleClick} />;
    }
});

ReactDOM.render(
    <clickCow />,
    countNum,
    document.getElementById('content')
);