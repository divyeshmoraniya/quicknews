// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './assets/component/Nav'
import News from './assets/component/News'
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

const science = 'science';
const health = 'health';
const general = 'general';
const sports = 'sports';
const technology = 'technology';
const entertainment = 'entertainment';
const business = 'business';

export default function App() {
  const [mode, setmode] = useState('light');
  const [progress, setProgress] = useState(0);

  let togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'dark';
      document.body.style.color = 'white';


    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'light';
      document.body.style.color = 'black';
    }
  }

  return (
    <BrowserRouter>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          onRef={ref => this.loadingBar = ref}
        /></div>
      <Nav mode={mode} togglemode={togglemode} setmode={setmode}></Nav>
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key={general} mode={mode} category={general} />} />
        <Route exact path="/science" element={<News setProgress={setProgress} key={science} mode={mode} category={science} />} />
        <Route exact path="/health" element={<News setProgress={setProgress} key={health} mode={mode} category={health} />} />
        <Route exact path="/general" element={<News setProgress={setProgress} key={general} mode={mode} category={general} />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key={sports} mode={mode} category={sports} />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} key={technology} mode={mode} category={technology} />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key={entertainment} mode={mode} category={entertainment} />} />
        <Route exact path="/business" element={<News setProgress={setProgress} key={business} mode={mode} category={business} />} />
      </Routes>
    </BrowserRouter>
  )
}