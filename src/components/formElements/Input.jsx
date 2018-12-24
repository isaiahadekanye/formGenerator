import React from "react";

const Input = props => {
  const { name, ...rest } = props;
  return (
    <div className="form-group">
      <input {...rest} name={name} id={name} />
    </div>
  );
};

export default Input;
