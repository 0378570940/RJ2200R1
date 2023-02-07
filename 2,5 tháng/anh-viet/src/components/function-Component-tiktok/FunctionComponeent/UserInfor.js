import React from "react";
import { useState } from "react";

function UserInfor(props) {
    const [userInfor, setUserInfor] = useState(
        {
            name: "",
            address: "",
            product: "",
            Unit: "",
            Content: "",
            changeByInput: false
        }
    )

    const hanldeChange = (event) => {
        setUserInfor({
            ...userInfor, [event.target.name]: event.target.value
        })
    }

    function headlSingIn() {
        props.headlSingIn(...userInfor)
    }

    return (
        <div class="col-md-5">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                        Tên Tiktok
                    </label>
                    <input type="text" class="form-control" id="inputEmail4"
                        name="name"
                        value={userInfor.name}
                        onChange={hanldeChange}
                    />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                        Địa chỉ
                    </label>
                    <input type="text" class="form-control" id="inputPassword4"
                        name="address"
                        // value={userInfor.address}
                        onChange={hanldeChange}
                    />
                </div>
                <div className="form-group row">
                    <div className="col-md-4">
                        <label>Loại sản phẩm:</label>
                    </div>
                    <div className="form-check col-md-8">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Đồ gia dụng
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Đồ điện tử
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Quần áo
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                            <label class="form-check-label" for="defaultCheck1">
                                Sách
                            </label>
                        </div>
                        {/* {
                this.props.productTypes.map(item => {
                  return <>
                    <input className="form-check-input" type="checkbox" value={item.value} name="productType" checked={this.props.productInfo.type.includes(item.value)} />
                    <label className="form-check-label">{item.text}</label><br />
                  </>
                })
              } */}
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-4 col-form-label">
                        Đơn vị tính
                    </label>
                    <div class="col-sm-12">
                        <select class="form-select" aria-label="Default select example" >
                            <option selected>-- Chọn loại sản phảm --</option>
                            <option value="1">Cái</option>
                            <option value="2">Chiếc</option>
                            <option value="3">Miếng</option>
                        </select>
                    </div>
                </div>
                <div class="col-12">
                    <label for="validationTextarea" class="form-label">
                        Nội dung
                    </label>
                    <textarea
                        class="form-control"
                        id="validationTextarea"
                        required
                    ></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={headlSingIn}>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserInfor;