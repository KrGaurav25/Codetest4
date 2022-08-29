import React, { useContext } from 'react'
import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AuthApi from './AuthApi'

function Login() {
    
    const {email, setemail}=useState("")
    const {password, setpassword}=useState("")
    const submithandler=(e)=>{
        e.preventDefault()
        let data={email,password}
        fetch("http://localhost:8000/home/users",{
            methpd:"POST",
            headers:{
                'Accept':'application/json',
                'Contact-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>{
            // console.warn("res",res)
            res.json().then((resp)=>{
                console.warn("resp",resp);
                sessionStorage.setItem('token',resp)
            })
        })
        // console.log(name,email,password)
    }
    return (
        <div style={{backgroundColor:"red", marginLeft:"25rem", marginRight:"25rem", borderRadius:"5px"}}>
            <Form onSubmit={submithandler} style={{backgroundColor:"wheat", marginTop:'5rem', marginLeft:"5rem", marginRight:"5rem", border:"5px solid red", borderRadius:"10px", padding:"1rem", height:"22rem"}}>
            <h1>Login Form</h1>
                <Form.Control onChange={(e)=>{setemail(e.target.value)}} style={{marginTop:"3rem"}} className='email-input' type='text' placeholder='Enter email' name='email' id='email' />
                <Form.Control onChange={(e)=>{setpassword(e.target.value)}} style={{marginTop:"3rem"}} className='password-input' type='password' placeholder='Enter Password' name='password' id='password' />
                <Button style={{marginTop:"3rem"}} className='submit-button' value='submit' type='submit'>Register</Button>
            </Form>
            <Link style={{marginTop:"1rem"}} to='/register' className='btn btn-success'>Signup</Link>
            <Link style={{marginTop:"1rem", marginLeft:"0.3rem"}} to='/user/dashboard' className='btn btn-success'>userdashboard</Link>
            <Link style={{marginTop:"1rem", marginLeft:"0.3rem"}} to='/admin/dashboard' className='btn btn-success'>admindashboard</Link>
        </div>
    )
}

export default Login