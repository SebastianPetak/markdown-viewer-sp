var React = require('react');
var TypeText = require('../components/TypeText');
var PrintedText = require('../components/PrintedText');
var DOMPurify = require('dompurify');
var marked = require('marked');

var TypeTextContainer = React.createClass({
	getInitialState: function() {
		var text = '#This is the initial text `test`.';
		return {
			text: text,
			//markedText: {__html: DOMPurify.sanitize(marked(text))}
		};
	},

	handleUpdateText: function(e) {
		this.setState({
			text: e.target.value,
			//markedText: {__html: DOMPurify.sanitize(marked(this.state.text))}
		});
	},

	handleMarkedText: function() {
		return (
			{__html: DOMPurify.sanitize(marked(this.state.text))}
		);
	},

	render: function() {
		return (
			<div>
				<TypeText
				onUpdateText={this.handleUpdateText}
				text={this.state.text} />

				<PrintedText
				getMarkedText={this.handleMarkedText} />
			</div>
		);
	}
});

module.exports = TypeTextContainer;
