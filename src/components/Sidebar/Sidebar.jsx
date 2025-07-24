import './Sidebar.css';
import { FaPlus, FaInbox, FaStar, FaCheck } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">To Do</h2>

      <nav className="nav-links">
        <button className="nav-button active">
          <FaInbox />
          <span>Todas</span>
        </button>
        <button className="nav-button">
          <FaStar />
          <span>Importantes</span>
        </button>
        <button className="nav-button">
          <FaCheck />
          <span>Concluídas</span>
        </button>
      </nav>

    </aside>
  );
};

export default Sidebar;
