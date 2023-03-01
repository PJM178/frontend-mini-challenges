/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const ControlButtons = ({ setProgressBarWidth, progressBarWidth }) => {
  const [intervalGoing, setIntervalGoing] = useState(false);
  const [timer, setTimer] = useState(null);
  console.log(progressBarWidth);
  useEffect(() => {
    if (progressBarWidth < 100) {
      if (intervalGoing) {
        setTimer(setInterval(() => {
          setProgressBarWidth(progressBarWidth + 1/20);
        }, 1));
      }
    } else {
      setProgressBarWidth(Math.floor(progressBarWidth));
    }
    return () => clearInterval(timer);
  }, [progressBarWidth, intervalGoing]);

  const handleStop = () => {
    setIntervalGoing(false);
    clearInterval(timer);
  };

  const handleReset = () => {
    setProgressBarWidth(0);
    clearInterval(timer);
  };

  return (
    <div className="control-button-container">
      <button className="control-button" onClick={() => setIntervalGoing(true)}>Start</button>
      <button className="control-button" onClick={() => handleStop()}>Stop</button>
      <button className="control-button" onClick={() => handleReset()}>Reset</button>
    </div>
  );
};

export default ControlButtons;