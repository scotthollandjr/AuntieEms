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

        <a onClick={this.openModal} className="button is-primary">modal</a>
        <div className="modal" id="madmodal">
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
              <a onClick={this.closeModal} className="button">Cancel</a>
            </footer>
          </div>
        </div>

      </DefaultLayout>
    )
  }
});

module.exports = AboutComponent;
