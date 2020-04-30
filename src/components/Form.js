import React, { useState } from "react";

function Form(props) {
  const { getweather, updatevalue, value} = props;
  const [disabled] = useState(false);
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault()}} className="mt-4 weather-form">
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={updatevalue}
        />
        <button  className={value === "" ? "disapled":"notdisapled"} disabled={ value === "" ? !disabled: disabled} onClick={()=>getweather(value)}>find</button>
      </form>
    </div>
  );
}

export default Form;
