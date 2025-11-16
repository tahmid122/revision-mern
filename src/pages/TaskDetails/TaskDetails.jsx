import React, { useState } from "react";
import BaseLayer from "../../components/BaseLayer/BaseLayer";
import Button from "../../components/Button/Button";
import { FaCalendar, FaPenToSquare } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { MdTask } from "react-icons/md";
import { SelectBox } from "../../components/Select/SelectBox";

const TaskDetails = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [showPopUp, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const backToTask = () => {
    navigate("/tasks");
  };
  const selectStatus = [
    { title: "All Tasks", value: "allTasks" },
    { title: "On Going", value: "onGoing" },
    { title: "Pending", value: "pending" },
    { title: "Done", value: "done" },
  ];
  //   status
  const getSelectValue2 = (value) => {
    setSelectedStatus(value);
  };
  const content = (
    <div className="w-full h-full">
      {/* top */}
      <div className="flex items-center justify-between border-b-2 border-b-slate-200 pb-4  ">
        <h2 className="text-xl font-bold">Task Details</h2>

        {/* actions */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <div>
            <Button
              label={
                <span className="flex items-center gap-1">
                  <FaPenToSquare size={15} />
                  Edit Task
                </span>
              }
              type="button"
              color="bg-secondary-color"
            />
          </div>
          <div>
            <Button label={"Back"} type="button" click={backToTask} />
          </div>
        </div>
      </div>
      {/* main */}
      <div className="mt-5 flex flex-col  justify-between h-[90%]">
        <section>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-[100px] h-[100px] rounded-full bg-base-color  flex items-center justify-center text-xl">
              <MdTask size={60} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Art and Craft</h3>
              <p className="text-slate-700 mt-1 text-sm">
                Select the role that you want to candidates for and upload your
                job description. Select the role that you want to candidates for
                and upload your job description. Select the role that you want
                to candidates for and upload your job description. Select the
                role that you want to candidates for and upload your job
                description.
              </p>
            </div>
          </div>
          <div className="mt-10 w-full lg:w-[80%] mx-auto gap-2">
            <div className="flex items-center ">
              <div className="flex flex-col gap-2 border-r-2 pr-4">
                <span>End Date</span>
                <span className="flex items-center gap-3 text-lg">
                  <FaCalendar className="text-base" />
                  Friday, April 19 - 2024
                </span>
              </div>
              <div className="text-2xl pl-4">• Pending</div>
            </div>
            <div className="mt-10">
              <span className="text-sm mb-2 block font-bold">
                Change Status
              </span>
              <SelectBox
                getSelectValue={getSelectValue2}
                placeholder="Select Task status"
                label="Status"
                values={selectStatus}
              />
            </div>
          </div>
        </section>
        <div className="flex items-center justify-end gap-2">
          <div className="flex gap-2 min-w-[300px]">
            <Button
              label={"Delete Task"}
              color="bg-danger-color"
              click={() => {
                setShowPopup(true);
              }}
            />
            <Button label={"Submit Task"} />
          </div>
        </div>
      </div>
    </div>
  );

  const handleDelete = () => {
    console.log("delete");
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <BaseLayer content={content} />
      {/* Delete pop */}
      <div
        className={`h-full w-full bg-[#0000004b] ${
          showPopUp ? "flex" : "hidden"
        } items-center justify-center fixed top-0 left-0`}
      >
        <div className="w-[90%] mx-auto lg:w-[400px] h-[400px] rounded-md bg-white flex items-center justify-center flex-col gap-3">
          <img
            src="../../../src/assets/delete.png"
            className="object-cover"
            alt=""
          />
          <h2 className="text-3xl font-bold">Are you sure!!</h2>
          <div className="w-full flex items-center justify-between gap-2 px-3">
            <Button label={"Yes"} click={handleDelete} />
            <Button
              label={"NO"}
              color="bg-danger-color"
              click={handleClosePopup}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
