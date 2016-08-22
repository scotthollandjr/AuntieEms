var React = require('react');
var DefaultLayout = require('./layout');

var GalleryComponent = React.createClass({
	render: function() {
		return (
			<DefaultLayout name={this.props.name}>
			</DefaultLayout>
		)
	}
});

module.exports = GalleryComponent;