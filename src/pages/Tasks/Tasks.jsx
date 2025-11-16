import React, { useState } from "react";
import BaseLayer from "../../components/BaseLayer/BaseLayer";
import Button from "../../components/Button/Button";
import { MdNoteAdd } from "react-icons/md";
import TaskCard from "./TaskCard";
import { SelectBox } from "../../components/Select/SelectBox";
import Input from "../../components/Input/Input";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";

const Tasks = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [taskDetails, setTaskDetails] = useState({
    taskTitle: "",
    taskDescription: "",
    taskCategory: "",
  });
  const selectCategories = [
    { title: "Arts And Crafts", value: "artsAndCraft" },
    { title: "Nature", value: "nature" },
    { title: "Family", value: "family" },
    { title: "Sports", value: "sports" },
    { title: "Friends", value: "friends" },
  ];
  const selectStatus = [
    { title: "All Tasks", value: "allTasks" },
    { title: "On Going", value: "onGoing" },
    { title: "Pending", value: "pending" },
    { title: "Done", value: "done" },
  ];
  // get select value category
  const getSelectValue = (value) => {
    setSelectedCategory(value);
  };
  //   status
  const getSelectValue2 = (value) => {
    setSelectedStatus(value);
  };
  //   add task catgory
  const getSelectValue3 = (value) => {
    setTaskDetails({ ...taskDetails, taskCategory: value });
  };
  console.log(selectedCategory);
  console.log(selectedStatus);
  //   handle change of task details
  const handleTaskDetails = (target) => {
    const name = target.name;
    const value = target.value;
    setTaskDetails({ ...taskDetails, [name]: value });
  };
  const showPopup = () => {
    setShowForm(true);
  };
  const buttonText = (
    <span className="flex items-center gap-2">
      <MdNoteAdd className="text-lg" />
      Add New Task
    </span>
  );
  //   Add task
  const handleAddTask = (e) => {
    e.preventDefault();

    for (const key in taskDetails) {
      if (taskDetails[key].trim() == "")
        return toast.error(`${key} is required`);
    }
    console.log(taskDetails);
  };
  const content = (
    <div className="w-full h-full space-y-4">
      {/* top */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h3 className="text-xl font-bold">All Task List</h3>
        {/* actions */}
        <div className="flex flex-col mt-5 lg:mt-0 lg:flex-row items-center gap-2">
          <div>
            <SelectBox
              getSelectValue={getSelectValue}
              placeholder="Select Task Category"
              label="Categories"
              values={selectCategories}
            />
          </div>
          <div>
            <SelectBox
              getSelectValue={getSelectValue2}
              placeholder="Select Task status"
              label="Status"
              values={selectStatus}
            />
          </div>
          <div className="flex-1">
            <Button label={buttonText} click={showPopup} />
          </div>
        </div>
      </div>
      {/* main */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
  return (
    <div>
      <BaseLayer content={content} />
      {/* Add task form */}
      <div
        className={`w-full h-screen absolute left-0 top-0 bg-[#00000048] ${
          showForm ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <form
          onSubmit={handleAddTask}
          className={`w-full mx-5 lg:w-[400px] bg-white rounded-md p-5 space-y-2 relative `}
        >
          <span
            onClick={() => setShowForm(false)}
            className="absolute right-2 top-2 cursor-pointer"
          >
            <FaXmark className="text-lg" />
          </span>
          <h2 className="text-xl font-bold text-center">Add Task</h2>
          <Input
            label={"Task Title"}
            name={"taskTitle"}
            placeholder={"Enter task title"}
            type={"text"}
            changeFunc={handleTaskDetails}
          />
          <label
            htmlFor="taskDescription"
            className="font-semibold text-base capitalize"
          >
            Task Description
          </label>
          <textarea
            name="taskDescription"
            className="w-full px-4 py-2 outline-none border border-slate-300 rounded text-sm h-[100px] shadow-xs resize-none"
            placeholder="Enter task description"
            onChange={(e) => handleTaskDetails(e.target)}
          ></textarea>
          <label
            htmlFor="taskCategory"
            className="font-semibold text-base capitalize"
          >
            Task Category
          </label>
          <SelectBox
            getSelectValue={getSelectValue3}
            placeholder="Select Task Category"
            label="Categories"
            values={selectCategories}
          />
          <Button type="submit" label={"Add Task"} />
        </form>
      </div>
    </div>
  );
};

export default Tasks;
