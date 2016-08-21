var React = require('react');
var DefaultLayout = require('./layout');

var AboutComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <h3>About</h3>
        <div>
          <a href="/">home</a>
          <a href="/contact">contact</a>
          <a href="/about">about</a>
        </div>
      </DefaultLayout>
    )
  }
});

module.exports = AboutComponent;
