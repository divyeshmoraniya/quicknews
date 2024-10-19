import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './assets/component/Nav';
import News from './assets/component/News';
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  const apikey = "9d4b8772c127454085b200daf7d4c3bd"; 
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  
  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Nav mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} mode={mode} category="general" />} />
          <Route exact path="/science" element={<News setProgress={setProgress}apikey={apikey} mode={mode} category="science" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey}mode={mode} category="health" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey}mode={mode} category="general" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey}mode={mode} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey}mode={mode} category="technology" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress}apikey={apikey} mode={mode} category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} mode={mode} category="business" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
