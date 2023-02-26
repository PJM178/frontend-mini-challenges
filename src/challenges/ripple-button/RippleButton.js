import './styles.css';

import Button from './components/Button';

const RippleButton = () => {
  return (
    <div className="ripple-button-body">
      <header>
        <h2>Ripple Button</h2>
      </header>
      <section>
        <Button />
      </section>
    </div>
  );
};

export default RippleButton;