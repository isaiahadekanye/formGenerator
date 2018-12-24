import React, { Component } from "react";
import Input from "./formElements/Input";
import { FaTrash } from "react-icons/fa";

class IndividualQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      values,
      onChangetitleQuestion,
      onChangedescriptionQuestion,
      deleteQuestion,
      mcOption,
      formInput,
      deleteOpt
    } = this.props;
    return (
      <div className="container border border-dark ml-4 pb-4 rounded mt-4">
        <form onSubmit={e => formInput(e, values.name)}>
          <Input
            type="text"
            name="title"
            className="form-control my-3"
            placeholder={"Question " + values.name}
            value={values.title}
            onChange={e =>
              onChangetitleQuestion(e.currentTarget.value, values.name)
            }
          />
          <Input
            type="text"
            name="description"
            className="form-control my-3"
            placeholder="Question Description (Optional)"
            value={values.description}
            onChange={e =>
              onChangedescriptionQuestion(e.currentTarget.value, values.name)
            }
          />
          {values.mcOpt.map(val => (
            <div key={Date.now() + val + values.name + Math.random()}>
              {val}{" "}
              <FaTrash
                className="float-right"
                onClick={e => deleteOpt(values.name, val)}
              />
            </div>
          ))}
          <Input
            type="text"
            name="description"
            className="form-control my-3"
            placeholder="Add Option"
            required
            value={values.temp}
            onChange={e => mcOption(e.currentTarget.value, values.name)}
          />
          <button type="submit" className="btn btn-primary">
            Add Option
          </button>
          <button
            type="button"
            className="btn btn-danger ml-3"
            onClick={e => deleteQuestion(values.name)}
          >
            Delete Question
          </button>
        </form>
      </div>
    );
  }
}

export default IndividualQuestion;
