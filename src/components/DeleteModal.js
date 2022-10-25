import React from 'react';
import Modal from 'react-modal';

export default (props) => (
    <Modal
    isOpen={props.visibility}
    onRequestClose={() =>{props.onRemoveConfirm(false)}}
    contentLabel="confermation"
    closeTimeoutMS={250}
    className='modal'
    >
    <p>Are you sure you want to delete this expense :</p>
        <div>
            <button className='btn btn-third' onClick={() =>{props.onRemoveConfirm(true)}}>Delete</button>
            <button className='btn btn-secondry' onClick={() =>{props.onRemoveConfirm(false)}}>cancel</button>
        </div>
    </Modal>
)



