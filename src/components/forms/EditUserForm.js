import React from "react";

const EditUserForm = props => {
  return (
    <React.Fragment>
      <h4 className="ml-4"> Edit user</h4>
      <form className="mt-4 ml-4 mb-4" onSubmit={props.handleSubmitChange}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control col-5"
            id="name"
            aria-describedby="name"
            value={props.userData.name}
            onChange={props.handleInputChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            className="form-control col-5"
            id="username"
            value={props.userData.username}
            onChange={props.handleInputChange}
            name="username"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update User
        </button>
        <button onClick={props.setEditing} className="btn btn-primary ml-4">
          Cancel
        </button>
      </form>
    </React.Fragment>
  );
};

export default EditUserForm;

/* <form onSubmit={props.handleSubmitChange}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={props.userData.name}
        onChange={props.handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={props.userData.username}
        onChange={props.handleInputChange}
      />
      <button>Update user</button>
      <button onClick={props.setEditing} className="button muted-button">
        Cancel
      </button>
    </form> */
