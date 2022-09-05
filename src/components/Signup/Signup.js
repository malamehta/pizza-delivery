import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'

function Signup() {
    const history=useNavigate();

    const[inpval,setInpval]=useState({
        username:"",
        email:"",
        password:""

    })

    const [data,setData]=useState([]);
    // console.log(inpval)

    const getdata=(e)=>{
        // console.log(e.target.value)
        const{value,name}=e.target;

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })

    }

    const addData=(e)=>{
        e.preventDefault();
        // console.log(inpval)
        const {username,email,password}=inpval;
        
        if(username===""){
            alert("name field required");
        }else if(email===""){
            alert("email field required");
        }else if(!email.includes("@")){
            alert("please enter valid email address")
        }else if(password===""){
            alert("password field required")
        }else if(password.length<5){
            alert("password length should be greater than 5")
        }else{
            alert("signup successfull ")
            localStorage.setItem("userDetail",JSON.stringify([...data,inpval]));
            history("/signin")
        }

    }
  return (
    <>
        <>
            <section className='signup'>
                <div className='content'>
                <h1 className='heading'>Signup</h1>
                    <form>
                        <input
                            type="text"
                            placeholder='Enter user Name'
                            name='username'
                            onChange={getdata}
                        />
                        <input 
                            type="text"
                            placeholder='Enter Email'
                            name='email'
                            onChange={getdata}
                        />
                        <input 
                            type="password"
                            placeholder='Enter password'
                            name='password'
                            onChange={getdata}
                        />
                        <button type="submit" onClick={addData} className='btn'>Signup</button>      
                       
                    <p className='already'>Already have an account<Link to={'/signin'}>Login</Link></p>
                    </form>
                </div>

            </section>
        </>
    </>
  )
}

export default Signup;