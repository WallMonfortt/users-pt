import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from 'reactstrap';
import CreateUser from './CreateUser';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UserItem } from './UserItem';
import { createNewUser, deleteUser} from '../actions/users';


export const ListContainer = () => { 
  
  const {users} = useSelector(state => state.user);
    
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmitUser = (values) => {
    dispatch(createNewUser(values));
    reset();
  };


  const onDeleteUser=(id)=>{
    dispatch(deleteUser(id));
  }
 
  const list = users.map((value) => (
    <UserItem
      id={value.id}
      key={value.id}
      firstname={value.firstname}
      lastname={value.lastname}
      age={value.age}
      handleDelete = {onDeleteUser}
    />
  ));
  
  return (
    <div>
    <CreateUser
      handleSubmit={handleSubmit}
      register={register}
      handleCreateUser={onSubmitUser}
    />
      <Container>
        <Table>
          <thead>
            <tr className="tableHeader">
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </Table>
      </Container>
      
    </div>
  )
}
