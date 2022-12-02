const team = [
    {name: 'john', km: 3},
    {name: 'Jane', km: 4},
    {name: 'David', km: 5},
    {name: 'Peter', km: 2},
]

let sum = 0;
 for (const {km} of team) {
    sum += km
 }
 alert("tổng số km là: " + sum)