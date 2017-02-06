var React = require('react');

var TypeText = function(props) {
	return (
		<textarea rows="4" cols="50" autofocus value={props.text}
		onChange={props.onUpdateText}></textarea>
	);
};

module.exports = TypeText;
