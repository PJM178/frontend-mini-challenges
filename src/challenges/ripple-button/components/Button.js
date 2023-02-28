/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';

const Button = () => {
  // const [effect, setEffect] = useState(false);
  // const [showMouseTrail, setShowMouseTrail] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const mousePosition = useRef({ x: 134, y: 480 });
  const [updateMouse, setUpdateMouse] = useState({ x: 134, y: 480 });

  useEffect(() => {
    console.log('rerender');
    console.log(mousePosition.current);
  }, [updateMouse]);

  const handleMousePosition = (e) => {
    const mouseTrail = document.getElementById('mouse-trail');
    mouseTrail.style.display = 'block';
    mousePosition.current.x = e.pageX;
    mousePosition.current.y = e.pageY;
    mouseTrail.style.left = e.clientX + 'px';
    mouseTrail.style.top = e.clientY + 'px';
    setUpdateMouse({ x: e.pageX, y: e.pageY });
  };

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
    console.log(buttonClicked);
  };

  return (
    <div className="ripple-button-container">
      <button
        type="button"
        className="ripple-button"
        onMouseMove={(e) => handleMousePosition(e)}
        onClick={() => handleButtonClick()}
        onMouseLeave={() => (document.getElementById('mouse-trail').style.display = 'none')}
      >
        Rippling
      </button>
      {buttonClicked && <div className='ripple-effect' style={{ top: mousePosition.current.y, left: mousePosition.current.x }}>asd</div>}
      <div id="mouse-trail"></div>
    </div>
  );
};

export default Button;