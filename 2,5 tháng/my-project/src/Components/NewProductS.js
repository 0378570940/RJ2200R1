import React, { useState } from 'react'

const NewProductS = () => {
    const [state, setStatus] = useState("")
    return (
        <div class="col-md-5">
            <form>
                <h3>Thông tin sản phẩm</h3>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                        Tên sản phẩm
                    </label>
                    <div class="col-sm-10">
                        <input
                            type="text"
                            class="form-control"
                            id="inputEmail3"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">
                        Mã sản phẩm
                    </label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                >
                    Sign in
                </button>
            </form >
        </div >
    )
}

export default NewProductS