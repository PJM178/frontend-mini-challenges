import './styles.css';

import Bar from './components/Bar';
import ControlButtons from './components/ControlButtons';

const ProgressBar = () => {
  return (
    <div >
      <header className="progress-bar-header">
        <h2>Progress Bar</h2>
      </header>
      <section className="progress-bar-main-container">
        <Bar />
        <ControlButtons />
      </section>
    </div>
  );
};

export default ProgressBar;