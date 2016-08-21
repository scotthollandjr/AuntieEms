var React = require('react');
var MasterLayout = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
          <link href="/public/css/bulma.css" rel="stylesheet" />
          <title>{this.props.name}</title>
        </head>
        <body>
          <h1>This is the default layout</h1>
          {this.props.children}
        </body>
      </html>
    )
  }
})

module.exports = MasterLayout;
