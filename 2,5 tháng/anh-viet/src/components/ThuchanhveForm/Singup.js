import React, { Form, Fiels, useState } from "react";

function SingUp() {
    const [form, setForm] = useState(
        {
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
        }
    )

    const [error, setError] = useState(
        {
            username: "/^[a-zA-Z]{2,}$/",
            email: "/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/",
            password: "/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/",
        }
    )

    function hendlechange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
        // if (event.target.name === "password") {
        //     if (form.confirmpassword && form.confirmpassword.value) {
        //         event.target.value === form.confirmpassword.value ? "" : [event.target.name]
        //     }
        // }
    }

    function hendlesubmit() {
        alert(form && error ? "Sign in success!!!" : "Please fill out all the fields!!!");
    }
    return (
        <div className="Container text-center">
            <form>
                <p>UseName: </p>
                <input name='username' placeholder='Enter your name' value={form.username || ""} onChange={hendlechange}></input>
                <br />
                {error.username ? <span className="text-danger">{error.username}</span> : ""}
                <p>Email: </p>
                <input name='email' placeholder='Enter your email' value={form.email || ""} onChange={hendlechange}></input>
                <br />
                {error.email ? <span className="text-danger">{error.email}</span> : ""}
                <p>Password: </p>
                <input type='password' name='password' placeholder='Enter your Password' value={form.password || ""} onChange={hendlechange}></input>
                <br />
                {error.password ? <span className="text-danger">{error.password}</span> : ""}
                <p>ConfirmPassword: </p>
                <input type='password' name='confirmpassword' placeholder='Enter your ConfirmPassword' value={form.confirmpassword || ""} onChange={hendlechange}></input>
                <br />
                {error.confirmpassword ? <span className="text-danger">{error.confirmpassword}</span> : ""}
                <button className="btn btn-success mt-2" onClick={hendlesubmit}>Submit</button>
            </form>
        </div>
        // <Form>
        //     <Fiels name="Username" placeholder="Nhập tên "></Fiels>
        //     <Fiels name="Email" placeholder="Nhập email"></Fiels>
        //     <Fiels name="Password" placeholder="Nhập mặt khẩu" type="password"></Fiels>
        //     <Fiels name="Confirmpassword" placeholder="Nhập lại mặt khẩu" type="password"></Fiels>
        // </Form>
    )
}

export default SingUp;