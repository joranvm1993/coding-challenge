const utopianTree = (arr, n) => {
    let arrRes = [1]
    let arrRes1 = []
    
    for(i=0; i<arr.length; i+=2) {
        arrRes1.push(arrRes[i] * 2)
        arrRes.push(arrRes1[i] + 1)
    }

  

    return arrRes
};

console.log(utopianTree([0, 1, 2, 3, 4, 5], 3))