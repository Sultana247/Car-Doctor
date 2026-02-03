import React, { useContext } from 'react';
import HeaderSecond from '../../Shared component/HeaderSecond';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../Provider/AuthContext';
const Login = () => {
    const location =useLocation()
   
    const {login}=useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password=form.password.value;
        login(email, password)
        .then(data=>{
            console.log(data.user)
            alert('Successfully logged in');
            navigate(location?.state? location.state : '/')
            e.target.reset()
        //     const user =data.user.email;
        //    axios.post('http://localhost:5000/jwt',{
        //     user 
        //    }, {withCredentials: true})
        //    .then(res=>{
        //     if(res.data.success){
        //         alert('Successfully logged in');
        //     navigate('/')
        //     e.target.reset()
            // }
        //    })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
       
           <div>
            <HeaderSecond></HeaderSecond>
            <div className='flex mt-35  justify-center items-center mb-20'>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co.com/20DQkVWS/Frame.png" alt="" className='' />
                </div>
                <div className='w-1/2 p-20 shadow-sm border-base-300 rounded-box border '>
                    <form onSubmit={handleLogin} >
                        <fieldset className="fieldset  ">
                        
                        <h2 className='dark-2 font-semibold text-[40px] text-center'>Login</h2>

                        <label className="label mt-5 font-semibold text-lg mb-3 dark-2">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Your Email" />

                        <label className="label mt-5 font-semibold text-lg mb-3 dark-2">Confirm Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Your Password" />

                        <button className="btn py-4 text-white font-semibold text-xl mt-4 primary-color">Login</button>
                    </fieldset>
                    </form>
                    <p className='mt-7 text-center'>Or Signin With </p>
                    <div className='flex justify-center gap-6 mt-7'>
                        <button className='btn btn-circle text-lg bg-[#F5F5F8] text-[#3B5998]'>
                            <FaFacebookF/>
                        </button>
                        <button className='btn btn-circle text-lg bg-[#F5F5F8] text-[#3B5998]'>
                            <FaLinkedinIn/>
                        </button>
                        <button className='btn btn-circle text-lg bg-[#F5F5F8] text-[#3B5998]'>
                            <FcGoogle/>
                        </button>
                    </div>
                    <p className='mt-12 text-center dark-3 text-lg'>Have an account? <Link to={'/signup'} className='primary-font'>Sign Up</Link></p>
                </div>
            </div>
        </div>
        
    );
};

export default Login;