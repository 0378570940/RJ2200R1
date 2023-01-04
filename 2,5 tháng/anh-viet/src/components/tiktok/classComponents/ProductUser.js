import React from "react";

class ProductUser extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteProductUser = (id) => {
    this.props.deleteProductUser(id);
  }

  editProduct = (id) => {
    this.props.editProduct(id);
  }

  render() {
    return (
      <div class="col-md-7">
        <table class="table table-dark table-striped">
          <thead>
            <tr class="table-dark">
              <th>id</th>
              <th>Tên Tiktok</th>
              <th>Địa chỉ</th>
              <th>Đơn vị tính</th>
              <th>Nội dung</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map((item) => {
              return (
                <tr class="">
                  <td class="table-dark">{item.id}</td>
                  <td class="table-dark">{item.name}</td>
                  <td class="table-dark">{item.address}</td>
                  <td class="table-dark">{item.unit}</td>
                  <td class="table-dark">{item.Content}</td>
                  <td>
                    <button
                      class="btn btn-light me-4 "
                      onClick={() => this.deleteProductUser(item.id)}
                    >
                      Xóa
                    </button>
                    <button class="btn btn-warning" onClick={() => this.editProduct(item.id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductUser;
