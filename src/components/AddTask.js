import { useState } from "react"

const AddTask = ({ onAdd }) => {

    const [task, setTask] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!task) {
            alert("Please add a task")
            return
        }
        onAdd({ task, day, reminder })

        setTask("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="flex flex-col space-y-4 mb-8" onSubmit={onSubmit} >
            <div className="flex flex-col space-y-3">
                <label className="text-base font-medium">Task</label>
                <input className="border-2 border-solid border-black rounded p-2 focus:border-emerald-400"
                    type="text"
                    placeholder="Add Task"
                    value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-3">
                <label className="text-base font-medium">Day &amp; Time</label>
                <input className="border-2 border-solid border-black rounded p-2 focus:border-emerald-400"
                    type="text"
                    placeholder="Add Day &amp; Time"
                    value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="flex space-x-10">
                <label className="my-auto text-base font-medium">Set Reminder</label>
                <input className="my-auto h-5 w-5 text-green-600" type="checkbox"
                    checked={reminder}
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task"
                className="rounded bg-slate-800 hover:bg-slate-700 text-white py-2 font-medium active:scale-95 active:bg-slate-900" />
        </form>
    )
}

export default AddTask
