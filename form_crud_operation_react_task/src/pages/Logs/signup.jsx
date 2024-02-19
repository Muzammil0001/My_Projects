import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useFormik } from 'formik';
import formSchema from '../Form/formSchema';




const Signup
 = ({data, setData,setSelect}) => {

console.log(data)
    //fetching useNavigate functionalities to a variable for  further use 
    const navigate = useNavigate();


    // Submission event
    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: { name: "", email: "" },
        validationSchema: formSchema,
        onSubmit: (value, {resetForm}) => {
            
            // Check data undefined or not
            if (data !== undefined) {

                // Check if the email already exists in the data array
                const emailExists = data.some(item => item.email === value.email);
    
                if (emailExists) {
                    // If email already exist, show the alert/error massage
                    alert('Email already exists. Please use a different email.');
                } else {
                    // If email doesn't exist, add the new data to the state array
                    const lowerCaseValues = { name: value.name.toLowerCase(), email: value.email.toLowerCase() }
                    
                    setData([...data, lowerCaseValues]);
                    resetForm();
                    alert(`${value.name} You have signed up successfully!`)
                    // Redirect to the login page after successful signup
                    navigate("/")
                    console.log("Data", data)
                }
            }
        }
        
    });

   

    return (
        <div className="contact">
            <section className="contact_sec">
                <div className="container">
                    <div className="d-flex justify-content-center mt-5">
                        <div className="col-12 col-md-6 text-center pb-5">
                            <h2 className="section_title">Sign Up</h2>
                            <p className="section_subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        </div>

                        <div className=" d-flex justify-content-center">
                        <div className="col-12 col-md-6 contact_form d-flex justify-content-center">
                        <div className="col-10 col-lg-8 mb-5">
                    

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
                                        <p>Already you've account? <Link to="" onClick={()=>setSelect(true) }>Sgin In</Link></p>
                                    </div>
                                <div className="col-12 mb-4">
                                    <button className="btn main_btn" type='submit' >
                                        Sign Up
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


export default Signup
;
