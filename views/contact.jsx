var React = require('react');
var DefaultLayout = require('./layout');

var ContactComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>
        <div>
          <ul>
            <li>Phone: phone</li>
            <li>GitHub: github</li>
            <li>MySpace: myspace</li>
          </ul>
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

module.exports = ContactComponent;
