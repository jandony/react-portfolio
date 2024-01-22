import { useState } from "react";
import clsx from "clsx";

export default function ToDoForm() {
    let [allTasks, setAllTasks] = useState([
        {
            name: "Apples",
            status: false,
        },
        {
            name: "Toothpaste",
            status: false,
        },
        {
            name: "Shampoo",
            status: false,
        },
    ]);
    const [myTask, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const hasTask = allTasks.includes(myTask);
        console.log("Task added!");
        console.log(allTasks);
        if (myTask != "" && !hasTask) {
            setAllTasks([...allTasks, { name: myTask, status: false }]);
        }
        clearForm();
    };

    const handleCompletion = (event, task) => {
        event.preventDefault();
        let currentStatus = task.status;
        let indexToUpdate = allTasks.findIndex((item) => item.name === task.name);
        let newTasks = [...allTasks];

        if (!currentStatus) {
            currentStatus = true;
        } else {
            currentStatus = false;
        }

        let newStatus = { ...allTasks[indexToUpdate], status: currentStatus };

        if (indexToUpdate !== -1) {
            newTasks[indexToUpdate] = newStatus;
            setAllTasks(newTasks);
        }
    };

    const handleEdit = (event, task) => {
        event.preventDefault();
        const userInput = prompt("Please type new Task:");
        console.log("User entered:", userInput);

        let indexToUpdate = allTasks.findIndex((item) => item.name === task.name);
        let newTasks = [...allTasks];
        let newTask = { ...allTasks[indexToUpdate], name: userInput };

        if (indexToUpdate !== -1) {
            newTasks[indexToUpdate] = newTask;
            setAllTasks(newTasks);
        }
    };

    const handleRemove = (event, task) => {
        event.preventDefault();
        let indexToRemove = allTasks.indexOf(task);
        let newTasks = [...allTasks];
        newTasks.splice(indexToRemove, 1);
        setAllTasks(newTasks);
    };

    const clearForm = () => {
        setTask("");
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row bg-gray-200 rounded-lg mt-6">
                <form onSubmit={handleSubmit} className="p-6 md:w-1/4">
                    <label className="flex flex-col">
                        New Item:
                        <input type="text" placeholder="Type task here..." value={myTask} onChange={(e) => setTask(e.target.value)} id="form-new-task" className="text-sm mt-2 py-2 px-4 rounded-lg" />
                    </label>
                    <input type="submit" className="p-2 my-2 rounded-lg w-full text-white bg-green-600 hover:bg-green-700" />
                </form>

                <div className="p-6 md:w-3/4">
                    <h3 className="mt-4">Results:</h3>
                    <div className="bg-yellow-100 p-4 mt-2">
                        {allTasks.map((task) => {
                            return (
                                <div id={task.name} key={task.name} className="flex justify-between border-dotted border-b-2 border-black-300 p-2">
                                    <p className={clsx({ "line-through": task.status == true })}>{task.name}</p>
                                    <div className="flex gap-2">
                                        <button className={clsx("bg-green-500 text-white hover:bg-green-600 py-2 px-3", { "bg-yellow-500 hover:bg-yellow-600": task.status != false })} onClick={(e) => handleCompletion(e, task)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx("w-6 h-6 block", { "w-6 h-6 hidden": task.status != false })}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx("w-6 h-6 block", { "w-6 h-6 hidden": task.status == false })}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
                                        </button>
                                        <button className="bg-blue-400 text-white hover:bg-blue-500 py-2 px-3" onClick={(e) => handleEdit(e, task)}>
                                            Edit
                                        </button>
                                        <button className="bg-red-400 text-white hover:bg-red-500 py-2 px-3" onClick={(e) => handleRemove(e, task)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        }, allTasks)}
                    </div>
                </div>
            </div>
        </div>
    );
}
