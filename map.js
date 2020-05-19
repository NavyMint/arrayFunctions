Array.prototype.map1 = function(fn1){
    const arr = this;
    let res = [];
    for(let i =0; i< arr.length; i++){
        res.push(fn1(arr[i]));
    }
    return res;
}

const testArr = [1, 2];
console.log(testArr.map1((element)=> element*2));

Array.prototype.filter1 = function(fn1){
    const arr = this;
    let res = [];
    for(let i =0; i< arr.length; i++){
        if(fn1(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}

const testArr = [1, 2, 2, 2, 4];
console.log(testArr.filter1((element)=> element === 2));

Array.prototype.filter1 = function(fn1){
    const arr = this;
    let res = [];
    for(let i =0; i< arr.length; i++){
        if(fn1(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}

const testArr = [1, 2, 2, 2, 4];
console.log(testArr.filter1((element)=> element === 2));

Array.prototype.some1 = function(fn1){
    const arr = this;
    let res = [];
    for(let i =0; i< arr.length; i++){
        res.push(fn1(arr[i]));
    }
    return res.includes(true);
}

const testArr = [1, 2, 2, 2, 4];
console.log(testArr.some1((element)=> element > 4));

Array.prototype.every1 = function(fn1){
    const arr = this;
    let res = [];
    for(let i =0; i< arr.length; i++){
        if(fn1(arr[i])) {
           res.push(true); 
        }
    }
    return res.length === arr.length;
}

const testArr = [1, 2, 2, 2, 4];
console.log(testArr.every1((element)=> element < 3));

Array.prototype.reduce1 = function(callback, startValue) {
    const arr = this;
    if (arr instanceof Array) {
        let result = startValue;
        for (let i = 0; i < arr.length; i++) {
            result = callback(result, arr[i], i, arr);
        }
        return result;
    }
    throw new Error(`${arr} isn't Array`)
}

const testArr = [1, 1, 1];
console.log(testArr.reduce1((accumulator, currentValue) => accumulator + currentValue, 80));