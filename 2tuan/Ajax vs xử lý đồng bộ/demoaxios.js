//axios tra ve 1 promise
//axios có thể gửi request method get, post, ....
//lấy dữ liệu trả về
function getJSONAPI(){
    return new Promise(function(resolve){
        //gui request
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(json){
            resolve(json.data)
        })
    })
}

// show 1 bảng
getJSONAPI().then(ketqua=>{
    // console.log(ketqua);
    let content=""
    for(let i=0; i<ketqua.length; i++){
        content=`
        <tr>
            <td>${ketqua[i].id}</td>
            <td>${ketqua[i].title}</td>
            <td>${ketqua[i].content}</td>
        </tr>
        `
    }
    document.getElementById('content').innerHTML=content
})