var React = require('react');
var MasterLayout = React.createClass({
  render: function() {
    return (
      <html lang="en-US">
        <head>
          <meta charset="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html" />
          <link href="/css/bulma.css" rel="stylesheet" type="text/css"/>
          <link href="/css/styles.css" rel="stylesheet"  type="text/css"/>
          <title>Auntie Em's | {this.props.name}</title>
        </head>
        <body>
          <nav className="nav">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item is-brand" href="/">
                  <img src="/img/eevee2.png" alt="some logo" height="75"/>
                </a>
                <p className="nav-item">Auntie Em's | {this.props.name}</p>
              </div>
              <div className="nav-right">
                <a className="nav-item is-tab" href="/about">About</a>
                <a className="nav-item is-tab" href="/gallery">Gallery</a>
                <a className="nav-item is-tab" href="/contact">Contact</a>
              </div>
            </div>
          </nav>
          <div className="container">
              {this.props.children}
          </div>
        </body>
      </html>
    )
  }
});

module.exports = MasterLayout;
