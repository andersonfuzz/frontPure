import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <section className="task-area">
          {/* Aqui vamos colocar a TaskList futuramente */}
          <p style={{ color: '#ccc' }}>Nenhuma tarefa por enquanto.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
