import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Works from './components/Works';
import Footer from './components/Footer';
import data from './data/data.json';
import { filtersMap, getFilteredWorksMap } from './const';

function App() {
  const RefsMap = {
    refHome: useRef(),
    refPortfolio: useRef(),
    refAbout: useRef(),
    refContact: useRef(),
  };

  const sourcedData = [...data.works];
  const [currentFilter, setFilter] = useState(filtersMap.ALL);
  const [works, setWorks] = useState(getFilteredWorksMap[currentFilter](sourcedData));

  return (
    <>
      <Header RefsMap={RefsMap} />
      <main className="main">
        <Features RefsMap={RefsMap} />
        <Works RefsMap={RefsMap} WorksItems={works} SetFilter={setFilter} CurrentFilter={currentFilter} SetWorks={setWorks} SourcedData={sourcedData}/>
      </main>
      <Footer RefsMap={RefsMap} />
    </>
  );
}

export default App;
