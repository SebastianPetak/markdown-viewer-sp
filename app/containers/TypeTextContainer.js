var React = require('react');
var TypeText = require('../components/TypeText');

var TypeTextContainer = React.createClass({
	getInitialState: function() {
		return {
			text: 'This is the initial text'
		};
	},

	handleUpdateText: function(e) {
		this.setState({
			text: e.target.value
		});
	},

	render: function() {
		return (
			<TypeText
			onUpdateText={this.handleUpdateText}
			text={this.state.text} />
		);
	}
});

module.exports = TypeTextContainer;
