import React, { useState } from "react";
import Layout from '../shared/layout';
import { Formik } from 'formik';
import './login.styles.scss';
import { Link, withRouter, useHistory} from 'react-router-dom';
import { loginValidator } from "../../Validator/validateForm";
import service from "../../services/authentitication.service";



const ForgetPassword = () => {

    const [message, setMessage] = useState();
    const [errors, setErrors] = useState({});
    const [registerForm, setRegisterForm] = useState({
      email: "",
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
  
        service.forgetPassword(registerForm).then(
          (res) => {
            if (res.message) history.push("/resetPassword");
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
            <div className='card'>    
             <div className='log-in'>
            <h1>Reset your password</h1>
            
            <div className='container'>
                <Formik >
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <h6>
                                        Enter your user account's email address and we will send you a password reset code.
                                    </h6>
                                    <br></br>
                                    <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email address'
                                    className='noname-input'
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className='submit-btn'>
                                <button
                                type='submit'
                                className='button is-black noname-btn submit'
                                >
                                    Send password reset code
                                </button>
                                </div>
                            </form>
                </Formik>
            </div>
            </div>
            </div>
        </Layout>       
    );    
}

export default withRouter(ForgetPassword);
