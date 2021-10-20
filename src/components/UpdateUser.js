import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { UpdateAUser } from '../actions/users';
import { useOwnForm } from '../hooks/useOwnForm';

export const UpdateUser = ({modal, setModal, id1,firstname1,lastname1,age1}) => {
  const dispatch = useDispatch();
  

  const [formValues, handleInputChange] = useOwnForm({
    id:id1,
    firstname:firstname1,
    lastname:lastname1,
    age:age1
  })

  const{id,firstname,lastname,age} = formValues;
  
  
  const handleUpdateUser = (e)=>{
    e.preventDefault();
    console.log(id);
    dispatch(UpdateAUser(formValues))
  }
  
  return (
    <>
      <Modal isOpen={modal}>
        <ModalHeader>
          <div>
            <h3>Update User</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleUpdateUser}>
            <label>Firstname:</label>
            <input className="form-control" name="firstname" value={firstname}  type="text" onChange={handleInputChange}  />
            <label>Lastname:</label>
            <input className="form-control" name="lastname" value={lastname} type="text" onChange={handleInputChange}  />
            <label>Age:</label>
            <input className="form-control" name="age" value={age} type="number" onChange={handleInputChange} />

        <ModalFooter>
          <Button color="primary" type="submit" onClick={() =>{setModal(false);}}>Submit</Button>
          <Button color="danger" onClick={() =>{setModal(false);}}>Cancel</Button>
        </ModalFooter>
          </form>

        </ModalBody>
      </Modal>
    </>
  )
}
