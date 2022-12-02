let kids = [
    {id: 1, name: "a", age: 3},
    {id: 2, name: "b", age: 2},
    {id: 3, name: "c", age: 7},
    {id: 4, name: "d", age: 4},
    {id: 5, name: "e", age: 8}
    ];

const maugiao=[]

kids.forEach(kids => {
    if(kids.age<6){
        maugiao.push({
            id: kids.id,
            name: kids.name
        })
    }
})

console.log(maugiao);

const kids2=kids
    .filter(kids => kids.age<11 && kids.age>5)
    .map(kids=>({
        id: kids.id,
        name: kids.name
    }));
console.log(kids2);
