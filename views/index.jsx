var React = require('react');
var DefaultLayout = require('./layout');

var IndexComponent = React.createClass({
  render: function() {
    return (
      <DefaultLayout name={this.props.name}>

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification beige seventyfive">
                    <p className="title">Left tile</p>
                    <p className="subtitle">tall</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification beige seventyfive">
                    <p className="title">Middle tile</p>
                    <p className="subtitle">tall</p>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification beige twentyfive">
                  <p className="subtitle">"Super inspirational quote about children and what not. Lorem ipsum dolor children something something something"</p>
                  <p>-Wayne Gretzky</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification beige hundred">
                <p className="title">Tall tile</p>
                <p className="subtitle">full screen</p>
              </article>
            </div>
          </div>

      </DefaultLayout>
    )
  }
});

module.exports = IndexComponent;
