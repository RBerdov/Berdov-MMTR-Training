let arr = [
    { name: "a", id: 1 },
    { name: "b", id: 1 },
    { name: "c", id: 3 },
    { name: "d", id: 4 },
    { name: "c", id: 5 },
    { name: "a", id: 6 }, 
    { name: "d", id: 7 }, 
    { name: "e", id: 3 }]
  


let uniqueNames = arr.reduce((acc, item) => {
    if (acc.map[item.name])
        return acc;
  
    acc.map[item.name] = true; 
    acc.uniqueNames.push(item);
    return acc; 
    }, {
      map: {}, 
      uniqueNames: [] 
    })
    .uniqueNames;

let newArr = uniqueNames.reduce((acc, item) => {
    if (acc.map[item.id])
        return acc;
      
    acc.map[item.id] = true; 
    acc.newArr.push(item);
    return acc; 
    }, {
        map: {}, 
        newArr: [] 
    })
    .newArr;

  
  console.log(newArr);


