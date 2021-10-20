import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startgetUsers } from '../actions/users';
import { ListContainer } from './ListContainer'

export const UsersMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startgetUsers())
  }, [dispatch]);

  return (
    <div className="users_App">
      <header className="users_App-header">
        <h1 className="title">Users List</h1>
      </header>
      <ListContainer />
    </div>
  )
}
