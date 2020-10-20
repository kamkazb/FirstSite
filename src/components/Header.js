import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/Logo.svg';

const Header = ({ RefsMap }) => {
  const GoToRefMap = {
    home: RefsMap.refHome,
    portfolio: RefsMap.refPortfolio,
    about: RefsMap.refAbout,
    contact: RefsMap.refContact,
  };

  const goTo = (id) => {
    window.scrollTo(0, GoToRefMap[id].current.offsetTop);
  };

  return (
    <header className="header">
      <div className="header__container header__container--navigation">
        <div className="header__container-inner inner">
          <div className="header__logo">
            <img
              src={logo}
              alt="Logo"
              width="250"
              height="70"
              className="header__logo-img"
            />
          </div>
          <nav className="header__navigation" ref={RefsMap.refHome}>
            <ul className="header__navigation-list navigation">
              <li className="navigation__item">
                <button
                  className="navigation__button"
                  type="button"
                  aria-label="go home"
                  id="home"
                  onClick={(evt) => goTo(evt.currentTarget.id)}
                >
                  home
                </button>
              </li>
              <li className="navigation__item">
                <button
                  className="navigation__button"
                  type="button"
                  aria-label="go to portfolio"
                  id="portfolio"
                  onClick={(evt) => goTo(evt.currentTarget.id)}
                >
                  portfolio
                </button>
              </li>
              <li className="navigation__item">
                <button
                  className="navigation__button"
                  type="button"
                  aria-label="go to about"
                  id="about"
                  onClick={(evt) => goTo(evt.currentTarget.id)}
                >
                  about
                </button>
              </li>
              <li className="navigation__item">
                <button
                  className="navigation__button"
                  type="button"
                  aria-label="go to contacts"
                  id="contact"
                  onClick={(evt) => goTo(evt.currentTarget.id)}
                >
                  contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__container header__container--au">
        <div className="header__container-inner inner">
          <div className="header__text">
            <h1 className="header__title">We are Webpaint</h1>
            <p className="header__info">
              digital &#38; branding agency based in Jupiter and we would love
              to turn ideas into beautiful things.
            </p>
          </div>
          <button
            className="header__button button"
            type="button"
            aria-label="go to portfolio"
            id="portfolio"
            onClick={(evt) => goTo(evt.currentTarget.id)}
          >
            see portfolio
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  RefsMap: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Header;
