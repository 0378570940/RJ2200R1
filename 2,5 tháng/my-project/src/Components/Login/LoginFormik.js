// import { Field, Formik, Form } from "formik";
// import React, { useState } from "react";

// function LoginFormik(props) {
//     const [login, setLogin] = useState({
//         account: "",
//         password: "",
//     })

//     const handleChange = (e) => {
//         setLogin({ ...login, [e.target.name]: e.target.value, })
//         console.log(login);
//     }

//     return (
//         <div className="container col-md-6">
//             <Formik>
//                 <Form>
//                     <p>Account:</p>
//                     <Field name="account" placeholder='Enter your name' value={login.account || ""} onChange={handleChange} ></Field>
//                     <p>Password:</p>
//                     <Field name="password" placeholder='Enter your password' value={login.password || ""} onChange={handleChange}></Field>
//                     <br></br>
//                     <button type="submit" className='btn btn-success mt-2' >Submit</button>
//                 </Form>
//             </Formik>
//         </div >
//     )
// }

// export default LoginFormik