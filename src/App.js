import { useState } from 'react'
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTask] = useState(
    [
      {
        id: 1,
        text: "Task 1",
        day: "Feb 5th at 2:30 PM",
        reminder: true
      },
      {
        id: 2,
        text: "Task 2",
        day: "Feb 5th at 2:30 PM",
        reminder: true
      },
      {
        id: 3,
        text: "Task 3",
        day: "Feb 5th at 2:30 PM",
        reminder: false
      },
    ]
  )

  const addTask = (task) => {
    setTask([...tasks, {
      id: tasks.length + 1,
      text: task.task,
      day: task.day,
      reminder: task.reminder
    }])
  }

  const deleteTask = (id) => {
    setTask(tasks.filter(
      (task) => task.id !== id
    ))
  }

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
  }

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className='w-11/12 md:w-1/2 mx-auto border-solid border-emerald-900 border-2 rounded px-6 py-8 my-4'>
      <Header onToggleAddTask={toggleAddTask} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {
        tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />) : (<div className="text-stone-900 font-medium text-lg w-fit mx-auto"> No Tasks To Show</div>)
      }
    </div>
  );
}

export default App;
