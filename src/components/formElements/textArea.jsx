import React from "react";

const TextArea = props => {
  const { name, ...rest } = props;
  return (
    <div className="form-group">
      <textarea
        {...rest}
        name={name}
        id={name}
        rows="3"
        className="form-control form-control-sm my-4"
      />
    </div>
  );
};

export default TextArea;
