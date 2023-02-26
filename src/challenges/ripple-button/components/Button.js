const Button = () => {
  const handleMousePosition = (e) => {
    // const button = document.getElementsByClassName('ripple-button');
    console.log(e.pageY);
  };

  return (
    <div className="ripple-button-container">
      <button type="button" className="ripple-button" onMouseMove={(e) => handleMousePosition(e)}>Rippling</button>
    </div>
  );
};

export default Button;