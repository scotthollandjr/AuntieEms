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
                  <article className="tile is-child notification beige twentyfive">
                    <div id="index-logo">
                      <img src="/img/auntieemlogo.png" alt="auntie em logo with cursive font up top and all caps down low"></img>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification beige seventyfive">
                  <p className="title is-3">With combined childcare experience of over 40 years, and a true passion for lorem ipsum dolar, we at Auntie Em's Family Childcare Services lorem ipsum dolar pigs in a blanket.</p>
                  <p className="title is-3">We strive to make every lorem ipsum dolar as lorem as ipsum possible. We believe the early years in a childs development are lorem ipsum dolar a childs development are lorem ipsum dolar a childs development are lorem ipsum dolar .</p>
                  <p className="subtitle index-quote">"Super inspirational quote about children and what not. Lorem ipsum dolor children something something something"</p>
                  <p className="subtitle">-Wayne Gretzky</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification beige hundred">
                <div className="index-photo">
                  <img src=""></img>
                </div>
              </article>
            </div>
          </div>

      </DefaultLayout>
    )
  }
});

module.exports = IndexComponent;
