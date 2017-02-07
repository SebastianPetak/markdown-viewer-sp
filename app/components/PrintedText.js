var React = require('react');

var PrintedText = function(props) {
	return (
		// dangerouslySetInnerHTML is reacts replacement for using innerHTML
		<div dangerouslySetInnerHTML={props.getMarkedText()}>
		</div>
	);
};

module.exports = PrintedText;
