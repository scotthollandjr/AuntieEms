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
          <h1 title>title</h1>
          <nav class="nav">
            <div class="container">
              <div class="nav-left">
                <a class="nav-item is-brand" href="/">
                  <img src="/img/eevee2.png" alt="some logo" height="75"/>
                </a>
              </div>
              <div class="nav-right">
                <a class="nav-item is-tab" href="/about">About</a>
                <a class="nav-item is-tab" href="/contact">Contact</a>
              </div>
            </div>
          </nav>
          {this.props.children}
        </body>
      </html>
    )
  }
});

module.exports = MasterLayout;
