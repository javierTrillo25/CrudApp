
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const Base_URL= "https://users-crud.academlo.tech/"

function App() {
    const [users, setUsers] = useState()
    const [userUpdate, setUserUpdate] = useState()
    const [isShowForm, setIsShowForm] = useState()

    const getAllUsers = ()=>{
      const URL =`${Base_URL}users/`
      axios.get(URL)
      .then(res =>setUsers(res.data))
      .catch(err=> console.log(err))
    }

    const createUser= (data) =>{
      const URL =`${Base_URL}users/`
      axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        changeModal()
      })
      .catch(err=> console.log(err))
    }

    const deleteUser = (id) =>{
      const URL =`${Base_URL}users/${id}/`
      axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err=> console.log(err))

    }

    const updateUser=(id, data) =>{
      const URL =`${Base_URL}users/${id}/`
      axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserUpdate()
      })
      .catch(err=> console.log(err))

    }

    const changeModal =() =>{
      setIsShowForm(!isShowForm)
    }
    const handleClickNewUser =() =>{
      changeModal()
      setUserUpdate()
    }

    useEffect (() =>{
      getAllUsers()
    }, [])

  return (
    <div className="App">
      <div className='header-container'>
        <h1 className='header_title'>Crud Users</h1>
        <button onClick={handleClickNewUser} className='header-btn'> <i className='bx bxs-user-plus'></i> </button>
      </div>
      <FormUsers
      createUser={createUser}
      userUpdate={userUpdate}
      UpdateUser={updateUser}
      isShowForm={isShowForm}
      changeModal={changeModal}
      />
      <div className='user-container'>
        {
          users?.map(user =>(
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            changeModal={changeModal}
            />
          ))
        }

      </div>
      <h1></h1>
    </div>
  )
}

export default App
