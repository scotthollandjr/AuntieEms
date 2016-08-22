var React = require('react');
var DefaultLayout = require('./layout');

var AboutComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>


      <a className="button is-primary is-large modal-button">button</a>
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Modal title</p>
                <button className="delete"></button>
              </header>
              <section className="modal-card-body">

              </section>
              <footer className="modal-card-foot">
                <a className="button is-primary">Save changes</a>
                <a className="button">Cancel</a>
              </footer>
            </div>
          </div>
        </div>

      </DefaultLayout>
    )
  }
});

module.exports = AboutComponent;
