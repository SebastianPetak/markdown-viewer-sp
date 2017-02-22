var React = require('react');
var headingStyles = require('../styles/index.js').headingStyles;

var Heading = function() {
	return (
		<h1 style={headingStyles}>Markdown Previewer</h1>
	);
};

module.exports = Heading;
