import ProductUser from "./FunctionComponeent/ProductUser";
import UserInfor from "./FunctionComponeent/UserInfor";
import { useState } from "react";

function Content() {
    const [productList, setProductList] = useState([
        {
            id: 1,
            name: "Nguyễn Văn A",
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
    ])

    const [product, setProduct] = useState()

    // hàm xóa
    function deleteProductUser(id) {
        let arr = [...productList];
        let index = arr.findIndex(function (i) {
            return i.id === id
        })
        arr.splice(index, 1)
        setProductList(arr)
    }

    // hàm sủa theo id
    function editProductUser(id) {
        let index = productList.findIndex(function (i) {
            return i.id === id
        })
        const pro = productList[index]
        setProduct(pro)
    }

    // hàm edit sang from input
    function headlSingIn(products) {
        debugger;
        const maxId = Math.max(...productList.map(x => x.id))
        products.id = maxId + 1;
        setProductList([
            ...productList, products
        ])
    }

    return (
        <div className="row">
            <ProductUser
                productList={productList}
                deleteProductUser={deleteProductUser}
                editProductUser={editProductUser}
            />
            <UserInfor
                product={product}
                headlSingIn={headlSingIn}
            />
        </div>
    )
}

export default Content;