import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import formSchema from '../Form/formSchema';




const Signin
    = ({ data, setSelect }) => {


        //fetching useNavigate functionalities to a variable for  further use 
        const navigate = useNavigate();

        // Submission event
        const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
            initialValues: { name: "", email: "" },
            validationSchema: formSchema,
            onSubmit: (value) => {

                const ExsitUser = data.find((item) => item.email === value.email.toLowerCase() && item.name === value.name.toLowerCase());

                if (ExsitUser) {
                    navigate("/home");
                }
                else {
                    alert("Incorrect username or email")
                }
            }
        });





        return (
            <div className="contact">
                <section className="contact_sec">
                    <div className="container">
                        <div className="d-flex justify-content-center mt-5">
                            <div className="col-6 text-center pb-5">
                                <h2 className="section_title">Sign In</h2>
                                <p className="section_subtitle">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>

                        <div className=" d-flex justify-content-center">
                            <div className="col-6 contact_form d-flex justify-content-center">
                                <div className="col-lg-8 mb-5">


                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-4">
                                            <input
                                                value={values.name}
                                                onBlur={handleBlur}
                                                name="name"
                                                onChange={handleChange}
                                                touched
                                                autoComplete='off'
                                                type="text"
                                                className="form_control"
                                                placeholder="Your name here"
                                            />
                                            {(errors.name && touched.name) ? <span>**{errors.name}</span> : null}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                value={values.email}
                                                name="email"
                                                onBlur={handleBlur}
                                                touched
                                                onChange={handleChange}
                                                type="email"
                                                autoComplete='off'
                                                className="form_control"
                                                placeholder="Your email here"
                                            />

                                            {(errors.email && touched.email) ? <span>**{errors.email}</span> : null}
                                        </div>
                                        <div className='text-center'>
                                            <p>Don't have account? <Link onClick={() => setSelect(false)} to="">Sgin Up</Link></p>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <button className="btn main_btn" type='submit' >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    };


export default Signin
    ;
