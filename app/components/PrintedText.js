var React = require('react');

var PrintedText = function(props) {
	return (
		// dangerouslySetInnerHTML is reacts replacement for using innerHTML
		<div>
			<div dangerouslySetInnerHTML={props.getMarkedText()}>
			</div>
		</div>
	);
};

module.exports = PrintedText;
