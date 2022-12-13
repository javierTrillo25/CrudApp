import React from 'react'

  const UserCard = ({user, deleteUser, setUserUpdate, changeModal}) => {
  
    const handleChangeClickUpdate = () =>{
      setUserUpdate(user)
      changeModal()
    }

  return (
    <article className='user'>
      <h2 className='user_title' >{`${user.first_name} ${user.last_name}`}</h2>
    <ul className='user_list'>
      <li className='user_item'><span>Email</span>{user.email}</li>
      <li className='user_item'><span>Birthday</span>{user.birthday}</li>
    </ul>
    <div className='user_container-btn'>
      <button className='user_btn' onClick={() => deleteUser(user.id)}> 
    <i className='bx bxs-trash'></i>
    </button>
    <button className='user_btn'onClick={handleChangeClickUpdate}>
    <i className='bx bxs-edit'></i>
    </button>
    </div>
    </article>
  )
}

export default UserCard