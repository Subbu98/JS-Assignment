console.log("hello")

let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);

//let odd = arr.filter(el=>el%2!=0);
let odd = arr.filter(function(el){return(el%2!=0)});


let oddcubes = arr.filter(el=>el%2!=0).map(el=>el**3);

console.log(odd);
console.log(oddcubes);


