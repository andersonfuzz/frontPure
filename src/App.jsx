import Sidebar from './components/Sidebar/Sidebar.jsx';
import Header from './components/Header/Header.jsx';
import TaskList from './components/TaskList/TaskList.jsx';

import './App.css';

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <section className="task-area">
          <TaskList />
          {/* Aqui vamos colocar a TaskList futuramente */}
          <p style={{ color: '#ccc' }}>Nenhuma tarefa por enquanto.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
