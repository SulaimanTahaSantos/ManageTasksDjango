import React, { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard"

export function TasksList() {

    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        console.log('Pagina cargada')
        async function loadTasks(){
            const res = await getAllTasks()
            setTasks(res.data)
            console.log(res)
        }
        // Aquí puedes realizar la llamada a la API para obtener las tareas
        loadTasks()
    },[])
  return (
    <div>
      <h2>Tasks List</h2>
      {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
      
      ))}
    </div>
  )
}

