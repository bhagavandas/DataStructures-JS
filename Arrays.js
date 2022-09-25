console.log("Welcome to DataStructures");
//Pb.1 : Random number
let num1 = Math.floor(Math.random()*1000);
let num2 = Math.floor(Math.random()*1000);
let num3 = Math.floor(Math.random()*1000);
let num4 = Math.floor(Math.random()*1000);
let num5 = Math.floor(Math.random()*1000);
let num6 = Math.floor(Math.random()*1000);
let num7 = Math.floor(Math.random()*1000);
let num8 = Math.floor(Math.random()*1000);
let num9 = Math.floor(Math.random()*1000);
let num10 = Math.floor(Math.random()*1000);
//creating an array to store the elements
let array = new Array();
//storing the data in array
array[0] = num1;
array[1] = num2;
array[2] = num3;
array[3] = num4;
array[4] = num5;
array[5] = num6;
array[6] = num7;
array[7] = num8;
array[8] = num9;
array[9] = num10;
console.log(array);
findSecondLargestElem(array);
findSmallestElem(array);
//finding second largest number in array
function findSecondLargestElem(array){
let first = -1;
let second = -1;
for(i = 0; i <= array.length-1; i++){
    if(array[i] > first){
        second = first;
        first = array[i];
    }
    else if( array[i] > second && array[i] != first){
        second = array[i];
    }
}
console.log("Second largest number in array: " + second);
}

//finding second smallest number in array
function findSmallestElem(array){
    let first = -1;
    let second = -1;
    for(i = 0; i <= array.length-1; i++){
        if(array[i] > first){
            first = second;
            second = array[i];
        }
        else if( array[i] < first && array[i] != second){
            first = array[i];
        }
    }
        console.log("Second smallest number in array: " + first);
    }
    //PB:2 Sorting and finding second smallest and largest number in an array
    console.log("After sorting: " + array.sort());
    console.log("Second smallest element is "+array[0],"</br>");
    console.log("Second largest element is "+array[08],"</br>");
    
//Pb:3 Prime factorization
findFactors(45);
function findFactors(n){
    
let factorArray = new Array;
for(var i = 1; i <= n; i++){
    if(n % i == 0){
        factorArray.push(i);
    }  
    }
    console.log("Factors of " + n + " : " + factorArray);
}

// Pb:5 twice 33 44 55....
var numbers = 9;
var num = 11;
let numArray = new Array();
for ( var i = 1; i <= numbers; i++){
    var result = num * i;
    numArray.push(result);
}
console.log("Digits that are repeated are: " + numArray)




