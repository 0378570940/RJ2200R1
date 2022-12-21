function getJsonImg(key){
    return new Promise(function(resolve){
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${key}&api_key=tOoYsxnsXlSgMLi9yJbYEIu1rnS9YWzt`)
        .then(function(json){
            resolve(json.data.data[0])
        })
    })
} 




function getImg(){
    // lay dữ liệu
    let inp= document.getElementById('key').value;
    // thay thế than số trong api
    getJsonImg(inp).then(result=>{
        console.log(result);
        // lấy ra đường dẫn
        let imgSrc=result.images.downsized.url;
        // let imgSrc2=result.images.downsized_large.url;
        // let imgSrc3=result.images.downsized_medium.url;
        // let imgSrc4=result.images.downsized_small.url;
        // set lại src cho ảnh
        document.getElementById('result').setAttribute('src', imgSrc)
        // document.getElementById('result2').setAttribute('src', imgSrc2)
        // document.getElementById('result3').setAttribute('src', imgSrc3)
        // document.getElementById('result4').setAttribute('src', imgSrc4)
    })
}


