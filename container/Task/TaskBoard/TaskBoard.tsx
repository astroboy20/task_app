import { TaskType } from "@/typings";
import React, { ChangeEvent, useState } from "react";
import { DeleteIcon } from "@/assets";
import { toast } from "react-toastify";

const TaskBoard = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (!newTask.trim()) {
      toast.error("Task cannot be empty!");
      return;
    }
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id! + 1 : 1;
    const newTaskObject: TaskType = { id: newId, task: newTask };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
    toast.info("New task added");
  };

  const deleteTask = (task: TaskType) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    toast.success("Task deleted");
  };

  return (
    <section className="bg-[#3360c5] h-fit py-[3%]  ">
      <div className="bg-white flex flex-col gap-[50px]   w-2/5 m-auto rounded-[8px] p-5 h-[400px] overflow-y-scroll no-scrollbar">
        <div className=" w-full flex items-center gap-[20px] ">
          <input
            onChange={handleChange}
            value={newTask}
            placeholder="Enter your task"
            className="border-2 border-[#000] w-full focus:outline-[#3360c5] rounded-[8px] h-[48px] p-2"
          />
          <button
            onClick={addTask}
            className="bg-[#3360c5]  h-[48px] text-white rounded-[8px] py-3 px-6 flex justify-center items-center"
            type="submit"
          >
            Add
          </button>
        </div>

        <div>
          {tasks.length === 0 ? (
            <p className="text-center">No task at the moment</p>
          ) : (
            tasks.map((task: TaskType) => (
              <div key={task.id} className="text-left">
                <div className="border-2 border-[#b0b8bb] bg-[#cbe0e5] p-2 rounded-[8px] mb-2 flex justify-between items-center">
                  <p className="size-[70%]">{task.task}</p>
                  <button
                    className="bg-[#1d1a9b] rounded-[8px] p-2"
                    onClick={() => deleteTask(task)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export { TaskBoard };
