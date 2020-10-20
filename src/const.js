const filtersMap = {
  ALL: 'all',
  GRAPHICS: 'graphics',
  ILLUSTRATION: 'illustration',
  MOTION: 'motion',
};

const getFilteredWorksMap = {
  [filtersMap.ALL]: (works) => [...works],
  [filtersMap.GRAPHICS]: (works) => [...works].filter((work) => work.isGraphic),
  [filtersMap.ILLUSTRATION]: (works) => [...works].filter((work) => work.isIllustration),
  [filtersMap.MOTION]: (works) => [...works].filter((work) => work.isMotion),
};

// eslint-disable-next-line import/prefer-default-export
export { filtersMap, getFilteredWorksMap };
