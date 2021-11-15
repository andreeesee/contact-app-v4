import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetails = (props) =>{
    const {fullName, email, number, location, regDate} = props.location.state.contact;
    const name = fullName.split(' ')
    const firstName = fullName.substring(name[0].length);
    const lastName = name[0];
    const date = regDate.split('-');
    const newRegDate = date[1] + '/' + date[2] + '/' + date[0];
    const uid = props.location.pathname.split('/')[2];
    // console.log(newRegDate);
    return(
        <div className='main'>
            <br></br>
            <br></br>
            <h1>View Contact</h1>
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
            <div className='center-div'>
                <Link to='/'> <button className='ui button blue right'>Back</button></Link>
            </div>
            <br></br>
        </div>
    );
};
export default ContactDetails;
