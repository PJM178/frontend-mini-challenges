const Bar = ({ progressBarWidth }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progressBarWidth}%` }}></div>
    </div>
  );
};

export default Bar;