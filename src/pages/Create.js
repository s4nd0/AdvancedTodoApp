import React, { useState } from "react";

// components
import FormCreateTask from "../components/FormCreateTask";
import Task from "../components/Task";
import MainText from "../components/MainText";

const Create = () => {
  const [name, setName] = useState("");
  const [range, setRange] = useState(3);
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [exactDay, setExactDay] = useState(false);

  return (
    <div className="sm:grid sm:grid-cols-2">
      <div className="sm:order-2">
        <MainText text={<i>Preview of your task</i>} />
        <Task
          name={name}
          range={range}
          details={details}
          date={date}
          exactDay={exactDay}
          preview={true}
        />
      </div>
      <FormCreateTask
        setName={setName}
        name={name}
        setRange={setRange}
        range={range}
        setDetails={setDetails}
        details={details}
        setDate={setDate}
        date={date}
        setExactDay={setExactDay}
        exactDay={exactDay}
      />
    </div>
  );
};

export default Create;
