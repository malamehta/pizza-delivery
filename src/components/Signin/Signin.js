import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import './Signin.css'

function Signin() {
    const Navigate=useNavigate();

    const[inpval,setInpval]=useState({
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

        const getuserArr=localStorage.getItem("userDetail");
        // console.log(getuserArr);
        const {email,password}=inpval;
        if(email===""){
            alert("email field required");
        }else if(!email.includes("@")){
            alert("please enter valid email address")
        }else if(password===""){
            alert("password field required")
        }else if(password.length<5){
            alert("password length should be greater than 5")
        }else{
            if(getuserArr && getuserArr.length){
                const userdata=JSON.parse(getuserArr);
                const userlogin=userdata.filter((el,k)=>{
                    return el.email===email && el.password===password
                });
                // alert("login successful")
                if(userlogin.length===0){
                    alert("invalid details");
                }else{
                    alert("user login susseful")
                    Navigate("/Menu")
                    localStorage.setItem("_token", "true")
                }
            }
            
        }

    }
  return (
    <>
        <>
            <section className='signup'>
                <div className='content'>
                <h1 className='heading'>Signin</h1>
                    <form>
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
                        <button type="submit" onClick={addData} className='btn'>Signin</button>      
                       
                    </form>
                </div>

            </section>
        </>
    </>
  )
}

export default Signin;