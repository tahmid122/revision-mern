import React from "react";
import { FaCalendar, FaTrash } from "react-icons/fa6";
import { MdTask } from "react-icons/md";

const TaskCard = () => {
  return (
    <div className="h-[170px] w-full shadow-md border border-slate-200 rounded-md p-4 flex flex-col justify-between">
      {/* top */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-[35px] h-[35px] rounded-full bg-base-color flex items-center justify-center text-xl">
          <MdTask />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold">Art and Craft</h2>
          <p className="text-xs mt-1 text-slate-700 text-justify">
            Select the role that you want to candidates for and upload your job
            description.
          </p>
        </div>
        <div>
          <FaTrash className="text-red-600 cursor-pointer" />
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-3 text-sm">
          <FaCalendar className="text-base" />
          Friday, April 19 - 2024
        </span>
        <span className="text-sm font-bold">• Pending</span>
      </div>
    </div>
  );
};

export default TaskCard;
