let cityname=['Hà Nội', 'Đà Nẵng', 'Hồ CM', 'Cần Thơ']
cityname.forEach(item=>{
    getApiWeather(item)
})
function getApiWeather(cityname){
    return new Promise(function(resolve){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=tOoYsxnsXlSgMLi9yJbYEIu1rnS9YWzt`)
        .then(function(json){
            resolve(json)
        })
    })
}

getApiWeather().then(ketqua=>{
    console.log(ketqua);
})

