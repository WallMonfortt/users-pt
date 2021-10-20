import Swal from 'sweetalert2';
import { types } from "../types/types";
import { createANewUser, deleteAUser, getUsers, updateANewUser } from "../helpers/getUsers"

export const startgetUsers = () =>{
  return async(dispatch) =>{
    const users = await getUsers();
    dispatch(setUsers(users.data));
  };
};

export const setUsers = (users) =>({
  type: types.getAllUsers,
  payload: users
});

export const createNewUser = (user) => {
  return async(dispatch) =>{
    await createANewUser(user)
    dispatch(startgetUsers());
    Swal.fire('saved',user.firstname,'success')
  };
};

export const getUserById = (id,firstname,lastname,age) => ({
  type: types.getUserById,
  payload:{
    id:id,
    firstname:firstname,
    lastname:lastname,
    age:age
  }
});

export const UpdateAUser = (user) => {
  return async(dispatch) =>{
    await updateANewUser(user)
    dispatch(startgetUsers());
    Swal.fire('Update',user.firstname,'success')
  };
};


export const deleteUser= (id) =>{
  return async(dispatch)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        await deleteAUser(id)
        .then(()=>{
          dispatch( startgetUsers());
          Swal.fire(
            'Deleted!',
            'User has been deleted.',
            'success'
            )
          })
        .catch( e => {
          Swal.fire('Error', e.message, 'error');
        });
      }
    });
  }
}