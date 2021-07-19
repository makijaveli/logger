import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min';

const EditLogModal = () => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const techHandler = (e) => {
        setTech(e.target.value)
    }

    const attentionHandler = () => {
        setAttention(!attention);
    }

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({
                html: 'Please enter a message and tech'
            })
        } else {
            console.log(message, tech, attention)
            // Clear fields
            setTech('');
            setMessage('');
            setAttention(false);
        }
    }

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message}
                               onChange={messageHandler}/>
                        <label htmlFor="message" className='active'>
                            Log message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default'
                                onChange={techHandler}>
                            <option value="" disabled>
                                Select tech
                            </option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className='filled-in' checked={attention}
                                       value={attention}
                                       onChange={attentionHandler}/>
                                <span>Needs attention</span>
                            </label>
                        </p>
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

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default EditLogModal;