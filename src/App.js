import React, { Component, Fragment } from "react";
import "./App.css";
import AddUserForm from "./components/forms/AddUserForm";
import UserTable from "./components/tables/UserTable";
import EditUserForm from "./components/forms/EditUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      currentUser: { name: "", username: "" },
      users: [],
      indexUser: 0
    };
  }

  onChangeHandler = event => {
    const { currentUser } = { ...this.state };
    const currentUserData = currentUser;
    const { name, value } = event.target;
    currentUserData[name] = value;
    this.setState({ currentUser: currentUserData });
  };

  addUserHandler = event => {
    event.preventDefault();
    this.setState({
      users: [...this.state.users, this.state.currentUser],
      currentUser: {
        ...this.state.currentUser,
        name: "",
        username: ""
      }
    });
  };

  editTableRowHandler = (user, index) => {
    const { currentUser } = { ...this.state };
    const currentUserData = currentUser;
    currentUserData.name = user.name;
    currentUserData.username = user.username;
    this.setState({
      editing: true,
      currentUser: currentUserData,
      indexUser: index
    });
  };

  deleteUserHandler = userIndex => {
    const copyUsers = [...this.state.users];
    copyUsers.splice(userIndex, 1);
    this.setState({
      editing: false,
      users: copyUsers
    });
  };

  setEditingHandler = () => {
    this.setState({
      editing: false
    });
  };

  updateUserHandler = event => {
    event.preventDefault();
    const copyUsers = [...this.state.users];
    copyUsers[this.state.indexUser] = this.state.currentUser;
    console.log("updated user", copyUsers);
    this.setState({
      users: copyUsers,
      currentUser: {
        ...this.state.currentUser,
        name: "",
        username: ""
      }
    });
  };

  render() {
    return (
      <div>
        <h4>CRUD operation using Class Based state Management</h4>
        {this.state.editing ? (
          <Fragment>
            <EditUserForm
              setEditing={this.setEditingHandler}
              handleInputChange={this.onChangeHandler}
              userData={this.state.currentUser}
              handleSubmitChange={this.updateUserHandler}
            />
          </Fragment>
        ) : (
          <Fragment>
            <AddUserForm
              handleInputChange={this.onChangeHandler}
              userData={this.state.currentUser}
              handleSubmitChange={this.addUserHandler}
            />
          </Fragment>
        )}
        <div>
          <h4>View User details</h4>
          <UserTable
            users={this.state.users}
            editRow={this.editTableRowHandler}
            deleteUser={this.deleteUserHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
