let arr = [
    { name: "a", id: 1 },
    { name: "b", id: 1 },
    { name: "c", id: 3 },
    { name: "d", id: 4 },
    { name: "c", id: 5 },
    { name: "a", id: 6 }, 
    { name: "d", id: 7 }, 
    { name: "e", id: 3 }]
  

// let newArr = [];

// getUnique = () => {
//     arr.forEach(el => {
           
//     });
// }

let uniqueNames = arr.reduce((acc, item) => {
    console.log(item);
    if (acc.map[item.name])
        return acc;
        console.log(acc);
    
    acc.map[item.name] = true; 
    console.log(acc);
    acc.uniqueNames.push(item);
    return acc; 
    console.log(acc);
    }, {
      map: {}, 
      uniqueNames: [] 
      
    })
    .uniqueNames;
    console.log(uniqueNames);




