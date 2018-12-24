import React from "react";
import Input from "./formElements/Input";

const FormData = ({ title, description, questionsArr }) => {
  return (
    <React.Fragment>
      <div className="ml-4 mt-5 rounded">
        <h1>{title}</h1>
        <p>{description}</p>
        {questionsArr.map(que => (
          <div key={que.name}>
            <h3>{que.title}</h3>
            <p>{que.description}</p>
            {que.mcOpt.map(mc => (
              <div
                key={Date.now() + mc + que.title + Math.random()}
                className="ml-4"
              >
                <Input type="checkbox" name={mc} className="form-check-input" />
                {mc}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default FormData;
