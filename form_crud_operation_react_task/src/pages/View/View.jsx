import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';


////Get Local Storage Data
const GetLocalData = () => {
    const values = localStorage.getItem("inputsValue")
    return values ? JSON.parse(values) : [];
}

const View = () => {
    // GET id from path using params hooks
    const { id } = useParams();
    // GET data from localStorage based on id 
    const data = GetLocalData()[id];


    return (
        <div>
            <Link to="/home" className='btn' style={{ textDecoration: "underline", color: "blue" }}>Home</Link>
            <div className="contact">

                <section className="contact_sec">
                    <div className="container">

                        <div className="row">
                            <div className="col-12 text-center pb-5">

                                <h2 className="section_title">View Your Data</h2>
                                <p className="section_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magni
                                    tempore fugiat, possimus accusamus aliquam facilis consequuntur itaque veritatis quos!</p>

                            </div>
                            <div className="col-12 contact_form" >
                                <div >
                                    <div className="col-lg-10 mb-5">
                                        <div className=" g-3">


                                            {
                                                Object.keys(data).map((keyValue, index) => {
                                                    return <div className="col-md-10 mb-4 d-flex gap-3" key={index}>


                                                        <div className='col-md-6 col-12'>

                                                            <input
                                                                value={data[keyValue]}
                                                                type="text"
                                                                className="form_control"
                                                                required
                                                            />
                                                        </div>

                                                    </div>

                                                })

                                            }





                                            <div className="col-12 mb-4">


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>)

}

export default View