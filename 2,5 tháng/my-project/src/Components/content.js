import React from "react";
import NewProduct from "./Componen_Table_Form/newProduct";
import Product from "./Componen_Table_Form/Product";
import productApi from "../API/ProductApi";

class Content extends React.Component {
  constructor(props) {
    super(props);
    // giá trị mặc định để khởi tạo
    this.state = {
      product: {},
      productLis: [],
    };
  }
  myFunction = (massage) => {
    alert(massage);
  };

  fetchProduct = async () => {
    const response = await productApi.getAll();
    this.setState({
      productLis: [...response.data]
    })
  }

  componentDidMount() {
    this.fetchProduct();
  }

  componentDidUpdate() {
  }

  //hàm xóa theo id
  // deleteProduct = (id) => {
  //   // tạo 1 mảnh mới dùng ... để lấy hết mảng cũ ra
  //   let arr = [...this.state.productLis];

  //   // tìm ra index có id
  //   // let index = this.state.productLis.findIndex(function (i) {
  //   //   return i.id == id;
  //   // });
  //   let index = arr.findIndex(function (i) {
  //     return i.id === id;
  //   });

  //   // gán 1 phần tử để xóa
  //   arr.splice(index, 1);

  //   // phương thức setState đẻ cập nhật state, gọi đến phương thức render() lại trang
  //   this.setState({
  //     productLis: arr,
  //   });
  // };
  //hàm xóa theo async api
  deleteProduct = async (id) => {
    await productApi.delete(id).then(
      async () => this.fetchProduct()
    )
  }

  // hàm sửa theo id
  // editProduct = (id) => {
  //   // tìm ra index của id
  //   let index = this.state.productLis.findIndex(function (i) {
  //     return i.id === id;
  //   });

  //   //trỏ đến phần tử của mảng1
  //   const pro = this.state.productLis[index];

  //   //
  //   this.setState({
  //     product: {
  //       id: pro.id,
  //       name: pro.name,
  //       price: pro.price,
  //       unit: pro.unit,
  //     },
  //   });
  // };
  //update async api
  editProduct = async (id) => {
    await productApi.update(id).then(
      async () => this.fetchProduct()
    )
  }

  // sửa sản phẩm
  // saveProduct = (product) => {
  //   // Math.max lấy ra các phần tử của mảng và lập qua từng phần tử của mảng
  //   const maxId = Math.max(...this.state.productLis.map(X => X.id))
  //   product.id = maxId + 1;
  //   this.setState({
  //     productLis: [...this.state.productLis, product]
  //   })
  // }
  //sửa async
  saveProduct = async (product) => {
    if (product.id) {
      await productApi.update(product).then(
        async () => this.fetchProduct()
      )
    } else {
      await productApi.create(product)
    }
  }

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
          // tạo 1 props từ component cha chuyền qua saveProduct sang component con
          saveProduct={this.saveProduct}
        />
      </div>
    );
  }
}

export default Content;
