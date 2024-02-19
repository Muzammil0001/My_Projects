import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './form.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import formSchema from './formSchema';



const Form = () => {


    //fetching useNavigate functionalities to a variable for  further use 
    const navigate = useNavigate();

    // States here
    const [data, setData] = useState(GetLocalData); //Data state
    const [searchQuery, setSearchQuery] = useState('');//Search state
  

    // Submission event
    const { values, onSubmit, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: { name: "", email: "" },
        validationSchema: formSchema,
        onSubmit: (value, action) => {
            setData([...data, value]);
            action.resetForm();
        }
    });

    //Deletion of Record
    const deleteItem = (index) => {
        const updatedData = data.filter((element, i) => i !== index);
        setData(updatedData);
        localStorage.setItem('inputsValue', JSON.stringify(updatedData));
    };


    const navigateToUpdate = (index) => {

        // Navigate to the update page and pass the index as a URL parameter
        navigate(`/update/${index}`);

    };
    // Pass record to View page
    const navigateToView = (index) => {

        // Navigate to the update page and pass the index as a URL parameter
        navigate(`/view/${index}`);
    };

    // Search input Event handle
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter/Search data function
    const filteredData = data.filter((item) => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        return (
            item.name.toLowerCase().includes(lowerCaseSearchQuery) ||
            item.email.toLowerCase().includes(lowerCaseSearchQuery)
        );
    });
    // console.log(filteredData)
    // Set Local Storage Data on each time when data update
    useEffect(() => {
        localStorage.setItem('inputsValue', JSON.stringify(data));

    }, [data]);

    return (
        <div className="contact">
            <section className="contact_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center pb-5">
                            <h2 className="section_title">Get in Touch</h2>
                            <p className="section_subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magni tempore fugiat, possimus accusamus
                                aliquam facilis consequuntur itaque veritatis quos!
                            </p>
                        </div>
                        <div className="col-12 contact_form">
                            <div className="row">
                                <div className="col-lg-7 mb-5">
                                    <div className="row g-3">

                                        <form onSubmit={handleSubmit}>
                                            <div className="col-md-6 mb-4">
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
                                            <div className="col-md-6 mb-4">
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

                                            <div className="col-12 mb-4">
                                                <button className="btn main_btn" type='submit' >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>


                                <div className="col-lg-5 mb-5">
                                    <div className="content_box ms-sm-5">

                                        <h4 className=' text-center py-1'>Records</h4>
                                        {/* search input */}


                                        <div className="col-lg-12">
                                            <div className="row g-3">
                                                <div className="col-12 mb-4">
                                                    <input
                                                        className="form_control  bg-secondary text-light"
                                                        type="text"
                                                        placeholder="Search..."
                                                        value={searchQuery}
                                                        onChange={handleSearch}

                                                    />
                                                </div>


                                            </div>
                                        </div>

                                        {/* filteredData for mapping */}

                                        {filteredData.map((item, index) => (
                                            <div className='mx-2 bg-dark' key={index}>

                                                <div className="resultEditIcon">


                                                    <i onClick={() => navigateToView(index)}
                                                        className="fa fa-eye" aria-hidden="true"
                                                        key={index}>
                                                    </i>


                                                    <i
                                                        onClick={() => navigateToUpdate(index)}
                                                        className="fa fa-pencil-square-o"
                                                        key={index}>
                                                    </i>

                                                    <i
                                                        onClick={() => deleteItem(index)}
                                                        className="fa fa-trash"
                                                        key={index}>
                                                    </i>

                                                </div >

                                                <div className="px-2 text-light">
                                                    <li key={index}>{`Name: ${item.name}`} </li>
                                                    <li key={index}>{`Email: ${item.email}`} </li>

                                                    <hr /></div>
                                            </div>
                                        ))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Get Local Storage Data
const GetLocalData = () => {
    const values = localStorage.getItem('inputsValue');
    return values ? JSON.parse(localStorage.getItem('inputsValue')) : [];
};

export default Form;
