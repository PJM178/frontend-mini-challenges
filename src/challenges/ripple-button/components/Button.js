import { useState, useRef } from 'react';

const Button = () => {
  const [effect, setEffect] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMousePosition = (e) => {
    const mouseTrail = document.getElementById('mouse-trail');
    mouseTrail.style.display = 'block';
    setEffect(!effect);
    if (effect) {
      console.log('jorma');
    }
    console.log(e.pageY);
    console.log(e.pageX);
    mousePosition.current.x = e.pageX;
    mousePosition.current.y = e.pageY;
    mouseTrail.style.left = e.pageX + 'px';
    mouseTrail.style.top = e.pageY + 'px';
  };

  return (
    <div className="ripple-button-container">
      <button
        type="button"
        className="ripple-button"
        onMouseMove={(e) => handleMousePosition(e)}
        onClick={() => console.log('jorma')}
        onMouseLeave={() => (document.getElementById('mouse-trail').style.display = 'none')}
      >
        Rippling
      </button>
      <div id="mouse-trail"></div>
    </div>
  );
};

export default Button;