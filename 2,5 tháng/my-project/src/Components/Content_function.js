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

  // input đăng ký
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",

  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 character and sholdn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div class="row">
      <Product
        productLis={productLis}
        editProduct={editProduct}
        deleteProduct={deleleProduct}
      />  
      {inputs.map((item) => (
        <NewProductS key={item.id} {...item} value={item.name} onChange={onChange} />
      ))}
    </div>
  );
}

export default Content_function;
