import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
const ProjectItem = ({ work }) => (
  <div className="projects__item">
    <img
      src={`${process.env.PUBLIC_URL}${work.src}`}
      alt={work.name}
      className="projects__img"
      width="270"
      height="220"
    />
  </div>
);

ProjectItem.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    name: PropTypes.string,
    isGraphic: PropTypes.bool,
    isIllustration: PropTypes.bool,
    isMotion: PropTypes.bool,
  }).isRequired,
};
export default ProjectItem;
