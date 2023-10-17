import React from "react";
import {
  differenceInDays,
  formatDistanceToNow,
  formatDistance,
} from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const date = new Date(taskObj.deadline);

  const todayDate = new Date();

  const taskDate = formatDistanceToNow(date, { addSuffix: true, locale: tr });

  const getClassName = (date) => {
    const diff = differenceInDays(date, todayDate);

    return diff > 3 ? "bg-[#d4d7ff]" : "bg-[#ffd9d4]";
  };
  const bg = getClassName(date);

  return (
    <div className="task">
      <h3 className="text-lg text-[#c8781a] ">{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={bg}>{taskDate}</span>
      </div>
      <p className="pt-2 px-0 pb-3 text-sm text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
