/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const ControlButtons = () => {
  const [intervalGoing, setIntervalGoing] = useState(false);
  const [incrementWidth, setIncrementWidth] = useState(0);
  const [timer, setTimer] = useState(null);
  console.log(incrementWidth);
  useEffect(() => {
    if (intervalGoing) {
      setTimer(setInterval(() => {
        setIncrementWidth(incrementWidth + 1);
      }, 1000));
    }
    return () => clearInterval(timer);
  }, [incrementWidth, intervalGoing]);

  const handleStop = () => {
    setIntervalGoing(false);
    clearInterval(timer);
  };

  const handleReset = () => {
    setIncrementWidth(0);
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