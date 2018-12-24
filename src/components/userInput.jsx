import React, { Component } from "react";
import IndividualQuestion from "./individualQuestion";
import Input from "./formElements/Input";
import TextArea from "./formElements/textArea";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      description,
      onChangetitle,
      onChangeDescription,
      newQuestion,
      questionsArr,
      onChangetitleQuestion,
      onChangedescriptionQuestion,
      deleteQuestion,
      mcOption,
      formInput,
      deleteOpt
    } = this.props;

    return (
      <React.Fragment>
        <div className="container border border-dark mt-4 ml-4 rounded">
          <form>
            <Input
              type="text"
              name="title"
              className="form-control my-3 rounded"
              placeholder="Title"
              value={title}
              onChange={e => onChangetitle(e.currentTarget.value)}
            />
            <TextArea
              name="description"
              className="form-control my-3 rounded"
              placeholder="Form description"
              value={description}
              onChange={e => onChangeDescription(e.currentTarget.value)}
            />
          </form>
        </div>
        {questionsArr.map(que => (
          <IndividualQuestion
            values={que}
            key={que.name}
            onChangetitleQuestion={onChangetitleQuestion}
            onChangedescriptionQuestion={onChangedescriptionQuestion}
            mcOption={mcOption}
            formInput={formInput}
            deleteQuestion={deleteQuestion}
            deleteOpt={deleteOpt}
          />
        ))}
        <button
          type="button"
          className="btn btn-primary ml-4 rounded mt-3"
          onClick={newQuestion}
        >
          Add Question
        </button>
      </React.Fragment>
    );
  }
}

export default UserInput;
