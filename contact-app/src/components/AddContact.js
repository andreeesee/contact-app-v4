import React from 'react';

const formatYmd = date => date.toISOString().slice(0, 10);
class AddContact extends React.Component{
    state = {
        fullName: '',
        email: '',
        number: '',
        location: '',
        regDate: '',
    };

    add = (e) => {
        const format =/^[aA-zZ\s]+$/;
        // eslint-disable-next-line
        const emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        e.preventDefault();
        if(this.state.fullName === ''){
            alert('Full Name cannot not be blank.');
            return;
        }else if(!format.test(this.state.fullName)){
            alert('Full Name should not contain any number or special character.');
            return;
        }else if(this.state.email === '' ){
            alert('Email cannot be blank.');
            return;
        }else if(!emailVal.test(this.state.email)){
            alert('Email is not valid, should have a valid domain.');
            return;
        }else if(this.state.number === '' ){
            alert('Contact Number cannot be blank.');
            return;
        }else if(this.state.number.length > 11 ){
            alert('Contact Number should be <= 11 digits.');
            return;
        }else if(format.test(this.state.number)){
            alert('Contact Number should have numeric values only.');
            return;
        }else if(this.state.location === ''){
            alert('Location cannot be blank.');
            return;
        }else if(this.state.regDate === ''){
            alert('Registered Date should not be blank.');
            return;
        }else if(this.state.regDate !== formatYmd(new Date())){
            alert('Registered Date should be current date.');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({fullName: '', email: '', number: '', location: '', regDate: ''});
        // this.props.history.push('/');
    }
    render(){
        return (
            <div className='ui main'>
                <br></br>
                <br></br>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Full Name</label>
                        <input type='text' name='fullName' maxLength='30' placeholder='Last Name <space> First Name <space> Middle Initial' onChange= { (e) => this.setState({fullName: e.target.value})} value={this.state.fullName} />
                    </div>

                    <div className='field'>
                        <label>Email Address</label>
                        <input type='text' name='email' placeholder='example@email.com' maxLength='45' value={this.state.email} onChange= { (e) => this.setState({email: e.target.value})} />
                    </div>

                    <div className='field'>
                        <label>Contact Number</label>
                        <input type='number' name='number' placeholder='99999999999' maxLength={11} value={this.state.number} onChange= { (e) => this.setState({number: e.target.value})}/>
                    </div>

                    <div className='field'>
                        <label>Location</label>
                        <select name='location' value={this.state.location} onChange= { (e) => this.setState({location: e.target.value})} >
                            <option value=' '>Select Location</option>
                            <option value='Cebu'>Cebu</option>
                            <option value='Manila'>Manila</option>
                        </select>
                    </div>

                    <div className='field'>
                        <label>Registered Date</label>
                        <input type='date' name='regDate' placeholder='Select Current Date' value={this.state.regDate} onChange= { (e) => this.setState({regDate: e.target.value})} />
                    </div>
                    <button className='ui button blue'>Add Contact</button>
                </form>
            </div>
        );
    }

}

export default AddContact;
