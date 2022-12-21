// đối tượng promise và sử dụng nó
let HanOut = (billiards)=> {
    return new Promise((resolve,reject) =>{
        if(billiards){
            resolve("đi chơi bi a");
        } else{
            reject(new Error("Nay chán ko đi chơi nữa"));
        }
    })
}

// HanOut(false)
// .then((result)=>{
//     console.log(`Nay tôi muốn ${result} cùng các bạn`);
// })
// .catch((err)=>{
//     console.log(`${err} hẹn bạn lần sau`);
// })
// .finally(()=>{
//     console.log("Đi chơi thôi");
// })

// sử dụng async
// async function HanOutAsync(billiards){
//     if(billiards) return "đi chơi bi a";
//     throw new Error("Nay chán ko muốn đi chơi nữa")
// }

// HanOutAsync(false)
// .then((result)=>{
//     console.log(`Nay tôi muốn ${result} cùng bạn chơi`);
// })
// .catch((err)=>{
//     console.log(`${err} hẹn bạn lần sau`);
// })
// .finally(()=>{
//     console.log("Đi chơi thôi");
// })

// sủ dụng await
async function HanOutAsync(billiards){
    if(billiards) return "đi chơi bi a";
    throw new Error("Nay chán ko muốn đi chơi nữa")
}

async function doSt(){
    try {
        let result = await HanOutAsync(false);
        console.log(`Nay tối muốn ${result} cùng bạn chơi`);
    } catch (error) {
        console.log(error);
    }finally{
        console.log("đi chơi thôi");
    }   
}
doSt()