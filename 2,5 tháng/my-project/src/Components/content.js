import React from "react";
import NewProduct from "./newProduct";
import Product from "./Product";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productLis: [
        {
          id: 1,
          name: "iphone 14",
          price: 2000000,
          unit: "VND",
        },
        {
          id: 2,
          name: "iphone 10",
          price: 1800000,
          unit: "VND",
        },
      ],
    };
  }
  myFunction = (massage) => {
    alert(massage);
  };

  //hàm xóa theo id
  deleteProduct = (id) => {
    // tạo 1 mảnh mới dùng ... để lấy hết mảng cũ ra
    let arr = [...this.state.productLis];

    // tìm ra index có id
    let index = this.state.productLis.findIndex(function (i) {
      return i.id === id;
    });

    // gán 1 phần tử để xóa
    arr.splice(index, 1);
    this.setState({
      productLis: arr,
    });
  };

  // hàm sửa theo id
  editProduct = (id) => {};

  render() {
    return (
      <div class="row">
        <Product
          productLis={this.state.productLis}
          editProduct={this.editProduct}
          deleteProduct={this.deleteProduct}
        />
        <NewProduct saveProduct={this.myFunction} />
      </div>
    );
  }
}

export default Content;
