import { FaTrash } from 'react-icons/fa';
import './DeleteButton.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button className="delete-button" onClick={onClick} title="Excluir tarefa">
      <FaTrash size={14} />
    </button>
  );
};

export default DeleteButton;
