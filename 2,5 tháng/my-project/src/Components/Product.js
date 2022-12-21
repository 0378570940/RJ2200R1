import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteProduct(id) {
    this.props.deleteProduct(id);
  }

  editProduct(id) {
    this.props.editProduct(id);
  }
  
  static defaultProps = {
    name: "hello",
  };

  render() {
    return (
      <div class="col-md-7">
        <div>
          {/* <h1>{this.props.name}</h1> */}
          <h3>Danh sách sản phẩm</h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Đơn vị tính</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              {this.props.productLis.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.unit}</td>
                    <td>
                      <button onClick={this.deleteProduct(item.id)}>Xóa</button>
                      <button onClick={this.editProduct(item.id)}>Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Product;
