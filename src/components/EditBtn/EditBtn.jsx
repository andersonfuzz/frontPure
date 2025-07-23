import { FaEdit } from 'react-icons/fa';
import './EditBtn.css';

function EditBtn({ onClick }) {
  return (
    <button className="edit-button" onClick={onClick} title="Editar">
      <FaEdit />
    </button>
  );
}

export default EditBtn;
