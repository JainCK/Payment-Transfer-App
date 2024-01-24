import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'


const SignUp = () => {

    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName:'',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }


  return (
    <div>SignUp</div>
  )
}

export default SignUp