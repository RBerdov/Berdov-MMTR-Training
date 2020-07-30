let arr = [
    { name: "a", id: 1 },
    { name: "b", id: 2 },
    { name: "c", id: 3 },
    { name: "d", id: 4 },
    { name: "c", id: 5 },
    { name: "a", id: 6 }, 
    { name: "d", id: 7 }, 
    { name: "e", id: 8 }]
  
  let newArr = arr.reduce((acc, item) => {
      if (acc.map[item.name])
        return acc;
  
      acc.map[item.name] = true; 
      acc.newArr.push(item);
      return acc; 
    }, {
      map: {}, 
      newArr: [] 
    })
    .newArr;
  
  console.log(newArr);


