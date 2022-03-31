//EX 1
// const impressNumber = (n:number) => {
//     if(n >= 0){
//         impressNumber(n-1)
//         console.log(n)
//     }
// }

// impressNumber(4)

// const impressNumberDesc = (n: number) => {
//     if(n >= 0){
//         console.log(n)
//         impressNumberDesc(n-1)
//     }
// }

// impressNumberDesc(4)

//EX 2

const sumNumber = (n: number, acc:number = 0): number => {
    if(n === 0){
        return acc
    }
    return sumNumber(n-1, acc + n)
}

console.log(sumNumber(8))

//EX 3

const sumNumber2 = (n: number):number => {
    var sum = 0
    for(var i = 0; i <= n; i++){
        sum += i
    }
    return sum
}

console.log(sumNumber2(3))

//EX 4
export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(arr[i]);
    }
};
  
const array = [1, 2, 3, 4];
printArray(array);