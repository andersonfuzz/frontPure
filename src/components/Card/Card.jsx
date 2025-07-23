import './Card.css';
import { useState } from 'react';
import Radio from '../Radio/Radio.jsx'
import Checkbox from '../Checkbox/Checkbox.jsx'
import EditBtn from '../EditBtn/EditBtn.jsx';

function Card() {
  const [done, setDone] = useState(false);
  return (
    <div className="card">

      <h3>Título da Tarefa</h3>
      <p>Descrição detalhada da tarefa Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae eligendi nam unde, aperiam asperiores velit non vel. Nostrum dolorem sit libero molestias architecto obcaecati aspernatur voluptate blanditiis laudantium expedita. .</p>
      <Radio />

      <div style={{ display: "flex" }}>
        <span> {done ? 'Done' : 'Pending'}</span>
        <Checkbox
          initialChecked={done}
          onToggle={setDone}
        />
        <EditBtn />
        <EditBtn />
      </div>

    </div>
  );
}

export default Card;
