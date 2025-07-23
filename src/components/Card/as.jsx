
    <div className="card normal">
      <div className="card-header">
        <h3>Título da Tarefa</h3>
        <div className="icons">
          <FaEdit className="icon" />
          <FaTrash className="icon" />
        </div>
      </div>

      <p>Descrição detalhada da tarefa.</p>

      <div className="meta">
        <span>Status: Pendente</span>
        <span>Criação: 23/07/2025</span>
        <span>Vence: 25/07/2025</span>
      </div>

      <div className="actions">
        <label>
          <input type="checkbox" /> Concluído
        </label>

        <div className="prioridade">
          <label><input type="radio" name="prioridade" /> Alta</label>
          <label><input type="radio" name="prioridade" defaultChecked /> Normal</label>
          <label><input type="radio" name="prioridade" /> Baixa</label>
        </div>
      </div>
    </div>