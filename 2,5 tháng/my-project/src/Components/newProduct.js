import React from "react";

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "A",
      status: "Đang đi học",
    };
  }

  saveProduct = () => {
    // this.props.saveProduct("Xin chào");
    this.setState({
      status:
        this.state.status === "Đang đi học" ? "Đã nghỉ học" : "Đang đi học",
    }); //chuyền vào 1 obj
  };

  render() {
    return (
      <div class="col-md-5">
        <form>
          <h3>Thông tin sản phẩm</h3>
          <h1>{this.state.status}</h1>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Tên sản phẩm
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                value={this.state.name}
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

          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Loại sản phẩm</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                />
                <label class="form-check-label" for="gridCheck1">
                  Đồ gia dụng
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="gridCheck2">
                  Đồ điện tử
                </label>
              </div>
              <div class="form-check disabled">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                />
                <label class="form-check-label" for="gridCheck3">
                  Quần áo
                </label>
              </div>
              <div class="form-check disabled">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="gridRadios"
                  id="gridRadios4"
                  value="option3"
                />
                <label class="form-check-label" for="gridCheck4">
                  Sách
                </label>
              </div>
            </div>
          </fieldset>
          <div class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Khuyến mãi</legend>
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="radio" id="radio1" />
                <label class="form-check-label" for="gridCheck">
                  Đang khuyến mãi
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="radio2" />
                <label class="form-check-label" for="gridCheck4">
                  Không
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.saveProduct}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default NewProduct;
