import React, {HTMLAttributes} from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

const DatePicker = ({selectedDate, onChange, ...props}) => {
  const ExampleCustomInput = ({value, onClick}) => (
    <div className="fff" onClick={onClick}>
      {value}
    </div>
  );
  return (
    <ReactDatePicker selected={selectedDate} onChange={onChange} {...props} />
  );
};

export default DatePicker;
