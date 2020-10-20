import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './projectItem';
import { filtersMap, getFilteredWorksMap } from '../const';

const ACTIVE_CLASS = 'button--active';

const Works = ({
  RefsMap, WorksItems, SetFilter, CurrentFilter, SetWorks, SourcedData,
}) => {
  const onCLickButtonHandler = (evt) => {
    SetFilter(evt.currentTarget.id);
    SetWorks(getFilteredWorksMap[evt.currentTarget.id](SourcedData));
  };
  return (
    <section
      className="main__section section main__section--works works"
      ref={RefsMap.refPortfolio}
    >
      <div className="works__inner inner">
        <div className="works__text">
          <h2 className="works__title">Our Featured Works</h2>
          <p className="works__subtitle">
            Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.
          </p>
        </div>
        <div className="works__controls">
          <button
            id="all"
            className={`button works__controls-button ${CurrentFilter === filtersMap.ALL ? ACTIVE_CLASS : ''}`}
            type="button"
            aria-label="filter all"
            onClick={(evt) => onCLickButtonHandler(evt)}
          >
            all
          </button>
          <button
            id="graphics"
            className={`button works__controls-button ${CurrentFilter === filtersMap.GRAPHICS ? ACTIVE_CLASS : ''}`}
            type="button"
            aria-label="filter graphics"
            onClick={(evt) => onCLickButtonHandler(evt)}
          >
            graphics
          </button>
          <button
            id="illustration"
            className={`button works__controls-button ${CurrentFilter === filtersMap.ILLUSTRATION ? ACTIVE_CLASS : ''}`}
            type="button"
            aria-label="filter illustration"
            onClick={(evt) => onCLickButtonHandler(evt)}
          >
            illustration
          </button>
          <button
            id="motion"
            className={`button works__controls-button ${CurrentFilter === filtersMap.MOTION ? ACTIVE_CLASS : ''}`}
            type="button"
            aria-label="filter motion"
            onClick={(evt) => onCLickButtonHandler(evt)}
          >
            motion
          </button>
        </div>
        <div className="works__projects projects">
          {WorksItems.map((work) => <ProjectItem work={work} key={work.id} />)}
        </div>
      </div>
    </section>
  );
};
Works.propTypes = {
  RefsMap: PropTypes.objectOf(PropTypes.object).isRequired,
  WorksItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  SetFilter: PropTypes.func.isRequired,
  CurrentFilter: PropTypes.string.isRequired,
  SetWorks: PropTypes.func.isRequired,
  SourcedData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Works;
