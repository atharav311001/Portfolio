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

let a = Math.floor((Math.random() * 100) + 1);
a = Number.parseInt(a)
console.log(a)
b = prompt("Enter any Number between 0 to 100:")
if(a==b){
  console.log("Correct guess")
}
else if(a>b){
  console.log("Number entered is smaller")
}

else if(a < b){
  console.log("Number entered is bigger")
}