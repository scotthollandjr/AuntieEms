var React = require('react');
var DefaultLayout = require('./layout');

var ContactComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>

        <div className="tile is-8">
          <article className="tile is-child notification beige">
            Contact us today:
          </article>
        </div>

      </DefaultLayout>
    )
  }
});

module.exports = ContactComponent;
