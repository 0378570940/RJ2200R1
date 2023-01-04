import React from "react";
import NewProduct from "./Componen_Table_Form/newProduct";
import Product from "./Componen_Table_Form/Product";

class Content extends React.Component {
  constructor(props) {
    super(props);
    // giá trị mặc định để khởi tạo
    this.state = {
      product: {},
      productLis: [
        {
          id: 57,
          name: "Iphone 14",
          price: 20000000,
          unit: "Cái",
        },
        {
          id: 76,
          name: "SamSung Galaxy",
          price: 15000000,
          unit: "Chiếc",
        },
        {
          id: 99,
          name: "SamSung Galaxy",
          price: 15000000,
          unit: "Chiếc",
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
    // let index = this.state.productLis.findIndex(function (i) {
    //   return i.id == id;
    // });
    let index = arr.findIndex(function (i) {
      return i.id === id;
    });

    // gán 1 phần tử để xóa
    arr.splice(index, 1);

    // phương thức setState đẻ cập nhật state, gọi đến phương thức render() lại trang
    this.setState({
      productLis: arr,
    });
  };

  // hàm sửa theo id
  editProduct = (id) => {
    // tìm ra index của id
    let index = this.state.productLis.findIndex(function (i) {
      return i.id === id;
    });

    //trỏ đến phần tử của mảng1
    const pro = this.state.productLis[index];

    //
    this.setState({
      product: {
        id: pro.id,
        name: pro.name,
        price: pro.price,
        unit: pro.unit,
      },
    });
  };

  render() {
    return (
      <div class="row">
        <Product
          productLis={this.state.productLis}
          editProduct={this.editProduct}
          deleteProduct={this.deleteProduct}
        />
        <NewProduct
          productInfo={this.state.product}
          saveProduct={this.myFunction}
        />
      </div>
    );
  }
}

export default Content;
