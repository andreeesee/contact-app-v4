import React from "react";
import { Link } from "react-router-dom";
import { ConfirmationDialogue } from "../utils/alerts";
import { useHistory } from "react-router-dom";

const ContactDetails = (props) => {
  let history = useHistory();
  const { deleteContactHandler } = props;
  const { id, fullName, email, number, location, regDate } = props.location.state.contact;
  const name = fullName.split(' ')
  const firstName = fullName.substring(name[0].length);
  const lastName = name[0];
  const date = regDate.split('-');
  const newRegDate = date[1] + '/' + date[2] + '/' + date[0];
  const uid = props.location.pathname.split('/')[2];
  const onDelete = (id) => {
    deleteContactHandler(id);
    history.push("/");
    // window.location.reload();
  };
  return (
    <div className="ui main">
      <br></br>
      <br></br>
      <h1>Delete Contact</h1>
      <table className="ui definition table">
        <tbody>
          <tr>
            <td className="two wide column">ID:</td>
            <td>{uid}</td>
          </tr>
          <tr>
            <td>Full Name:</td>
            <td>{lastName +', '+ firstName +'.'}</td>
          </tr>
          <tr>
            <td>Email Address:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Number:</td>
            <td>{number}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{location}</td>
          </tr>
          <tr>
            <td>Registered Date:</td>
            <td>{newRegDate}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <div className="content">
        <Link to="/">
          <button className="ui button blue right">Back</button>
        </Link>
                  
        <button
          onClick={() =>
            ConfirmationDialogue(
              "Are you sure you want to delete this contact?", "", "", "",
              "Yes",
              "No",
              () => onDelete(id)
            )
          }
          className="ui button red"
        >
          Delete
        </button>
      </div>
      <br></br>
    </div>
  );
};
export default ContactDetails;
