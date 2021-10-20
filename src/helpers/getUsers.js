import axios from "axios"


export const getUsers  = async() => {
  const res = await axios({
    method:"GET",
    baseURL:"http://localhost:9000/Api/v1/users"
  });
  return(res)
}

export const createANewUser  = async(user) => {
  const res = await axios({
    method:"POST",
    data:user,
    baseURL:"http://localhost:9000/Api/v1/users"
  });
  return(res)
}

export const updateANewUser  = async(user) => {
  const res = await axios({
    method:"PUT",
    data:user,
    baseURL:`http://localhost:9000/Api/v1/users/${user.id}`
  });
  return(res)
}

export const deleteAUser  = async(id) => {
  const res = await axios({
    method:"DELETE",
    baseURL:`http://localhost:9000/Api/v1/users/${id}`
  });
  return(res)
}