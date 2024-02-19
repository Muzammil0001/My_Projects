import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import formSchema from '../Form/formSchema';


////Get Local Storage Data
const GetLocalData = () => {
    const values = localStorage.getItem("inputsValue")
    return values ? JSON.parse(values) : [];
}

const Update = () => {

    
    // GET id from path using params hooks
    const { id } = useParams();
    // GET localStored data into a state
    const [value, setValue] = useState(GetLocalData)
    // GET data from localStorage based on id
    const data = value[id];


    // // Input change event call
    // const inputChanges = (key, event) => {
    //     const newInputValues = [...value];
    //     newInputValues[id] = { ...data, [key]: event.target.value };
    //     setValue(newInputValues);
    //     console.log(value)

    // };

     // Formik initialization
  const{ values, onSubmit, handleSubmit, handleChange, handleBlur, errors, touched }  = useFormik({
    initialValues: { name: data.name, email: data.email },
    validationSchema: formSchema,
      onSubmit: (values) => {
        console.log(values)
      const newInputValues = [...value];
      newInputValues[id] = { ...data, ...values };
      setValue(newInputValues);
      localStorage.setItem('inputsValue', JSON.stringify(newInputValues));
    },
  });


    //  Update Event Call
    const UpdateFunc = () => {
        localStorage.setItem('inputsValue', JSON.stringify(value));

    };

    return (
        <div>
            <Link to="/home" className='btn' style={{ textDecoration: "underline", color: "blue" }}>Home</Link>
            <div className="contact">

                <section className="contact_sec">
                    <div className="container">

                        <div className="row">
                            <div className="col-12 text-center pb-5">

                                <h2 className="section_title">Update Your Data</h2>
                                <p className="section_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magni
                                    tempore fugiat, possimus accusamus aliquam facilis consequuntur itaque veritatis quos!</p>

                            </div>
                            <div className="col-12 contact_form" >
                                <form onSubmit={handleSubmit}>
                                    <div className="col-lg-10 mb-5">
                                        <div className=" g-3">


                                            {
                                                Object.keys(data).map((keyValue, index) => {
                                                    return <div className="col-md-10 mb-4 d-flex gap-3" key={index}>


                                                        <div className='col-md-6 col-12'>

                                                            <input
                                                                value={values[keyValue]}
                                                                touched
                                                                name={keyValue}
                                                                onChange={handleChange}
                                                                type="text"
                                                                className="form_control"
                                                                required
                                                                onBlur={handleBlur}
                                                            />
                                                            <span>{errors[keyValue]}</span>
                                                        </div>

                                                    </div>

                                                })

                                            }

                                            <div className="col-12 mb-4">
                                                <button type='submit' onSubmit={handleSubmit} className="btn main_btn">Update</button>

                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>)

}

export default Update