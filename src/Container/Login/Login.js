import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { signInAction } from '../../Redux/Action/Auth.Action';
import { useDispatch } from 'react-redux';

function Login(props) {

    const [user, setUser] = useState("Login");
    const [reset, setReset] = useState("false");

    let schemaObj, initVal;

    if (user === "Login") {
        schemaObj = {
            email: yup.string().requried("Please Enter Your Email ID").email("Please Enter Your Valid Email ID"),
            password: yup.string().requried("Plaese Enter Your Password")
        }
        initVal = {
            email: '',
            password: ''
        }
    } else if (user === "Signup") {
        schemaObj = {
            name: yup.string().requried("Please Enter Your Name"),
            email: yup.string().requried("Please Enter Your Email ID").email("Please Enter Your Valid Email ID"),
            password: yup.string().requried("Please Enter Your Password")
        }
        initVal = {
            name: '',
            email: '',
            password: ''
        }
    } else if (reset === "true") {
        schemaObj = {
            email: yup.string().requried("Please Enter Your Email ID").email("Please Enter Your Valid Email ID")
        }
        initVal = {
            email: ''
        }
    }

    let schema = yup.object().shape(schemaObj);

    const dispatch = useDispatch();

    const insertData = (values) => {
        let LocalData = JSON.parse(localStorage.getItem("user"));

        if (LocalData === null) {
            localStorage.setItem("user", JSON.stringify([values]));
        } else {
            LocalData.push(values);
            localStorage.setItem("user", JSON.stringify(LocalData));
        }

        console.log(values);
        // dispatch(signUpAction(values))
    }

    const handleLogin = (values) => {
        localStorage.setItem("user", "123");
        dispatch(signInAction(values))
    }

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onsubmit: values => {
            if (user === "Login") {
                handleLogin(values);
            } else {
                insertData(values);
            }
        },

        enableReinitialize: true
    });

    const { handleChange, handleSubmit, handleBlur, errors, touched } = formik;

    return (
        <main id="main">
            <section className="breadcrumb_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner">
                                {
                                    reset === "true"
                                        ?
                                        <h2>Forgot Password</h2>
                                        :
                                        user === "Login"
                                            ?
                                            <h2>login</h2>
                                            :
                                            <h2>Sign Up</h2>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login_part section_padding ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_text text-center">
                                <div className="login_part_text_iner">
                                    <h2>New to our Shop?</h2>
                                    <p>There are advances being made in science and technology
                                        everyday, and a good example of this is the</p>
                                    <a href="#" className="btn_3">Create an Account</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>Welcome Back ! <br />
                                        Please Sign in now</h3>
                                    <Formik values={formik}>
                                        <Form onsubmit={handleSubmit} className="row contact_form" action="#" method="post" noValidate="novalidate">
                                            {
                                                reset === "true"
                                                    ?
                                                    null
                                                    :
                                                    user === "Login"
                                                        ?
                                                        null
                                                        :
                                                        <div className="col-md-12 form-group p_star">
                                                            <input type="text" className="form-control" id="name" name="name" defaultValue placeholder="Username" onChange={handleChange} onBlur={handleBlur} />
                                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                                        </div>
                                            }
                                            {
                                                reset === "true"
                                                    ?
                                                    null
                                                    :
                                                    <div className="col-md-12 form-group p_star">
                                                        <input type="password" className="form-control" id="password" name="password" defaultValue placeholder="Password" onChange={handleChange} onBlur={handleBlur} />
                                                        <p>{errors.name && touched.name ? errors.name : ''}</p>
                                                    </div>
                                            }

                                            <div className="col-md-12 form-group">
                                                <div className="creat_account d-flex align-items-center">
                                                    <input type="checkbox" id="f-option" name="selector" />
                                                    <label htmlFor="f-option">Remember me</label>
                                                </div>
                                                {
                                                    reset === "true"
                                                        ?
                                                        <button type="submit">Submit</button>
                                                        :
                                                        user === "Login"
                                                            ?
                                                            <button type="submit">Login</button>
                                                            :
                                                            <button type="submit">Sign UP</button>
                                                }
                                                {
                                                    user === "Login"
                                                        ?
                                                        <p></p>

                                                    :
                                                        <button onClick={() => { setReset("false"); setUser("Login") }} type="submit" value="submit" className="btn_3">
                                                            Login
                                                        </button>
                                                }
                                                <a className="lost_pass" href="#" onClick={() => setReset("true")}>forget password?</a>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >

    );
}

export default Login;