var React = require('react');

var PrintedText = function(props) {
	return (
		<div dangerouslySetInnerHTML={props.getMarkedText()}>
		</div>
	);
};

module.exports = PrintedText;
