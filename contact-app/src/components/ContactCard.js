import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id } = props;
  const { fullName, email, number, location, regDate } = props.contact;
  const name = fullName.split(' ')
  const firstName = fullName.substring(name[0].length);
  const lastName = name[0];
  const date = regDate.split('-');
  const newRegDate = date[1] + '/' + date[2] + '/' + date[0];
  return (
    <table className="ui fixed table">
      <tbody>
        <tr>
          <td style={{ width: "5%" }}>{id}</td>
          <td style={{ width: "15%" }}>{lastName +', '+ firstName +'.'}</td>
          <td style={{ width: "18%" }}>{email}</td>
          <td>{number}</td>
          <td>{location}</td>
          <td>{newRegDate}</td>
          <td>
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact: props.contact },
              }}
            >
              <button className="ui button green">View</button>
            </Link>
          </td>
          <td>
            <Link
              to={{
                pathname: `/update/${id}`,
                state: { contact: props.contact },
              }}
            >
              <button className="ui button blue">Update</button>
            </Link>
          </td>
          <td>
            <Link
              to={{
                pathname: `/delete/${id}`,
                state: { contact: props.contact },
              }}
            >
              <button className="ui button red">Delete</button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ContactCard;
