import React, { useState } from "react";
import Layout from '../shared/layout';
import { Formik } from 'formik';
import './login.styles.scss';
import { Link, withRouter, useHistory} from 'react-router-dom';
import { loginValidator } from "../../Validator/validateForm";
import service from "../../services/authentitication.service";



const LogIn = () => {

  const [message, setMessage] = useState();
  const [errors, setErrors] = useState({});
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = loginValidator(loginForm);
    setErrors(errors);

    if (Object.keys(errors).length === 0)
      service.login(loginForm.email, loginForm.password).then(
        (res) => {
          if (res) {
            if(res.status == 0){
              alert("failed")
            }else{
              if (res.role === "ROLE_USER") history.push("/home");
              else history.push("/dashboard");
            }
          } else setMessage("Bad Request");
        },
        (error) => {
          const resMessage = error.toString();

          setMessage(resMessage);
        }
      );
  };
   
    return (

        <Layout>
            <div className='card'>
             <div className='log-in'>
            <h1>Log In</h1>
            <div className='container'>
                <Formik >
               
                            <form onSubmit={handleSubmit} >
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
                                    className='noname-input'
                                    onChange={handleChange}
                                    />
                                </div>

                                <div className='submit-btn'>
                                    <button
                                    type='submit'
                                    className='button is-black noname-btn submit'
                                    >
                                        Log In
                                    </button>
                                </div>

                                <div className='error-message'>
                                </div>

                                <div>
                                  <Link to='/forgetPassword'  className='disc'>
                                        Forgot Password ?
                                  </Link>
                                  <Link to='signup'  className='disc'>
                                        Need an account? Sign Up
                                  </Link>
                                </div>
                            </form>
                </Formik>
            </div>

            </div>
            </div>
        </Layout>
        
    ) 
    
}

export default withRouter(LogIn);
