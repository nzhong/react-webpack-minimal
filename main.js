var React = require('react');
var ReactDOM = require('react-dom');
var StorePicker = React.createClass({
        render : function() {
                return (
                        <p><b>Hello this is inside StorePicker.render</b></p>
                )
        }
});
ReactDOM.render( <StorePicker/>, document.querySelector('#main'));
