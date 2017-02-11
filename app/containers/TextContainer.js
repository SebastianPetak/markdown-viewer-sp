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
		//Initial text inside the textarea.
		var text = `\
# H1
## H2
## H3

Line
Break

vs

Line (two spaces)  \nBreak

*Emphasis* , aka _italics **Strong** emphasis, aka __bold__** _Combined_**

1. list
 * unordered sub-list


2. Moar list
 1. Ordered sub-list
 2. One moar
 3. _...One moar_

\`inline code\`

\`\`\`javascript
Much
Code
\`\`\`
> Blockquotes;`;
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
