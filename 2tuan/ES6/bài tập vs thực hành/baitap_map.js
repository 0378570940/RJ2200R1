const birds = [
    {"ID": "DV8", "Name": "Eurasian Collared-Dove", "Type": "Dove" },
    {"ID": "HK12", "Name": "Bald Eagle", "Type": "Hawk" },
    {"ID": "HK6", "Name": "Cooper's Hawk", "Type": "Hawk" },
    {"ID": "SP11", "Name": "Bell's Sparrow", "Type": "Sparrow" },
    {"ID": "DV2", "Name": "Mourning Dove", "Type": "Dove" }
];

const chim=[]
// cách1
birds.forEach(birds =>{
    chim.push({
        ID: birds.ID,
        Name: birds.Name
    })
})
console.log(chim);

// cách 2
const chim2=birds.map(birds =>({
    Id: birds.ID,
    Name: birds.Name
}))
console.log(chim2);