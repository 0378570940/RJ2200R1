import React, { useState } from "react";
import LoginAPI from "../../API/Login";
export const LoginForm = (props) => {
    const [logins, setLogins] = useState({
        username: "",
        password: ""
    })

    const ChangeValue = (e) => {
        setLogins({
            ...logins,
            [e.target.name]: e.target.value,
            changeByInput: true,
        })
    }

    async function logIn() {
        const response = await LoginAPI.logIn(logins);
        //401 thông tin đăng nhập ko chính xác
        if (response.logins === 401) {

        }
        else if (response.logins === 200) {
            //lưu xuống token, setItem là lưu xuống sessionStorage
            sessionStorage.setItem("_accessToken", JSON.stringify(response.data));
            props.changeLoggedStatus();
        }
    }

    return (
        <div className="container col-md-6">
            <form id="login-form" class="form" action="" method="post" >
                <label for="fname">Username:</label>
                <input type="text" id="fname" name="username" onChange={ChangeValue} /><br /><br />
                <label for="lname">Password:</label>
                <input type="password" id="lname" name="password" onChange={ChangeValue} /><br /><br />
                {/* <input type="submit" onClick={logIn} value="Submit" /> */}
                <button onClick={logIn}>Submit</button>
            </form>
        </div >
    )
}

export default LoginForm