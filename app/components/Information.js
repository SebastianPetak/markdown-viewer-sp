var React = require('react');
var informationStyles = require('../styles').informationStyles;

var Information = function() {
	return (
		<div>
			<hr></hr>
			<p style={informationStyles}>Information about Github flavored Markdown can be found <a
			href='https://guides.github.com/features/mastering-markdown/'
			target='_blank'>here</a>.</p>
		</div>
	);
};

module.exports = Information;
