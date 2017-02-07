var React = require('react');
var TypeText = require('../components/TypeText');
var PrintedText = require('../components/PrintedText');
var marked = require('marked');

var TypeTextContainer = React.createClass({
	getInitialState: function() {
		var text = '#This is the initial text `test`.';
		return {
			text: text,
			markedText: marked(text, {sanitize: true})
		};
	},

	handleUpdateText: function(e) {
		this.setState({
			text: e.target.value,
			markedText: marked(this.state.text, {sanitize: true})
		});
	},

	render: function() {
		return (
			<div>
				<TypeText
				onUpdateText={this.handleUpdateText}
				text={this.state.text} />

				<PrintedText
				markedText={this.state.markedText} />
			</div>
		);
	}
});

module.exports = TypeTextContainer;
