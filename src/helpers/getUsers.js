import axios from "axios"


export const getUsers  = async() => {
  const res = await axios({
    method:"GET",
    baseURL:"https://wal-node-mysql-users.herokuapp.com/Api/v1/users"
  });
  return(res)
}

export const createANewUser  = async(user) => {
  const res = await axios({
    method:"POST",
    data:user,
    baseURL:"https://wal-node-mysql-users.herokuapp.com/Api/v1/users"
  });
  return(res)
}

export const updateANewUser  = async(user) => {
  const res = await axios({
    method:"PUT",
    data:user,
    baseURL:`https://wal-node-mysql-users.herokuapp.com/Api/v1/users/${user.id}`
  });
  return(res)
}

export const deleteAUser  = async(id) => {
  const res = await axios({
    method:"DELETE",
    baseURL:`https://wal-node-mysql-users.herokuapp.com/Api/v1/users/${id}`
  });
  return(res)
}