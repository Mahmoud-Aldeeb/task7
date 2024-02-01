// let arr = ["ahmed","mahmoud","mohamed","ali","salah"];
// console.log(arr);
// let i = 0;
// let ind = prompt(arr.index(i));
// console.log (prompt(arr.indexof(i)));

//----------------------------------------------------------------
// var ageYears = prompt();

// var ageInDays = ageYears * 365;

// console.log(ageInDays);

//----------------------------------------------------------------

// var agedays = prompt();

// var ageyears = agedays / 365;

// console.log(ageyears);



//----------------------------------------------------------------
//task1

// function lessThan100(a, b) {
// 	let x=0;
//     x=a+b;
//     if (x<100) {
//         console.log("True");
//     }else if (x>=100){
//         console.log("False");
//     }
//     return x;
// }

// console.log(lessThan100(20,80))


//----------------------------------------------------------------
// task2

// function printArray(number) {
//     let newArray = [];
  
//     for(let i = 1; i <= number; i++) {
//       newArray.push(i);
//     }
  
//     return newArray;
//   }

//   console.log(printArray(10));

//----------------------------------------------------------------
//task3

// function animals(chickens, cows, pigs) {
// 	let legsChickens , legsCows , legsPigs , TotalLegs ;
//     legsChickens = chickens * 2;
//     legsCows = cows * 4;
//     legsPigs = pigs * 4;
//     TotalLegs = legsChickens + legsCows + legsPigs;
//     return TotalLegs;
// }
// console.log(animals(2,3,5));

//----------------------------------------------------------------
//task4

function volumeOfBox(sizes) {
	let Total ;
    
    Total = {
        width: 2 ,
        length: 5 ,
        height: 2 ,

    };
    sizes = Total.width * Total.length * Total.height ;
    return sizes;
}
let box = volumeOfBox();
console.log(box);

