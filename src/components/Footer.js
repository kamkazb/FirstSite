import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ RefsMap }) => (
  <footer className="footer">
    <div className="footer__container footer__container-top" ref={RefsMap.refContact}>
      <div className="footer__top footer-top">
        <div className="footer-top__inner inner">
          <h2 className="footer__title">Get in Touch</h2>
          <p className="footer__text">
            Vestibulum id ligula porta felis euismod semper,malesuada euismod.
          </p>
          <div className="footer__contacts">
            <div className="footer__contacts-text">
              <p className="footer__contacts-item footer__contacts-item--adress">
                Moonshine Street No: 14/05 Light City, Jupiter
              </p>
              <p className="footer__contacts-item footer__contacts-item--phone">
                0247 541 65 87
              </p>
            </div>
          </div>
          <ul className="footer__social-list socials">
            <li className="socials__item socials__item--vk">
              <a href="https://vk.com/vsemerikov" className="socials__link" aria-label="link to vk">vk</a>
            </li>
            <li className="socials__item socials__item--fb">
              <a href="https://vk.com/vsemerikov" className="socials__link" aria-label="link to fb">fb</a>
            </li>
            <li className="socials__item socials__item--gh">
              <a href="https://github.com/kamkazb/" className="socials__link" aria-label="link to gh">gh</a>
            </li>
            <li className="socials__item socials__item--go">
              <a
                href="https://vk.com/vsemerikov"
                className="socials__link"
                aria-label="link to google"
              >
                go
              </a
                >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer__container footer__container-bottom">
      <div className="footer__bottom footer-bottom">
        <div className="footer-bottom__inner inner">
          <p className="footer__copyrights">
            @ 2013 Webpaint. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  RefsMap: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Footer;
