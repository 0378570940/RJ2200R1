import React from "react";

function ProductUser(props) {
    // const [productUsers, setProductUser] = useState(
    // )

    //hàm xóa theo id
    function deleteProductUser(id) {
        props.deleteProductUser(id) // chuyển từ Component con sang cha
    }

    //hàm sửa theo id
    function editProductUser(id) {
        props.editProductUser(id) // chuyển từ Component con sang cha
    }


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
                        props.productList.map((item) => {
                            return (
                                <tr class="" key={item.id}>
                                    <td class="table-dark">{item.id}</td>
                                    <td class="table-dark">{item.name}</td>
                                    <td class="table-dark">{item.address}</td>
                                    <td class="table-dark">{item.unit}</td>
                                    <td class="table-dark">{item.Content}</td>
                                    <td>
                                        <button class="btn btn-light me-4 " onClick={() => deleteProductUser(item.id)}>Xóa </button>
                                        <button class="btn btn-warning" onClick={() => editProductUser(item.id)}>Edit</button>
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