var React = require('react');
var TypeText = require('../components/TypeText');
var PrintedText = require('../components/PrintedText');
var Heading = require('../components/Heading');
var Information = require('../components/Information');
// DOMPurify prevents XSS attacks, marked is for the github flavored markdown
var DOMPurify = require('dompurify');
var marked = require('marked');

var TextContainer = React.createClass({
	getInitialState: function() {
		var text = '# H1\n## H2\n## H3\n\nLine\nBreak\n\nvs\n\nLine (two spaces)  '+
			'\nBreak\n\n *Emphasis* , aka _italics\n**Strong** ' +
			'emphasis, aka __bold__**\n_Combined_**\n\n1. list\n' +
			'  * unordered sub-list\n\n\n2. Moar list\n'+
			'  1. Ordered sub-list\n  2. One moar\n  3. _...One moar_\n\n' +
			'`inline code`\n\n```javascript\nMuch\nCode\n```\n> Blockquotes';
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
				<Heading />

				<div className='row'>
					<div className='small-12 medium-6 columns'>
						<TypeText
						onUpdateText={this.handleUpdateText}
						text={this.state.text} />
					</div>

					<div className='small-12 medium-6 columns'>
						<PrintedText
						getMarkedText={this.handleMarkedText} />
					</div>
				</div>

				<Information />

			</div>
		);
	}
});

module.exports = TextContainer;
