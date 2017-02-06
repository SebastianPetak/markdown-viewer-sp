var React = require('react');
var TypeText = require('../components/TypeText');
var PrintedText = require('../components/PrintedText');

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
			<div>
				<TypeText
				onUpdateText={this.handleUpdateText}
				text={this.state.text} />

				<PrintedText
				text={this.state.text} />
			</div>
		);
	}
});

module.exports = TypeTextContainer;
