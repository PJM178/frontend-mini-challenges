import './styles.css';
import { useState } from 'react';

import Bar from './components/Bar';
import ControlButtons from './components/ControlButtons';

const ProgressBar = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  return (
    <div >
      <header className="progress-bar-header">
        <h2>Progress Bar</h2>
      </header>
      <section className="progress-bar-main-container">
        <Bar progressBarWidth={progressBarWidth} />
        <ControlButtons setProgressBarWidth={setProgressBarWidth} progressBarWidth={progressBarWidth} />
      </section>
    </div>
  );
};

export default ProgressBar;