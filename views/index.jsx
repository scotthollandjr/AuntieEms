var React = require('react');
var DefaultLayout = require('./layout');

var IndexComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <div>
          <h3>And this is the index</h3>
        </div>
        <div>
          <a href="/">home</a>
          <a href="/contact">contact</a>
          <a href="/about">about</a>
        </div>
      </DefaultLayout>
    )
  }
});

module.exports = IndexComponent;
