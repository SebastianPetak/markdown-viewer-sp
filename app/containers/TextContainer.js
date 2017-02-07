var React = require('react');
var TypeText = require('../components/TypeText');
var PrintedText = require('../components/PrintedText');
// DOMPurify prevents XSS attacks, marked is for the github flavored markdown
var DOMPurify = require('dompurify');
var marked = require('marked');

var TextContainer = React.createClass({
	getInitialState: function() {
		var text = '# H1\n## H2\n## H3\n*Emphasis* , aka _italics\n**Strong** ' +
			'emphasis, aka __bold__**\n_Combined_**\n1. lists\n' +
			'  * unordered sub-list\n2. more list\n  1. Ordered sub-list\n\n' +
			'`inline code`\n\n> Blockquotes';
		return {
			text: text,
		};
	},

	handleUpdateText: function(e) {
		this.setState({
			text: e.target.value,
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

module.exports = TextContainer;
