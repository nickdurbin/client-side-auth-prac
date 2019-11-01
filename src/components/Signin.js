import React, { useState } from 'react';
import api from '../utils/api'

function Signin(props) {
  const [error, setError] = useState()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api().post('/signin', data)
      .then(res => {
        localStorage.setItem("token", res.data.token)
      })
      .catch(err => {
        setError(err.response.data.message)
      })
  }

  return (
    <form  onSubmit={handleSubmit}>
      {error && <div className='error'>{error}</div>}
      <input 
      type='email' 
      name='email' 
      placeholder='Email'
      value={data.email}
      onChange={handleChanges}
      />

      <input 
      type='password' 
      name='password' 
      placeholder='Password'
      value={data.password}
      onChange={handleChanges}
      />

      <button type='submit'>
        Signin
      </button>
    </form>
  )
}

export default Signin;