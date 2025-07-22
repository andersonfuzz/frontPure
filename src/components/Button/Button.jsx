function EditBtn({ onClick }) {
    return (
        <button
            className="btn"
            onClick={onClick}
            aria-label="Edit"
        >
            <FaEdit size={20} />
        </button>
    );
}
function DeleteBtn({ onClick }) {
    return (
        <button
            className="btn"
            onClick={onClick}
            aria-label="Delete"
        >
            <FaEdit size={20} />
        </button>
    );
}

export default { EditBtn, DeleteBtn }