export default function Radio() {
    return (
        <div className="container">
            <label>
                <input type="radio" name="prioridade" value="baixa" /> Baixa
            </label>
            <label>
                <input type="radio" name="prioridade" value="normal" defaultChecked /> Normal
            </label>
            <label>
                <input type="radio" name="prioridade" value="alta" /> Alta
            </label>
        </div>
    )
}