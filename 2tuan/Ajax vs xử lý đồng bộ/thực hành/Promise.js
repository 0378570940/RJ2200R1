let trongTuan = (thuchien)=>{
    return new Promise((resolve,reject)=>{
        if(thuchien){
            resolve("trong tuần thành công")
        } else{
            reject(new Error("Lời hứa thất bại"))
        }
    })
}

trongTuan(false)
.then((result)=>{
    alert(`Lời hứa ${result}`);
})
.catch((err)=>{
    alert(err);
})