import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min';

const AddTechModal = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({
                html: 'Please enter a name and last name'
            })
        } else {
            console.log(firstName, lastName)
            // Clear fields
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id='add-tech-modal' className='modal'>
            <div className='modal-content'>
                <h4>New tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName}
                               onChange={firstNameHandler}/>
                        <label htmlFor="firstName" className='active'>
                            First name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName}
                               onChange={lastNameHandler}/>
                        <label htmlFor="lastName" className='active'>
                            Last name
                        </label>
                    </div>
                </div>

            </div>
            <footer>
                <div className='modal-footer'>
                    <a href="#!" onClick={onSubmit} className='modal-close waves-effect blue btn'>Enter</a>
                </div>
            </footer>
        </div>
    );
};


export default AddTechModal;