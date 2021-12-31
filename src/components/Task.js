import { TrashIcon } from '@heroicons/react/outline'

const Task = ({ task, onDelete, onToggleReminder }) => {
    return (
        <div className={`bg-gray-200 mb-2 px-5 py-2 rounded ${task.reminder ? "border-l-4 border-l-emerald-700" : ""}`} onDoubleClick={() => { onToggleReminder(task.id) }}>
            <div className="text-stone-900 font-medium text-lg flex justify-between"> {task.text} <TrashIcon className='h-5 w-5 my-auto ml-2 text-center text-red-500 hover:cursor-pointer active:scale-95' onClick={() => onDelete(task.id)} /></div>
            <div className="text-stone-600 font-medium text-base"> {task.day} </div>
        </div>
    )
}

export default Task
