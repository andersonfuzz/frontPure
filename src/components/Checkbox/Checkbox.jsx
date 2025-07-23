// src/components/StatusSwitch.jsx
import { useState } from 'react';
import './Checkbox.css';

function Checkbox({ initialChecked = false, onToggle }) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider"></span>
    </label>
  );
}

export default Checkbox;
