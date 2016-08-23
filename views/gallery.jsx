var React = require('react');
var DefaultLayout = require('./layout');

var GalleryComponent = React.createClass({
	render: function() {
		return (
	      <DefaultLayout name={this.props.name}>

	          <div className="tile is-ancestor">
	            <div className="tile is-vertical is-6">
	              <div className="tile">
	                <div className="tile is-parent is-vertical">
	                  <article className="tile is-child notification beige">
	                  	<figure class="image gallery" width="1000px">
						  <img src="/img/playarea.jpeg" />
						</figure>
	                    <p className="subtitle">Outdoor fun in an enclosed, spacious back yard.</p>
	                  </article>
	                  <article className="tile is-child notification beige">
	                  	<figure class="image gallery">
						  <img src="/img/playroom.jpg" />
						</figure>
	                    <p className="subtitle">Safe play area with fun, engaging toys and games.</p>
	                  </article>
	                </div>
	              </div>
	            </div>
	            <div className="tile is-vertical is-6">
	              <div className="tile">
	                <div className="tile is-parent is-vertical">
	                  <article className="tile is-child notification beige">
	                  	<figure class="image gallery">
						  <img src="/img/deck.jpg" />
						</figure>
	                    <p className="subtitle">Learning and playing on the outdoor deck.</p>
	                  </article>
	                  <article className="tile is-child notification beige">
	                  	<figure class="image gallery">
						  <img src="/img/garden.jpg" />
						</figure>
	                    <p className="subtitle">Love and learn about nature while maintaining a garden.</p>
	                  </article>
	                </div>
	              </div>
	            </div>
	          </div>

	      </DefaultLayout>
		)
	}
});

module.exports = GalleryComponent;