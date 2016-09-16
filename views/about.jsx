var React = require('react');
var Modal = require('react-modal');
var DefaultLayout = require('./layout');

var AboutComponent = React.createClass({

  openModal: function() {
    this.setState({className: is-active});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    return (
      <DefaultLayout name={this.props.name}>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification beige hundred">
              <div>
                <h3 className="title is-2">Melissa</h3>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification beige hundred">
              <div>
                <h3 className="title is-2">Madison</h3>
              </div>
            </article>
          </div>
        </div>

      </DefaultLayout>
    )
  }
});

module.exports = AboutComponent;
