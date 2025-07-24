import { FaPen } from 'react-icons/fa';
import './EditButton.css';

const EditButton = ({ onClick }) => {
  return (
    <button className="edit-button" onClick={onClick} title="Editar tarefa">
      <FaPen size={14} />
    </button>
  );
};

export default EditButton;
