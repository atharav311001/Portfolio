const prompt = require('prompt-sync')()

let arr = [1,2,3,4,5]
console.log("Add a number to array")
console.log("1) Add a number")
console.log("2) Show original array")
console.log("3) Exit")
d = prompt(`Enter your choice:`)
switch(d){
  case 1:
    a = prompt("1) Enter a number:")
    a = Number.parseInt(a)
    arr1 = arr.push()
    console.log(arr1)
    break
  case 2:
    console.log(arr)
    break

  default:
    console.log("Invalid input")
}



