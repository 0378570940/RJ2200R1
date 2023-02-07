import React from "react";

class UserInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      product: "",
      Unit: "",
      Content: "",
      changeByInput: false
    }
  }

  // hàm Arrow function
  hanldeChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      changeByInput: true
    })
  }

  // hàm sửa từ edit về input
  signIn = () => {
    this.props.signIn(this.state) //Chuyển sang Component cha
  }

  // sử dụng để edit từ table sang ô input
  static getDerivedStateFromProps = (props, state) => {
    if (!state.changeByInput)
      return {
        name: props.productInfos.name
      }
    return {
      ...state, changeByInput: false
    }
  }

  render() {
    return (
      <div class="col-md-5">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Tên Tiktok
            </label>
            <input type="text" class="form-control" id="inputEmail4"
              name="name"
              value={this.state.name}
              onChange={this.hanldeChange}
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Địa chỉ
            </label>
            <input type="text" class="form-control" id="inputPassword4"
              name="address"
              value={this.state.address}
              onChange={this.hanldeChange}
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
              <select class="form-select" aria-label="Default select example" value={this.props.productInfos.unit}>
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
              value={this.props.productInfos.Content}
              required
            ></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" onClick={this.signIn}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInfor;
