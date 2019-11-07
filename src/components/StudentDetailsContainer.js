import React from "react";
import StudentDetails from "./StudentDetail";
import { connect } from "react-redux";
import { loadStudent, deleteStudent, updateStudent } from "../actions/students";
import { createEvaluation, loadEvaluations } from '../actions/evaluations'

class StudentDetailsContainer extends React.Component {
  state = {
    remark: "",
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
    color: "",
    editMode: false
  }

  componentDidMount() {
    this.props.loadStudent(Number(this.props.match.params.id));
  }


  onDelete = async () => {
    this.props.deleteStudent(this.props.student.id)
    await this.props.history.push(`/batches/${this.props.batch.id}`)
  }

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        first_name: this.props.student.first_name,
        last_name: this.props.student.last_name,
        picture: this.props.student.picture
      }
    })

    // console.log("FROM EDIT")
  }

  onChange = (event) => {
    // console.log("EVENT", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  onSubmitEva = (event) => {
    // console.table(this.state);
    event.preventDefault()
    if (this.props.student.evaluations.length === 0) {
      if (this.state.color === "green") {
        this.props.createEvaluation({
          remark: this.state.remark,
          date: this.state.date,
          color: this.state.color,
          studentId: this.props.student.id
        })
      } else if (this.state.color === "yellow" || this.state.color === "red") {
        if (this.state.remark !== "") {
          this.props.createEvaluation({
            remark: this.state.remark,
            date: this.state.date,
            color: this.state.color,
            studentId: this.props.student.id
          })
        } else {
          return null
        }
      } else {
        return null
      }
    } else if (this.state.date) {
      const studentsDate = this.props.student.evaluations.map(evaluation => evaluation.date)
      const lastEvalutionDate = studentsDate[studentsDate.length - 1]
      if (this.state.date === lastEvalutionDate) {
        console.log("evalutionDate", lastEvalutionDate, this.state.date)
        return null
      } else {
        console.log("evalutionDate", lastEvalutionDate, this.state.date)
        if (this.state.color === "green") {
          this.props.createEvaluation({
            remark: this.state.remark,
            date: this.state.date,
            color: this.state.color,
            studentId: this.props.student.id
          })
        } else if (this.state.color === "yellow" || this.state.color === "red") {
          if (this.state.remark !== "") {
            this.props.createEvaluation({
              remark: this.state.remark,
              date: this.state.date,
              color: this.state.color,
              studentId: this.props.student.id
            })
          } else {
            return null
          }
        } else {
          return null
        }
      }
    }

    this.setState({
      remark: ''
    })

  }


  onEditChange = (event) => {
    // update the formValues property with the new data from the input field
    // console.log("EDIT CHANGE", event.target.value)
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onEditSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateStudent(this.props.student.id, this.state.formValues)
    // console.log("From event update container", this.props.student.id, this.state.formValues)
  }

  ckeckColor = (color) => {
    return console.log(color)
    // if (color = "red") {
    //   return <div style={{ backgroundColor: "#FF0000", width: "2%" }}></div>
    // }
  }

  render() {
    return (
      <div>
        <StudentDetails
          student={this.props.student}
          onDelete={this.onDelete}
          value={this.state}
          onSubmitEva={this.onSubmitEva}
          onChange={this.onChange}
          //Edit button
          formValues={this.state.formValues}
          editMode={this.state.editMode}
          onEdit={this.onEdit}
          onEditChange={this.onEditChange}
          onEditSubmit={this.onEditSubmit}

          //checkColor
          ckeckColor={this.ckeckColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
    batch: state.batch
  };
}

export default connect(
  mapStateToProps,
  { loadStudent, deleteStudent, createEvaluation, loadEvaluations, updateStudent }
)(StudentDetailsContainer);