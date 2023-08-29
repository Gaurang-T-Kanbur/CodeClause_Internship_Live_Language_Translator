import React, { useState } from 'react';
import './App.css';
import IntroAnimation from './IntroAnimation';
import Translate from './components/Translate';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroAnimationEnd = () => {
    console.log("Animation ended");
    setShowIntro(false);
  };

  return (
    <div className="app-container">
      {showIntro ? (
        <IntroAnimation onAnimationEnd={handleIntroAnimationEnd} />
      ) : (
        <Translate />
      )}
    </div>
  );
}

export default App;
