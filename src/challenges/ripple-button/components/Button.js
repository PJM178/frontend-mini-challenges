import { useState, useRef } from 'react';

const Button = () => {
  const [effect, setEffect] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMousePosition = (e) => {
    const button = document.getElementById('mouse-trail');
    button.style.display = 'block';
    setEffect(!effect);
    if (effect) {
      console.log('jorma');
    }
    console.log(e.pageY);
    console.log(e.pageX);
    mousePosition.current.x = e.pageX;
    mousePosition.current.y = e.pageY;
    button.style.left = e.pageX + 'px';
    button.style.top = e.pageY + 'px';
  };

  return (
    <div className="ripple-button-container">
      <button type="button" className="ripple-button" onMouseMove={(e) => handleMousePosition(e)} onClick={() => console.log('jorma')}>Rippling</button>
      <div id="mouse-trail"></div>
    </div>
  );
};

export default Button;