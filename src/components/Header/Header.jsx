import './Header.css';
import { FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Minhas Tarefas</h1>
      <button className="add-button">
        <FaPlus />
        <span>Nova Tarefa</span>
      </button>
    </header>
  );
};

export default Header;
