import EditButton from '../EditButton/EditButton.jsx';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'alta':
        return '#ffcccc';
      case 'normal':
        return '#e6e6e6';
      case 'baixa':
        return '#d4f4dd';
      default:
        return '#f5f5f5';
    }
  };

  return (
    <div className="task-item" style={{ backgroundColor: getPriorityColor(task.prioridade) }}>
      <div className="task-header">
        <h3>{task.titulo || 'Título da Tarefa'}</h3>
        <div className="task-actions">
          <EditButton onClick={() => alert(`Editar tarefa: ${task.titulo}`)} />
          <DeleteButton onClick={() => alert(`Excluir tarefa: ${task.titulo}`)} />
        </div>
      </div>

      <p className="task-description">{task.descricao || 'Descrição da tarefa vai aqui.'}</p>

      <div className="task-meta">
        <div className="status">
          <label>
            <input
              type="checkbox"
              checked={task.status === 'concluida'}
              onChange={() => alert(`Toggle status da tarefa: ${task.titulo}`)}
            />
            <span>Concluído</span>
          </label>
        </div>

        <div className="priority">
          <label>
            <input
              type="radio"
              name={`priority-${task.id}`}
              value="baixa"
              checked={task.prioridade === 'baixa'}
              onChange={() => alert(`Prioridade para baixa: ${task.titulo}`)}
            />
            Baixa
          </label>
          <label>
            <input
              type="radio"
              name={`priority-${task.id}`}
              value="normal"
              checked={task.prioridade === 'normal'}
              onChange={() => alert(`Prioridade para normal: ${task.titulo}`)}
            />
            Normal
          </label>
          <label>
            <input
              type="radio"
              name={`priority-${task.id}`}
              value="alta"
              checked={task.prioridade === 'alta'}
              onChange={() => alert(`Prioridade para alta: ${task.titulo}`)}
            />
            Alta
          </label>
        </div>

        <div className="dates">
          <span><strong>Criada em:</strong> {task.dataCriacao || '--'}</span>
          <span><strong>Vence em:</strong> {task.dataVencimento || '--'}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
