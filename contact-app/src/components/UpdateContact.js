import React from "react";
import { Link } from "react-router-dom";
import { ConfirmationDialogue } from "../utils/alerts";


class UpdateContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, fullName, email, number, location, regDate } =
      props.location.state.contact;
      const name = fullName.split(' ');
      const firstName = fullName.substring(name[0].length);
      const lastName = name[0];
      const newfullName = lastName +', '+ firstName +'.';
      const uid = this.props.location.pathname.split('/')[2];
    this.state = {
      id,
      fullName,
      email,
      number,
      location,
      regDate,
      newfullName,
      uid
    };
  }
  state = {
    fullName: "",
    email: "",
    number: "",
    location: "",
    regDate: "",
    newfullName: "",
    uid: ""
  };
  
  update = (e) => {
    const format = /^[aA-zZ\s]+$/;
    // eslint-disable-next-line
    const emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    e.preventDefault();
    // if (this.state.fullName === "") {
    //   alert("Full Name cannot not be blank.");
    //   return;
    // } else if (!format.test(this.state.fullName)) {
    //   alert("Full Name should not contain any number or special character.");
    //   return;
    // } else
    if (this.state.email === "") {
      alert("Email cannot be blank.");
      return;
    } else if (!emailVal.test(this.state.email)) {
      alert("Email is not valid, should have a valid domain.");
      return;
    } else if (this.state.number === "") {
      alert("Contact Number cannot be blank.");
      return;
    } else if (this.state.number.length > 11) {
      alert("Contact Number should be <= 11 digits.");
      return;
    } else if (format.test(this.state.number)) {
      alert("Contact Number should have numeric values only.");
      return;
    } else if (this.state.location === "") {
      alert("Location cannot be blank.");
      return;
    } 
    // else if (this.state.regDate === "") {
    //   alert("Registered Date should not be blank.");
    //   return;
    // }

    let emsg = " Email: " + this.state.email;
    let nmsg = " Number: " + this.state.number
    let lmsg = " Location: " + this.state.location
    
    ConfirmationDialogue(
      "Are you sure you want to update the following?", emsg, nmsg, lmsg,
      "Yes",
      "No",
      () => {
        this.props.updateContactHandler(this.state);
        this.setState({
          fullName: "",
          email: "",
          number: "",
          location: "",
          regDate: "",
        });
        this.props.history.push("/");
        // window.location.reload();
      }
    );
  };
  render() {
    return (
      <div className="ui main">
        <br></br>
        <br></br>
        <h2>Update Contact</h2>
        <form className="ui form" onSubmit={this.update}>
        <div className="field">
            <label>ID</label>
            <input
              type="text"
              name="id"
              disabled
              // onChange={(e) => this.setState({ fullName: e.target.value })}
              value={this.state.uid}
            />
          </div>
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              disabled
              // onChange={(e) => this.setState({ fullName: e.target.value })}
              value={this.state.newfullName}
            />
          </div>

          <div className="field">
            <label>Email Address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@email.com"
              maxLength="45"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Contact Number</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="99999999999"
              maxLength="11"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Location</label>
            <select
              name="location"
              id="location"
              value={this.state.location}
              onChange={(e) => this.setState({ location: e.target.value })}
            >
              <option value="" >
                Select Location
              </option>
              <option value="Cebu">Cebu</option>
              <option value="Manila">Manila</option>
            </select>
          </div>

          <div className="field">
            <label>Registered Date</label>
            <input
              type="date"
              name="regDate"
              disabled
              value={this.state.regDate}
              onChange={(e) => this.setState({ regDate: e.target.value })}
            />
          </div>
          <Link to="/">
            <button className="ui button blue right">Back</button>
          </Link>
          <button className="ui button green">Save</button>
        </form>
      </div>
    );
  }
}

export default UpdateContact;
