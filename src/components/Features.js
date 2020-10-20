import React from 'react';
import PropTypes from 'prop-types';

const Features = ({ RefsMap }) => (
  <section className="main__section section main__section--features features" ref={RefsMap.refAbout}>
    <div className="features__inner inner">
      <h2 className="section__title visually-hidden">Наши преимущества</h2>
      <ul className="main__features-list features-list">
        <li className="features-list__item features-list__item--android">
          <h3 className="features-list__item-title">Consectetur</h3>
          <p className="features-list__item-info">
            Vestibulum id ligula porta euismod semper. Aenean lacinia
            bibendum nulla sed consectetur dui.
          </p>
        </li>
        <li className="features-list__item features-list__item--monitor">
          <h3 className="features-list__item-title">Tristiquet</h3>
          <p className="features-list__item-info">
            Fusce dapibus, cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo risus.
          </p>
        </li>
        <li className="features-list__item features-list__item--camera">
          <h3 className="features-list__item-title">Fermentum</h3>
          <p className="features-list__item-info">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam
            venenatis vestibulum sagittis lacus mollis.
          </p>
        </li>
        <li className="features-list__item features-list__item--clock">
          <h3 className="features-list__item-title">Elit Ultricies</h3>
          <p className="features-list__item-info">
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

Features.propTypes = {
  RefsMap: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Features;
