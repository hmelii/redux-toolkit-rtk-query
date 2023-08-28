import React from 'react'
import { useSelector } from 'react-redux'
import useActions from '../../hooks/useActions'
const User = () => {
  const { loading, error, user } = useSelector(({ user }) => user)
  const { getUserById } = useActions()
  return (
    <div>
      <button onClick={() => getUserById(1)}>Get User</button>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : user.name ? (
        <h1>User: {user.name} </h1>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  )
}
export default User
