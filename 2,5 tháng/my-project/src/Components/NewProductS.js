import React, { useState } from 'react'

const NewProductS = () => {
    const [focused, setFocused] = useState({
        userName: "",
        passWord: "",
        passWords: ""
    })

    // const [error, setError] = useState({
    //     userName: "",
    //     passWord: "",
    //     passWords: ""
    // })

    // function healdeChange(event) {
    //     // if (event.target.name === "passWord") {
    //     //     if (event.target.value) {
    //     //         setError("Vui lòng nhập mặt khẩu")
    //     //     } else {
    //     //         setError(...error, passWord = (""))
    //     //         setFocused({ ...focused, [event.target.name]: event.target.value })
    //     //     }
    //     // } else {
    //     setFocused({ ...focused, [event.target.name]: event.target.value })
    //     // }
    // }

    return (
        <div class="col-md-5">
            <form>
                <h3>Đăng ký</h3>
                {/* {focused.map((item) => {
                <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">
                            Tên sản phẩm
                        </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                class="form-control"
                                id="inputEmail3"
                                name="userName"
                                value={focused[item.userName]}
                            />
                        </div>
                    </div>
                </form>
            })} */}
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                        Tên sản phẩm
                    </label>
                    <div class="col-sm-10">
                        <input
                            type="text"
                            class="form-control"
                            id="inputEmail3"
                            name='userName'
                            value={focused.userName || ""}
                            onChange={healdeChange}
                        />
                        {error.userName ? <span class="help-block">{error.userName}</span> : ""}
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">
                        Mặt khẩu
                    </label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" name='passWord' value={focused.passWord} onChange={healdeChange} />
                        {error.passWord ? <span class="help-block">{error.passWord}</ span> : ""}
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">
                        Nhập mặt khẩu
                    </label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" name='passWords' value={focused.passWords} onChange={healdeChange} />
                        {error.passWords ? <span class="help-block">{error.passWords}</span> : ""}
                    </div>
                </div>
            </form>
        </div >
    )
}

export default NewProductS