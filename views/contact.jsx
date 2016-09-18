var React = require('react');
var DefaultLayout = require('./layout');

var ContactComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>

        <div id="contact-div" className="tile is-6">
          <article className="tile is-child notification beige">
            <nav className="panel">
              <p className="panel-heading">
                Contact us today:
              </p>
              <a className="panel-block" href="mailto:info@auntieems.co">
                <span className="icon contact-icon">
                  <i className="fa fa-envelope"></i>
                </span>
                info@auntieems.co
              </a>
              <a className="panel-block" href="tel:14083759010">
                <span className="icon contact-icon">
                  <i className="fa fa-phone"></i>
                </span>
                (408) 375-9010
              </a>
              <a className="panel-block" href="https://twitter.com/AuntieEmsSJ">
                <span className="icon contact-icon">
                  <i className="fa fa-twitter"></i>
                </span>
                @AuntieEmsSJ
              </a>
              <a className="panel-block" href="https://www.facebook.com/auntieemssj/">
                <span className="icon contact-icon">
                  <i className="fa fa-facebook"></i>
                </span>
                @AuntieEmsSJ
              </a>
            </nav>
          </article>
        </div>

      </DefaultLayout>
    )
  }
});

module.exports = ContactComponent;
