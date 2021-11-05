import React, { useState } from "react";
import './signup.styles.scss';
import Layout from '../../components/shared/layout';
import '../../App.scss';
import { Formik } from 'formik';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { registerValidator } from "../../Validator/validateForm";
import service from "../../services/authentitication.service";


const Signup = () =>{

  const [message, setMessage] = useState();
  const [errors, setErrors] = useState({});
  const [registerForm, setRegisterForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = registerValidator(registerForm);
    setErrors(errors);

    if (Object.keys(errors).length === 0)
      service.register(registerForm).then(
        (res) => {
          if (res.message) history.push("/verifyAccount");
          else {
            setMessage(res.message);
          }
        },
        (error) => {
          const resMessage = message.error.message;

          setMessage(resMessage);
        }
      );
  };
      
    return (
        <Layout>
       <div className='sign-up'>
           <h1>Sign Up</h1>
           <div className='form-container'>
               <Formik>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                type='text'
                                name='firstname'
                                placeholder='First Name'
                                className=' noname-input'
                                onChange={handleChange}
                                />
                            </div>

                            <div>
                                <input
                                type='text'
                                name='lastname'
                                placeholder='Last Name'
                                className=' noname-input'
                                onChange={handleChange}
                                />
                            </div>

                            <div>
                                <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='noname-input' 
                                onChange={handleChange}
                                />
                                

                            </div>

                            <div>
                                <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                className=' noname-input'
                                onChange={handleChange}
                                />

                            </div>

                            <div>
                                <input
                                type='Password'
                                name='passwordConfirm'
                                placeholder='Password Confirmation'
                                className='noname-input'
                                onChange={handleChange}
                                />
                            </div>

                            <div className='submit-btn'>
                                <button
                                type='submit'
                                className='button is-black noname-btn submit'
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className='error-message'>             
                            </div>

                            <div>
                                <Link to='login'  className='disc'>
                                    Already have an account? Log In
                                </Link> 
                            </div>
                            
                        </form>
               </Formik>
           </div> 
           </div>
        </Layout>
    )
}


export default withRouter(Signup);