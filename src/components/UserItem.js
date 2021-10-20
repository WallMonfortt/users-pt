import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { UpdateUser } from './UpdateUser'
import {getUserById} from '../actions/users'

export const UserItem = ({id,firstname,lastname,age,handleDelete}) => {
  const dispatch = useDispatch()
  const[modal, setModal] = useState(false);
  
  const handleUpdate =(id,firstname,lastname,age) =>{
    dispatch(getUserById(id,firstname,lastname,age));
    setModal(true)
  }
  return (
    
    <>
    <tr className="tableCont-gral">
      <td className="tableCont">{firstname}</td>
      <td className="tableCont">{lastname}</td>
      <td className="tableCont">{age}</td>
      <td>
        <Button color="primary" onClick={()=>{
          handleUpdate(id, firstname, lastname, age)
        }}>Update</Button>
      </td>
      <td>
        <Button color="danger" onClick={()=>{
          handleDelete(id)}} >Delete</Button>
      </td>
    </tr>
    <UpdateUser modal={modal} setModal={setModal} id1={id} firstname1={firstname} lastname1={lastname} age1={age} />
    </>
    
  )
}
