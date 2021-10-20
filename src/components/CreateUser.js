import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";


const CreateUser = ({ handleSubmit, register, handleCreateUser}) => {
  const [modal, setModal] = useState(false)

  
  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }
  return (
    <>
    <Button color="info" id="newT" onClick={() => {
          showModal();
        }}>Insert New User</Button>
        <br />
        <br />

        
      <Modal isOpen={modal}>
        <ModalHeader>
          <div>
            <h3>Insert New User</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <form id="createUser" onSubmit={handleSubmit(handleCreateUser)}>
            <label>Firstname:</label>
            <input className="form-control" name="firstname" type="text" {...register("firstname", {required: true})} />
            <label>Lastname:</label>
            <input className="form-control" name="lastname" type="text"  {...register("lastname", {required: true})} />
            <label>Age:</label>
            <input className="form-control" name="age" type="number" {...register("age", {required: true})} />
          </form>

        </ModalBody>

        <ModalFooter>
          <Button color="primary" type="submit" form="createUser" onClick={() =>{closeModal();}}>Submit</Button>
          <Button color="danger" onClick={() =>{closeModal();}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CreateUser