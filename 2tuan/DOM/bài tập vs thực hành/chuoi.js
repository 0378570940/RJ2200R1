let regexp = /^[A-Z]/;

function isFirstLetterUpperCase(str){
    let inp = document.getElementById("input").value
    if(regexp.test(str)){
        alert('kí tự đầu tiên của cuỗi là chữ hoa')
    } else {
        alert('kí tự đầu tiên của chuỗi không phải chữ hoa')
    }
}

isFirstLetterUpperCase(abc)

function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}

var zipcode = 03201 - 2150
    console.log(is_usZipCode(zipcode));
    zipcode = 7892;
    console.log(is_usZipCode(zipcode));
