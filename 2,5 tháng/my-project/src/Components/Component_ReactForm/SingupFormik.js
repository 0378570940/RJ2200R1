import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const SingupFormik = () => {
    const [form, setForm] = useState(
        {
            name: "",
            phone: "",
            address: "",
        }
    )

    const validationSchema =
        Yup.object().shape({
            name: Yup.string().required("Name is required"),
            phone: Yup.string().required("Phone is required").min(10).max(12),
            address: Yup.string().required("Address is required").min(3),
        })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, })
        console.log(form);
    }
    return (
        <div className='container col-md-6'>
            <Formik
                initialValues={form}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={(e) => {
                    console.log(e);
                }}
            >
                <Form>
                    <p>Name: </p>
                    <Field name="name" placeholder='Enter your name' value={form.name || ""} onChange={handleChange}></Field>
                    <ErrorMessage name='name' component="div" className='text-danger'></ErrorMessage>
                    <p>phone: </p>
                    <Field name="phone" placeholder='Enter your phone' value={form.phone || ""} onChange={handleChange}></Field>
                    <ErrorMessage name='phone' component="div" className='text-danger'></ErrorMessage>
                    <p>Address: </p>
                    <Field name="address" placeholder='Enter your address' value={form.address || ""} onChange={handleChange}></Field>
                    <ErrorMessage name='address' component="div" className='text-danger'></ErrorMessage>
                    <br></br>
                    <button type="submit" className='btn btn-success mt-2' >Submit</button>
                </Form>
            </Formik>
        </div >
    )
}

export default SingupFormik