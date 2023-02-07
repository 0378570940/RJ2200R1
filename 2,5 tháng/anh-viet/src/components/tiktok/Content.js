import React from "react";
import ProductUser from "./classComponents/ProductUser";
import UserInfor from "./classComponents/UserInfor";

class Content extends React.Component {
  constructor(props) {
    // hàm hởi tạo là nơi chúng ta kế thừa lại component cha bằng câu lệnh super()
    super(props);
    this.state = {
      productInfo: {},
      product: [
        {
          id: 1,
          name: "Nguyễn Văn Hiếu",
          address: "Hà Nội",
          unit: "1",
          Content: "Tiktok cơ",
        },
        {
          id: 2,
          name: "Nguyễn Văn Kiên",
          address: "Hà Nội",
          unit: "2",
          Content: "Tiktok cơ",
        },
        {
          id: 3,
          name: "Nguyễn Văn Dương",
          address: "Hà Nội",
          unit: "3",
          Content: "Tiktok cơ",
        },
      ],
    };
  }

  deleteProductUser = (id) => {
    // tạo ra 1 mảng mới
    let arr = [...this.state.product];

    // tìm ra index có id
    let index = arr.findIndex(function (i) {
      return i.id === id;
    });

    // splice xóa 1 phần tử
    arr.splice(index, 1);

    //cập nhật lại state
    this.setState({
      product: arr,
    });
  };

  editProduct = (id) => {
    // const index = this.state.product.findIndex(function (i) {
    //   return i.id === id;
    // });
    let index1 = this.state.product.findIndex(function (i) {
      return i.id === id;
    });
    const pro = this.state.product[index1];
    this.setState({
      productInfo: {
        id: pro.id,
        name: pro.name,
        address: pro.address,
        unit: pro.unit,
        Content: pro.Content
      }
    })
  }

  // sửa theo form sản phẩm
  signIn = (products) => {
    debugger;
    const maxId = Math.max(...this.state.product.map((X) => X.id))
    products.id = maxId + 1;
    this.setState({
      product: [...this.state.product, products]
    })
  }

  render() {
    return (
      <div class="row mt-3 overflow-hidden">
        <ProductUser
          product={this.state.product}
          deleteProductUser={this.deleteProductUser}
          editProduct={this.editProduct}
        />
        <UserInfor
          productInfos={this.state.productInfo}
          // tạo 1 props từ component cha chuyền sang UserInfor sang Component con
          signIn={this.signIn}
        />
      </div>
    );
  }
}

export default Content;
