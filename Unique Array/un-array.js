let arr = [
    { name: "a", id: 1 },
    { name: "b", id: 1 },
    { name: "c", id: 3 },
    { name: "d", id: 4 },
    { name: "c", id: 3 },
    { name: "a", id: 6 }, 
    { name: "d", id: 7 }, 
    { name: "e", id: 3 }]
  



    let newArr = [];

    //Правильный вариант

    getUnique = (arr) => {
        console.log(arr);
        
        arr.forEach(el => {
            if(newArr.length == 0) 
            {
                newArr.push(el);
                console.log(newArr);
            }
            else {
                     
                    console.log(JSON.stringify(el));
                    if(newArr.some(newEl => JSON.stringify(el) == JSON.stringify(newEl)) == false) {
                        newArr.push(el);
                    }
               
            }
        });

        return newArr;
    }

    console.log(getUnique(arr));


    // deepEqual = (a, b) => {
    //     if (a === b) {
    //         return true;
    //     }
     
    //     if (a == null || typeof(a) != "object" ||
    //         b == null || typeof(b) != "object")
    //     {
    //         return false;
    //     }
     
    //     var propertiesInA = 0, propertiesInB = 0;
    //     for (var property in a) {
    //         propertiesInA += 1;
    //     }
    //     for (var property in b) {
    //         propertiesInB += 1;
    //         if (!(property in a) || !deepEqual(a[property], b[property])) {
    //             return false;        
    //         }
    //     }        
    //     return propertiesInA == propertiesInB;
    // }


// let newArr = [];

// getUnique = () => {
//     arr.forEach(el => {
           
//     });
// }

// let uniqueNames = arr.reduce((acc, item) => {
//     console.log(item);
//     if (acc.map[item.name])
//         return acc;
//         console.log(acc);
    
//     acc.map[item.name] = true; 
//     console.log(acc);
//     acc.uniqueNames.push(item);
//     return acc; 
//     }, {
//       map: {}, 
//       uniqueNames: [] 
      
//     })
//     .uniqueNames;
//     console.log(uniqueNames);




