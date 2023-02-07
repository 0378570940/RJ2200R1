import NewProduct from "./Componen_Table_Form/newProduct";
import NewProductS from "./NewProductS";
import Product from "./Componen_Table_Form/Product";
import { useState } from "react";

function Content_function() {
  const [productLis, setProductLis] = useState([
    {
      id: 57,
      name: "Iphone 14",
      price: 20000000,
      unit: "1",
    },
    {
      id: 76,
      name: "SamSung Galaxy",
      price: 15000000,
      unit: "2",
    },
    {
      id: 99,
      name: "SamSung Galaxy",
      price: 15000000,
      unit: "3",
    },
  ]);

  const [product, setProduct] = useState({});

  //hàm xóa
  function deleleProduct(id) {
    let arr = [...productLis];
    let index = arr.findIndex(function (i) {
      return i.id === id;
    });
    arr.splice(index, 1);
    setProductLis(arr);
  }

  //hàm sửa
  function editProduct(id) {
    let index = productLis.findIndex(function (i) {
      return i.id === id;
    })
    const pro = productLis[index]
    setProduct(pro)
  }

  // hàm thêm Function Component Hook
  function saveProduct(product) {
    // Math.max lấy ra phần tử của mảng lặp qua từng phần tử của mảng
    const maxId = Math.max(...productLis.map(x => x.id))
    product.id = maxId + 1;
    setProductLis([
      ...productLis, product
    ])
  }

  return (
    <div class="row">
      <Product
        productLis={productLis}
        editProduct={editProduct}
        deleteProduct={deleleProduct}
      />
      {/* tạo 1 props từ Component cha chuyền qua saveProduct sang Component con*/}
      <NewProduct productLis={product} saveProduct={saveProduct} />

    </div>
  );
}

export default Content_function;
