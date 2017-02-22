var React = require('react');
var textAreaStyles = require('../styles/index.js').textAreaStyles;

var TypeText = function(props) {
	return (
		<div>
			<textarea autofocus value={props.text}
			onChange={props.onUpdateText} style={textAreaStyles}></textarea>
		</div>
	);
};

module.exports = TypeText;
