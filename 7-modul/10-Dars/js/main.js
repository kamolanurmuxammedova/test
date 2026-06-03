1
// let a = 20
// a = 40

// console.log(a);
2
// let b = 30

// if(b > 50){
// b++
//  console.log(b);

// }else if(b < 50){
// b--
//  console.log(b);

// }
 3
// let c = 4

// if(c % 2 == 1){

//     console.log("C не четное число");
    
// }else if(c % 2 == 0){
//     console.log("C четное число");
// }

4
// let son = 2

// if(son > 0){
//     console.log("Число положительное");

// }else if(son < 0){
//     console.log("Число отрицательное");
// }

5
// for(let d = 1; d <= 40; d ++){
//         console.log(d);
        
// }

6
// for(let d = 10; d <= 20; d ++){
//         console.log(d);
        
// }

7
// for(let d = 1; d <= 50; d ++){
//     if(d % 2 == 1){
//         console.log(d);
        
//     }
        
// }

8
// for(let d = 1; d <= 50; d ++){
//     if(d % 2 == 0){
//         console.log(d);
        
//     }
        
// }

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let juft = [];
let toq = [];
 
for (let el of numbers ){
    if(el%2===0){
        
      juft.push(el)
        
    }
    else(
        toq.push(el)
    )  
}
console.log(juft);
console.log(toq);
