import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";

const API_URL = "http://localhost:4000/tasks";

async function fetchTasks() {
    try {
        const response = await axios.get(API_URL);
        console.log("Tarefas:", response.data);
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
    }
}

fetchTasks();
