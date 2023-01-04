import ProductUser from "./FunctionComponeent/ProductUser";
import UserInfor from "./FunctionComponeent/UserInfor";
import { useState } from "react";
import { render } from "@testing-library/react";

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

    function deleteProductUser(id) {
        let arr = [...productList];
        let index = arr.findIndex(function (i) {
            return i.id === id
        })
        arr.splice(index, 1)
        setProductList(arr)
    }

    return (
        <div className="row">
            <ProductUser productList={productList} deleteProductUser={deleteProductUser} />
            <UserInfor />
        </div>
    )
}

export default Content;