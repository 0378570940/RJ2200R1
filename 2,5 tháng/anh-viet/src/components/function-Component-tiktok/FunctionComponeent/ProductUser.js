import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";

function ProductUser() {
    // const [productUser, setProductUser] = useState(
    //     [
    //         {
    //             id: 1,
    //             name: "Nguyễn Văn A",
    //             address: "Hà Nội",
    //             unit: "1",
    //             Content: "Tiktok cơ",
    //         },
    //         {
    //             id: 2,
    //             name: "Nguyễn Văn Kiên",
    //             address: "Hà Nội",
    //             unit: "2",
    //             Content: "Tiktok cơ",
    //         },
    //         {
    //             id: 3,
    //             name: "Nguyễn Văn Dương",
    //             address: "Hà Nội",
    //             unit: "3",
    //             Content: "Tiktok cơ",
    //         },
    //     ]
    // )
    // deleteProductUser = (id) => {
    //     deleteProductUser(id)
    // }


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
                    {
                        productList.map((item) => {
                            return (
                                <tr class="">
                                    <td class="table-dark">{item.id}</td>
                                    <td class="table-dark">{item.name}</td>
                                    <td class="table-dark">{item.address}</td>
                                    <td class="table-dark">{item.unit}</td>
                                    <td class="table-dark">{item.Content}</td>
                                    <td>
                                        <button class="btn btn-light me-4 " onClick={() => deleteProductUser(item.id)}>Xóa </button>
                                        <button class="btn btn-warning">Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductUser;