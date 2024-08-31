import { useState } from 'react'

function App() {

  const [task, setTasks] = useState([])

  const [newTasks, setNewTasks] = useState('')

  const addTask = () => {
    if(newTasks.trim() !=="") {
      setTasks([...task, newTasks])
      setNewTasks('')
    }
  }

  return (
    <div className="App">

      <h1>Lista de tarefas</h1>

      <input 
        typeof='text'
        value={newTasks}
        onChange={(e) => setNewTasks(e.target.value)} 
        placeholder='Adicione uma tarefa'
      />

      <button onClick={addTask}>Adicionar</button>

      <ul>
        {task.map((task,index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
