import TaskItem from '../TaskItem/TaskItem.jsx';
import './TaskList.css';

const TaskList = () => {
  // Temporariamente simulando algumas tarefas
  const mockTasks = [
    {
      id: 1,
      titulo: 'Estudar React',
      descricao: 'Ler documentação oficial e criar um projeto de exemplo.',
      status: 'pendente',
      prioridade: 'alta',
      dataCriacao: '2025-07-20',
      dataVencimento: '2025-07-25'
    },
    {
      id: 2,
      titulo: 'Ir ao mercado',
      descricao: 'Comprar arroz, feijão, ovos e leite.',
      status: 'concluida',
      prioridade: 'normal',
      dataCriacao: '2025-07-18',
      dataVencimento: '2025-07-23'
    }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      {mockTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
