import React, { useState } from "react";
import './signup.styles.scss';
import Layout from '../shared/layout';
import '../../App.scss';
import { Formik } from 'formik';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { registerValidator } from "../../Validator/validateForm";
import service from "../../services/authentitication.service";


const VerifyAccount = () => {

  const [message, setMessage] = useState();
  const [errors, setErrors] = useState({});
  const [registerForm, setRegisterForm] = useState({
    token: "",
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

      service.verification(registerForm).then(
        (res) => {
          if (res.message) history.push("/home");
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
           <h1>Confirm Account</h1>
           <div className='form-container'>
               <Formik>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h6>Email has been sent, kindly activate your account.</h6>
                                <br></br>
                                <input
                                type='text'
                                name='token'
                                placeholder='Enter your verification code'
                                className=' noname-input'
                                onChange={handleChange}
                                />
                            </div>

                            <div className='submit-btn'>
                                <button
                                type='submit'
                                className='button is-black noname-btn submit'
                                >
                                    Confirm
                                </button>
                            </div>

                            <div className='error-message'>             
                            </div>

                        </form>
               </Formik>
           </div> 
           </div>
        </Layout>

    );
}

export default withRouter(VerifyAccount);