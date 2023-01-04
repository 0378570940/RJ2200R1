import React, { useState } from 'react'
const BasicForm = () => {
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    const [account, setAccount] = useState(
        {
            username: "",
            email: "",
            age: 0,
        }
    )
    const [error, setError] = useState(
        {
            username: "",
            email: "",
            age: 0,
        }
    )
    const [tem, setTem] = useState("")

    const handleChange = (e) => {
        // setUsername(e.target.value)
        // console.log(e.target.name);
        // console.log(e.target.value);
        if (e.target.name == "age") {
            if (isNaN(e.target.value)) {
                setError({ age: "Khong duoc nhap chu" })
            } else {
                setError({ ...error, age: "" })
                setAccount({
                    ...account, [e.target.name]: e.target.value
                })
            }
        } else {
            setAccount({
                ...account, [e.target.name]: e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        // gửi dữ liệu đi, nhưng ko loát lại
        e.preventDefault();
        // console.log(e);
        // setTem(e.target[0].value)
        console.log(account);
        if (isNaN(e.target[3].value)) {

        }
    }
    return (
        <div className='container col-md-6'>
            <form onSubmit={handleSubmit}>
                {account.username} - {account.email}
                <br></br>
                <input name='username' placeholder='Enter your' value={account.username || ""} onChange={handleChange}></input>
                <br></br>
                {error.username ? <span className>{error.username}</span> : ""}
                <input name='email' placeholder='Enter your email' value={account.email || ""} onChange={handleChange}></input>
                <br></br>
                {error.email ? <span className>{error.email}</span> : ""}
                <input name='age' placeholder='Enter your age' value={account.age || ""} onChange={handleChange}></input>
                <br></br>
                {error.age ? <span className>{error.age}</span> : ""}
                <input type='submit'></input>
            </form>
        </div>
    )
}
export default BasicForm

