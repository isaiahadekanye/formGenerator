import React, { Component } from "react";
import UserInput from "./userInput";
import FormData from "./formData";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      question: 1,
      questionsArr: []
    };
    this.mcOption = this.mcOption.bind(this);
    this.deleteOpt = this.deleteOpt.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.formInput = this.formInput.bind(this);
    this.updateUserinputTitle = this.updateUserinputTitle.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.onChangetitleQuestion = this.onChangetitleQuestion.bind(this);
    this.onChangedescriptionQuestion = this.onChangedescriptionQuestion.bind(
      this
    );
    this.updateUserinputDescription = this.updateUserinputDescription.bind(
      this
    );
  }

  updateUserinputTitle(updatedTitle) {
    this.setState({ title: updatedTitle });
  }

  updateUserinputDescription(updatedDescription) {
    this.setState({ description: updatedDescription });
  }

  newQuestion() {
    let final = this.state.question;

    let temp = {
      name: final,
      title: "",
      description: "",
      temp: "",
      mcOpt: []
    };
    let questionsArr = [...this.state.questionsArr, temp];

    this.setState({
      question: this.state.question + 1,
      questionsArr: questionsArr
    });
  }

  onChangetitleQuestion(newTitle, name) {
    const questionsArr = [...this.state.questionsArr];
    const index = questionsArr.findIndex(e => e.name === name);

    questionsArr[index] = { ...questionsArr[index] };
    questionsArr[index].title = newTitle;

    this.setState({
      questionsArr
    });
  }

  onChangedescriptionQuestion(newDescription, name) {
    const questionsArr = [...this.state.questionsArr];
    const index = questionsArr.findIndex(e => e.name === name);

    questionsArr[index] = { ...questionsArr[index] };
    questionsArr[index].description = newDescription;

    this.setState({
      questionsArr
    });
  }

  deleteQuestion(name) {
    let questionsArr1 = [...this.state.questionsArr];
    let questionsArr = questionsArr1.filter(que => que.name !== name);
    this.setState({
      questionsArr
    });
  }

  mcOption(choice, name) {
    const questionsArr = [...this.state.questionsArr];
    const index = questionsArr.findIndex(e => e.name === name);

    questionsArr[index] = { ...questionsArr[index] };
    questionsArr[index].temp = choice;

    this.setState({
      questionsArr
    });
  }
  formInput(event, name) {
    event.preventDefault();

    const questionsArr = [...this.state.questionsArr];
    const index = questionsArr.findIndex(e => e.name === name);
    questionsArr[index] = { ...questionsArr[index] };

    let opt1 = questionsArr[index].temp;
    let mcOpt = questionsArr[index].mcOpt;

    questionsArr[index].mcOpt = [...mcOpt, opt1];
    questionsArr[index].temp = "";

    this.setState({
      questionsArr
    });
  }

  deleteOpt(name, val) {
    const questionsArr = [...this.state.questionsArr];
    const index = questionsArr.findIndex(e => e.name === name);
    questionsArr[index] = { ...questionsArr[index] };
    questionsArr[index].mcOpt = questionsArr[index].mcOpt.filter(
      value => value !== val
    );

    this.setState({
      questionsArr
    });
  }

  render() {
    const { title, description, questionsArr } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <UserInput
              title={title}
              description={description}
              onChangetitle={this.updateUserinputTitle}
              onChangeDescription={this.updateUserinputDescription}
              newQuestion={this.newQuestion}
              questionsArr={questionsArr}
              onChangetitleQuestion={this.onChangetitleQuestion}
              onChangedescriptionQuestion={this.onChangedescriptionQuestion}
              mcOption={this.mcOption}
              formInput={this.formInput}
              deleteQuestion={this.deleteQuestion}
              deleteOpt={this.deleteOpt}
            />
          </div>
          <div className="col">
            <FormData
              title={title}
              description={description}
              questionsArr={questionsArr}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormPage;
